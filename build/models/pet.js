"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pets = _interopRequireDefault(require("../../data/pets.json"));

var _helper = _interopRequireDefault(require("../helpers/helper"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var petFileName = '././data/pets.json';

var createPetOwnerId =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(newPet, ownerId) {
    var owner, id, _id, ownerIndex;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            owner = getOwnerById(ownerId);

            if (!owner) {
              id = {
                id: 1
              };
              newPet = _objectSpread({}, id, {}, newPet);
              owner = {
                owner: ownerId,
                pets: []
              };
              owner.pets.push(_objectSpread({}, id, {}, newPet));

              _pets["default"].push(owner);
            } else {
              _id = {
                id: _helper["default"].getNewId(owner.pets)
              };
              newPet = _objectSpread({}, _id, {}, newPet);
              ownerIndex = _helper["default"].getIndexById(_pets["default"], 'owner', ownerId);
              owner.pets.push(newPet);
              _pets["default"][ownerIndex].pets = owner.pets;
            }

            _helper["default"].writeJSONFile(petFileName, _pets["default"]);

            return _context.abrupt("return", newPet);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            throw new Error(error);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function createPetOwnerId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getOwnerById = function getOwnerById(id) {
  return _pets["default"].find(function (r) {
    return r.owner == id;
  });
};

var getAllPetsByOwnerId =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _pets["default"].find(function (p) {
              return p.owner == id;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllPetsByOwnerId(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var getPetByPetIdAndOwnerId = function getPetByPetIdAndOwnerId(id, ownerId) {
  try {
    var owner = _pets["default"].find(function (r) {
      return r.owner == ownerId;
    });

    if (owner && owner.pets.length) {
      var pet = owner.pets.find(function (p) {
        return p.id == id;
      });

      if (!pet) {
        return {
          status: 404,
          message: "No pet found with ".concat(id, " id")
        };
      } else {
        return pet;
      }
    } else {
      return {
        status: 404,
        message: "No pet found with ".concat(id, " id")
      };
    }
  } catch (err) {
    console.error(err);
    throw new Error({
      status: 500,
      message: 'Failed to fetch pet'
    });
  }
};

var getPetByIdAndOwnerId =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(id, ownerId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", getPetByPetIdAndOwnerId(id, ownerId));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPetByIdAndOwnerId(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var updatePetByIdAndOwnerId =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(id, ownerId, newPet) {
    var pet, petIndex, ownerIndex;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            pet = getPetByPetIdAndOwnerId(id, ownerId);

            if (!pet.id) {
              _context4.next = 9;
              break;
            }

            petIndex = _helper["default"].getIndexById(getOwnerById(ownerId).pets, 'id', pet.id);
            ownerIndex = _helper["default"].getIndexById(_pets["default"], 'owner', ownerId);
            id = {
              id: pet.id
            };
            _pets["default"][ownerIndex].pets[petIndex] = _objectSpread({}, id, {}, newPet);

            _helper["default"].writeJSONFile(petFileName, _pets["default"]);

            return _context4.abrupt("return", _pets["default"][ownerIndex].pets[petIndex]);

          case 9:
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            throw new Error({
              status: _context4.t0.status,
              message: _context4.t0.message
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function updatePetByIdAndOwnerId(_x6, _x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var deletePetByIdAndOwnerId =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(id, ownerId) {
    var pet;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            pet = getPetByPetIdAndOwnerId(id, ownerId);

            if (!pet.id) {
              _context5.next = 7;
              break;
            }

            _pets["default"][_helper["default"].getIndexById(_pets["default"], 'owner', ownerId)].pets = _helper["default"].deleteById(getOwnerById(ownerId).pets, id);
            ;

            _helper["default"].writeJSONFile(petFileName, _pets["default"]);

            return _context5.abrupt("return", pet);

          case 7:
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            throw new Error({
              status: 500,
              message: "Failed to delete owner."
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function deletePetByIdAndOwnerId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  createPetOwnerId: createPetOwnerId,
  getAllPetsByOwnerId: getAllPetsByOwnerId,
  getPetByIdAndOwnerId: getPetByIdAndOwnerId,
  updatePetByIdAndOwnerId: updatePetByIdAndOwnerId,
  deletePetByIdAndOwnerId: deletePetByIdAndOwnerId
};
//# sourceMappingURL=pet.js.map