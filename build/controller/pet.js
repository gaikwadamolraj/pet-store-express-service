"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _pet = require("../models/pet");

var _expressValidator = require("express-validator");

var Pets =
/*#__PURE__*/
function () {
  function Pets() {
    (0, _classCallCheck2["default"])(this, Pets);
  }

  (0, _createClass2["default"])(Pets, null, [{
    key: "createPet",
    value: function createPet(req, res) {
      var ownerId = req.params.ownerId;
      var errors = (0, _expressValidator.validationResult)(req);

      if (!errors.isEmpty()) {
        res.status(422).json({
          errors: errors.array()
        });
      }

      (0, _pet.createPetOwnerId)(req.body, ownerId).then(function (pet) {
        res.status(201).json({
          success: true,
          message: 'Pet successfully created',
          pet: pet
        });
      })["catch"](function (err) {
        return res.status(500).json({
          message: "Failed to create pet"
        });
      });
    }
  }, {
    key: "getPets",
    value: function () {
      var _getPets = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var pets;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _pet.getAllPetsByOwnerId)(req.owner.id);

              case 3:
                pets = _context.sent;

                if (pets && pets.owner) {
                  res.status(200).json(pets);
                } else {
                  res.status(200).json({
                    message: "No pets found for ".concat(req.owner.id, " owner id")
                  });
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                res.status(500).json({
                  "error": 'Failed to fetch pets'
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getPets(_x, _x2) {
        return _getPets.apply(this, arguments);
      }

      return getPets;
    }()
  }, {
    key: "getPet",
    value: function () {
      var _getPet = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res.status(200).json(req.pet);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPet(_x3, _x4) {
        return _getPet.apply(this, arguments);
      }

      return getPet;
    }()
  }, {
    key: "updatePet",
    value: function () {
      var _updatePet = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var _req$params, petId, ownerId, pet;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$params = req.params, petId = _req$params.petId, ownerId = _req$params.ownerId;
                _context3.next = 3;
                return (0, _pet.updatePetByIdAndOwnerId)(petId, ownerId, req.body);

              case 3:
                pet = _context3.sent;

                if (pet && !pet.status) {
                  res.status(200).json({
                    success: true,
                    message: 'Pet updated sucessfully',
                    pet: pet
                  });
                } else {
                  res.status(500).json({
                    "error": "Pet not found with ".concat(petId, " id")
                  });
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updatePet(_x5, _x6) {
        return _updatePet.apply(this, arguments);
      }

      return updatePet;
    }()
  }, {
    key: "deletePet",
    value: function deletePet(req, res) {
      var _req$params2 = req.params,
          petId = _req$params2.petId,
          ownerId = _req$params2.ownerId;
      (0, _pet.deletePetByIdAndOwnerId)(petId, ownerId).then(function (pet) {
        res.status(200).json({
          success: true,
          message: 'Pet deleted sucessfully',
          pet: pet
        });
      })["catch"](function (err) {
        console.log(err);
        res.status(err.status).json({
          "error": err.message
        });
      });
    }
  }]);
  return Pets;
}();

var _default = Pets;
exports["default"] = _default;
//# sourceMappingURL=pet.js.map