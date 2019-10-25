import { getOwnerById } from '../models/owner';
import { getPetByIdAndOwnerId } from '../models/pet';
import  { body, check } from 'express-validator';

var validateOwner = async (req, res, next) => {
    let owner = await getOwnerById(req.params.ownerId);
    let pet;
    if(req.params.petId) {
      pet = await getPetByIdAndOwnerId(req.params.petId, owner.id);
    }

    if(owner) {
        req.owner = owner;
        if(pet) req.pet = pet;
        next();
    } else {
        res.status(200).json({ message: 'Owner not found' })
    }
}


var validate = (method) => {
    switch (method) {
        case 'owner': {
          return [
            check('name').exists().withMessage('name is required').trim().isLength({min : 3}).withMessage('Min 3 chars'),
            check('email', 'Invalid email').exists().isEmail(),
            check('phone', 'phone doesn`t exist').exists().isInt().trim().isLength({min: 10, max : 10}),
            check('address').exists().withMessage('address is required').isLength({min : 5}).withMessage('Min 5 chars'),
          ]
        }
        case 'pet': {
            return [
              body('name').exists().withMessage('name is required').isLength({min : 3}).withMessage('Min 3 chars'),
              body('colour').exists().withMessage('colour is required').isLength({min : 3}).withMessage('Min 3 chars'),
              body('age', 'age doesn`t exist').exists().isInt(),
              body('breed').exists().withMessage('breed is required').isIn(['DOG', 'CAT']) .withMessage('Value must be DOG or CAT')
            ]
          }
      }
}
module.exports = {
    validate,
    validateOwner
}