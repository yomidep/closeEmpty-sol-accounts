import { Connection, PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'


const pubkey = new PublicKey('8R8eZLAvB5A9QyByszPZ7bVJsBkdAPU1CYmpAHrdBG97')
const connection = new Connection('https://solana-mainnet.g.alchemy.com/v2/aleYeT5BI1MFFXJw37SiYu_FdeYMaMqb')

connection.getTokenAccountsByOwner(pubkey, 
    {
        programId: TOKEN_PROGRAM_ID
    }
)