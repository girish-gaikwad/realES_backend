const db = require('../../models/index');

const get_owner_utilities_Byid = async (req, res) => {
    try {
        // Get the user ID from the request parameters
        const id = req.params.id;

        // Fetch user utilities based on the user ID
        const userUtilities = await db.owner_utilities.findAll({
            where: {
                estateId: id
            },
        });

        // If no utilities are found, return a 404 error
        if (!userUtilities || userUtilities.length === 0) {
            return res.status(404).json({ message: 'No utilities assigned to you by broker' });
        }        

        // Return the user utilities as a JSON response
        res.json(userUtilities);
    } catch (error) {
        // Catch and return any errors that occur
        res.status(500).json({ message: error.message });
    }
};

module.exports = {get_owner_utilities_Byid}