const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

const ET_PARTNER_FUNCTION_SCHEMA_line = {
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  PARTNER_FCT                      :   "", // CHAR (8) Partner Function
  PARTNER_FCT_DESCR                :   "", // CHAR (30) Text (30 Characters)
  PARTNER_FCT_DESCR_04             :   "", // CHAR (4) Text field, length 4
  PARTNER_PFT                      :   "", // CHAR (4) Partner Function Category
  PARTNER_PFT_DESCR                :   "", // CHAR (30) Text (30 Characters)
  PFT_SUBTYPE                      :   "", // CHAR (4) Partner Function Sub-Type
  NO_REFLECTION                    :   "", // CHAR (1) Block Partner from Performing Function for Himself
  RELTYP                           :   "", // CHAR (6) Corresponding Relationship Category
};

const ET_PARTNER_FUNCTION_SCHEMA = [ET_PARTNER_FUNCTION_SCHEMA_line];

// prettier-ignore


(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_GET_PARTNER_SCHEMA", {
        LV_PROCESS_TYPE: "S1MJ",
        ET_PARTNER_FUNCTION_SCHEMA: ET_PARTNER_FUNCTION_SCHEMA,
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
