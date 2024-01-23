
import { ethers } from 'ethers'
/*
const ether_connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let signer = null;
        let address = null;
        if (!provider) {
            return;
        }
        
        //请求获取账号
        await provider.send('eth_requestAccounts', []);

        signer = provider.getSigner();
        // 获取账号地址
        address = await signer.getAddress();
        //查询余额
        provider.getBalance(address).then((balance) => {
            // 余额是 BigNumber (in wei); 格式化为 ether 字符串
            let etherString = ethers.utils.formatEther(balance);
            console.log("Balance: " + etherString);
        });
    }
*/
const ConnectModule = () => {
    
    return(
        <div>aaaaa</div>
    )
    
}
export default ConnectModule;