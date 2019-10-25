"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _owner = _interopRequireDefault(require("../controller/owner"));

var _pet = _interopRequireDefault(require("../controller/pet"));

var _middlewares = _interopRequireDefault(require("../helpers/middlewares"));

var express = require('express');

var router = express.Router();
router.get('/owners', _owner["default"].getOwners);
router.post('/owners', _middlewares["default"].validate('owner'), _owner["default"].createOwner);
router.get('/owners/:ownerId', _middlewares["default"].validateOwner, _owner["default"].getOwner);
router.put('/owners/:ownerId', _middlewares["default"].validateOwner, _middlewares["default"].validate('owner'), _owner["default"].updateOwner);
router["delete"]('/owners/:ownerId', _middlewares["default"].validateOwner, _owner["default"].deleteOwner);
router.get('/owners/:ownerId/pets', _middlewares["default"].validateOwner, _pet["default"].getPets);
router.post('/owners/:ownerId/pets', _middlewares["default"].validateOwner, _middlewares["default"].validate('pet'), _pet["default"].createPet);
router.get('/owners/:ownerId/pets/:petId', _middlewares["default"].validateOwner, _pet["default"].getPet);
router.put('/owners/:ownerId/pets/:petId', _middlewares["default"].validateOwner, _middlewares["default"].validate('pet'), _pet["default"].updatePet);
router["delete"]('/owners/:ownerId/pets/:petId', _middlewares["default"].validateOwner, _pet["default"].deletePet);
module.exports = router;
//# sourceMappingURL=routes.js.map