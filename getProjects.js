const noderfc = require("node-rfc");

let con = {
  ASHOST: "192.168.64.168",
  CLIENT: "001",
  SYSNR: "00",
  R3NAME: "SLM",
  SAPROUTER: "/H/125.209.118.234/H/172.16.0.185",
  USER: "PS-WASIF",
  PASSWD: "Password123",
};

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
        console.log(result);
        console.log(result.RT_PROJECTS);
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
