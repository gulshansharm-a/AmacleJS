const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; 
const payload = {
  userId: '123456',
  username: 'exampleUser',
};

const bearerToken = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Bearer Token:', bearerToken);  
