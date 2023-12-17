const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message && typeof message === "string") {
      message = message.toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }

    if (key && typeof key === "string") {
      key = key.toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }

    let resultArray = [];

    for (let i = 0, j = 0; i < message.length; i += 1) {
      let messageCharCode = message.charCodeAt(i) - 65;
      let keyCharCode = key.charCodeAt(j % key.length) - 65;

      if (messageCharCode >= 0 && messageCharCode < 26) {
        let resultCharCode = ((messageCharCode + keyCharCode) % 26) + 65;
        resultArray.push(String.fromCharCode(resultCharCode));
        j += 1;
      } else {
        resultArray.push(message[i]);
      }

    }

    return this.type ? resultArray.join('') : resultArray.reverse().join('');
  }

  decrypt(encryptedMessage, key) {

    if (encryptedMessage && typeof encryptedMessage === "string") {
      encryptedMessage = encryptedMessage.toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }

    if (key && typeof key === "string") {
      key = key.toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }

    let resultArray = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i += 1) {
      let encryptedMessageCharCode = encryptedMessage.charCodeAt(i) - 65;
      let keyCharCode = key.charCodeAt(j % key.length) - 65;

      if (encryptedMessageCharCode >= 0 && encryptedMessageCharCode < 26) {
        let resultCharCode = (encryptedMessageCharCode - keyCharCode) % 26;
        if (resultCharCode >= 0) {
          resultCharCode += 65;
        } else {
          resultCharCode += 91;
        }
        resultArray.push(String.fromCharCode(resultCharCode));
        j += 1;
      } else {
        resultArray.push(encryptedMessage[i]);
      }

    }

    return this.type ? resultArray.join('') : resultArray.reverse().join('');
  }

}

module.exports = {
  VigenereCipheringMachine
};
