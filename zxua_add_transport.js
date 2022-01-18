//
// ZXUA_ADD_TRANSPORT var: 5  struct: 0  table: 4  exception: 3
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_HEADER_GUID          : Buffer.alloc(~size), // RAW (16) GUID of a CRM Order Object
IV_REQ_DESCR            :           "", // CHAR (60) Short Description of Request
IV_REQ_OWNER            :           "", // CHAR (12) Last Changed By

// TABLE PARAMETERS

// ET_EXCEPTION         :           [], // ZXUA_ET_EXCEPTION One-Order: Return Structure for Processing Several Documents
// ET_MSG               :           [], // ZXUA_ET_MSG Application Log: Message Data
// ET_TRANSPORT         :           [], // /TMWFLOW/TRORDHC_S Wrapper of /tmwflow/trord_n
// IT_DEVELOPER         :           [], // SCTS_USER Tasks for Users

// EXPORT PARAMETERS

// EV_GUID              : Buffer.alloc(~size), // RAW (16) GUID of a CRM Order Object
// SUBRC                :            0, // INT4 (10) ABAP System Field: Return Code of ABAP Statements

// EXCEPTION PARAMETERS

// AUTHORITY                       // AUTHORITY Error check su53 for more information
// SMCP_MAP_NOT_FOUND              // TASKTYPE Mapping Value not found
// SMCP_RFC_READ_FAILED            // Change Cycle Read Failed
};

const result = await client.call("ZXUA_ADD_TRANSPORT", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// ZXUA_ET_EXCEPTION  One-Order: Return Structure for Processing Several Documents
const ET_EXCEPTION = [];

// prettier-ignore
const ET_EXCEPTION_line = {
  GUID                             : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
  CLASS                            :   "", // CHAR (10) No field text
  CODE                             :   "", // CHAR (25) Exception Code
};

// ZXUA_ET_MSG  Application Log: Message Data
const ET_MSG = [];

// prettier-ignore
const ET_MSG_line = {
  MSGTY                            :   "", // CHAR (1) Message Type
  MSGID                            :   "", // CHAR (20) Message Class
  MSGNO                            :   "", // NUMC (3) Message Number
  MSGV1                            :   "", // CHAR (50) Message Variable
  MSGV2                            :   "", // CHAR (50) Message Variable
  MSGV3                            :   "", // CHAR (50) Message Variable
  MSGV4                            :   "", // CHAR (50) Message Variable
  MSGV1_SRC                        :   "", // CHAR (15) Application Log: Origin of a message variable
  MSGV2_SRC                        :   "", // CHAR (15) Application Log: Origin of a message variable
  MSGV3_SRC                        :   "", // CHAR (15) Application Log: Origin of a message variable
  MSGV4_SRC                        :   "", // CHAR (15) Application Log: Origin of a message variable
  DETLEVEL                         :   "", // CHAR (1) Application Log: Level of detail
  PROBCLASS                        :   "", // CHAR (1) Application log: Message problem class
  ALSORT                           :   "", // CHAR (3) Application log: Sort criterion/grouping
  TIME_STMP                        :  "0", // DEC (21.7) Application Log: Message time stamp
  MSG_COUNT                        :    0, // INT4 (10) Application Log: Cumulated message count
  TABNAME                          :   "", // CHAR (30) Application Log: Context: DDIC structure name SU3=DTB
  VALUE                            :   "", // CHAR (256) Application Log: Context data
  ALTEXT                           :   "", // CHAR (28) Application log: Standard text
};

// /TMWFLOW/TRORDHC_S  Wrapper of /tmwflow/trord_n
const ET_TRANSPORT = [];

// prettier-ignore
const ET_TRANSPORT_line = {
  TASKLIST                         :   "", // CHAR (10) Task List
  TRORDER_NUMBER                   :   "", // CHAR (20) Request/Task
  CTS_ID                           :   "", // CHAR (32) Assigned CTS project ID
  TRANSPORT_TRACK                  :   "", // CHAR (8) Transport Track
  SYS_NAME                         :   "", // CHAR (8) Extended System ID
  SYS_TYPE                         :   "", // CHAR (16) Technical System Type (ABAP, Java)
  SYS_CLIENT                       :   "", // CHAR (3) The ABAP Client
  RESP_USER                        :   "", // CHAR (12) User Name
  CREATED_DATE                     :   "", // DATS (8) Created On
  CREATED_TIME                     :   "", // TIMS (6) Creation Time
  RELEASED_DATE                    :   "", // DATS (8) Release Date
  RELEASED_TIME                    :   "", // TIMS (6) Release Time
  STATUS                           :   "", // CHAR (4) Export Status
  ORIGINATOR                       :   "", // CHAR (1) Creator of Task List
  ORIGINATOR_ID                    :   "", // CHAR (32) ID in Creator of Task List
  ORIGINATOR_KEY                   :   "", // CHAR (32) Key in Task List Creator
  TRORDER_COPY                     :   "", // CHAR (20) Request/Task
  ORIG_REQUEST                     :   "", // CHAR (20) Request/Task
  TARGET                           :   "", // CHAR (10) Transport Target of Request
  TRFUNCTION                       :   "", // CHAR (1) Type of request/task
  PROJECT_NAME                     :   "", // CHAR (32) Project ID
  TR_TEXT                          :   "", // CHAR (60) Short Description of R/3 Repository Objects
  SMI_PROJECT                      :   "", // CHAR (10) Cycle
};

// SCTS_USER  Tasks for Users
const IT_DEVELOPER = [];

// prettier-ignore
const IT_DEVELOPER_line = {
  USER                             :   "", // CHAR (12) Owner of a Request or Task
  TYPE                             :   "", // CHAR (1) Type of request/task
};


//
// EXPORT PARAMETERS
//
