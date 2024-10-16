const db = require('../../models/index');

// Define the controller function
const getuser_estates_Byid = async (req, res) => {
    try {
        // Get the user ID from the request parameters
        const userId = req.params.id;

        // Fetch user estates based on the user ID
        const userEstate = await db.user_estates.findAll({
            where: {
                user_id: userId,
                is_deleted: false,
            },
            include: [
                {
                    model: db.estates,
                    include: [
                        {
                            model: db.owner_amenities, // Include owner_amenities associated with estates
                        },
                        {
                            model: db.owner_utilities, // Include owner_utilities associated with estates
                        }
                    ],
                },
            ],
        });

        // If no estate is found, return a 404 error
        if (!userEstate || userEstate.length === 0) {
            return res.status(404).json({ message: 'No estates assigned to you by broker' });
        }

        // Return the user estates as a JSON response
        res.json(userEstate);
    } catch (error) {
        // Catch and return any errors that occur
        res.status(500).json({ message: error.message });
    }
};

const delete_user_estates_Byid = async (req, res) => {
    try {
        const userId = req.params.id;
        const estateId = req.params.estate_id;

        // Perform a soft delete by setting is_deleted to true
        const updatedEstate = await db.user_estates.update(
            { is_deleted: true },
            {
                where: {
                    user_id: userId,
                    estate_id: estateId,
                },
            }
        );

        // Check if the update was successful
        if (updatedEstate[0] === 0) {
            return res.status(404).json({ message: 'Estate not found or already deleted' });
        }

        res.json({ message: 'Estate soft deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getuser_estates_Byid,
    delete_user_estates_Byid,
};

