const models = require('../models')
const jwt = require('jsonwebtoken'); 


// TODO:  User registration route
// app.post('/register', async (req, res) => {
//   try {
//     const { firstName, lastName, mangerId, position, password } = req.body;
// TODO: validtion on the fields
//     const user = await models.User.create({ firstName, lastName, mangerId, position, password });
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });


exports.login = async (req, res) => {
  try {
    const { firstName, password } = req.body;
    const user = await models.User.findOne({ where: { firstName: firstName } });

    if (!user || !(await user.validatePassword(password))) {
      return res.status(401).json({ message: 'Invalid firstName or password' });
    }

    const token = jwt.sign({ id: user.id }, 
                   mainModule.constants.SECRET_KEY, 
                   { expiresIn: '3h' });
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json({ token });
  } catch (error) {
    console.log("error")
    res.status(500).json({ error: error.message });
  }
};
