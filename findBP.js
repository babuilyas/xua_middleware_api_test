const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

let IS_PARTNER = {
  FIRST_NAME: "WASIF",
  LAST_NAME: "ALI",
  USER_NAME: "",
  E_MAIL: "",
};

let EV_BP = "";

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_SM_PARTNER_FIND", {
        IS_PARTNER: IS_PARTNER,
        EV_BP: EV_BP,
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
