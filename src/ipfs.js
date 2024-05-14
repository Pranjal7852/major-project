const IPFS = require('ipfs-api')
const ipfs = new IPFS({ host: 'uniqo-marketplacex.infura-ipfs.io',  protocol: 'https' })

export default ipfs
