const MongoLib = require('../libraries/mongo');

class FavoritesServices {

    constructor(){
        this.collection = 'data';
        this.mongoDB = new MongoLib();
    }

    async getFavorites() {
        const favorites = await this.mongoDB.getAll(this.collection);
        return favorites || [];
    }

    async getFavorite( id ) {

        const favorite = await this.mongoDB.get(this.collection, id);
        return favorite || {};
    }

    async createFavorite({ data }) {
        const createFavoriteID = await this.mongoDB.create(this.collection, data );
        return createFavoriteID;
    }

    async updateFavorite({ data } = {}, id = {} ) {
        const updateFavoriteID = await this.mongoDB.update(this.collection, id, data );
        return updateFavoriteID;
    }

    async deleteFavorite( id ) {
        const updateDeleteID = await this.mongoDB.delete(this.collection, id);
        return updateDeleteID;
    }
}

module.exports = FavoritesServices;