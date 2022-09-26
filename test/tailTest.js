const assertEqual = require('../assertEqual');
const tail = require('../tail.js')

assertEqual(tail(["Mr", "Rogers", "Neighbourhood"]), "Neighbourhood");