//
// ZXUA_FB_PROJECT_GETDETAIL var: 4  struct: 0  table: 2  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PROJECT_GUID           : Buffer.alloc(~size), // RAW (16) Globally Unique Identifier

// TABLE PARAMETERS

// ET_PHASE_VH         :           [], // ZXUA_TS_PHASE_VH TT Phase ValueSet
// ET_SPRINT_DUE_DATES :           [], // ZXUA_TS_MS_DUEDATES TT Milestone due dates

// EXPORT PARAMETERS

// EV_PHASE_DES        :           "", // CHAR (40) Language-Dependent Short Text
// EV_PROJECT_ID       :           "", // CHAR (24) Project Number
// EV_PROJECT_TYPE     :           "", // CHAR (15) Project Type
};

const result = await client.call("ZXUA_FB_PROJECT_GETDETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// ZXUA_TS_PHASE_VH  TT Phase ValueSet
const ET_PHASE_VH = [];

// prettier-ignore
const ET_PHASE_VH_line = {
  VALUE                            :   "", // CHAR (40) No field text
  TEXT                             :   "", // CHAR (40) No field text
  BACKLOG_GUID_CG                  : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  BACKLOG_GUID_TEST                : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  BACKLOG_GUID_ITR                 : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  SCOPE_RELEVANT                   :   "", // CHAR (1) Scope-Relevant Summary Task for CRM Transaction Assignment
  CHANGE_RELEVANT                  :   "", // CHAR (1) Change-Relevant Summary Task for CRM Transaction Assignment
  TEST_RELEVANT                    :   "", // CHAR (1) Test-Relevant Summary Task for CRM Transaction Assignment
  PHASE_GUID                       : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PARENT_GUID                      : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PARENT_DESC                      :   "", // CHAR (40) No field text
  RELEASE_COMPONENT                :   "", // CHAR (22) Sublandscape GUID
  RELEASE_NUMBER                   :   "", // CHAR (12) Release Number
};

// ZXUA_TS_MS_DUEDATES  TT Milestone due dates
const ET_SPRINT_DUE_DATES = [];

// prettier-ignore
const ET_SPRINT_DUE_DATES_line = {
  CLIENT                           :   "", // CLNT (3) Client
  MILESTONE                        :   "", // CHAR (15) Milestone Type
  TASK_TYPE                        :   "", // CHAR (15) Task Type
  SPRAS                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  MS_TEXT                          :   "", // CHAR (20) Text (20 Characters)
  SORT_NUMBER                      :   "", // NUMC (5) Sort Number
  DUE_DATE                         :   "", // DATS (8) Date
  PARENT_GUID                      : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PARENT_NAME                      :   "", // CHAR (40) Phase Name
  DUE_DATE_TSMP                    :  "0", // DEC (15) UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
  GUID                             : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  MILESTONE_ID                     :   "", // CHAR (24) Task Number
  MS_NAME                          :   "", // CHAR (40) Project Element Name
};


//
// EXPORT PARAMETERS
//
