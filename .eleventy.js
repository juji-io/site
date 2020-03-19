module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
  ]);
  
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("util");
  eleventyConfig.addPassthroughCopy("favicon.ico");


};
