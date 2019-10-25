import Owner from '../controller/owner';
import Pet from '../controller/pet';
import OwnerPetController from '../controller/ownerPetController';
import m  from '../helpers/middlewares';

const express = require('express')
const router = express.Router()

router.get('/owners', Owner.getOwners);
router.post('/owners', m.validate('owner'), Owner.createOwner);
router.get('/owners/:ownerId', m.validateOwner, Owner.getOwner);
router.put('/owners/:ownerId', m.validateOwner, m.validate('owner'), Owner.updateOwner);
router.delete('/owners/:ownerId', m.validateOwner, Owner.deleteOwner);

router.get('/owners/:ownerId/pets', m.validateOwner, Pet.getPets);
router.post('/owners/:ownerId/pets', m.validateOwner, m.validate('pet'), Pet.createPet);
router.get('/owners/:ownerId/pets/:petId', m.validateOwner, Pet.getPet);
router.put('/owners/:ownerId/pets/:petId', m.validateOwner, m.validate('pet'), Pet.updatePet);
router.delete('/owners/:ownerId/pets/:petId', m.validateOwner, Pet.deletePet);

router.get('/all', OwnerPetController.getAll);


module.exports = router