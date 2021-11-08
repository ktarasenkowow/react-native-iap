import * as Android from './types/android';
import * as Apple from './types/apple';
import { EmitterSubscription } from 'react-native';
import { IAPErrorCode, InAppPurchase, InstallSourceAndroid, Product, ProductPurchase, ProrationModesAndroid, PurchaseError, PurchaseResult, Subscription, SubscriptionPurchase } from './types';
export declare function setFallbackInstallSourceAndroid(installSourceAndroid: InstallSourceAndroid): void;
export declare function setInstallSourceAndroid(installSourceAndroid: InstallSourceAndroid): void;
export declare function getInstallSourceAndroid(): InstallSourceAndroid;
/**
 * Init module for purchase flow. Required on Android. In ios it will check wheter user canMakePayment.
 * @returns {Promise<boolean>}
 */
export declare const initConnection: () => Promise<boolean>;
/**
 * End module for purchase flow.
 * @returns {Promise<void>}
 */
export declare const endConnection: () => Promise<void>;
/**
 * @deprecated
 * End module for purchase flow. Required on Android. No-op on iOS.
 * @returns {Promise<void>}
 */
export declare const endConnectionAndroid: () => Promise<void>;
/**
 * Consume all remaining tokens. Android only.
 * This is considered dangerous as you should deliver the purchased feature BEFORE consuming it.
 * If you used this method to refresh Play Store cache (of failed pending payment still marked as failed),
 *  prefer using flushFailedPurchasesCachedAsPendingAndroid
 * @deprecated
 * @returns {Promise<string[]>}
 */
export declare const consumeAllItemsAndroid: () => Promise<string[]>;
/**
 * Consume all 'ghost' purchases (that is, pending payment that already failed but is still marked as pending in Play Store cache). Android only.
 * @returns {Promise<boolean>}
 */
export declare const flushFailedPurchasesCachedAsPendingAndroid: () => Promise<string[]>;
/**
 * Get a list of products (consumable and non-consumable items, but not subscriptions)
 * @param {string[]} skus The item skus
 * @returns {Promise<Product[]>}
 */
export declare const getProducts: <SkuType extends string>(skus: SkuType[]) => Promise<Product<SkuType>[]>;
/**
 * Get a list of subscriptions
 * @param {string[]} skus The item skus
 * @returns {Promise<Subscription[]>}
 */
export declare const getSubscriptions: (skus: string[]) => Promise<Subscription[]>;
/**
 * Gets an invetory of purchases made by the user regardless of consumption status
 * @returns {Promise<(InAppPurchase | SubscriptionPurchase)[]>}
 */
export declare const getPurchaseHistory: () => Promise<(InAppPurchase | SubscriptionPurchase)[]>;
/**
 * Get all purchases made by the user (either non-consumable, or haven't been consumed yet)
 * @returns {Promise<(InAppPurchase | SubscriptionPurchase)[]>}
 */
export declare const getAvailablePurchases: () => Promise<(InAppPurchase | SubscriptionPurchase)[]>;
/**
 * Request a purchase for product. This will be received in `PurchaseUpdatedListener`.
 * @param {string} sku The product's sku/ID
 * @param {boolean} [andDangerouslyFinishTransactionAutomaticallyIOS] You should set this to false and call finishTransaction manually when you have delivered the purchased goods to the user. It defaults to true to provide backwards compatibility. Will default to false in version 4.0.0.
 * @param {string} [obfuscatedAccountIdAndroid] Specifies an optional obfuscated string that is uniquely associated with the user's account in your app.
 * @param {string} [obfuscatedProfileIdAndroid] Specifies an optional obfuscated string that is uniquely associated with the user's profile in your app.
 * @returns {Promise<InAppPurchase>}
 */
export declare const requestPurchase: (sku: string, andDangerouslyFinishTransactionAutomaticallyIOS?: boolean, obfuscatedAccountIdAndroid?: string, obfuscatedProfileIdAndroid?: string) => Promise<InAppPurchase>;
/**
 * Request a purchase for product. This will be received in `PurchaseUpdatedListener`.
 * @param {string} sku The product's sku/ID
 * @param {boolean} [andDangerouslyFinishTransactionAutomaticallyIOS] You should set this to false and call finishTransaction manually when you have delivered the purchased goods to the user. It defaults to true to provide backwards compatibility. Will default to false in version 4.0.0.
 * @param {string} [oldSkuAndroid] SKU that the user is upgrading or downgrading from.
 * @param {string} [purchaseTokenAndroid] purchaseToken that the user is upgrading or downgrading from (Android).
 * @param {string} [obfuscatedAccountIdAndroid] Specifies an optional obfuscated string that is uniquely associated with the user's account in your app.
 * @param {string} [obfuscatedProfileIdAndroid] Specifies an optional obfuscated string that is uniquely associated with the user's profile in your app.
 * @param {ProrationModesAndroid} [prorationModeAndroid] UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY, IMMEDIATE_WITH_TIME_PRORATION, IMMEDIATE_AND_CHARGE_PRORATED_PRICE, IMMEDIATE_WITHOUT_PRORATION, DEFERRED
 * @returns {Promise<void>}
 */
