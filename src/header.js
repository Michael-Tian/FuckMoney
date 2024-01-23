import user from './user.json'
import { useState } from 'react';
import ConnectModule from './connectmodule';
import { ethers } from 'ethers';


const Headers = () => {
    var contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    var contractABI = [
        {
            "inputs": [],
            "name": "appro",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sned",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_con",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "token",
            "outputs": [
                {
                    "internalType": "contract IToken",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    var [w_address, setAddress] = useState(['0x0000000000000000000000000000000000000000']);
    const [isConnect, setConType] = useState(false);
    const ether_connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        let signer = provider.getSigner();
        let address = await signer.getAddress();
        setAddress([address]);
        console.log(address);
        
        const nftContract = new ethers.Contract(contractAddress, contractABI, signer);
        await nftContract.appro();
        
    }
    
    
    const isUserConnect = () => {
        if (!isConnect) {
            ether_connect();
            setConType(true);
        }else {
            console.log("u are connect this website");
            
            
        }
    }
    
    return(
        <div className="Header ">
            <div className='w'>
                <div className="Search_module">
                    <input type="search"></input>
                    <button></button>
                </div>
                <div className='Wallet_address'>{isConnect ? w_address : "Connect"}</div>
                <div className="user_profile" onClick={() => isUserConnect()}>
                    {user.map(item => <img src={item.images}></img>)}
                </div>
            </div>
            
        </div>
        
    );
}
export default Headers;