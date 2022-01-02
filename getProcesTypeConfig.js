const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

let struct1 = {
  LANGU_ISO: "",
  LANGU: "",
  PROCESS_TYPE: "",
  STAT_PROF: "",
  STAT_PROF_DESCR: "",
  USR_STATUS: "",
  USR_STATUS_DESCR_04: "",
  USR_STATUS_DESCR: "",
  LTEXT: "",
  INIST: "",
  US_ST_NUMB: "",
  HSONR: "",
  NSONR: "",
  LINEP: "",
  STATP: "",
  BERSL: "",
  CRM_VRGNG: "",
};
let tab1 = [struct1];

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_CM_PROCTYPE_GETDETAIL", {
        IV_PROCESSTYPE: "SMCR",
        ET_STATUS_SCHEMA: tab1,
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
