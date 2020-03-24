module.exports = function(eleventyConfig) {

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "njk"
  ]);
  
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("util");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: {
      includes: "includes"
    }
  };

};
