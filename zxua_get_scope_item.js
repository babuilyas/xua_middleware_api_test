//
// ZXUA_GET_SCOPE_ITEM var: 2  struct: 0  table: 3  exception: 3
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_HEADER_GUID          : Buffer.alloc(~size), // RAW (16) GUID of a CRM Order Object

// TABLE PARAMETERS

ET_SCOPE_ITEM           :           [], // ZXUA_TS_SCOPE_ITEM Scope Item Attributes
// ET_EXCEPTION         :           [], // ZXUA_ET_EXCEPTION One-Order: Return Structure for Processing Several Documents
// ET_MSG               :           [], // ZXUA_ET_MSG Application Log: Message Data

// EXPORT PARAMETERS

// SUBRC                :            0, // INT4 (10) ABAP System Field: Return Code of ABAP Statements

// EXCEPTION PARAMETERS

// AUTHORITY                       // AUTHORITY Error check su53 for more information
// SMCP_MAP_NOT_FOUND              // TASKTYPE Mapping Value not found
// SMCP_RFC_READ_FAILED            // Change Cycle Read Failed
};

const result = await client.call("ZXUA_GET_SCOPE_ITEM", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// ZXUA_TS_SCOPE_ITEM  Scope Item Attributes
const ET_SCOPE_ITEM = [];

// prettier-ignore
const ET_SCOPE_ITEM_line = {
  CLIENT                           :   "", // CLNT (3) Client
  GUID                             : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
  ITEM_GUID                        :   "", // CHAR (32) GUID in 'CHAR' Format in Uppercase
  PROCESS_TYPE                     :   "", // CHAR (4) Business Transaction Type SU3=CRM_PROCESS_TYPE
  IBASE                            :   "", // NUMC (18) ALPHA=ALPHA IBase: Number of the Installed Base/IBase SU3=IIB
  IBASE_INSTANCE                   :   "", // NUMC (18) ALPHA=ALPHA IB: Component (instance) SU3=IBC
  PRODUCT_ID                       :   "", // CHAR (40) ALPHA=PRID1 Product ID
  CREATED_BY                       :   "", // CHAR (12) User Name
  CREATED_ON                       :  "0", // DEC (21.7) UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun)
  CREATED_GUID                     : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
  PROJECT_ID                       :   "", // CHAR (10) Cycle
  SID                              :   "", // CHAR (8) Extended System ID
  MANDT                            :   "", // CHAR (3) The ABAP Client
  APPROVED                         :   "", // CHAR (1) Single-Character Flag
  APPROVE_STATUS                   :   "", // CHAR (5) Object Status
  SOLUTION_ID                      :   "", // NUMC (15) Numerical field, 15 characters long
  SCOPE_EXTENDED                   :   "", // CHAR (1) Boolean Variable (X=True, -=False, Space=Unknown)
  EDITABLE                         :   "", // CHAR (1) Boolean Variable (X=True, -=False, Space=Unknown)
  APPR_RESULT                      :   "", // CHAR (1) Single-Character Flag
  PRE_IMP_ENABLED                  :   "", // CHAR (1) Single-Character Flag
  OBJECT_ID_DESCR                  :   "", // CHAR (40) Transaction Description
  SLAN_ID                          :   "", // CHAR (22) Solution ID
  SBRA_ID                          :   "", // CHAR (22) Branch ID
  VIEW_ID                          :   "", // CHAR (22) View ID
  LANDSCAPE_ID                     :   "", // CHAR (22) Solution ID
  STATUS                           :   "", // CHAR (30) Object status
  FOLLOWONID                       :   "", // CHAR (10) ALPHA=ALPHA Transaction ID SU3=CRM_OBJECT_ID
  DESCR_EXT                        :   "", // CHAR (40) Product Description
  DEVICEID                         :   "", // CHAR (40) IB: Component Description
  IBASE_DESCR                      :   "", // CHAR (40) IB: IBase Short Text/Description
  LOGICAL_SYS                      :   "", // CHAR (32) Logical Technical System & Type
  SYS_TYPE                         :   "", // CHAR (16) Technical System Type (ABAP, Java)
  DOC_TYPE                         :   "", // CHAR (4) Document Type
  ORIGIN                           :   "", // CHAR (40) Character field of length 40
  REQUESTED_PHASE                  : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PHASE_LEVEL1                     : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PHASE_LEVEL2                     : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  PHASE_LEVEL3                     : Buffer.alloc(16), // RAW (16) Globally Unique Identifier
  WRICEF                           :   "", // CHAR (8) WRIFCEF Category
  STORY_POINTS                     :    0, // INT2 (5) Story Point
  VALUE_POINTS                     :    0, // INT2 (5) Value Points
  RISK                             :   "", // NUMC (3) Risk
  PRIORITY_ID                      :   "", // NUMC (1) Activity Priority
  PRIORITY_TEXT                    :   "", // CHAR (40) Description of Priority
};

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
