const MongoLib = require('../libraries/mongo');

class DataServices {

    constructor(){
        this.collection = 'data';
        this.mongoDB = new MongoLib();
    }

    async getDataAll() {
        const favorites = await this.mongoDB.getAll(this.collection);
        return favorites || [];
    }

    async getDataID( id ) {

        const favorite = await this.mongoDB.get(this.collection, id);
        return favorite || {};
    }

    async createData({ data }) {
        const createFavoriteID = await this.mongoDB.create(this.collection, data );
        return createFavoriteID;
    }

    async updateData({ data } = {}, id = {} ) {
        const updateFavoriteID = await this.mongoDB.update(this.collection, id, data );
        return updateFavoriteID;
    }

    async deleteData( id ) {
        const updateDeleteID = await this.mongoDB.delete(this.collection, id);
        return updateDeleteID;
    }
}

module.exports = DataServices;