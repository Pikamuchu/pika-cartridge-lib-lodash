var WeakMap = require('./weakMap');

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap();
module.exports = metaMap;
