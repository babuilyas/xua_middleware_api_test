const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

let input = {
  IV_PROCESSTYPE: "S1BR",
  IV_SHORT_TEXT: "TEST FB S1BR FROM NODE",
  IV_PROJECT_ID: "ADO-2",
  IV_OWNER: "0000000291",
  IV_BP_EXPERT: "0000000112",
};
let EV_GUID = Buffer.from("THIS IS A TEST");
let EV_OBJECT_ID = "";

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_FB_COMPONENT_CREATE", {
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
