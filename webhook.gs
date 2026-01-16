function getSheetId() {
  return PropertiesService
    .getScriptProperties()
    .getProperty('SHEET_ID');
}


function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const updateId = data.update_id;
    const message = data.message.text;
    const fecha = new Date();

    const SHEET_ID = getSheetId();

    const sheet = SpreadsheetApp
      .openById(SHEET_ID)
      .getSheetByName('Registros');

    sheet.appendRow([fecha, updateId, message]);

    

  } catch (err) {
    Logger.log(err);
    return ContentService.createTextOutput('ok');
  }
}
