const db = require('../../models/index');

const get_owner_amenities_Byid = async (req, res) => {
    try {
        console.log("pinnging");
        
        const id = req.params.id;
        const owner_amenities = await db.owner_amenities.findAll({
            
        
        });
        if (!owner_amenities || owner_amenities.length === 0) {
            return res.status(404).json({ message: 'No owner_amenities assigned to you by broker' });
        }
        res.json(owner_amenities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {get_owner_amenities_Byid};
