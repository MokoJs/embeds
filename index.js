module.exports = function(Model) {
  for(var key in Model.attrs) {
    addAttr(key, Model.attrs[key]);
  }
  Model.on('attr', addAttr);

  function addAttr(attr, options) {
    if(options.embeds) {
      Model.on('initializing', function*(instance, attrs) {
        if(attrs[attr]) { attrs[attr] = yield new options.embeds(attrs[attr]); }
      });
    }
  }
};

