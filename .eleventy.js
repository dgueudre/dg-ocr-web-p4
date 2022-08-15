module.exports = config => {
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/includes');
  config.addPassthroughCopy('src/js');

  config.addPassthroughCopy('src/favicon.jpg');
  config.addPassthroughCopy('src/style.css');

  config.addNunjucksFilter("filter_by", (array, property, value) => array.filter(item => item[property] === value));
  config.addNunjucksFilter("sort_by", (array, property) => array.sort((a, b) => a[property] - b[property]));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
      includes: "templates",
      data: "data"
    }
  };
};