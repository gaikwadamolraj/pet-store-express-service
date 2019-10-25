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

var _owner = require("../models/owner");

var _expressValidator = require("express-validator");

var Owners =
/*#__PURE__*/
function () {
  function Owners() {
    (0, _classCallCheck2["default"])(this, Owners);
  }

  (0, _createClass2["default"])(Owners, null, [{
    key: "createOwner",
    value: function () {
      var _createOwner = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var errors, owner;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                errors = (0, _expressValidator.validationResult)(req);

                if (!errors.isEmpty()) {
                  res.status(422).json({
                    errors: errors.array()
                  });
                }

                _context.next = 5;
                return (0, _owner.create)(req.body);

              case 5:
                owner = _context.sent;

                if (owner) {
                  res.status(201).json({
                    success: true,
                    message: 'Owner successfully created',
                    owner: owner
                  });
                } else {
                  res.status(500).json({
                    message: "Failed to create owner"
                  });
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                res.status(500).json({
                  message: "Failed to create owner"
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function createOwner(_x, _x2) {
        return _createOwner.apply(this, arguments);
      }

      return createOwner;
    }()
  }, {
    key: "getOwners",
    value: function () {
      var _getOwners2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var owners;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _owner.getOwners)();

              case 3:
                owners = _context2.sent;
                res.status(200).json(owners);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.status(500).json({
                  "error": 'Failed to get owners'
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getOwners(_x3, _x4) {
        return _getOwners2.apply(this, arguments);
      }

      return getOwners;
    }()
  }, {
    key: "getOwner",
    value: function () {
      var _getOwner = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res.status(200).json(req.owner);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getOwner(_x5, _x6) {
        return _getOwner.apply(this, arguments);
      }

      return getOwner;
    }()
  }, {
    key: "updateOwner",
    value: function () {
      var _updateOwner = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var owner;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _owner.updateOwnerById)(req.owner, req.body);

              case 2:
                owner = _context4.sent;

                if (owner) {
                  res.status(200).json({
                    success: true,
                    message: 'Owner updated sucessfully',
                    owner: owner
                  });
                } else {
                  res.status(500).json({
                    "error": "Failed to update"
                  });
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateOwner(_x7, _x8) {
        return _updateOwner.apply(this, arguments);
      }

      return updateOwner;
    }()
  }, {
    key: "deleteOwner",
    value: function () {
      var _deleteOwner = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var owner;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _owner.deleteOwnerById)(req.owner);

              case 2:
                owner = _context5.sent;

                if (owner) {
                  res.status(200).json({
                    success: true,
                    message: 'Owner deleted sucessfully',
                    owner: owner
                  });
                } else {
                  res.status(500).json({
                    "error": 'Failed to delete owner'
                  });
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteOwner(_x9, _x10) {
        return _deleteOwner.apply(this, arguments);
      }

      return deleteOwner;
    }()
  }]);
  return Owners;
}();

var _default = Owners;
exports["default"] = _default;
//# sourceMappingURL=owner.js.map