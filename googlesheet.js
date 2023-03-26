//googleSheet.js
const{GoogleSpreadsheet} = require('google-spreadsheet')
/**
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */
async function getData(docID, sheetID, credentialsPath = './credentials.json') {
    const result = [];
    const doc = new GoogleSpreadsheet('164aF7JGvPs8M9uC5eHL4Tu4iq_4_prc-SjHyQLb4_HE');
    const creds = require(credentialsPath);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById['0'];
    const rows = await sheet.getRows();
    for (row of rows) {
      result.push(row._rawData);
    }
    return result;
  };
  
  module.exports = {
    getData,
  };

