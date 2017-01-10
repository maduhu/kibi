export const mappings = {
  // kibi: we're defining an explicit mapping on version to avoid conflicts occurring when a plugin loads saved objects from JSON (which
  // would create an implicit mapping of `version` to long).
  _default_: {
    properties: {
      version: {
        type: 'integer'
      }
    }
  },
  config: {
    properties: {
      buildNum: {
        type: 'string',
        index: 'not_analyzed'
      }
    }
  },
  server: {
    properties: {
      uuid: {
        type: 'keyword'
      }
    }
  }
};
