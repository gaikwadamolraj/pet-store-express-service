import Owner from '../controller/owner';
import Pet from '../controller/pet';
import OwnerPetController from '../controller/ownerPetController';
import mw from '../helpers/middlewares';

const express = require('express')
const router = express.Router()

router.get('/owners', Owner.getOwners);
router.post('/owners', mw.validate('owner'), Owner.createOwner);
router.get('/owners/:ownerId', mw.validateOwner, Owner.getOwner);
router.put('/owners/:ownerId', mw.validateOwner, mw.validate('owner'), Owner.updateOwner);
router.delete('/owners/:ownerId', mw.validateOwner, Owner.deleteOwner);

router.get('/owners/:ownerId/pets', mw.validateOwner, Pet.getPets);
router.post('/owners/:ownerId/pets', mw.validateOwner, mw.validate('pet'), Pet.createPet);
router.get('/owners/:ownerId/pets/:petId', mw.validateOwner, Pet.getPet);
router.put('/owners/:ownerId/pets/:petId', mw.validateOwner, mw.validate('pet'), Pet.updatePet);
router.delete('/owners/:ownerId/pets/:petId', mw.validateOwner, Pet.deletePet);

router.get('/all', OwnerPetController.getAll);


module.exports = router