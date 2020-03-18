module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
  ]);
  
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");


};
