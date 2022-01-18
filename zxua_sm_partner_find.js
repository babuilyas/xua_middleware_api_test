//
// ZXUA_SM_PARTNER_FIND var: 1  struct: 1  table: 0  exception: 0
//
// abap.js 2.3.1 at: 2022-01-17 21:04:42
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IS_PARTNER    :           {}, // ZXUA_TS_PARTNER_STRUCT Partner Structure

// EXPORT PARAMETERS

// EV_BP      :           "", // CHAR (10) ALPHA=ALPHA Business Partner Number SU3=BPA
};

const result = await client.call("ZXUA_SM_PARTNER_FIND", parameters);

//
// IMPORT PARAMETERS
//

// ZXUA_TS_PARTNER_STRUCT  Partner Structure

// prettier-ignore
const IS_PARTNER = {
  FIRST_NAME                       :   "", // CHAR (35) Search Help Field 1 (Name 1/Last Name)
  LAST_NAME                        :   "", // CHAR (35) Search Help Field 2 (Name 2/First Name)
  USER_NAME                        :   "", // CHAR (12) User Name
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN E-Mail Address
};


//
// EXPORT PARAMETERS
//
