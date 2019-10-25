import { getOwners } from '../models/owner';
import { getAllPets } from '../models/pet';

class OwnerPetController {
    static async getAll(req, res) {
        try {
            let data = await Promise.all([getOwners(), getAllPets()]);
            if (data[0] && data[1]) {
                let pets = [], arrFinal = [];
                data[1].map(pet => {
                    pets[pet.owner] = pet.pets;
                });

                data[0].map(owner => {
                    let arrPets = pets[owner.id];
                    arrFinal.push({ ...{ pets: arrPets }, ...owner })
                });

                res.status(200).json({ data: arrFinal })
            }
        } catch (err) {
            res.status(500).json({ data: 'Internal server error' });
        };
    }
}

export default OwnerPetController;