const SHEET_ID = 'YOUR_SHEET_ID';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const updateId = data.update_id;
    const message = data.message?.text || '';
    const fecha = new Date();

    if (!updateId) {
      return ContentService.createTextOutput('ok');
    }

    if (yaProcesado(updateId)) {
      return ContentService.createTextOutput('ok');
    }

    guardar(updateId, message, fecha);
    marcarProcesado(updateId);

    return ContentService.createTextOutput('ok');
  } catch (err) {
    Logger.log(err);
    return ContentService.createTextOutput('ok');
  }
}
