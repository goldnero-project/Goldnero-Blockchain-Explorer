var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 12,
    txMinConfirms: 18,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'GLDX',
    openAliasPrefix: "gldx",
    coinName: 'Goldnero',
    coinUriPrefix: 'electronero:',
    addressPrefix: 18018,
    integratedAddressPrefix: 18019,
    subAddressPrefix: 42,
    addressPrefixTestnet: 18018,
    integratedAddressPrefixTestnet: 18019,
    subAddressPrefixTestnet: 42,
    addressPrefixStagenet: 24,
    integratedAddressPrefixStagenet: 25,
    subAddressPrefixStagenet: 36,
    feePerKB: new JSBigInt('2500'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('20'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 12, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
