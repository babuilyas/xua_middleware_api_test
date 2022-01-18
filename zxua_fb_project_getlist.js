//
// ZXUA_FB_PROJECT_GETLIST var: 0  struct: 0  table: 1  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// TABLE PARAMETERS

RT_PROJECTS    :           [], // ZXUA_TS_PROJECTS list of projects
};

const result = await client.call("ZXUA_FB_PROJECT_GETLIST", parameters);

//
// TABLE PARAMETERS
//

// ZXUA_TS_PROJECTS  list of projects
const RT_PROJECTS = [];

// prettier-ignore
const RT_PROJECTS_line = {
  GUID                             : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PROJECT_ID                       :   "", // CHAR (24) Project Number
  PRO_TYPE                         :   "", // CHAR (15) Project Type
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  TEXT1                            :   "", // CHAR (40) Language-Dependent Short Text
  PLANSTARTDATE                    :   "", // DATS (8) Planned Start
  PLANFINISHDATE                   :   "", // DATS (8) Planned Finish
  STARTDATE_IS_CALC                :   "", // CHAR (1) General Flag
  FINISHDATE_IS_CALC               :   "", // CHAR (1) General Flag
  PROJECT_KIND                     :   "", // CHAR (10) WBS Type
  IS_MASTER                        :   "", // CHAR (1) Flag: Is Main Project
  ISTAT                            :   "", // CHAR (5) System status
  ISTAT_2                          :   "", // CHAR (5) System status
  ESTAT                            :   "", // CHAR (5) User Status
  STATTXT                          :   "", // CHAR (40) No field text
};
