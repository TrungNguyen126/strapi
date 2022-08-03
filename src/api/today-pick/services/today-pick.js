'use strict';

/**
 * today-pick service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::today-pick.today-pick');
