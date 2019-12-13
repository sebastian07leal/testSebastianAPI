const express = require('express');
const DataServices = require('../services/dataServices');

function dataMongoApi(app) {
  const router = express.Router();
  const dataServices = new DataServices();

  app.use('/api/dataMongo', router);

  router.get('/', async function(req, res, next) {
    try {

      const dataGetAll = await dataServices.getDataAll();

      res.status(200).json({
        data: dataGetAll,
        message: 'data listed'
      });
    } catch (error) {
        next(error);
    }
  });

  router.get('/:dataID', async function(req, res, next){
    const { dataID } = req.params;

    try {
      const dataGet = await dataServices.getDataID(dataID);

      res.status(200).json({
        data: dataGet,
        message: 'Listed one data'
      });
    } catch (error){
      next();
    }
  });

  router.post('/', async function(req, res, next){
    const { body } = req;
    try {
 
      const dataPost = await dataServices.createData( body );
      
      res.status(201).json({
        data: dataPost,
        message: 'data created'
      });
    } catch (error){
      next(error);
    }
  });

  router.patch('/:dataID', async function(req, res, next){
    const { dataID } = req.params;
    const { body } = req;

    try {
      const dataUpdateID = await dataServices.updateData( body, dataID );

      res.status(200).json({
        data: dataUpdateID,
        message: 'data update'
      });
    } catch (error){
      next(error);
    }
  });

  router.delete('/:dataID', async function(req, res, next){
    const { dataID } = req.params;
    try {
      const dataDelete = await dataServices.deleteData( dataID );

      res.status(200).json({
        data: dataDelete,
        message: 'data deleted'
      });
    } catch(error){
      next(error);
    }
  });

}

module.exports = dataMongoApi;