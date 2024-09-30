const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User, Address } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create User
    const user = await User.create({ name });

    // Create Address associated with the User
    await Address.create({ address, userId: user.id });

    res.status(201).json({ message: 'User and address created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user and address', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
