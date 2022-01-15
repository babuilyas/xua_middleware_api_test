//
// ZXUA_GET_OBJECT_ID var: 3  struct: 0  table: 2  exception: 3
//
// abap.js 2.3.1 at: 2022-01-15 09:06:17
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_HEADER_GUID          : Buffer.alloc(~size), // RAW (16) GUID of a CRM Order Object

// TABLE PARAMETERS

// ET_EXCEPTION         :           [], // ZXUA_ET_EXCEPTION One-Order: Return Structure for Processing Several Documents
// ET_MSG               :           [], // ZXUA_ET_MSG Application Log: Message Data

// EXPORT PARAMETERS

// EV_OBJECT_ID         :           "", // CHAR (10) ALPHA=ALPHA Transaction ID SU3=CRM_OBJECT_ID
// SUBRC                :            0, // INT4 (10) ABAP System Field: Return Code of ABAP Statements

// EXCEPTION PARAMETERS

// AUTHORITY                       // AUTHORITY Error check su53 for more information
// SMCP_MAP_NOT_FOUND              // TASKTYPE Mapping Value not found
// SMCP_RFC_READ_FAILED            // Change Cycle Read Failed
};

const result = await client.call("ZXUA_GET_OBJECT_ID", parameters);

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


//
// EXPORT PARAMETERS
//
