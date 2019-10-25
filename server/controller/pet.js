import { createPetOwnerId, getPetByIdAndOwnerId, getAllPetsByOwnerId, updatePetByIdAndOwnerId, deletePetByIdAndOwnerId } from '../models/pet';
import { validationResult } from 'express-validator';

class Pets {
  static createPet(req, res) {
    let { ownerId } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    createPetOwnerId(req.body, ownerId)
      .then((pet) => {
        res.status(201).json({
          success: true,
          message: 'Pet successfully created',
          pet
        });
      })
      .catch((err) => res.status(500).json({ message: "Failed to create pet" }));
  }

  static async getPets(req, res) {
    try {
      let pets = await getAllPetsByOwnerId(req.owner.id);
      if (pets && pets.owner) {
        res.status(200).json(pets);
      } else {
        res.status(200).json({ message: `No pets found for ${req.owner.id} owner id` });
      }
    } catch (err) {
      res.status(500).json({ "error": 'Failed to fetch pets' })
    }
  }

  static async getPet(req, res) {
    res.status(200).json(req.pet);
  }

  static async updatePet(req, res) {
    let { petId, ownerId } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    let pet = await updatePetByIdAndOwnerId(petId, ownerId, req.body);
    if (pet && !pet.status) {
      res.status(200).json({
        success: true,
        message: 'Pet updated sucessfully',
        pet
      });
    } else {
      res.status(500).json({ "error": `Pet not found with ${petId} id` });
    }
  }

  static async deletePet(req, res) {
    let { petId, ownerId } = req.params;
    let pet = await deletePetByIdAndOwnerId(petId, ownerId);
    if (pet) {
      res.status(200).json({ success: true, message: 'Pet deleted sucessfully', pet });
    } else {
      res.status(500).json({ "error": 'failed to delete pet' });
    }
  }

}

export default Pets;