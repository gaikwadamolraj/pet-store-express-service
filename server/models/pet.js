import allPets from '../../data/pets.json';
import helper from '../helpers/helper';
const petFileName = '././data/pets.json';

var createPetOwnerId = async (newPet, ownerId) => {
  try {
    let owner = getOwnerById(ownerId);
    if (!owner) {
      let id = { id: 1 };
      newPet = { ...id, ...newPet };
      owner = { owner: ownerId, pets: [] };
      owner.pets.push({ ...id, ...newPet });
      allPets.push(owner);
    } else {
      const id = { id: helper.getNewId(owner.pets) };
      newPet = { ...id, ...newPet };
      const ownerIndex = helper.getIndexById(allPets, 'owner', ownerId);
      owner.pets.push(newPet);
      allPets[ownerIndex].pets = owner.pets;
    }

    helper.writeJSONFile(petFileName, allPets)
    return newPet;
  } catch (err) {
    console.log(err);
    throw new Error(error);
  }
}

var getAllPets = () => allPets;
var getOwnerById = (id) => allPets.find(r => r.owner == id);
var getAllPetsByOwnerId = async (id) => allPets.find(p => p.owner == id);
var getPetByPetIdAndOwnerId = (id, ownerId) => {
  try {
    let owner = allPets.find(r => r.owner == ownerId);
    if (owner && owner.pets.length) {
      let pet = owner.pets.find(p => p.id == id);
      if (!pet) {
        return { status: 404, message: `Pet not found with id ${id}` };
      } else {
        return pet;
      }
    } else {
      return { status: 404, message: `Pet not found with id ${id}` };
    }
  } catch (err) {
    console.error(err);
    throw new Error({ status: 500, message: 'Failed to fetch pet' });
  }
}

var getPetByIdAndOwnerId = async (id, ownerId) => getPetByPetIdAndOwnerId(id, ownerId);

var updatePetByIdAndOwnerId = async (id, ownerId, newPet) => {
  try {
    let pet = getPetByPetIdAndOwnerId(id, ownerId);
    if (pet.id) {
      const petIndex = helper.getIndexById(getOwnerById(ownerId).pets, 'id', pet.id);
      const ownerIndex = helper.getIndexById(allPets, 'owner', ownerId);

      id = { id: pet.id }
      allPets[ownerIndex].pets[petIndex] = { ...id, ...newPet }
      helper.writeJSONFile(petFileName, allPets)
      return allPets[ownerIndex].pets[petIndex];
    }

  } catch (err) {
    console.error(err);
    throw new Error({ status: err.status, message: err.message });
  }
}

var deletePetByIdAndOwnerId = async (id, ownerId) => {
  try {
    let pet = getPetByPetIdAndOwnerId(id, ownerId);

    if (pet.id) {
      allPets[helper.getIndexById(allPets, 'owner', ownerId)].pets = helper.deleteById(getOwnerById(ownerId).pets, id);;
      helper.writeJSONFile(petFileName, allPets);
      return pet;
    }
  } catch (err) {
    console.error(err);
    throw new Error({ status: 500, message: `Failed to delete owner.` });
  }
}

module.exports = {
  createPetOwnerId,
  getAllPetsByOwnerId,
  getPetByIdAndOwnerId,
  updatePetByIdAndOwnerId,
  deletePetByIdAndOwnerId,
  getAllPets
}