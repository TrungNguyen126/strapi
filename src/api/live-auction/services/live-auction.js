'use strict';

/**
 * live-auction service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-auction.live-auction');
