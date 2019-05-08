import fs from "fs"


/**
 * This function is meant to be used for delaying requests when quotas are in place
 * @param {Number} ms Milliseconds to sleep
 * @returns {Promise} A promise after the specified milliseconds
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Saves a variable to a json file
 * @param {String} fileName Name of the file when it gets saved
 * @param {{}} fileData The data to be saved in the json file
 */
export function save(fileName, fileData){
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(fileData, null, 2), (err) => {
    console.log(err)
    if(err){
      console.error(err)
      return;
    }
    console.log(`${filename}.json saved!`);
  });
}


/**
 * Filters out duplicate objects from an array according to a given property
 * @param {String} property the property to distinguish all records
 * @param {[]} array an array of objects
 * @returns {[]} a new array containing only the unique items
 */
export function distinct(property, array){
  let map = new Map();
  let res = [];
  console.log(Array.isArray(array));
  for(const record of array){
    if(!map.has(record[property])){
      map.set(record[property], true);
      res.push(record);
    }
  }
  return res;
}