export declare const requestSubscription: (sku: string, andDangerouslyFinishTransactionAutomaticallyIOS?: boolean, oldSkuAndroid?: string, purchaseTokenAndroid?: string, prorationModeAndroid?: ProrationModesAndroid, obfuscatedAccountIdAndroid?: string, obfuscatedProfileIdAndroid?: string) => Promise<SubscriptionPurchase>;
/**
 * Request a purchase for product. This will be received in `PurchaseUpdatedListener`.
 * @param {string} sku The product's sku/ID
 * @returns {Promise<void>}
 */
export declare const requestPurchaseWithQuantityIOS: (sku: string, quantity: number) => Promise<InAppPurchase>;
/**
 * Finish Transaction (iOS only)
 *   Similar to `consumePurchaseAndroid`. Tells StoreKit that you have delivered the purchase to the user and StoreKit can now let go of the transaction.
 *   Call this after you have persisted the purchased state to your server or local data in your app.
 *   `react-native-iap` will continue to deliver the purchase updated events with the successful purchase until you finish the transaction. **Even after the app has relaunched.**
 * @param {string} transactionId The transactionId of the function that you would like to finish.
 * @returns {Promise<void>}
 */
export declare const finishTransactionIOS: (transactionId: string) => Promise<void>;
/**
 * Finish Transaction (both platforms)
 *   Abstracts `finishTransactionIOS`, `consumePurchaseAndroid`, `acknowledgePurchaseAndroid` in to one method.
 * @param {object} purchase The purchase that you would like to finish.
 * @param {boolean} isConsumable Checks if purchase is consumable. Has effect on `android`.
 * @param {string} developerPayloadAndroid Android developerPayload.
 * @returns {Promise<string | void> }
 */
export declare const finishTransaction: (purchase: InAppPurchase | ProductPurchase, isConsumable?: boolean, developerPayloadAndroid?: string) => Promise<string | void>;
/**
 * Clear Transaction (iOS only)
 *   Finish remaining transactions. Related to issue #257 and #801
 *     link : https://github.com/dooboolab/react-native-iap/issues/257
 *            https://github.com/dooboolab/react-native-iap/issues/801
 * @returns {Promise<void>}
 */
export declare const clearTransactionIOS: () => Promise<void>;
/**
 * Clear valid Products (iOS only)
 *   Remove all products which are validated by Apple server.
 * @returns {void}
 */
export declare const clearProductsIOS: () => Promise<void>;
/**
 * Acknowledge a product (on Android.) No-op on iOS.
 * @param {string} token The product's token (on Android)
 * @returns {Promise<PurchaseResult | void>}
 */
export declare const acknowledgePurchaseAndroid: (token: string, developerPayload?: string) => Promise<PurchaseResult | void>;
/**
 * Consume a product (on Android.) No-op on iOS.
 * @param {string} token The product's token (on Android)
 * @returns {Promise<PurchaseResult>}
 */
export declare const consumePurchaseAndroid: (token: string, developerPayload?: string) => Promise<PurchaseResult>;
/**
 * Should Add Store Payment (iOS only)
 *   Indicates the the App Store purchase should continue from the app instead of the App Store.
 * @returns {Promise<Product>}
 */
export declare const getPromotedProductIOS: () => Promise<Product>;
/**
 * Buy the currently selected promoted product (iOS only)
 *   Initiates the payment process for a promoted product. Should only be called in response to the `iap-promoted-product` event.
 * @returns {Promise<void>}
 */
export declare const buyPromotedProductIOS: () => Promise<void>;
/**
 * Buy products or subscriptions with offers (iOS only)
 *
 * Runs the payment process with some infor you must fetch
 * from your server.
 * @param {string} sku The product identifier
 * @param {string} forUser  An user identifier on you system
 * @param {Apple.PaymentDiscount} withOffer The offer information
 * @param {string} withOffer.identifier The offer identifier
 * @param {string} withOffer.keyIdentifier Key identifier that it uses to generate the signature
 * @param {string} withOffer.nonce An UUID returned from the server
 * @param {string} withOffer.signature The actual signature returned from the server
 * @param {number} withOffer.timestamp The timestamp of the signature
 * @returns {Promise<void>}
 */
export declare const requestPurchaseWithOfferIOS: (sku: string, forUser: string, withOffer: Apple.PaymentDiscount) => Promise<void>;
/**
 * Validate receipt for iOS.
 * @param {object} receiptBody the receipt body to send to apple server.
 * @param {boolean} isTest whether this is in test environment which is sandbox.
 * @returns {Promise<Apple.ReceiptValidationResponse | false>}
 */
