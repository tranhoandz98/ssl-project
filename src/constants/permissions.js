
const permissions = {
    CRM_ROLE_LIST: "crm_role_list",
    CRM_ROLE_ADD: "crm_role_add",
    CRM_ROLE_DELETE: "crm_role_delete",
    CRM_ROLE_VIEW: "crm_role_view",
    CRM_ROLE_EDIT: "crm_role_edit",
    CRM_POSITION_LIST: "crm_position_add",
    CRM_POSITION_ADD: "crm_position_add",
    CRM_POSITION_DELETE: "crm_position_delete",
    CRM_POSITION_VIEW: "crm_position_view",
    CRM_POSITION_EDIT: "crm_position_edit",
    CRM_USER_LIST: "crm_user_list",
    CRM_USER_ADD: "crm_user_add",
    CRM_USER_DELETE: "crm_user_delete",
    CRM_USER_EDIT: "crm_user_edit",
    CRM_USER_LOCK: "crm_user_lock",
    CRM_USER_ACTIVE: "crm_user_active",
    CRM_USER_RESET: "crm_user_reset",
    CRM_USER_VIEW: "crm_user_view",
    CRM_USER_ADJUSTMENT: "crm_user_adjustment",
    CRM_SETTING_LIST: "crm_setting_list",
    CRM_SETTING_EDIT: "crm_setting_edit",
    CRM_CONFIG_CERT_LIST: "crm_config_cert_list",
    CRM_CONFIG_CERT_ADD: "crm_config_cert_add",
    CRM_CONFIG_CERT_DELETE: "crm_config_cert_delete",
    CRM_CONFIG_CERT_EDIT: "crm_config_cert_edit",
    CRM_CONFIG_CERT_ACTIVE: "crm_config_cert_active",
    CRM_CONFIG_CERT_VIEW: "crm_config_cert_view",
    CRM_CATE_DOC_TYPE_LIST: "crm_cate_doc_type_list",
    CRM_CATE_DOC_TYPE_ADD: "crm_cate_doc_type_add",
    CRM_CATE_DOC_TYPE_DELETE: "crm_cate_doc_type_delete",
    CRM_CATE_DOC_TYPE_EDIT: "crm_cate_doc_type_edit",

    CRM_CATE_DOC_TEMPLATE_LIST: "crm_cate_doc_template_list",
    CRM_CATE_DOC_TEMPLATE_ADD: "crm_cate_doc_template_add",
    CRM_CATE_DOC_TEMPLATE_EDIT: "crm_cate_doc_template_edit",
    CRM_CATE_DOC_TEMPLATE_DELETE: "crm_cate_doc_template_delete",
    CRM_CATE_DOC_TEMPLATE_VIEW: "crm_cate_doc_template_view",
    CRM_CATE_DOC_TEMPLATE_ASSIGN: "crm_cate_doc_template_assign",

    CRM_CATE_TYPE_PROCEDURE_LIST: "crm_cate_type_procedure_list",
    CRM_CATE_TYPE_PROCEDURE_ADD: "crm_cate_type_procedure_add",
    CRM_CATE_TYPE_PROCEDURE_EDIT: "crm_cate_type_procedure_edit",
    CRM_CATE_TYPE_PROCEDURE_DELETE: "crm_cate_type_procedure_delete",
    CRM_CATE_APPROVAL_GROUP_LIST: "crm_cate_approval_group_list",
    CRM_CATE_APPROVAL_GROUP_ADD: "crm_cate_approval_group_add",
    CRM_CATE_APPROVAL_GROUP_EDIT: "crm_cate_approval_group_edit",
    CRM_CATE_APPROVAL_GROUP_DELETE: "crm_cate_approval_group_delete",
    CRM_CATE_APPROVAL_GROUP_STOP: "crm_cate_approval_group_stop",
    CRM_CATE_APPROVAL_GROUP_ACTIVE: "crm_cate_approval_group_active",
    CRM_CATE_PROCEDURE_LIST: "crm_cate_procedure_list",
    CRM_CATE_PROCEDURE_ADD: "crm_cate_procedure_add",
    CRM_CATE_PROCEDURE_EDIT: "crm_cate_procedure_edit",
    CRM_CATE_PROCEDURE_DELETE: "crm_cate_procedure_delete",
    CRM_CATE_PROCEDURE_AUTHORZATION: "crm_cate_procedure_authorzation",
    CRM_CATE_ORGANIZATION_TREE_LIST: "crm_cate_organization_tree_list",
    CRM_CATE_ORGANIZATION_TREE_ADD: "crm_cate_organization_tree_add",
    CRM_CATE_ORGANIZATION_TREE_EDIT: "crm_cate_organization_tree_edit",
    CRM_CATE_ORGANIZATION_TREE_DELETE: "crm_cate_organization_tree_delete",
    CRM_CATE_ORGANIZATION_TREE_VIEW: "crm_cate_organization_tree_view",
    CRM_CATE_MAIL_TEMPLATE_LIST: "crm_cate_mail_template_list",
    CRM_CATE_MAIL_TEMPLATE_ADD: "crm_cate_mail_template_add",
    CRM_CATE_MAIL_TEMPLATE_EDIT: "crm_cate_mail_template_edit",
    CRM_CATE_MAIL_TEMPLATE_STOP: "crm_cate_mail_template_stop",
    CRM_CATE_MAIL_TEMPLATE_UPDATE_VERSION: "crm_cate_mail_template_update_version",
    CRM_CATE_MAIL_TEMPLATE_ACTIVE: "crm_cate_mail_template_active",

    CRM_CATE_MAIL_TEMPLATE_DELETE: "crm_cate_mail_template_delete",
    CRM_CATE_SIGN_TEMPLATE_LIST: "crm_cate_sign_template_list",
    CRM_CATE_SIGN_TEMPLATE_ADD: "crm_cate_sign_template_add",
    CRM_CATE_SIGN_TEMPLATE_EDIT: "crm_cate_sign_template_edit",
    CRM_CATE_SIGN_TEMPLATE_DELETE: "crm_cate_sign_template_delete",
    CRM_CATE_SIGN_TEMPLATE_ACTIVE: "crm_cate_sign_template_active",
    CRM_CATE_SIGN_TEMPLATE_STOP: "crm_cate_sign_template_stop",

    CRM_SUBMISSION_LIST: "crm_submission_list",
    CRM_SUBMISSION_ADD: "crm_submission_add",
    CRM_SUBMISSION_EDIT: "crm_submission_edit",
    CRM_SUBMISSION_DELETE: "crm_submission_delete",
    CRM_SUBMISSION_SUBMISSION: "crm_submission_submission",
    CRM_SUBMISSION_COPY: "crm_submission_copy",
    CRM_SUBMISSION_RESEND: "crm_submission_resend",
    CRM_SUBMISSION_VIEW: "crm_submission_view",
    CRM_SUBMISSION_SEND_DOC: "crm_submission_send_doc",

    CRM_SUBMISSION_REFUSE_LIST: "crm_submission_refuse_list",
    CRM_SUBMISSION_REFUSE_VIEW: "crm_submission_refuse_view",

    CRM_SUBMISSION_CONFIRM_LIST: "crm_submission_confirm_list",
    CRM_SUBMISSION_CONFIRMED_LIST: "crm_submission_confirmed_list",
    CRM_SUBMISSION_CONFIRM_VIEW: "crm_submission_confirm_view",

    CRM_PERSONAL_DOCUMENT_LIST: "crm_personal_document_list",
    CRM_PERSONAL_DOCUMENT_UPFILE: "crm_personal_document_upfile",
    CRM_PERSONAL_DOCUMENT_CREATE_FOLDER: "crm_personal_document_create_folder",

    CRM_MAILING_HISTORY_LIST: "crm_mailing_history_list",
    CRM_MAILING_HISTORY_RESEND: "crm_mailing_history_resend",
    CRM_MAILING_HISTORY_VIEW: "crm_mailing_history_view",
    CRM_CONFIG_STORAGE_LIST: "crm_config_storage_list",
    CRM_CONFIG_STORAGE_EDIT: "crm_config_storage_edit",

    CRM_DASHBOARD_DOC_PERSONAL: "crm_dashboard_doc_personal",
    CRM_DASHBOARD_DOC_BUSINESS: "crm_dashboard_doc_business",
    CRM_DASHBOARD_SERVICE: "crm_dashboard_service",
    CRM_DASHBOARD_TRADE_DOC_YEAR: "crm_dashboard_trade_doc_year",
    CRM_DASHBOARD_STORAGE_SINGLE: "crm_dashboard_storage_single",

    CRM_CATE_PARTNER_LIST: "crm_cate_partner_list",
    CRM_CATE_PARTNER_ADD: "crm_cate_partner_add",
    CRM_CATE_PARTNER_EDIT: "crm_cate_partner_edit",
    CRM_CATE_PARTNER_DELETE: "crm_cate_partner_delete",
    CRM_CATE_PARTNER_VIEW: "crm_cate_partner_view_detail",
    CRM_CATE_PARTNER_REQUEST_CONNECT: "crm_cate_partner_request_connect",
    CRM_CATE_PARTNER_CONFIRM_CONNECT: "crm_cate_partner_confirm_connect",
    CRM_CATE_PARTNER_DISCONNECT: "crm_cate_partner_disconnect",
    CRM_CATE_PARTNER_RECONNECT: "crm_cate_partner_reconnect",

    CRM_CATE_CONTRACT_TYPE_LIST: "crm_cate_contract_type_list",
    CRM_CATE_CONTRACT_TYPE_VIEW: "crm_cate_contract_type_view",
    CRM_CATE_CONTRACT_TYPE_ADD: "crm_cate_contract_type_add",
    CRM_CATE_CONTRACT_TYPE_DELETE: "crm_cate_contract_type_delete",
    CRM_CATE_CONTRACT_TYPE_EDIT: "crm_cate_contract_type_edit",

    CRM_CATE_CONTRACT_LIST: "crm_cate_contract_list",
    CRM_CATE_CONTRACT_VIEW: "crm_cate_contract_view",
    CRM_CATE_CONTRACT_ADD: "crm_cate_contract_add",
    CRM_CATE_CONTRACT_EDIT: "crm_cate_contract_edit",
    CRM_CATE_CONTRACT_DELETE: "crm_cate_contract_delete",
    CRM_CATE_CONTRACT_COPY: "crm_cate_contract_copy",
    CRM_CATE_CONTRACT_SEND: "crm_cate_contract_send",
    CRM_CATE_CONTRACT_RESEND: "crm_cate_contract_resend",
    CRM_CATE_CONTRACT_SEND_DOC: "crm_cate_contract_send_doc",

    CRM_CATE_CONTRACT_CONFIRM_LIST: "crm_cate_contract_confirm_list",
    CRM_CATE_CONTRACT_CONFIRM_VIEW: "crm_cate_contract_confirm_view",

    CRM_DOCUMENT_SENT_LIST: "crm_document_sent_list",
    CRM_DOCUMENT_SENT_VIEW: "crm_document_sent_view",
    CRM_DOCUMENT_SENT_EDIT: "crm_document_sent_edit",
    CRM_DOCUMENT_SENT_STAR: "crm_document_sent_star",

    CRM_DOCUMENT_COME_LIST: "crm_document_come_list",
    CRM_DOCUMENT_COME_VIEW: "crm_document_come_view",
    CRM_DOCUMENT_COME_DELETE: "crm_document_come_delete",
    CRM_DOCUMENT_COME_SUBMIT: "crm_document_come_submit",
    CRM_DOCUMENT_COME_SEND_DOC: "crm_document_come_send_doc",
    CRM_DOCUMENT_COME_STAR: "crm_document_come_star"

};
export default permissions;
