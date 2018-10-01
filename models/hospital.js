mongoose = require('mongoose');
Schema = mongoose.Schema;


var hospitalSchema = new Schema({
    nombre: { type: String, require: [true, 'El nombre es necesario'] },
    img: { type: String, require: false },
    usuario: { type: Schema.Types.ObjectId, ref: 'usuario' }
}, { collection: 'hospitales' });



module.exports = mongoose.model('Hospital', hospitalSchema);