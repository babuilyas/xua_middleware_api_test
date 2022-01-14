const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

let input = {
  IV_PROCESS_TYPE: "S1BR",
  IV_SHORT_TEXT: "TEST RFC S1BR",
};
let EV_GUID = Buffer.from("THIS IS A TEST");
let EV_OBJECT_ID = "";

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_CREATE_PROCESS_TYPE", {
        ...input,
        EV_GUID: EV_GUID,
        EV_OBJECT_ID: EV_OBJECT_ID,
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
