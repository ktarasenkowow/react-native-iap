export var ReceiptValidationStatus;
(function (ReceiptValidationStatus) {
    /** The receipt validated successfully. */
    ReceiptValidationStatus[ReceiptValidationStatus["SUCCESS"] = 0] = "SUCCESS";
    /** The App Store could not read the JSON object you provided. */
    ReceiptValidationStatus[ReceiptValidationStatus["INVALID_JSON"] = 21000] = "INVALID_JSON";
    /** The data in the receipt-data property was malformed or missing. */
    ReceiptValidationStatus[ReceiptValidationStatus["INVALID_RECEIPT_DATA"] = 21002] = "INVALID_RECEIPT_DATA";
    /** The receipt could not be authenticated. */
    ReceiptValidationStatus[ReceiptValidationStatus["COULT_NOT_AUTHENTICATE"] = 21003] = "COULT_NOT_AUTHENTICATE";
    /** The shared secret you provided does not match the shared secret on file for your account. */
    ReceiptValidationStatus[ReceiptValidationStatus["INVALID_SECRET"] = 21004] = "INVALID_SECRET";
    /** The receipt server is not currently available. */
    ReceiptValidationStatus[ReceiptValidationStatus["UNAVAILABLE"] = 21005] = "UNAVAILABLE";
    /** This receipt is valid but the subscription has expired. When this status code is returned to your server, the receipt data is also decoded and returned as part of the response.
      Only returned for iOS 6 style transaction receipts for auto-renewable subscriptions. */
    ReceiptValidationStatus[ReceiptValidationStatus["EXPIRED_SUBSCRIPTION"] = 21006] = "EXPIRED_SUBSCRIPTION";
    /** This receipt is from the test environment, but it was sent to the production environment for verification. Send it to the test environment instead. */
    ReceiptValidationStatus[ReceiptValidationStatus["TEST_RECEIPT"] = 21007] = "TEST_RECEIPT";
    /** This receipt is from the production environment, but it was sent to the test environment for verification. Send it to the production environment instead. */
    ReceiptValidationStatus[ReceiptValidationStatus["PROD_RECEIPT"] = 21008] = "PROD_RECEIPT";
    /** This receipt could not be authorized. Treat this the same as if a purchase was never made. */
    ReceiptValidationStatus[ReceiptValidationStatus["COULD_NOT_AUTHORIZE"] = 21010] = "COULD_NOT_AUTHORIZE";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_00"] = 21100] = "INTERNAL_ERROR_00";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_01"] = 21101] = "INTERNAL_ERROR_01";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_02"] = 21102] = "INTERNAL_ERROR_02";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_03"] = 21103] = "INTERNAL_ERROR_03";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_04"] = 21104] = "INTERNAL_ERROR_04";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_05"] = 21105] = "INTERNAL_ERROR_05";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_06"] = 21106] = "INTERNAL_ERROR_06";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_07"] = 21107] = "INTERNAL_ERROR_07";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_08"] = 21108] = "INTERNAL_ERROR_08";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_09"] = 21109] = "INTERNAL_ERROR_09";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_10"] = 21110] = "INTERNAL_ERROR_10";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_11"] = 21111] = "INTERNAL_ERROR_11";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_12"] = 21112] = "INTERNAL_ERROR_12";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_13"] = 21113] = "INTERNAL_ERROR_13";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_14"] = 21114] = "INTERNAL_ERROR_14";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_15"] = 21115] = "INTERNAL_ERROR_15";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_16"] = 21116] = "INTERNAL_ERROR_16";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_17"] = 21117] = "INTERNAL_ERROR_17";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_18"] = 21118] = "INTERNAL_ERROR_18";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_19"] = 21119] = "INTERNAL_ERROR_19";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_20"] = 21120] = "INTERNAL_ERROR_20";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_21"] = 21121] = "INTERNAL_ERROR_21";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_22"] = 21122] = "INTERNAL_ERROR_22";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_23"] = 21123] = "INTERNAL_ERROR_23";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_24"] = 21124] = "INTERNAL_ERROR_24";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_25"] = 21125] = "INTERNAL_ERROR_25";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_26"] = 21126] = "INTERNAL_ERROR_26";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_27"] = 21127] = "INTERNAL_ERROR_27";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_28"] = 21128] = "INTERNAL_ERROR_28";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_29"] = 21129] = "INTERNAL_ERROR_29";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_30"] = 21130] = "INTERNAL_ERROR_30";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_31"] = 21131] = "INTERNAL_ERROR_31";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_32"] = 21132] = "INTERNAL_ERROR_32";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_33"] = 21133] = "INTERNAL_ERROR_33";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_34"] = 21134] = "INTERNAL_ERROR_34";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_35"] = 21135] = "INTERNAL_ERROR_35";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_36"] = 21136] = "INTERNAL_ERROR_36";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_37"] = 21137] = "INTERNAL_ERROR_37";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_38"] = 21138] = "INTERNAL_ERROR_38";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_39"] = 21139] = "INTERNAL_ERROR_39";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_40"] = 21140] = "INTERNAL_ERROR_40";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_41"] = 21141] = "INTERNAL_ERROR_41";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_42"] = 21142] = "INTERNAL_ERROR_42";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_43"] = 21143] = "INTERNAL_ERROR_43";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_44"] = 21144] = "INTERNAL_ERROR_44";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_45"] = 21145] = "INTERNAL_ERROR_45";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_46"] = 21146] = "INTERNAL_ERROR_46";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_47"] = 21147] = "INTERNAL_ERROR_47";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_48"] = 21148] = "INTERNAL_ERROR_48";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_49"] = 21149] = "INTERNAL_ERROR_49";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_50"] = 21150] = "INTERNAL_ERROR_50";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_51"] = 21151] = "INTERNAL_ERROR_51";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_52"] = 21152] = "INTERNAL_ERROR_52";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_53"] = 21153] = "INTERNAL_ERROR_53";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_54"] = 21154] = "INTERNAL_ERROR_54";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_55"] = 21155] = "INTERNAL_ERROR_55";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_56"] = 21156] = "INTERNAL_ERROR_56";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_57"] = 21157] = "INTERNAL_ERROR_57";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_58"] = 21158] = "INTERNAL_ERROR_58";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_59"] = 21159] = "INTERNAL_ERROR_59";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_60"] = 21160] = "INTERNAL_ERROR_60";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_61"] = 21161] = "INTERNAL_ERROR_61";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_62"] = 21162] = "INTERNAL_ERROR_62";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_63"] = 21163] = "INTERNAL_ERROR_63";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_64"] = 21164] = "INTERNAL_ERROR_64";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_65"] = 21165] = "INTERNAL_ERROR_65";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_66"] = 21166] = "INTERNAL_ERROR_66";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_67"] = 21167] = "INTERNAL_ERROR_67";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_68"] = 21168] = "INTERNAL_ERROR_68";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_69"] = 21169] = "INTERNAL_ERROR_69";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_70"] = 21170] = "INTERNAL_ERROR_70";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_71"] = 21171] = "INTERNAL_ERROR_71";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_72"] = 21172] = "INTERNAL_ERROR_72";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_73"] = 21173] = "INTERNAL_ERROR_73";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_74"] = 21174] = "INTERNAL_ERROR_74";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_75"] = 21175] = "INTERNAL_ERROR_75";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_76"] = 21176] = "INTERNAL_ERROR_76";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_77"] = 21177] = "INTERNAL_ERROR_77";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_78"] = 21178] = "INTERNAL_ERROR_78";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_79"] = 21179] = "INTERNAL_ERROR_79";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_80"] = 21180] = "INTERNAL_ERROR_80";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_81"] = 21181] = "INTERNAL_ERROR_81";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_82"] = 21182] = "INTERNAL_ERROR_82";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_83"] = 21183] = "INTERNAL_ERROR_83";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_84"] = 21184] = "INTERNAL_ERROR_84";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_85"] = 21185] = "INTERNAL_ERROR_85";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_86"] = 21186] = "INTERNAL_ERROR_86";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_87"] = 21187] = "INTERNAL_ERROR_87";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_88"] = 21188] = "INTERNAL_ERROR_88";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_89"] = 21189] = "INTERNAL_ERROR_89";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_90"] = 21190] = "INTERNAL_ERROR_90";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_91"] = 21191] = "INTERNAL_ERROR_91";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_92"] = 21192] = "INTERNAL_ERROR_92";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_93"] = 21193] = "INTERNAL_ERROR_93";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_94"] = 21194] = "INTERNAL_ERROR_94";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_95"] = 21195] = "INTERNAL_ERROR_95";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_96"] = 21196] = "INTERNAL_ERROR_96";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_97"] = 21197] = "INTERNAL_ERROR_97";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_98"] = 21198] = "INTERNAL_ERROR_98";
    /** Internal data access error. */ ReceiptValidationStatus[ReceiptValidationStatus["INTERNAL_ERROR_99"] = 21199] = "INTERNAL_ERROR_99";
})(ReceiptValidationStatus || (ReceiptValidationStatus = {}));
export var SubscriptionExpirationIntent;
(function (SubscriptionExpirationIntent) {
    /** Customer canceled their subscription. **/
    SubscriptionExpirationIntent["CUSTOMER_CANCELED"] = "1";
    /** Billing error; for example customer’s payment information was no longer valid. **/
    SubscriptionExpirationIntent["BILLING_ERROR"] = "2";
    /** Customer did not agree to a recent price increase. **/
    SubscriptionExpirationIntent["DENIED_PRICE_INCREASE"] = "3";
    /** Product was not available for purchase at the time of renewal. **/
    SubscriptionExpirationIntent["PRODUCT_NOT_AVAILABLE"] = "4";
    /** Unknown error. **/
    SubscriptionExpirationIntent["UNKNOWN_ERROR"] = "5";
})(SubscriptionExpirationIntent || (SubscriptionExpirationIntent = {}));
export var SubscriptionRetryFlag;
(function (SubscriptionRetryFlag) {
    /** App Store is still attempting to renew the subscription. */
    SubscriptionRetryFlag["ACTIVE"] = "1";
    /** App Store has stopped attempting to renew the subscription. */
    SubscriptionRetryFlag["STOPPED"] = "0";
})(SubscriptionRetryFlag || (SubscriptionRetryFlag = {}));
export var CancellationReason;
(function (CancellationReason) {
    /** Customer canceled their transaction due to an actual or perceived issue within your app. */
    CancellationReason["ACTUAL_ISSUE"] = "1";
    /** Transaction was canceled for another reason, for example, if the customer made the purchase accidentally. */
    CancellationReason["OTHER_REASON"] = "0";
})(CancellationReason || (CancellationReason = {}));
export var SubscriptionAutoRenewStatus;
(function (SubscriptionAutoRenewStatus) {
    /** Subscription will renew at the end of the current subscription period. */
    SubscriptionAutoRenewStatus["ACTIVE"] = "1";
    /** Customer has turned off automatic renewal for their subscription. */
    SubscriptionAutoRenewStatus["STOPPED"] = "0";
})(SubscriptionAutoRenewStatus || (SubscriptionAutoRenewStatus = {}));
export var SubscriptionPriceConsentStatus;
(function (SubscriptionPriceConsentStatus) {
    /** Customer has agreed to the price increase. Subscription will renew at the higher price. */
    SubscriptionPriceConsentStatus["AGREED"] = "1";
    /** Customer has not taken action regarding the increased price. Subscription expires if the customer takes no action before the renewal date. */
    SubscriptionPriceConsentStatus["NO_ACTION"] = "0";
})(SubscriptionPriceConsentStatus || (SubscriptionPriceConsentStatus = {}));
