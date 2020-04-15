const fs = require('fs');
const pluginSEO = require("eleventy-plugin-seo-tag");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const blogTools = require("eleventy-plugin-blog-tools");
const readingTime = require('eleventy-plugin-reading-time');
const lodashChunk = require('lodash.chunk');
const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "njk"
  ]);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("util");
  eleventyConfig.addPassthroughCopy("admin/github-markdown.css");
  eleventyConfig.addPassthroughCopy("admin/index.html");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.addPlugin(pluginSEO, require("./_data/seo.json"));
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(blogTools); 
  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });

  eleventyConfig.addFilter('categoryFilter', function(collection, category) {
    if (!category) return collection;
    return collection.filter(function(item) {
      return item.data.category == category;
    });
  });

  eleventyConfig.addFilter('authorFilter', function(collection, author) {
    if (!author) return collection;
    const filtered = collection.filter(function(item) {
      return item.data.author == author;
    });
    if (filtered.length == 0) {
      return collection;
    } else {
      return filtered;
    }
  });

  const getTags = function(collection) {
    let tagSet = new Set();
    collection.getAllSorted().map(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;
        for (let tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet];
  };

  const getCategories = function() {
    return Object.keys(JSON.parse(fs.readFileSync("_data/categories.json")));
  };

  const getAuthors = function() {
    return Object.keys(JSON.parse(fs.readFileSync("_data/authors.json")));
  };

  eleventyConfig.addCollection("tagList", getTags);

  eleventyConfig.addCollection("categoryList", getCategories);

  eleventyConfig.addCollection("authorList", getAuthors);

  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob("*.html").reverse();
  });

  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getFilteredByGlob("blog/*.md").reverse();
  });

  eleventyConfig.addCollection('featuredArticles', function(collection) {
    return collection.getAllSorted().reverse().filter(function(item) {
      return item.data.featured == true;
    });
  });

  // flatten two level pagination (tags -> pages of the same tag) into one
  eleventyConfig.addCollection("tagPagination", function(collection) {
    // Get each item that matches the tag
    let paginationSize = 9;
    let tagMap = [];
    for( let tagName of getTags(collection) ) {
      let tagItems = collection.getFilteredByTag(tagName);
      let pagedItems = lodashChunk(tagItems, paginationSize);
      for( let pageNumber = 0, max = pagedItems.length; pageNumber < max; pageNumber++) {
        tagMap.push({
          tagName: tagName,
          pageNumber: pageNumber,
          pageData: pagedItems[pageNumber]
        });
      }
    }
    return tagMap;
  });

  eleventyConfig.addCollection("catPagination", function(collection) {
    let paginationSize = 9;
    let catMap = [];
    let catArray = getCategories();
    for( let cat of catArray) {
      let catItems = collection.getAllSorted().filter(item => item.data.category == cat);
      let pagedItems = lodashChunk(catItems, paginationSize);
      for( let pageNumber = 0, max = pagedItems.length; pageNumber < max; pageNumber++) {
        catMap.push({
          tagName: cat,
          pageNumber: pageNumber,
          pageData: pagedItems[pageNumber]
        });
      }
    }
    return catMap;
  });

  eleventyConfig.addCollection("authPagination", function(collection) {
    let paginationSize = 9;
    let authMap = [];
    let authArray = Object.keys(JSON.parse(fs.readFileSync("_data/authors.json")));
    for( let auth of authArray) {
      let authItems = collection.getAllSorted().filter(item => item.data.author == auth);
      let pagedItems = lodashChunk(authItems, paginationSize);
      for( let pageNumber = 0, max = pagedItems.length; pageNumber < max; pageNumber++) {
        authMap.push({
          tagName: auth,
          pageNumber: pageNumber,
          pageData: pagedItems[pageNumber]
        });
      }
    }
    return authMap;
  });

};
