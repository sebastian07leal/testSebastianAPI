const express = require('express');
const FavoritesServices = require('../services/favorites');

function favoritesApi(app) {
  const router = express.Router();
  const favoritesServices = new FavoritesServices();

  app.use('/api/favorites', router);

  router.get('/', async function(req, res, next) {
    try {

      const favorites = await favoritesServices.getFavorites();

      res.status(200).json({
        data: favorites,
        message: 'favorites listed'
      });
    } catch (error) {
        next(error);
    }
  });

  router.get('/:favoriteID', async function(req, res, next){
    const { favoriteID } = req.params;

    try {
      const favorite = await favoritesServices.getFavorite(favoriteID);

      res.status(200).json({
        data: favorite,
        message: 'favorite listed'
      });
    } catch (error){
      next();
    }
  });

  router.post('/', async function(req, res, next){
    const { body } = req;
    try {
 
      const createFavoriteID = await favoritesServices.createFavorite( body );
      
      res.status(201).json({
        data: createFavoriteID,
        message: 'favorite created'
      });
    } catch (error){
      next(error);
    }
  });

  router.patch('/:favoriteID', async function(req, res, next){
    const { favoriteID } = req.params;
    const { body } = req;

    try {
      const updateFavoriteID = await favoritesServices.updateFavorite( body, favoriteID );

      res.status(200).json({
        data: updateFavoriteID,
        message: 'favorite update'
      });
    } catch (error){
      next(error);
    }
  });

  router.delete('/:favoriteID', async function(req, res, next){
    const { favoriteID } = req.params;
    try {
      const deleteFavoriteID = await favoritesServices.deleteFavorite( favoriteID );

      res.status(200).json({
        data: deleteFavoriteID,
        message: 'favorite deleted'
      });
    } catch(error){
      next(error);
    }
  });

}

module.exports = favoritesApi;