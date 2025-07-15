function checkPriceThreshold() {
  var sheetId = '1YZR8iAR6R7g4Zi4OPff6Qsyzt2T9C8kU1O15inapvTs';
  try {
    var ss = SpreadsheetApp.openById(sheetId);
    var sheet = ss.getSheets()[0];
    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return; // no data
    var data = sheet.getRange(2, 1, lastRow - 1, 4).getValues();
    var tickers = [];
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      if (row[3] === true || row[3] === 'TRUE') {
        tickers.push(row[0]);
      }
    }
    if (tickers.length > 0) {
      MailApp.sendEmail('srburnett111@gmail.com', 'Tickers below threshold',
        'The following tickers have fallen below their thresholds:\n' + tickers.join(', '));
    }
  } catch (e) {
    MailApp.sendEmail('srburnett111@gmail.com', 'Error in Price Check Script', e.toString());
    throw e;
  }
}
