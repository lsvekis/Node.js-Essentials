const connectDB = require('./dbConnect');
const mongoose = require('mongoose');
const User = require('./userModel'); // Import the User model

// Function to update a user
const updateUser = async (email, newData) => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Update the user
    const updated = await User.findOneAndUpdate(
      { email },        // filter
      { $set: newData },// update
      { new: true }     // return updated doc
    );

    console.log('Updated user:', updated || 'No user found');
  } catch (error) {
    console.error('Error updating user:', error.message);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
};

// Call the function with test data
updateUser('alice@example.com', { age: 29 });
