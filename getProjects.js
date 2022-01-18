const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

let struct1 = {
  GUID: Buffer.from("THIS IS A TEST"),
  PROJECT_ID: "",
  PRO_TYPE: "",
  LANGU: "",
  TEXT1: "",
  PLANSTARTDATE: "",
  PLANFINISHDATE: "",
  STARTDATE_IS_CALC: "",
  FINISHDATE_IS_CALC: "",
  PROJECT_KIND: "",
  IS_MASTER: "",
  ISTAT: "",
  ISTAT_2: "",
  ESTAT: "",
  STATTXT: "",
};
let tab1 = [struct1];

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_FB_PROJECT_GETLIST", {
        RT_PROJECTS: tab1,
      })
      .then(function (result) {
        //console.log(result);
        result.RT_PROJECTS.forEach((element) => {
          console.log(element.PROJECT_ID, element.GUID.toString("hex"));
        });
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
