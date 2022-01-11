const con = require("./cred.js").con;
const noderfc = require("node-rfc");

var client = new noderfc.Client({ ...con });

//
// ZXUA_CM_CHANGEDOC_FIND var: 2  struct: 0  table: 1  exception: 0
//
// abap.js 2.3.1 at: 2022-01-11 16:58:02
//

// prettier-ignore
const parameters = {

  // IMPORT PARAMETERS
  
   IV_CHANGE_DATE_EN :   '20211225', // DATS (8) no text (en)
   IV_CHANGE_DATE_ST :   '20211215', // DATS (8) no text (en)
  
  // TABLE PARAMETERS
  
   ET_RESULTS        :           [], // ZXUA_TS_SEARCH_RESULTS2 Search Results
  };

(async () => {
  const result = await client.connect().then(() =>
    client
      .call("ZXUA_CM_CHANGEDOC_FIND", parameters)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  );
})();
//
// IMPORT PARAMETERS
//

//
// TABLE PARAMETERS
//

// ZXUA_TS_SEARCH_RESULTS2  Search Results
const ET_RESULTS = [];

// prettier-ignore
const ET_RESULTS_line = {
    _AICRM_BP_NO_01                  :   "", // CHAR (32) Partner Number 1
    _AICRM_BP_NO_02                  :   "", // CHAR (32) Partner Number 2
    _AICRM_BP_NO_03                  :   "", // CHAR (32) Partner Number 3
    _AICRM_BP_NO_04                  :   "", // CHAR (32) Partner Number 4
    _AICRM_BP_NO_05                  :   "", // CHAR (32) Partner Number 5
    _AICRM_BP_NO_06                  :   "", // CHAR (32) Partner Number 6
    _AICRM_BP_NO_07                  :   "", // CHAR (32) Partner Number 7
    _AICRM_BP_NO_08                  :   "", // CHAR (32) Partner Number 8
    _AICRM_BP_NO_09                  :   "", // CHAR (32) Partner Number 9
    _AICRM_BP_NO_10                  :   "", // CHAR (32) Partner Number 10
    _AICRM_BRANCH_ID                 :   "", // CHAR (22) Branch ID
    _AICRM_BRANCH_NAME               :   "", // CHAR (30) Branch Name
    _AICRM_CATEGORY_TEXT             :   "", // CHAR (255) Text of length 255
    _AICRM_CF0001                    :   "", // CHAR (22) Scope ID
    _AICRM_CHGD_SAP                  :  "0", // DEC (15) ALPHA=CLMTS Timestamp - Changed at SAP
    _AICRM_CLIENT                    :   "", // NUMC (3) ALPHA=AXTAL Client
    _AICRM_CLOSE_SAP                 :  "0", // DEC (15) ALPHA=CLMTS Timestamp - Auto Close at SAP
    _AICRM_COMPL_SAP                 :  "0", // DEC (15) ALPHA=CLMTS Timestamp - Completed at SAP
    _AICRM_CONFIG_ITEM               :   "", // CHAR (40) ALPHA=PRID1 Product ID
    _AICRM_CONTEXT_SOLN_ID           :   "", // CHAR (255) Text of length 255
    _AICRM_CYCLE_DESCRIPTION         :   "", // CHAR (60) Module Title SU3=DTI
    _AICRM_CYCLE_GUID                : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
    _AICRM_CYCLE_ID                  :   "", // CHAR (10) ALPHA=ALPHA Transaction ID SU3=CRM_OBJECT_ID
    _AICRM_DBSYS                     :   "", // CHAR (30) DB System
    _AICRM_DESC_L                    :   "", // CHAR (120) Extended Transaction Description
    _AICRM_DESC_L_UC                 :   "", // CHAR (120) Extended Transaction Description (Upper Case)
    _AICRM_DOC_TYPE                  :   "", // CHAR (4) Document Type
    _AICRM_EXT_TOKEN                 :   "", // CHAR (32) External Token
    _AICRM_F0001                     :   "", // CHAR (60) Related Source
    _AICRM_F0004                     :   "", // CHAR (1) Standard Change
    _AICRM_FIRST_SAP                 :  "0", // DEC (15) ALPHA=CLMTS Timestamp - First sent to SAP
    _AICRM_FRONTEND                  :   "", // CHAR (30) Frontend and Version
    _AICRM_GCTSBRANCH                :   "", // CHAR (120) Text with Length of 120 Characters
    _AICRM_GCTSREP_DISP              :   "", // CHAR (80) Char 80
    _AICRM_GP_ID                     :   "", // CHAR (20) Simple Setup: Application
    _AICRM_GP_SCOPE                  :   "", // CHAR (32) Scope Value
    _AICRM_ICT_NUM                   :   "", // CHAR (10) SAP Incident Number
    _AICRM_ICT_SAP                   :   "", // NUMC (24) ALPHA=AXTAL Incident at SAP
    _AICRM_ICT_YEAR                  :   "", // CHAR (4) SAP Incident Year
    _AICRM_INSTNO                    :   "", // NUMC (10) ALPHA=AXTAL SAP Installation
    _AICRM_IRT_PERC                  :   "", // CHAR (10) Text (10 Characters)
    _AICRM_IRT_STATUS_ICON           :   "", // CHAR (30) SLA: Status for IRT (Icon)
    _AICRM_IRT_STATUS_TEXT           :   "", // CHAR (30) Object status
    _AICRM_IRT_TIMESTAMP             :  "0", // DEC (15) ALPHA=TSTPS Time Stamp (Date and Time) of a Date/Duration
    _AICRM_ISV_FLAG                  :   "", // CHAR (1) ISV Indicator
    _AICRM_LAST_CHANGED_BY           :   "", // CHAR (80) Last Changed By for CRM UI Search Result
    _AICRM_LAST_CHANGED_BY_BP        :   "", // CHAR (10) ALPHA=ALPHA BP Number for Last Changed By
    _AICRM_MPT_PERC                  :   "", // CHAR (10) Text (10 Characters)
    _AICRM_MPT_STATUS_ICON           :   "", // CHAR (30) SLA: Status for MPT (Icon)
    _AICRM_MPT_STATUS_TEXT           :   "", // CHAR (30) Object status
    _AICRM_MPT_TIMESTAMP             :  "0", // DEC (15) ALPHA=TSTPS Time Stamp (Date and Time) of a Date/Duration
    _AICRM_OSSYS                     :   "", // CHAR (30) OS and Version
    _AICRM_OSS_INST                  :   "", // CHAR (10) OSS Installation
    _AICRM_PARTNER_FCT_01            :   "", // CHAR (8) Partner Function 1
    _AICRM_PARTNER_FCT_02            :   "", // CHAR (8) Partner Function 2
    _AICRM_PARTNER_FCT_03            :   "", // CHAR (8) Partner Function 3
    _AICRM_PARTNER_FCT_04            :   "", // CHAR (8) Partner Function 4
    _AICRM_PARTNER_FCT_05            :   "", // CHAR (8) Partner Function 5
    _AICRM_PARTNER_FCT_06            :   "", // CHAR (8) Partner Function 6
    _AICRM_PARTNER_FCT_07            :   "", // CHAR (8) Partner Function 7
    _AICRM_PARTNER_FCT_08            :   "", // CHAR (8) Partner Function 8
    _AICRM_PARTNER_FCT_09            :   "", // CHAR (8) Partner Function 9
    _AICRM_PARTNER_FCT_10            :   "", // CHAR (8) Partner Function 10
    _AICRM_PPM_PROJECT_GUID          : Buffer.alloc(16), // RAW (16) ALPHA=DPRCE Application Object GUID (Entity with Conversion Exit)
    _AICRM_PPM_PROJECT_ID            :   "", // CHAR (24) Project Number
    _AICRM_PPM_PROJECT_NAME          :   "", // CHAR (40) Project Element Name
    _AICRM_PPM_TASK_END_DATE         :   "", // DATS (8) Calculated Finish Date
    _AICRM_PPM_TASK_ID               :   "", // CHAR (24) Task Number
    _AICRM_PPM_TASK_NAME             :   "", // CHAR (40) Project Element Name
    _AICRM_PPM_TASK_PLAN_DURA        :   "", // CHAR (10) Text (10 Characters)
    _AICRM_PPM_TASK_PLAN_DURA_UNIT   :   "", // CHAR (10) Unit of Measurement Text with Maximum of 10 Characters
    _AICRM_PPM_TASK_PLAN_WORK        :   "", // CHAR (10) Text (10 Characters)
    _AICRM_PPM_TASK_PLAN_WORK_UNIT   :   "", // CHAR (10) Unit of Measurement Text with Maximum of 10 Characters
    _AICRM_PPM_TASK_START_DATE       :   "", // DATS (8) Calculated Start Date
    _AICRM_PPM_TASK_TOTAL_WRK        :   "", // CHAR (10) Text (10 Characters)
    _AICRM_PPM_TASK_TOTAL_WRK_UNIT   :   "", // CHAR (10) Unit of Measurement Text with Maximum of 10 Characters
    _AICRM_PROBLEM_CATEGORY          :   "", // CHAR (40) Description
    _AICRM_PROJECT_DESCRIPTION       :   "", // CHAR (60) Module Title SU3=DTI
    _AICRM_PROJECT_ID                :   "", // CHAR (10) ALPHA=ALPHA Project Number
    _AICRM_PROJECT_TYPE              :   "", // CHAR (6) Possible Project Type
    _AICRM_REASON_ID                 :   "", // CHAR (4) Reason ID
    _AICRM_REASON_TEXT               :   "", // CHAR (30) Substatus/Reason for status (long form)
    _AICRM_RELEASE_NUMBER            :   "", // CHAR (12) Release Number
    _AICRM_RELEASE_TYPE              :   "", // CHAR (1) Change-Cycle Type
    _AICRM_SAP_COMP                  :   "", // CHAR (20) SAP Component
    _AICRM_SAP_STAT                  :   "", // CHAR (1) Incident at SAP - Status
    _AICRM_SEND_SAP                  :  "0", // DEC (15) ALPHA=CLMTS Timestamp - Send to SAP
    _AICRM_SLAN_ID                   :   "", // CHAR (22) Solution ID
    _AICRM_SLAN_NAME                 :   "", // CHAR (30) Solution Landscape Name
    _AICRM_SOLUTION_ID               :   "", // CHAR (128) Work Area Length 128
    _AICRM_SW_COMP                   :   "", // CHAR (30) Software Component
    _AICRM_SW_PLVL                   :   "", // CHAR (10) Patch Level
    _AICRM_SW_REL                    :   "", // CHAR (10) Software Release
    _AICRM_SYSNO                     :   "", // CHAR (18) SAP System Number
    _AICRM_SYSTEM_ID                 :   "", // CHAR (8) System ID
    _AICRM_SYS_ROLE                  :   "", // CHAR (1) System Role
    _AICRM_TASK_TYPE                 :   "", // CHAR (4) Operations Task Type
    _AICRM_TESTPLAN_ID               :   "", // CHAR (60) Test Plan ID
    _SALM_CONVERSION                 :   "", // CHAR (1) Conversion
    _SALM_EFFORT_PT                  :    0, // INT2 (5) Effort Points
    _SALM_ENH                        :   "", // CHAR (1) Enhancement
    _SALM_EXI_ACTIVE                 :   "", // CHAR (1) External Integration Active
    _SALM_EXT_ID                     :   "", // CHAR (60) External ID
    _SALM_FIT                        :   "", // CHAR (1) Fit
    _SALM_FORMS                      :   "", // CHAR (1) Form
    _SALM_GAP                        :   "", // CHAR (1) Gap
    _SALM_INTERFACE                  :   "", // CHAR (1) Interface
    _SALM_LOCAL                      :   "", // CHAR (1) Local document
    _SALM_MAINT_WP                   :   "", // CHAR (1) Is Maintenance Work Package
    _SALM_REPORT                     :   "", // CHAR (1) Report
    _SALM_RK_IMPACT                  :   "", // NUMC (2) Probability of Impact
    _SALM_RK_LEVEL                   :   "", // NUMC (1) Risk Level
    _SALM_RK_SEVERIT                 :   "", // NUMC (2) Probability
    _SALM_RK_STRAT                   :   "", // NUMC (3) Risk Strategy
    _SALM_RM_RCLASS                  :   "", // CHAR (10) Release Class
    _SALM_SCOPE_CH                   :   "", // CHAR (1) Is Scope Change
    _SALM_SCOPE_EXT                  :   "", // CHAR (1) Scope Item Extended
    _SALM_SIM_ACTYPE                 :   "", // NUMC (3) Activity Type ID
    _SALM_SIM_BUSA                   :   "", // NUMC (3) Business Area ID
    _SALM_SIM_CAT_ID                 :   "", // NUMC (3) Category ID
    _SALM_SIM_CMPLX                  :   "", // NUMC (3) Complexity ID
    _SALM_SIM_COND                   :   "", // NUMC (3) Condition ID
    _SALM_SIM_LOB_ID                 :   "", // NUMC (3) LoB ID
    _SALM_SIM_M_STAT                 :   "", // NUMC (3) Manual Status ID
    _SALM_SIM_PHASE                  :   "", // NUMC (3) Phase ID
    _SALM_SIM_RELEV                  :   "", // NUMC (3) Relevance ID
    _SALM_SORT_ORD                   :    0, // INT2 (5) Sorting Order
    _SALM_STORY_PT                   :    0, // INT2 (5) Story Point
    _SALM_VALUE_PT                   :    0, // INT2 (5) Value Points
    _SALM_WORKFLOW                   :   "", // CHAR (1) Workflow
    _SALM_WRICEF                     :   "", // CHAR (8) WRIFCEF Category
    ACTUAL_RELEASE_CLASS             :   "", // CHAR (10) Release Class
    ACTUAL_RELEASE_NO                :   "", // CHAR (32) Release Numbers Used
    ACTUAL_RELEASE_TYPE              :   "", // CHAR (10) Release Types
    AICRM_CTXT_PROJECT_ID            :   "", // CHAR (255) Text of length 255
    AICRM_PROCESS                    :   "", // CHAR (255) Text of length 255
    AICRM_PROCESS_STEP               :   "", // CHAR (255) Text of length 255
    AICRM_SCENARIO                   :   "", // CHAR (255) Text of length 255
    ATTACHMENT                       :   "", // CHAR (1) Attachment is Assigned
    BILLTO_NAME                      :   "", // CHAR (32) Partner Number
    CATEGORY_ID                      :   "", // CHAR (40) ALPHA=ERMSI Coherent Cat. - Category ID
    CATEGORY_TXT                     :   "", // CHAR (60) Texts for Category
    CHANGED_AT_DATE                  :   "", // DATS (8) Date on Which Transaction Was Last Changed
    CHANGE_MANAGER                   :   "", // CHAR (32) Partner Number
    CONCATSTAT                       :   "", // CHAR (40) System status line
    CONCATSTATUSER                   :   "", // CHAR (40) User Status
    CONTACT_PERSON                   :   "", // CHAR (10) ALPHA=ALPHA Employee Responsible
    CONTACT_PERSON_LIST              :   "", // CHAR (80) Contact Person
    CREATED_AT                       :  "0", // DEC (15) ALPHA=TSTPS Transaction was Created at this Time
    CREATED_BY                       :   "", // CHAR (12) User that Created the Transaction
    DESCRIPTION                      :   "", // CHAR (40) Transaction Description
    EEW_R_RFC_DUMMY                  :   "", // CHAR (1) Dummy function in length 1
    EEW_R_SRVI_DUMMY                 :   "", // CHAR (1) Dummy function in length 1
    EEW_R_SRVP_DUMMY                 :   "", // CHAR (1) Dummy function in length 1
    EMP_RESP_NAME                    :   "", // CHAR (32) Partner Number
    EXEC_SRV_EMP_NAME                :   "", // CHAR (32) Partner Number
    FORECAST_RELEASE_CLASS           :   "", // CHAR (10) Release Class
    FORECAST_RELEASE_NO              :   "", // CHAR (32) Release Numbers Used
    FORECAST_RELEASE_TYPE            :   "", // CHAR (10) Release Types
    GUID                             : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
    IMPACT                           :   "", // NUMC (2) Impact
    LOCK_STATUS                      :   "", // CHAR (1) Lock Status
    OBJECT_ID                        :   "", // CHAR (10) ALPHA=ALPHA Transaction ID SU3=CRM_OBJECT_ID
    OBJECT_KEY                       :   "", // CHAR (100) Object Key
    OBJECT_TYPE                      :   "", // CHAR (10) Business Transaction Category SU3=CRM_SUBOBJ_CATEGORY
    PATH                             :   "", // CHAR (120) Text with Length of 120 Characters
    PERSON_RESP                      :   "", // CHAR (10) ALPHA=ALPHA Employee Responsible
    PERSON_RESP_LIST                 :   "", // CHAR (80) Employee Responsible
    POSTING_DATE                     :   "", // DATS (8) Posting Date for a Business Transaction
    PO_NUMBER_SOLD                   :   "", // CHAR (35) Sold-To Party's External Reference Number
    PO_NUMBER_UC                     :   "", // CHAR (35) Sold-to Party's External Reference No. (in Capital Letters)
    PRIORITY                         :   "", // NUMC (1) Activity Priority
    PRIORITY_TXT                     :   "", // CHAR (60) Text Description for Priority
    PROCESS_TYPE                     :   "", // CHAR (4) Business Transaction Type
    PROCESS_TYPE_TXT                 :   "", // CHAR (60) Text Description for Transaction Category
    REF_IB_IBASE                     :   "", // NUMC (18) ALPHA=ALPHA IBase: Number of the Installed Base/IBase SU3=IIB
    REF_IB_INSTANCE                  :   "", // NUMC (18) ALPHA=ALPHA IB: Component (instance) SU3=IBC
    REF_OBJECT_TYPE                  :   "", // CHAR (1) Object Type for Reference Object in Subject Set
    REF_PRODUCT_ID                   :   "", // CHAR (40) ALPHA=PRID1 Product ID
    REF_TEXT_IB_COMP                 :   "", // CHAR (40) IB: Component Description
    REF_TEXT_OBJECT                  :   "", // CHAR (40) Reference Object Text
    REQUESTED_RELEASE_CLASS          :   "", // CHAR (10) Release Class
    REQUESTED_RELEASE_NO             :   "", // CHAR (32) Release Numbers Used
    REQUESTED_RELEASE_TYPE           :   "", // CHAR (10) Release Types
    RFC_GUID                         : Buffer.alloc(16), // RAW (16) GUID of a CRM Order Object
    RFC_ID                           :   "", // CHAR (10) ALPHA=ALPHA Transaction ID SU3=CRM_OBJECT_ID
    RFC_ID_DESCRIPTION               :   "", // CHAR (40) Transaction Description
    RISK_CATEGORY                    :   "", // CHAR (132) Risk Category
    SALES_ORG                        :   "", // CHAR (14) Sales Organization ID
    SERVICE_ORG                      :   "", // CHAR (14) Service Organization
    SERVICE_TEAM                     :   "", // CHAR (10) ALPHA=ALPHA Service Team
    SERVICE_TEAM_LIST                :   "", // CHAR (80) Service Employee Group
    SERVICE_UNIT_NAME                :   "", // CHAR (32) Partner Number
    SHIPTO_NAME                      :   "", // CHAR (32) Partner Number
    SHIP_TO_RETURNS_NAME             :   "", // CHAR (32) Partner Number
    SOLD_TO_PARTY                    :   "", // CHAR (10) ALPHA=ALPHA Sold-To Party
    SOLD_TO_PARTY_LIST               :   "", // CHAR (80) Sold-To Party
    STATUS                           :   "", // CHAR (5) Object Status
    STAT_LOCK                        :   "", // CHAR (1) Locked
    TERR_DESCRIP                     :   "", // CHAR (40) Territory Description
  };
