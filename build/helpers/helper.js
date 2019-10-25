"use strict";

var fs = require('fs');

var getNewId = function getNewId(array) {
  return array.length > 0 ? array[array.length - 1].id + 1 : 1;
}; // var mustBeInArray = (array, id) => {
//     return new Promise((resolve, reject) => {
//         const row = array.find(r => r.id == id)
//         if (!row) {
//             reject({
//                 message: `No data for id ${id}`,
//                 status: 404
//             })
//         }
//         resolve(row)
//     })
// }
// var getPetsByOwnerId = ((array, ownerId) => {
//     return new Promise((resolve, reject) => {
//         resolve(array.find(r => r.owner == ownerId))
//     })
// });
// var mustBeInArrayPets = (array, ownerId, id) => {
//     return new Promise((resolve, reject) => {
//        getPetsByOwnerId(array, ownerId).then((owner) => {
//         const row = (owner) ? owner.pets.find(p => p.id == id) : null;
//         if (!row) {
//             reject({
//                 message: `No pets found  with id ${id}`,
//                 status: 404
//             })
//         }
//         resolve(row)
//        }).catch(err => reject(err))
//     })
// }


var writeJSONFile = function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });
};

var deleteById = function deleteById(arr, id) {
  return arr.filter(function (p) {
    return parseInt(p.id) !== parseInt(id);
  });
};

var getIndexById = function getIndexById(arr, key, id) {
  return arr.findIndex(function (o) {
    return o[key] == id;
  });
};

module.exports = {
  getNewId: getNewId,
  writeJSONFile: writeJSONFile,
  deleteById: deleteById,
  getIndexById: getIndexById
};
//# sourceMappingURL=helper.js.map