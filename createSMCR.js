const con = require("./cred.js").con;
const noderfc = require("node-rfc");
const uuidBuffer = require("uuid-buffer");

var client = new noderfc.Client({ ...con });

let input = {
  IV_PROCESSTYPE: "SMCR",
  IV_SHORTTEXT: "TEST FROM NODE",
  IV_RELEASE_CRM_GUID: Buffer.from("000C29598DA51EDC98CA64E5B452BE88", "hex"),
  IV_SOLDTO: "00000291", // trim first two zeros
  IV_CHANGEMANAGER: "0000000112",
};
let EV_GUID = Buffer.from("THIS IS A TEST");
let EV_OBJECT_ID = "";

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_CM_CHANGEDOC_CREATE", {
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
