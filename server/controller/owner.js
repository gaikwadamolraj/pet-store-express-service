import { create, getOwnerById, getOwners, updateOwnerById, deleteOwnerById } from '../models/owner';
import { validationResult } from 'express-validator';

class Owners {
  static async createOwner(req, res) {
    try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    let owner = await create(req.body)
      if(owner) {
        res.status(201).json({ success: true, message: 'Owner successfully created', owner });
      } else {
        res.status(500).json({ message: "Failed to create owner" });
      }
    } catch(err) {
      res.status(500).json({ message: "Failed to create owner" });
    }
      
  }

  static async getOwners(req, res) {
    try {
      let owners = await getOwners();
      res.status(200).json(owners);
    } catch (err) {
      res.status(500).json({ "error": 'Failed to get owners' })
    }
  }

  static async getOwner(req, res) {
      res.status(200).json(req.owner);
   }

  static async updateOwner(req, res) {
    let owner = await updateOwnerById(req.owner, req.body);
    if(owner){
        res.status(200).json({ success: true, message: 'Owner updated sucessfully', owner });
      } else {
        res.status(500).json({ "error": "Failed to update" })
      }
  }

  static async deleteOwner(req, res) {
    let owner = await deleteOwnerById(req.owner);
    if (owner) {
      res.status(200).json({ success: true, message: 'Owner deleted sucessfully', owner });
    } else {
      res.status(500).json({ "error": 'Failed to delete owner' })
    }
  }

}

export default Owners;