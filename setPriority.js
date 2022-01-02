const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

// PS C:\Users\m.ilyas\Desktop\craig-slm-integration\xua_middleware_api_test> node .\createSMCR.js
// {
//   EV_GUID: <Buffer 00 0c 29 59 8d a5 1e dc 99 f6 a5 e3 aa fa 1d 00>,
//   EV_OBJECT_ID: '8000000757',
//   IV_CHANGEMANAGER: '0000000112',
//   IV_PROCESSTYPE: 'SMCR',
//   IV_RELEASE_CRM_GUID: <Buffer 00 0c 29 59 8d a5 1e dc 98 ca 64 e5 b4 52 be 88>,
//   IV_SHORTTEXT: 'TEST RFC SMCR FROM NODE',
//   IV_SOLDTO: '00000291'
// }

let input = {
  IV_HEADER_GUID: Buffer.from("000C29598DA51EDC99F6A5E3AAFA1D00", "hex"),
  IV_PRIORITY: "0",
};
let EV_GUID = Buffer.from("THIS IS A TEST");
let EV_OBJECT_ID = "";

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_CD_PRIORITY_SET", {
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
