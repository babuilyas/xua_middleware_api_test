//
// ZXUA_CM_CHANGECYCLE_GETLIST2 var: 0  struct: 0  table: 1  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// TABLE PARAMETERS

ET_CC    :           [], // ZXUA_TS_CHANGECYCLE no text (en)
};

const result = await client.call("ZXUA_CM_CHANGECYCLE_GETLIST2", parameters);

//
// TABLE PARAMETERS
//

// ZXUA_TS_CHANGECYCLE  
const ET_CC = [];

// prettier-ignore
const ET_CC_line = {
  GUID                             : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
  OBJECT_ID                        :   "", // CHAR (10) ALPHA=ALPHA Transaction ID
  PROCESS_TYPE                     :   "", // CHAR (4) Business Transaction Type
  P_DESCRIPTION                    :   "", // CHAR (40) Text of a Transaction Type
  DESCRIPTION                      :   "", // CHAR (40) Transaction Description
  CREATED_BY                       :   "", // CHAR (12) User that Created the Transaction
  PRIORITY                         :   "", // NUMC (1) Priority
  TXT_LONG                         :   "", // CHAR (40) Priority description
  STATUS                           :   "", // CHAR (5) Status of Transaction
  TXT30                            :   "", // CHAR (30) Status of a Transaction
  CHANGE_CYCLE                     :   "", // CHAR (10) Cycle
  BRANCH_ID                        :   "", // CHAR (22) Branch ID
  SMI_PROJECT                      :   "", // CHAR (10) Cycle
  TASKLIST_ID                      :   "", // CHAR (10) Task List ID for Release
  RELEASE_COMPONENT                :   "", // CHAR (22) Sublandscape GUID
  RELEASE_STATUS                   :   "", // CHAR (20) Release Status
};
