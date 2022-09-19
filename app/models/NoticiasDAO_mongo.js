function NoticiasDAO_mongo(connection) {
    this._connection = connection;
}

// NoticiasDAO_mongo.prototype.getNoticias = function (callback) {
//     var Noticias =
//     var response = Noticias.find({}).lean().exec();
//     callback(response);
// }

// var noticiasSchemaMongoDB = new mongoose.Schema({
//     titulo: String,
//     noticia: String,
//     resumo: String,
//     autor: String,
//     data_noticia: Date,
//     categoria: String,
//     imagem: String,
//     data_criacao: Date,
// }, {
//     collection: 'noticias'
// });