export declare const validateReceiptIos: (receiptBody: Record<string, unknown>, isTest?: boolean) => Promise<Apple.ReceiptValidationResponse | false>;
/**
 * Validate receipt for Android.
 * @param {string} packageName package name of your app.
 * @param {string} productId product id for your in app product.
 * @param {string} productToken token for your purchase.
 * @param {string} accessToken accessToken from googleApis.
 * @param {boolean} isSub whether this is subscription or inapp. `true` for subscription.
 * @returns {Promise<object>}
 */
export declare const validateReceiptAndroid: (packageName: string, productId: string, productToken: string, accessToken: string, isSub?: boolean) => Promise<Android.ReceiptType>;
/**
 * Add IAP purchase event in ios.
 * @returns {callback(e: InAppPurchase | ProductPurchase)}
 */
export declare const purchaseUpdatedListener: (listener: (event: InAppPurchase | SubscriptionPurchase) => void) => EmitterSubscription;
/**
 * Add IAP purchase error event in ios.
 * @returns {callback(e: PurchaseError)}
 */
export declare const purchaseErrorListener: (listener: (errorEvent: PurchaseError) => void) => EmitterSubscription;
/**
 * Get the current receipt base64 encoded in IOS.
 * @returns {Promise<string>}
 */
export declare const getReceiptIOS: () => Promise<string>;
/**
 * Get the pending purchases in IOS.
 * @returns {Promise<ProductPurchase[]>}
 */
export declare const getPendingPurchasesIOS: () => Promise<ProductPurchase[]>;
/**
 * Launches a modal to register the redeem offer code in IOS.
 * @returns {Promise<null>}
 */
export declare const presentCodeRedemptionSheetIOS: () => Promise<null>;
declare const iapUtils: {
    IAPErrorCode: typeof IAPErrorCode;
    initConnection: () => Promise<boolean>;
    endConnection: () => Promise<void>;
    endConnectionAndroid: () => Promise<void>;
    getProducts: <SkuType extends string>(skus: SkuType[]) => Promise<Product<SkuType>[]>;
    getSubscriptions: (skus: string[]) => Promise<Subscription[]>;
    getPurchaseHistory: () => Promise<(InAppPurchase | SubscriptionPurchase)[]>;
    getAvailablePurchases: () => Promise<(InAppPurchase | SubscriptionPurchase)[]>;
    getPendingPurchasesIOS: () => Promise<ProductPurchase[]>;
    consumeAllItemsAndroid: () => Promise<string[]>;
    flushFailedPurchasesCachedAsPendingAndroid: () => Promise<string[]>;
    clearProductsIOS: () => Promise<void>;
    clearTransactionIOS: () => Promise<void>;
    acknowledgePurchaseAndroid: (token: string, developerPayload?: string) => Promise<PurchaseResult | void>;
    consumePurchaseAndroid: (token: string, developerPayload?: string) => Promise<PurchaseResult>;
    validateReceiptIos: (receiptBody: Record<string, unknown>, isTest?: boolean) => Promise<Apple.ReceiptValidationResponse | false>;
    validateReceiptAndroid: (packageName: string, productId: string, productToken: string, accessToken: string, isSub?: boolean) => Promise<Android.ReceiptType>;
    requestPurchase: (sku: string, andDangerouslyFinishTransactionAutomaticallyIOS?: boolean, obfuscatedAccountIdAndroid?: string, obfuscatedProfileIdAndroid?: string) => Promise<InAppPurchase>;
    requestPurchaseWithQuantityIOS: (sku: string, quantity: number) => Promise<InAppPurchase>;
    finishTransactionIOS: (transactionId: string) => Promise<void>;
    finishTransaction: (purchase: InAppPurchase | ProductPurchase, isConsumable?: boolean, developerPayloadAndroid?: string) => Promise<string | void>;
    requestSubscription: (sku: string, andDangerouslyFinishTransactionAutomaticallyIOS?: boolean, oldSkuAndroid?: string, purchaseTokenAndroid?: string, prorationModeAndroid?: ProrationModesAndroid, obfuscatedAccountIdAndroid?: string, obfuscatedProfileIdAndroid?: string) => Promise<SubscriptionPurchase>;
    purchaseUpdatedListener: (listener: (event: InAppPurchase | SubscriptionPurchase) => void) => EmitterSubscription;
    purchaseErrorListener: (listener: (errorEvent: PurchaseError) => void) => EmitterSubscription;
    getReceiptIOS: () => Promise<string>;
    getPromotedProductIOS: () => Promise<Product>;
    buyPromotedProductIOS: () => Promise<void>;
    presentCodeRedemptionSheetIOS: () => Promise<null>;
};
export * from './types';
export default iapUtils;
