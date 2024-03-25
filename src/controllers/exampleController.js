const exampleEnum = require('../enums/ExampleEnum.js');

const exampleController = {
    init: async (req, res) => {
            res.status(201).send({ success: true, message: exampleEnum.EXAMPLE_TEST });
        }
}


module.exports = exampleController