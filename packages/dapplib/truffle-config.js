require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stool rice place hour gesture opinion slot genre'; 
let testAccounts = [
"0xcad3556512292f67d0e41d99f78fe16f19787b42a177789aa84b2e4f35aaa6ac",
"0x2b2a0cc40d3c2282f37ac9a4d532917cc966427b9e96790052ab4c75efa49841",
"0x23e12dd6bf6934ee9bd45d124be39acb8688bd2871cd68091146945109946ba0",
"0x882cf72e5b7139ec23ae202f8a1a8ca266e77897ce97b152092468e6efb435b6",
"0xf67c8889216ac5ef07d8f8a98f370a113a82a88f9116578a4a0f0f313b6e41f1",
"0x5cccd28121e5a2257a730d18508e53e6007383c542149046e3148ed0d358c996",
"0x88111be0897f5c72e8718bdecbfee7d2fda137df10ffdb91bc88b96ca2f8136c",
"0x2d8fb1fa9c0ad0d6bae1f439aa3ac1fe1c4f161872026cde385f2a0ad6d82421",
"0x925e70b7ac406ca9ba9d58a465b52e6b9d17e20bf5fe0ab8babe1bb4d7c53b25",
"0x8484ced2f5ef3d23216a7179f128efc9df813976d8aa5a77d08ea896441ef2f2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
