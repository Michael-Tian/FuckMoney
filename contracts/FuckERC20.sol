// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
/* 0x5FbDB2315678afecb367f032d93F642f64180aa3 */
contract FuckERC20 is ERC20 {

    // MSHK ERC20 Token 代币名字
    // MSHK 代币简称
    constructor() ERC20("FuckMoneyToken", "FMT") {
        // msg.sender 合约调用者
        // 向合约创建者发送 100000 个有18位小数的代币
        _mint(msg.sender, 100000 * 10 ** 18);
    }
}

