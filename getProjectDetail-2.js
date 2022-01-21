const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

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
const ET_PHASE_VH = [ET_PHASE_VH_line];

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

// ZXUA_TS_MS_DUEDATES  TT Milestone due dates
const ET_SPRINT_DUE_DATES = [ET_SPRINT_DUE_DATES_line];

// prettier-ignore
//B_S4H_FI_0001 000c29598da51edbabfdf0fa63a6bd5c

(async () => {
  try {
    await client.connect();
    client
      .call("ZXUA_FB_PROJECT_GETDETAIL", {
        PROJECT_GUID: Buffer.from("000c29598da51edbabfdf0fa63a6bd5c", "hex"), 
        ET_PHASE_VH: ET_PHASE_VH,
        ET_SPRINT_DUE_DATES: ET_SPRINT_DUE_DATES,
      })
      .then(function (result) {
        //console.log(result);
        result.ET_PHASE_VH.forEach((element) => {
          console.log( element.PARENT_DESC, element.PARENT_GUID.toString('hex'), element.TEXT, element.VALUE);
        });
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
