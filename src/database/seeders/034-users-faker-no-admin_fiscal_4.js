'use strict';
const faker = require ('faker');

const users = [...Array(5)].map((users) => (
  {
    email: faker.internet.email(),
    password: faker.internet.password(16),
    adress: faker.address.streetName(),
    location: faker.address.city(),
    province: faker.address.state(),
    postal_code: faker.address.zipCode(),
    telephone: faker.phone.phoneNumber(),
    name_fantasy: faker.company.companyName(),
    business_name: faker.company.companyName(),
    cuit: faker.finance.account(),
    fiscal_condition_id: 4,
    image: "no-image.jpg",
    admin: "0",
    active: "1",
    created_at: new Date(),
    updated_at: new Date()
  }
  ))
  
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert ('users', users, {});
    },
    
    down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {})
    }
  };
  