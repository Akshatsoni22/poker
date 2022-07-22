export const CODE = {
    OK_CODE: 200,
    BAD_REQUEST_CODE: 400,
    UNAUTHORIZED_CODE: 401,
    INTERNAL_SERVER_ERROR: 500
}
export const VALIDATION_MESSAGE = {
    CATCH_ERROR: "Something went wrong. Please try again.",

    NO_SPACE_ALLOWED: "No space allowed.",
    EMAIL_REQUIRED: "Enter email address.",
    VALID_EMAIL: "Please enter a valid email address.",    
    FULL_NAME_REQUIRED: "Enter full name.",
    FULL_NAME_VALID: "The full name must contain alpha characters only.",
    FULL_NAME_MAX: "Full name must be at most 25 characters",
    STATUS_REQUIRED: "Enter status.",
    COMPANY_NAME_REQUIRED: "Enter company name.",
    COMPANY_NAME_VALID: "The company name must contain alpha characters only.",
    COMPANY_NAME_MAX: "Company name must be at most 25 characters",

    COUNTRY_CODE_REQUIRED: "Enter country code.",
    MOBILE_NUMBER_REQUIRED: "Enter mobile number.",
    PHONE_NUMBER_VALID: "Please enter a valid mobile number.",
    MOBILE_NUMBER_DIGIT: "Mobile number must be 10 digit.",
    MOBILE_NUMBER_MIN: "Mobile number must be at least 10 digit.",
    MOBILE_NUMBER_MAX: "Mobile number must be at most 10 digit.",
    PAN_CARD_NUMBER_REQUIRED: "Enter Pan card number.",
    PAN_CARD_NUMBER_VALID: "Please enter a valid Pan Card Number.",
    GST_NUMBER_REQUIRED: "Enter GST number.",
    GST_NUMBER_VALID: "Please enter a valid GST Number.",

    PASSWORD_VALID: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    PASSWORD_UPPER_CASE: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    PASSWORD_SPECIAL_CASE: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    PASSWORD_NUMBER_CASE: "Password must contain alphanumeric characters that includes atleast 1 upper case character and 1 special character.",
    
    PASSWORD_REQUIRED: "Enter password.",
    PASSWORD_MIN_CHAR: "Password must have at least 8 characters.",
    PASSWORD_MAX_CHAR: "Password must be at most 16 characters",    
    
    CONFIRM_PASSWORD_REQUIRED: "Re-enter password.",   
    CONFIRM_PASSWORD_MIN_CHAR: "Confirm password must have at least 8 characters.",
    CONFIRM_PASSWORD_MAX_CHAR: "Confirm password must be at most 16 characters",

    OLD_PASSWORD_REQUIRED: "Enter old password.",
    OLD_PASSWORD_MIN_CHAR: "Old password must have at least 8 characters.",
    OLD_PASSWORD_MAX_CHAR: "Old password must be at most 16 characters.",

    NEW_PASSWORD_REQUIRED: "Enter new password.",
    NEW_PASSWORD_MIN_CHAR: "New password must have at least 8 characters.",
    NEW_PASSWORD_MAX_CHAR: "New password must be at most 16 characters.",

    CONFIRM_NEW_PASSWORD_REQUIRED: "Enter re-enter password.",
    CONFIRM_NEW_PASSWORD_MIN_CHAR: "Re-enter password must have at least 8 characters.",
    CONFIRM_NEW_PASSWORD_MAX_CHAR: "Re-enter password must be at most 16 characters.",
    PASSWORD_CPWD_NOT_MATCHED: "Password doesn't match.",

    ARE_YOU_SURE: "Are you sure?",
    ARE_YOU_STATUS_USER_PENDING: "Are you sure you want to change status  to Approval Pending for this user?",
    ARE_YOU_STATUS_USER_APPROVE: "Are you sure you want to change status to Approved for this user?",
    ARE_YOU_STATUS_USER_DECLINE: "Are you sure you want to change status to Rejected for this user?",
    ARE_YOU_STATUS_USER_DEACTIVATE: "Are you sure you want to change status to De-Activate for this user?",
    ARE_YOU_STATUS_USER_DELETE: "Are you sure you want to delete this user?",
    ARE_YOU_STATUS_USERS_DEACTIVATE: "Are you sure you want to change status  to De-Activate for this user?",
    ARE_YOU_STATUS_USER_ACTIVATE: "Are you sure you want to change status to Activate for this user?",
    APPROVED_UNVERFIED: "Status can not be Approved for unverified document.",
    REJECTED_VERIFIED: "Status can not be Rejected for verified document.",
   

    DOCUMEMNT_UNSUPPORTED: "Unsupported file format.",
    USER_UNSUPPORTED: "Unsupported file format.",
   
    LOGOUT_MODEL_TITLE: "Are you sure?",
    LOGOUT_MODEL_TEXT: "Are you sure you want to logout?",

}