import { getOwnerById } from '../models/owner';
import { getPetByIdAndOwnerId } from '../models/pet';
import { body, check } from 'express-validator';

var validateOwner = async (req, res, next) => {
  if (validateId(req.params.ownerId)) {
    res.status(400).json({ message: 'ownerId must be an integer' });
    return;
  }

  let owner = await getOwnerById(req.params.ownerId);
  let pet;

  if (owner) {
    if (req.params.petId) {
      if (validateId(req.params.petId)) {
        res.status(400).json({ message: 'petId must be an integer' });
        return;
      }
      pet = await getPetByIdAndOwnerId(req.params.petId, owner.id);
      if (pet && !pet.id) {
        (pet.status) ? res.status(404).json({ message: pet.message }) : res.status(500).json({ message: 'Internal server error' });
        return;
      }

    }

    req.owner = owner;
    req.pet = pet;
    next();
  } else {
    res.status(404).json({ message: `Owner not found with id ${req.params.ownerId}` });
    return;
  }
}

var validateId = (id) => !Number.isInteger(parseInt(id));
var validate = (method) => {
  switch (method) {
    case 'owner': {
      return [
        check('name').exists().withMessage('name is required').trim().isLength({ min: 3 }).withMessage('Min 3 chars'),
        check('email', 'Invalid email').exists().isEmail(),
        check('phone', 'Phone is required').exists().isInt().trim().isLength({ min: 10, max: 10 }),
        check('address').exists().withMessage('address is required').isLength({ min: 5 }).withMessage('Min 5 chars'),
      ]
    }
    case 'pet': {
      return [
        body('name').exists().withMessage('name is required').isLength({ min: 3 }).withMessage('Min 3 chars'),
        body('colour').exists().withMessage('colour is required').isLength({ min: 3 }).withMessage('Min 3 chars'),
        body('age', 'Age is required').exists().isInt(),
        body('breed').exists().withMessage('breed is required').isIn(['DOG', 'CAT']).withMessage('Value must be DOG or CAT')
      ]
    }
  }
}
module.exports = {
  validate,
  validateOwner
}