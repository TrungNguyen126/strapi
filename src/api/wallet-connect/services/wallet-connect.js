'use strict';

/**
 * wallet-connect service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wallet-connect.wallet-connect');
