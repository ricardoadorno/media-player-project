const express = require("express");
const router = express.Router();

let users = [];

// Create a new User
router.post("/api/user", (req, res) => {
  // Create a new user using the data in the request body
  const user = { id: Date.now(), ...req.body };

  // Add the new user to the "database"
  users.push(user);

  // Return the new user
  res.json(user);
});

// Read all users
router.get("/api/user", (req, res) => {
  // Return all users
  if (users.length) {
    res.json(users);
  } else {
    res.status(404).json({ message: "No Users found" });
  }
});

// Read a single user
router.get("/api/user/:id", (req, res) => {
  // Find the user with the specified ID
  const user = users.find((r) => r.id === parseInt(req.params.id));

  // If the user was not found, return a 404 error
  if (!user) {
    res.status(404).end();
    return;
  }

  // Return the user
  res.json(user);
});

// Update a user
router.put("/api/user/:id", (req, res) => {
  // Find the user with the specified ID
  const index = users.findIndex((r) => r.id === parseInt(req.params.id));

  // If the user was not found, return a 404 error
  if (index === -1) {
    res.status(404).end();
    return;
  }

  // Update the user using the data in the request body
  const user = { ...users[index], ...req.body };
  users[index] = user;

  // Return the updated user
  res.json(user);
});

// Delete a user
router.delete("/api/user/:id", (req, res) => {
  // Find the user with the specified ID
  const index = users.findIndex((r) => r.id === parseInt(req.params.id));

  // If the user was not found, return a 404 error
  if (index === -1) {
    res.status(404).end();
    return;
  }

  // Delete the user from the "database"
  users.splice(index, 1);

  // Return a 204 (No Content) response to indicate that the user was deleted successfully
  res.status(204).end();
});

module.exports = router;
