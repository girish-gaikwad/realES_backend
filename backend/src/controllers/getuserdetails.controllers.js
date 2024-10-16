
const db = require('../../models/index');

const getuserdetails_Byid = async (req, res) => {
    try {
        // Get the user ID from the request parameters
        const userId = req.params.id;

        // Fetch user details based on the user ID
        const userDetails = await db.users.findOne({
            where: {
                id: userId
            }
        });

        // If no user details are found, return a 404 error
        if (!userDetails) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user details as a JSON response
        res.json(userDetails);
    } catch (error) {
        // Catch and return any errors that occur
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getuserdetails_Byid
}