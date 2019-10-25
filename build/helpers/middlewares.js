"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _owner = require("../models/owner");

var _pet = require("../models/pet");

var _expressValidator = require("express-validator");

var validateOwner =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var owner, pet;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _owner.getOwnerById)(req.params.ownerId);

          case 2:
            owner = _context.sent;

            if (!req.params.petId) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return (0, _pet.getPetByIdAndOwnerId)(req.params.petId, owner.id);

          case 6:
            pet = _context.sent;

          case 7:
            if (owner) {
              req.owner = owner;
              if (pet) req.pet = pet;
              next();
            } else {
              res.status(200).json({
                message: 'Owner not found'
              });
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateOwner(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var validate = function validate(method) {
  switch (method) {
    case 'owner':
      {
        return [(0, _expressValidator.check)('name').exists().withMessage('name is required').trim().isLength({
          min: 3
        }).withMessage('Min 3 chars'), (0, _expressValidator.check)('email', 'Invalid email').exists().isEmail(), (0, _expressValidator.check)('phone', 'phone doesn`t exist').exists().isInt().trim().isLength({
          min: 10,
          max: 10
        }), (0, _expressValidator.check)('address').exists().withMessage('address is required').isLength({
          min: 5
        }).withMessage('Min 5 chars')];
      }

    case 'pet':
      {
        return [(0, _expressValidator.body)('name').exists().withMessage('name is required').isLength({
          min: 3
        }).withMessage('Min 3 chars'), (0, _expressValidator.body)('colour').exists().withMessage('colour is required').isLength({
          min: 3
        }).withMessage('Min 3 chars'), (0, _expressValidator.body)('age', 'age doesn`t exist').exists().isInt(), (0, _expressValidator.body)('breed').exists().withMessage('breed is required').isIn(['DOG', 'CAT']).withMessage('Value must be DOG or CAT')];
      }
  }
};

module.exports = {
  validate: validate,
  validateOwner: validateOwner
};
//# sourceMappingURL=middlewares.js.map