const con = require("./cred.js").con;
const noderfc = require("node-rfc");
const faker = require("@faker-js/faker");

var client = new noderfc.Client({ ...con });

var IV_RELEASE_GUID = Buffer.from("000c29598da51edc98ca64e5b452be88", "hex"); // 8000000686
var EV_GUID = Buffer.alloc(16); // Buffer.from("00000000000000000000000000000000", "hex");
var EV_OBJECT_ID = "8000001415";
var IV_REQ_OWNER = "ILYAS";
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

      console.log(EV_OBJECT_ID);

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
      if (ET_SCOPE_ITEM.length < 2)
        while (ET_SCOPE_ITEM.length < 2)
          await client
            .call("ZXUA_ADD_SCOPE_ITEM", {
              IV_HEADER_GUID: EV_GUID,
              IV_PROCESS_TYPE: faker.helpers.randomize(["SMMJ", "SMCG"]),
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

      // find if no SMMJ is part of scope add one.
      const smmj1 = ET_SCOPE_ITEM.find((item) => item.PROCESS_TYPE == "SMMJ");
      if (!smmj1) {
        console.log("run again, scope change executed.");
        // E0011	SCEX	Extend Scope
        await client
          .call("ZXUA_CHANGE_STATUS", {
            IV_HEADER_GUID: EV_GUID,
            IV_STATUS: "E0011",
            EV_STATUS,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });

        await client
          .call("ZXUA_ADD_SCOPE_ITEM", {
            IV_HEADER_GUID: EV_GUID,
            IV_PROCESS_TYPE: "SMMJ",
            IV_SHORT_TEXT: faker.company.catchPhrase(),
            EV_SCOPE_ITEM_GUID: Buffer.from("", "hex"),
          })
          .then((result) => {
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
      }

      // EXEC SMMJ
      ET_SCOPE_ITEM.forEach(async (item) => {
        console.log(
          item.PROCESS_TYPE,
          item.FOLLOWONID,
          item.CREATED_GUID.toString("hex")
        );
        if (item.PROCESS_TYPE == "SMMJ") {
          // E0002	PROC	In Development
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0002",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // create transport
          await client
            .call("ZXUA_ADD_TRANSPORT", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_REQ_DESCR: item.OBJECT_ID_DESCR,
              IV_REQ_OWNER: IV_REQ_OWNER,
              IT_DEVELOPER: [],
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](5000);

          // E0004	TOTE	To Be Tested
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0004",
              IV_PROCESS_TYPE: "attempt 2",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // E0009	CONS	Successfully Tested
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0009",
              IV_PROCESS_TYPE: "SMMJ",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // E0011	VORA	Preliminary Import Requested
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0011",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // E0012	TIMP	Testing for Preliminary Import
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0012",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // E0013	GETP	Tested for Production Import
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0013",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // E0014	RELI	Authorized for Import
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0014",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

          // E0006	PROD	Imported into Production
          // here is a condition to be maintained in SAP.
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0006",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);
        }
        if (item.PROCESS_TYPE == "SMCG") {
          // E0001 	 CREA 	 Created
          // E0014 	 BUIL 	 In Process
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0014",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          // E0012 	 TEST 	 To Be Tested
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0012",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          // E0003 	 DOCU 	 To be Documented
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0003",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          // E0011 	 EVAL 	 Change Analysis
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0011",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          // E0004 	 FAIL 	 Failed
          // E0005 	 FINI 	 Confirmed
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0005",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          // E0006 	 CANC 	 Canceled
          // E0015 	 FALL 	 Restore Source
          // E0016 	 WIDR 	 Withdrawn
        }
      });

      console.log("end");
    })
    .catch((err) => {
      console.log(err);
    });
})();
