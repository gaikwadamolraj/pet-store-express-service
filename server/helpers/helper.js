const fs = require('fs')

/**
 * @description It will take array as param and will return incremented id
 * @param {*} array 
 * 
 * @returns int
 */
const getNewId = (array) => (array.length > 0) ? array[array.length - 1].id + 1 : 1;

/**
 * @description it will writes data into the JSON file.
 * @param {*} filename 
 * @param {*} content 
 * 
 * @returns null
 */

var writeJSONFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

/**
 * @description it will delete array object element by id
 * 
 * @param {*} arr 
 * @param {*} id 
 * 
 * @returns object
 */
var deleteById = (arr , id) => arr.filter(p => parseInt(p.id) !== parseInt(id));

/**
 * @description provide array key and id, so it will return index of id
 * 
 * @param {*} arr 
 * @param {*} key 
 * @param {*} id 
 * 
 * @returns int
 */
var getIndexById = (arr, key, id) => arr.findIndex(o => o[key] == id);

module.exports = {
    getNewId,
    writeJSONFile,
    deleteById,
    getIndexById
}