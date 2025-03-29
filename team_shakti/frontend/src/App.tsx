import { useState } from 'react';
import { AptosClient } from 'aptos';

const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

function App() {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
    }

    return (
        <div>
            {
                
            }
        </div>
    );
}