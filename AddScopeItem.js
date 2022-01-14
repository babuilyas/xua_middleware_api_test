const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });


// prettier-ignore


(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_ADD_SCOPE_ITEM", {
        IV_HEADER_GUID: Buffer.from("59290c00a58ddc1e9da2c910409a55fb", "hex"),
        IV_PROCESS_TYPE: "S1MJ",
        IV_SHORT_TEXT: "Test S1MJ to S1IT",
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
