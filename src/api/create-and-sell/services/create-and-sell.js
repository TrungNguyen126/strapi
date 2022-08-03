'use strict';

/**
 * create-and-sell service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-and-sell.create-and-sell');
