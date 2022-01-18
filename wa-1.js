const con = require("./cred.js").con;
const noderfc = require("node-rfc");
const faker = require("@faker-js/faker");

var client = new noderfc.Client({ ...con });

// ADO-5 000c29598da51edc9e86f089b51a74cb
// Wave 1 000c29598da51edc9e86f089b51d74cb Wave 1 : Sprint 1 000C29598DA51EDC9E86F089B51E74CB
// Wave 1 000c29598da51edc9e86f089b51d74cb Wave 1 : Sprint 2 000C29598DA51EDC9E86F089B51FF4CB
// Wave 1 000c29598da51edc9e86f089b51d74cb Wave 1 : Sprint 3 000C29598DA51EDC9E86F089B52174CB
// Wave 1 000c29598da51edc9e86f089b51d74cb Wave 1 : Sprint 4 000C29598DA51EDC9E86F089B522F4CB
// Wave 2 000c29598da51edc9e86f089b52534cb Wave 2 : Sprint 1 000C29598DA51EDC9E86F089B52634CB
// Wave 2 000c29598da51edc9e86f089b52534cb Wave 2 : Sprint 2 000C29598DA51EDC9E86F089B527B4CB
// Wave 2 000c29598da51edc9e86f089b52534cb Wave 2 : Sprint 3 000C29598DA51EDC9E86F09D323694CB
// Wave 2 000c29598da51edc9e86f089b52534cb Wave 2 : Sprint 4 000C29598DA51EDC9E86F09D323814CB
// Wave 3 000c29598da51edc9e86f09d323a54cb Wave 3 : Sprint 1 000C29598DA51EDC9E86F09D323B54CB
// Wave 3 000c29598da51edc9e86f09d323a54cb Wave 3 : Sprint 2 000C29598DA51EDC9E86F09D323CD4CB
// Wave 3 000c29598da51edc9e86f09d323a54cb Wave 3 : Sprint 3 000C29598DA51EDC9E86F09D323E54CB
// Wave 3 000c29598da51edc9e86f09d323a54cb Wave 3 : Sprint 4 000C29598DA51EDC9E86F09D323FD4CB
// Wave 4 000c29598da51edc9e86f09d324214cb Wave 4 : Sprint 1 000C29598DA51EDC9E86F09D324314CB
// Wave 4 000c29598da51edc9e86f09d324214cb Wave 4 : Sprint 2 000C29598DA51EDC9E86F09D324494CB
// Wave 4 000c29598da51edc9e86f09d324214cb Wave 4 : Sprint 3 000C29598DA51EDC9E86F09D324614CB
// Wave 4 000c29598da51edc9e86f09d324214cb Wave 4 : Sprint 4 000C29598DA51EDC9E86F09D324794CB

