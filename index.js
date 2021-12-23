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
