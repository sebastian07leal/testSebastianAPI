const { config } = require('../config/index');

function handleEnvironment (error, stack){
    if (config.dev) {
        return { error, stack };
    }
    return error;
}

function showConsole (err, req, res, next){
    console.log(err);
    next(err);
}

// eslint-disable-next-line no-unused-vars
function hanldeError (err, req, res, next){
    res.status(err.status || 500);
    res.json(handleEnvironment(err.message, err.stack));
}

module.exports = {
    showConsole,
    hanldeError
}

