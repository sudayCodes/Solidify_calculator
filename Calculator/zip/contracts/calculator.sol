// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract Hello{
    uint256 result = 0;
    function add(uint256 num) public {
        result += num;
    }
    
    function multipy(uint256 num) public {
        result *= num;
    }

    
    function subtract(uint256 num) public {
        result -= num;
    }
    
    function divide(uint256 num) public  {

            result /= num;
    }
    
    function modulo(uint256 num) public {
        result %= num;
    }

    
    function exponentiation(uint256 num) public {
        result = result ** num;
    }


    function get() public view returns(uint256){
        return result ;
    }
}