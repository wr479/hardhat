// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract dataContract { 
 
 
    struct data { //сруктура 
        uint age ;  
        address delegate;  
        uint vote;   
          
    } 
    mapping  (address=>data) public candites; //create the mapping 
    function addData (  // функция для добовления данных 
        uint age, 
        address delegate, 
        uint vote) public { 
        candites [delegate] = data(age,delegate,vote); // при вводе адреса вызывается весь struct 
    } 
    function voting (uint vote,address delegate) public { //функция для добовления 
        candites[delegate].vote+=vote; //добавляем к предведущему значению 
 
    } 
}