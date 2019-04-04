var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var pointModel = new schema({
    point:{
        type: String        
    },
    safeScore:{
        type: Number
    }
});

module.exports = mongoose.model('Point', pointModel);