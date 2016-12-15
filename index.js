
module.exports = function(Plugin, options) {
  Plugin.markdown.configure(function(md) {
    md.use(require("markdown-it-table-of-contents"), options);
  })
};