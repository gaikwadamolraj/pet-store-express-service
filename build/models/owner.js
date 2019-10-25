"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _owners = _interopRequireDefault(require("../../data/owners.json"));

var _pets = _interopRequireDefault(require("../../data/pets.json"));

var _helper = _interopRequireDefault(require("../helpers/helper"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var OwnerFileName = '././data/owners.json';
var petFileName = '././data/pets.json';

var create =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(newOwner) {
    var id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = {
              id: _helper["default"].getNewId(_owners["default"])
            };
            newOwner = _objectSpread({}, id, {}, newOwner);

            _owners["default"].push(newOwner);

            _helper["default"].writeJSONFile(OwnerFileName, _owners["default"]);

            return _context.abrupt("return", newOwner);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            throw new Error(error);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function create(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getOwners =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _owners["default"]);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getOwners() {
    return _ref2.apply(this, arguments);
  };
}(); // var getOwner = async (id) => owners.find(o => o.id == id);


var getOwnerById =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _owners["default"].find(function (o) {
              return o.id == id;
            }) || null);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getOwnerById(_x2) {
    return _ref3.apply(this, arguments);
  };
}(); // var getOwnerById = async (id) => {
//   try {
//     let owner = await getOwner(id);
//     console.log('Here', owner);
//     if (!owner) {
//       console.log('Here if ');
//       throw new Error({ status: 500, message: `No owner found with ${id} id`});
//     }
//     return owner;
//   } catch (err) {
//     console.error(err);
//     throw new Error({ status: 500, message: `Failed to fetch owner` });
//   }
// }


var updateOwnerById =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(owner, newOwner) {
    var index, id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            index = _helper["default"].getIndexById(_owners["default"], 'id', owner.id);
            id = {
              id: owner.id
            };
            newOwner = _objectSpread({}, id, {}, newOwner);
            _owners["default"][index] = newOwner;

            _helper["default"].writeJSONFile(OwnerFileName, _owners["default"]);

            return _context4.abrupt("return", _owners["default"][index]);

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            throw new Error({
              status: 500,
              message: "Failed to fetch owner"
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function updateOwnerById(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteOwnerById =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(owner) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            _helper["default"].writeJSONFile(OwnerFileName, _helper["default"].deleteById(_owners["default"], owner.id));

            _helper["default"].writeJSONFile(petFileName, _pets["default"].filter(function (p) {
              return parseInt(p.owner) !== parseInt(owner.id);
            }));

            return _context5.abrupt("return", owner);

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            throw new Error({
              status: 500,
              message: "Failed to delete owner"
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function deleteOwnerById(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  create: create,
  getOwners: getOwners,
  getOwnerById: getOwnerById,
  updateOwnerById: updateOwnerById,
  deleteOwnerById: deleteOwnerById
};
//# sourceMappingURL=owner.js.map