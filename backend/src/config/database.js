const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-nodejs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('servidor listo');
}).catch(
    err => console.log(err)
);