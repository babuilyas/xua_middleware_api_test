const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });
// this is ok. it returns all change cycles

let struct1 = {
  GUID: Buffer.from("THIS IS A TEST"),
  OBJECT_ID: "",
  PROCESS_TYPE: "",
  P_DESCRIPTION: "",
  DESCRIPTION: "",
  CREATED_BY: "",
  PRIORITY: "",
  TXT_LONG: "",
  STATUS: "",
  TXT30: "",
  CHANGE_CYCLE: "",
  BRANCH_ID: "",
};
let tab1 = [struct1];

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_CM_CHANGECYCLE_GETLIST2", {
        ET_CC: tab1,
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
