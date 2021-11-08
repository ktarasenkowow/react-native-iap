export var IAPErrorCode;
(function (IAPErrorCode) {
    IAPErrorCode["E_IAP_NOT_AVAILABLE"] = "E_IAP_NOT_AVAILABLE";
    IAPErrorCode["E_UNKNOWN"] = "E_UNKNOWN";
    IAPErrorCode["E_USER_CANCELLED"] = "E_USER_CANCELLED";
    IAPErrorCode["E_USER_ERROR"] = "E_USER_ERROR";
    IAPErrorCode["E_ITEM_UNAVAILABLE"] = "E_ITEM_UNAVAILABLE";
    IAPErrorCode["E_REMOTE_ERROR"] = "E_REMOTE_ERROR";
    IAPErrorCode["E_NETWORK_ERROR"] = "E_NETWORK_ERROR";
    IAPErrorCode["E_SERVICE_ERROR"] = "E_SERVICE_ERROR";
    IAPErrorCode["E_RECEIPT_FAILED"] = "E_RECEIPT_FAILED";
    IAPErrorCode["E_RECEIPT_FINISHED_FAILED"] = "E_RECEIPT_FINISHED_FAILED";
    IAPErrorCode["E_NOT_PREPARED"] = "E_NOT_PREPARED";
    IAPErrorCode["E_NOT_ENDED"] = "E_NOT_ENDED";
    IAPErrorCode["E_ALREADY_OWNED"] = "E_ALREADY_OWNED";
    IAPErrorCode["E_DEVELOPER_ERROR"] = "E_DEVELOPER_ERROR";
    IAPErrorCode["E_BILLING_RESPONSE_JSON_PARSE_ERROR"] = "E_BILLING_RESPONSE_JSON_PARSE_ERROR";
    IAPErrorCode["E_DEFERRED_PAYMENT"] = "E_DEFERRED_PAYMENT";
})(IAPErrorCode || (IAPErrorCode = {}));
export var ProrationModesAndroid;
(function (ProrationModesAndroid) {
    ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_WITH_TIME_PRORATION"] = 1] = "IMMEDIATE_WITH_TIME_PRORATION";
    ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_AND_CHARGE_PRORATED_PRICE"] = 2] = "IMMEDIATE_AND_CHARGE_PRORATED_PRICE";
    ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_WITHOUT_PRORATION"] = 3] = "IMMEDIATE_WITHOUT_PRORATION";
    ProrationModesAndroid[ProrationModesAndroid["DEFERRED"] = 4] = "DEFERRED";
    ProrationModesAndroid[ProrationModesAndroid["UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY"] = 0] = "UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY";
})(ProrationModesAndroid || (ProrationModesAndroid = {}));
export var PurchaseStateAndroid;
(function (PurchaseStateAndroid) {
    PurchaseStateAndroid[PurchaseStateAndroid["UNSPECIFIED_STATE"] = 0] = "UNSPECIFIED_STATE";
    PurchaseStateAndroid[PurchaseStateAndroid["PURCHASED"] = 1] = "PURCHASED";
    PurchaseStateAndroid[PurchaseStateAndroid["PENDING"] = 2] = "PENDING";
})(PurchaseStateAndroid || (PurchaseStateAndroid = {}));
export var PROMOTED_PRODUCT = 'iap-promoted-product';
export var InstallSourceAndroid;
(function (InstallSourceAndroid) {
    InstallSourceAndroid[InstallSourceAndroid["NOT_SET"] = 0] = "NOT_SET";
    InstallSourceAndroid[InstallSourceAndroid["GOOGLE_PLAY"] = 1] = "GOOGLE_PLAY";
    InstallSourceAndroid[InstallSourceAndroid["AMAZON"] = 2] = "AMAZON";
})(InstallSourceAndroid || (InstallSourceAndroid = {}));
