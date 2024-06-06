const mongoose = require("mongoose");

mongoose.connect()
.then(() => {
    console.log(`database connected`);
})
.catch((err) => {
    console.log(err.massage);
});