const con = require("./cred.js").con;
const noderfc = require("node-rfc");
const faker = require("@faker-js/faker");

var client = new noderfc.Client({ ...con });

console.log(faker.vehicle);
return;
(async () => {
  try {
    await client.connect();
    client
      .call("RFC_PING_AND_WAIT", {
        SECONDS: 1,
        BUSY_WAITING: "",
        FORW: "",
        FORW_SECONDS: 0,
        FORW_BUSY_WAITING: "",
      })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {
        client.close();
      });
  } catch (err) {
    console.log(err);
  }
})();
