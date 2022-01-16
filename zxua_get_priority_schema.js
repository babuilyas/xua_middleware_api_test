//
// ZXUA_GET_PRIORITY_SCHEMA var: 1  struct: 0  table: 1  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 00:27:43
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

LV_PROCESS_TYPE       :           "", // CHAR (4) Business Transaction Type SU3=CRM_PROCESS_TYPE

// TABLE PARAMETERS

// ET_PRIORITY_SCHEMA :           [], // BAPIBUS20001_PRIORITY_CUST BO BusProcessND: OneOrder Transaction Customizing Status
};

const result = await client.call("ZXUA_GET_PRIORITY_SCHEMA", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIBUS20001_PRIORITY_CUST  BO BusProcessND: OneOrder Transaction Customizing Status
const ET_PRIORITY_SCHEMA = [];

// prettier-ignore
const ET_PRIORITY_SCHEMA_line = {
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  PRIORITY                         :   "", // NUMC (1) Appointment priority
  PRIORITY_DESCR                   :   "", // CHAR (40) Description
};
