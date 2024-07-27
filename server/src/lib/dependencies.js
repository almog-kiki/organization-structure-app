
module.exports = {
    requireDependencies() {
        mainModule.Sequelize = require("sequelize");
        mainModule.express      = require('express');
        mainModule.cors         = require('cors');
        mainModule.errorhandler = require('errorhandler');
        mainModule.utils        = require('./utils');
        mainModule.requestUtils = require('./requestUtils');
        mainModule.constants    = require('./constants');
        mainModule.jwt          = require('jsonwebtoken');   
        mainModule.app          = mainModule.express();
    }
};