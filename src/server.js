const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT || 3000, () => console.log('Server Online: ' + process.env.PORT || 3000))