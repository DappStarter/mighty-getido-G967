require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name recipe noise minor good kangaroo army gentle'; 
let testAccounts = [
"0x14fb1ed7132969aced59a319a77404861a6b079c17e7396299481b85244a75d9",
"0x9713109f6f80edea8dbe821900630f7db4476cd84f8df09cc935ebe79b9e78c7",
"0x8bc6c5370e7bc19921c2ea25f9d095e79ee40a3c5374547ff856c717389c1f5c",
"0xd38047f97c981fce660e1f9dce144271e376454ec6b0f8657a09140cbc74c64c",
"0xdd75d73d1e517482d74775127f52a9b215eb5d705106773cbf5d66e311a291b7",
"0x291dae5d66dba0cc3ae52618566e95408d8ac43fe40dee2b63db2e781dd576f5",
"0xd3a1cc1570aed6ecf7c5ab565592512417f3d77e7ce57ee5ccf7cdb1649e8da7",
"0x6884f87b3336c891139ce7c3a606a2a5a1b71764599f290a8522c3311b67ab46",
"0x905283479f479ca2cf14cdff371941fcc00cf0fcb77efd801832e1fb7d8a8ff9",
"0xbeb28a955b9247ecbd77e0589b716a1c6dd7c33fd6d45de4cf0d0761e37f6329"
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
            version: '^0.8.0'
        }
    }
};

