'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1] Follow Like DM",
        "[2] Follow Comment",
        "[3] Unfollow Not Followback",        
        "\n"
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] Follow Like DM":
        const fldm = require('./fftdm.js');
        await fldm();
        break;

      case "[2] Follow Comment":
        const fcmnt = require('./fft.js');
        await fcmnt();
        break;

      case "[3] Unfollow Not Followback":
        const unfb = require('./unfollnotfollback.js');
        await unfb();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2018
   ║ │ ││ ││  └─┐   SGBTeam 
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
      `);

main()