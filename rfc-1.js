const con = require("./cred.js").con;
const noderfc = require("node-rfc");
const faker = require("@faker-js/faker");

var client = new noderfc.Client({ ...con });

var IV_RELEASE_GUID = Buffer.from("000c29598da51edc98ca64e5b452be88", "hex"); // 8000000686
var EV_GUID = Buffer.alloc(16); // Buffer.from("00000000000000000000000000000000", "hex");
var EV_OBJECT_ID = "8000001349";
var EV_STATUS = "";
var ET_SCOPE_ITEM = [];
var ET_PARTNER = [];
const ET_SCOPE_ITEM_line = {
  GUID: Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
  ITEM_GUID: "", // CHAR (32) GUID in 'CHAR' Format in Uppercase
  PROCESS_TYPE: "", // CHAR (4) Business Transaction Type SU3=CRM_PROCESS_TYPE
  FOLLOWONID: "", // CHAR (10) ALPHA=ALPHA Transaction ID SU3=CRM_OBJECT_ID
};
const ET_PARTNER_line = {
  PARTNER_NO: "", // CHAR (10) ALPHA=ALPHA Business Partner Number SU3=BPA
  PARTNER_GUID: Buffer.alloc(16), // RAW (16) Business Partner GUID
  PARTNER_FCT: "", // CHAR (8) Partner Function
};

(async () => {
  const result = await client
    .connect()
    .then(async () => {
      // create new ticket if guid is not provided
      if (!EV_OBJECT_ID)
        await client
          .call("ZXUA_CREATE_PROCESS_TYPE", {
            IV_PROCESS_TYPE: "SMCR",
            IV_SHORT_TEXT: faker.company.catchPhrase(),
          })
          .then((result) => {
            EV_GUID = result.EV_GUID;
            EV_OBJECT_ID = result.EV_OBJECT_ID;
            console.log(result);
            // set change cycle
            client
              .call("ZXUA_SET_CHANGE_CYCLE", {
                IV_HEADER_GUID: EV_GUID,
                IV_RELEASE_GUID,
              })
              .then((result) => {
                console.log(result);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

      // get guid of the object
      if (EV_GUID != Buffer.from("00000000000000000000000000000000", "hex"))
        await client
          .call("ZXUA_GET_GUID", {
            IV_OBJECT_ID: EV_OBJECT_ID,
          })
          .then((result) => {
            EV_GUID = Buffer.from(result.EV_GUID.toString("hex"), "hex");
            console.log(EV_GUID.toString("hex"));
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });

      // set priority
      await client
        .call("ZXUA_UPDATE_PRIORITY", {
          IV_HEADER_GUID: EV_GUID,
          IV_PRIORITY: "1",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      // get partners
      await client
        .call("ZXUA_GET_PARTNERS", {
          IV_HEADER_GUID: EV_GUID,
          ET_PARTNER,
        })
        .then((result) => {
          ET_PARTNER = result.ET_PARTNER;
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      // set partners
      if (ET_PARTNER.length < 2) {
        await client
          .call("ZXUA_ADD_PARTNERS", {
            IV_HEADER_GUID: EV_GUID,
            IT_PARTNER: [
              { PARTNER_NO: "112", PARTNER_FCT: "00000001" },
              { PARTNER_NO: "112", PARTNER_FCT: "SDCR0002" },
            ],
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // get current status
      if (!EV_STATUS)
        await client
          .call("ZXUA_GET_STATUS", {
            IV_HEADER_GUID: EV_GUID,
            EV_STATUS,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });

      //E0014	VALI	Validation
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0014",
          EV_STATUS,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      // get scope items
      await client
        .call("ZXUA_GET_SCOPE_ITEM", {
          IV_HEADER_GUID: EV_GUID,
          ET_SCOPE_ITEM,
        })
        .then((result) => {
          ET_SCOPE_ITEM = result.ET_SCOPE_ITEM;
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      // ADD SCOPE ITEMS
      if (ET_SCOPE_ITEM.length < 3)
        while (ET_SCOPE_ITEM.length < 3)
          await client
            .call("ZXUA_ADD_SCOPE_ITEM", {
              IV_HEADER_GUID: EV_GUID,
              IV_PROCESS_TYPE: faker.helpers.randomize([
                "SMMJ",
                "SMCG",
                "SMMJ",
              ]),
              IV_SHORT_TEXT: faker.company.catchPhrase(),
              EV_SCOPE_ITEM_GUID: Buffer.from("", "hex"),
            })
            .then((result) => {
              ET_SCOPE_ITEM.push(result.IV_SHORT_TEXT);
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

      //E0012	AWAP	To Be Approved
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0012",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      // auto approval
      await client
        .call("ZXUA_SET_APPROVED", {
          IV_HEADER_GUID: EV_GUID,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

      //E0015	IMPL	Being Implemented
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0015",
          EV_STATUS,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](5000);

      // get scope items
      ET_SCOPE_ITEM = [];
      await client
        .call("ZXUA_GET_SCOPE_ITEM", {
          IV_HEADER_GUID: EV_GUID,
          ET_SCOPE_ITEM,
        })
        .then((result) => {
          ET_SCOPE_ITEM = result.ET_SCOPE_ITEM;
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("end");
    })
    .catch((err) => {
      console.log(err);
    });
})();
