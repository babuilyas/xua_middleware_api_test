const faker = require("@faker-js/faker");

console.log(faker.fake("{{name.firstName}} {{name.lastName}}"));
