export var AndroidPurchaseState;
(function (AndroidPurchaseState) {
    AndroidPurchaseState[AndroidPurchaseState["purchased"] = 0] = "purchased";
    AndroidPurchaseState[AndroidPurchaseState["canceled"] = 1] = "canceled";
    AndroidPurchaseState[AndroidPurchaseState["pending"] = 2] = "pending";
})(AndroidPurchaseState || (AndroidPurchaseState = {}));
export var AndroidPurchaseType;
(function (AndroidPurchaseType) {
    AndroidPurchaseType[AndroidPurchaseType["test"] = 0] = "test";
    AndroidPurchaseType[AndroidPurchaseType["promo"] = 1] = "promo";
    AndroidPurchaseType[AndroidPurchaseType["rewarded"] = 2] = "rewarded";
})(AndroidPurchaseType || (AndroidPurchaseType = {}));
export var AndroidConsumptionState;
(function (AndroidConsumptionState) {
    AndroidConsumptionState[AndroidConsumptionState["yet"] = 0] = "yet";
    AndroidConsumptionState[AndroidConsumptionState["consumed"] = 1] = "consumed";
})(AndroidConsumptionState || (AndroidConsumptionState = {}));
export var AndroidAcknowledgementState;
(function (AndroidAcknowledgementState) {
    AndroidAcknowledgementState[AndroidAcknowledgementState["yet"] = 0] = "yet";
    AndroidAcknowledgementState[AndroidAcknowledgementState["acknowledged"] = 1] = "acknowledged";
})(AndroidAcknowledgementState || (AndroidAcknowledgementState = {}));
