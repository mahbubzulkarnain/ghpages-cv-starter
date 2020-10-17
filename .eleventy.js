module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src/scss');
  eleventyConfig.setTemplateFormats(['ejs']);
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input : 'src',
      output: 'dist',
    },
  };
};
