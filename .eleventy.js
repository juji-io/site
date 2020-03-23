module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md"
  ]);
  
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("util");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("favicon.ico");


};