var IV_PROJECT_ID = "ADO-5";
var IV_WAVE_GUID = Buffer.from("000c29598da51edc9e86f089b51d74cb", "hex"); // wave 1
var IV_SPRINT_GUID = Buffer.from("000C29598DA51EDC9E86F089B51E74CB", "hex"); // sprint 1
var EV_GUID = Buffer.alloc(16); // Buffer.from("00000000000000000000000000000000", "hex");
var EV_OBJECT_ID = "8000001408";
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
            IV_PROCESS_TYPE: "S1IT",
            IV_SHORT_TEXT: faker.company.catchPhrase(),
          })
          .then((result) => {
            EV_GUID = result.EV_GUID;
            EV_OBJECT_ID = result.EV_OBJECT_ID;
            console.log(result);
            // set PROJECT

            client
              .call("ZXUA_SET_PROJECT", {
                IV_HEADER_GUID: EV_GUID,
                IV_PROJECT_ID: IV_PROJECT_ID,
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

      // set PROJECT WAVE
      client
        .call("ZXUA_SET_PROJECT_WAVE", {
          IV_HEADER_GUID: EV_GUID,
          IV_WAVE_GUID: IV_WAVE_GUID,
        })
        .then((result) => {
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
              { PARTNER_NO: "112", PARTNER_FCT: "/SALM/01" },
              { PARTNER_NO: "112", PARTNER_FCT: "HT000012" },
            ],
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // set work package clssiifcation
      // work package classifcation
      // ATTR_NAME             KEY  VALUE           SEQUENCE
      // /SALM/GAP             G    Gap             1
      // /SALM/WRICEF          1    WRICEF          2
      // /SALM/FIT             F    Fit             3
      // /SALM/NON_FUNCTIONAL  N    Non-Functional  4

      await client
        .call("ZXUA_SET_WP_CLASSIFICATION", {
          IV_HEADER_GUID: EV_GUID,
          IV_CLASSIF: "1",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

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

      //E0016	HSCO	Scoping
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0016",
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
              IV_PROCESS_TYPE: faker.helpers.randomize(["S1MJ", "S1CG"]),
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

      //E0004	APPR	Scope Finalized
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0004",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](5000);

      //E0022	HDEV	To Be Developed
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0022",
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
      const smmj1 = ET_SCOPE_ITEM.find((item) => item.PROCESS_TYPE == "S1MJ");
      if (!smmj1) {
        console.log("run again, scope change executed.");
        // E0023	SCEX	Scope Extension
        await client
          .call("ZXUA_CHANGE_STATUS", {
            IV_HEADER_GUID: EV_GUID,
            IV_STATUS: "E0023",
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
            IV_PROCESS_TYPE: "S1MJ",
            IV_SHORT_TEXT: faker.company.catchPhrase(),
            EV_SCOPE_ITEM_GUID: Buffer.from("", "hex"),
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });

        //E0004	APPR	Scope Finalized
        await client
          .call("ZXUA_CHANGE_STATUS", {
            IV_HEADER_GUID: EV_GUID,
            IV_STATUS: "E0004",
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

        //E0022	HDEV	To Be Developed
        await client
          .call("ZXUA_CHANGE_STATUS", {
            IV_HEADER_GUID: EV_GUID,
            IV_STATUS: "E0022",
            EV_STATUS,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);
      }

      // EXEC S1MJ
      ET_SCOPE_ITEM.forEach(async (item) => {
        console.log(
          item.PROCESS_TYPE,
          item.FOLLOWONID,
          item.CREATED_GUID.toString("hex")
        );
        if (item.PROCESS_TYPE == "S1MJ") {
          // set work item classifcation

          // ATTR_NAME         KEY  VALUE        SEQUENCE
          // /SALM/WORKFLOW    W    Workflow     0
          // /SALM/REPORT      R    Report       0
          // /SALM/INTERFACE   I    Interface    0
          // /SALM/CONVERSION  C    Conversion   0
          // /SALM/ENH         E    Enhancement  0
          // /SALM/FORMS       O    Form         0

          await client
            .call("ZXUA_SET_WP_CLASSIFICATION", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_CLASSIF: "R",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          // set PROJECT WAVE Sprint
          client
            .call("ZXUA_SET_PROJECT_WAVE", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_WAVE_GUID: IV_SPRINT_GUID,
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);

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
          // await client
          //   .call("ZXUA_ADD_TRANSPORT", {
          //     IV_HEADER_GUID: item.CREATED_GUID,
          //     IV_REQ_DESCR: item.OBJECT_ID_DESCR,
          //     IV_REQ_OWNER: IV_REQ_OWNER,
          //     IT_DEVELOPER: [],
          //   })
          //   .then((result) => {
          //     console.log(result);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });

          // await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](5000);

          // E0004	TOTE	To Be Tested
          await client
            .call("ZXUA_CHANGE_STATUS", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_STATUS: "E0004",
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
        }
        if (item.PROCESS_TYPE == "S1CG") {
          // set work item classifcation

          // ATTR_NAME         KEY  VALUE        SEQUENCE
          // /SALM/WORKFLOW    W    Workflow     0
          // /SALM/REPORT      R    Report       0
          // /SALM/INTERFACE   I    Interface    0
          // /SALM/CONVERSION  C    Conversion   0
          // /SALM/ENH         E    Enhancement  0
          // /SALM/FORMS       O    Form         0

          await client
            .call("ZXUA_SET_WP_CLASSIFICATION", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_CLASSIF: "R",
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](500);

          // set PROJECT WAVE Sprint
          client
            .call("ZXUA_SET_PROJECT_WAVE", {
              IV_HEADER_GUID: item.CREATED_GUID,
              IV_WAVE_GUID: IV_SPRINT_GUID,
            })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);

          // E0001 	 CRTE 	 Created
          // E0014 	 BUIL 	 In Development
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
          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);

          // E0012 	 Test 	 To Be Tested
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

          await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);

          // E0003 	 DOCU 	 Successfully Tested
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
        }
      });

      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](3000);

      // E0024	TOTE	To Be Tested
      // auto updated
      // E0025	SUTE	Successfully Tested
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0025",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](5000);
      //E0021	RELE	Handed Over to Release
      await client
        .call("ZXUA_CHANGE_STATUS", {
          IV_HEADER_GUID: EV_GUID,
          IV_STATUS: "E0021",
          IV_PROCESS_TYPE: "try 2",
        })
        .then((result) => {
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
