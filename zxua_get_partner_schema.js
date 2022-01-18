//
// ZXUA_GET_PARTNER_SCHEMA var: 1  struct: 0  table: 1  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

LV_PROCESS_TYPE               :           "", // CHAR (4) Business Transaction Type SU3=CRM_PROCESS_TYPE

// TABLE PARAMETERS

// ET_PARTNER_FUNCTION_SCHEMA :           [], // BAPIBUS20001_PARTNER_FCT_CUST BO BusProcessND: One Order Customizing Partner Functions
};

const result = await client.call("ZXUA_GET_PARTNER_SCHEMA", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIBUS20001_PARTNER_FCT_CUST  BO BusProcessND: One Order Customizing Partner Functions
const ET_PARTNER_FUNCTION_SCHEMA = [];

// prettier-ignore
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
