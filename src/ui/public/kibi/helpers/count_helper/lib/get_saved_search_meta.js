define(function (require) {
  const _ = require('lodash');

  return function getSavedSearchMeta(savedSearch) {
    let savedSearchMeta;
    /*eslint-disable no-empty */
    try {
      return JSON.parse(savedSearch.kibanaSavedObjectMeta.searchSourceJSON);
    } catch (e) {}
    /*eslint-enable no-empty */
    return {};
  };
});
