/**
 *
 * @param {Array} arr the data with array object
 * @param  {String} key
 * @returns {Array}
 * @example
 * arrayObjectUniq([{val:3},{val:2},{val:3},{val:5}])
 * // => [3,2,5]
 */
function array_object_uniq(arr: any[], key: string): Array<any> {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
export { array_object_uniq };
