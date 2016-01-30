var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('3b423124'),
  addressVersion: 0x3F,
  privKeyVersion: 153,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x02cfbede,
  hkeyPrivateVersion: 0x02cfbf60,
  genesisBlock: {
    hash: hex('00003e0095045e13231b44e4d5624aac6c708a23833fb653c614385cb4cb6a48'),
    merkle_root: hex('ecfc7fe9e53bda0f4fcb767ad8c1b82efba397d313bf4af1e245c78939dc99de'),
    height: 0,
    nonce: 89122,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1431325505,
    bits: 520159231,
  },
  dnsSeeds: [
    'node1.SatoshiChainwallet.com',
	'node2.SatoshiChainwallet.com',
	'node3.SatoshiChainwallet.com',
	'120.25.227.124',
	'120.25.150.205',
	'62.210.105.88'
  ],
  defaultClientPort: 31000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
