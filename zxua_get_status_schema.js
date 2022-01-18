//
// ZXUA_GET_STATUS_SCHEMA var: 1  struct: 0  table: 1  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

LV_PROCESS_TYPE     :           "", // CHAR (4) Business Transaction Type SU3=CRM_PROCESS_TYPE

// TABLE PARAMETERS

// ET_STATUS_SCHEMA :           [], // BAPIBUS20001_STATUS_CUST BO BusProcessND: OneOrder Transaction Customizing Status
};

const result = await client.call("ZXUA_GET_STATUS_SCHEMA", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIBUS20001_STATUS_CUST  BO BusProcessND: OneOrder Transaction Customizing Status
const ET_STATUS_SCHEMA = [];

// prettier-ignore
const ET_STATUS_SCHEMA_line = {
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  PROCESS_TYPE                     :   "", // CHAR (4) Business Transaction Type SU3=CRM_PROCESS_TYPE
  STAT_PROF                        :   "", // CHAR (8) Status Profile
  STAT_PROF_DESCR                  :   "", // CHAR (30) Text (30 Characters)
  USR_STATUS                       :   "", // CHAR (5) User Status
  USR_STATUS_DESCR_04              :   "", // CHAR (4) Individual status of an object (short form)
  USR_STATUS_DESCR                 :   "", // CHAR (30) Object status
  LTEXT                            :   "", // CHAR (1) Long text flag
  INIST                            :   "", // CHAR (1) Initial status flag
  US_ST_NUMB                       :   "", // NUMC (2) Status Order Number
  HSONR                            :   "", // NUMC (2) Highest Status Number
  NSONR                            :   "", // NUMC (2) Lowest status number
  LINEP                            :   "", // NUMC (2) Position of the status in the status display
  STATP                            :   "", // NUMC (2) Status display priority at a particular position
  BERSL                            :   "", // CHAR (8) Authorization key
  CRM_VRGNG                        :   "", // CHAR (4) CRM: User Status Triggers Business Transaction
};
