/* function yaProcesado(updateId) {
  const props = PropertiesService.getScriptProperties();
  const ultimo = props.getProperty('LAST_UPDATE_ID');
  return ultimo && Number(updateId) <= Number(ultimo);
}

function marcarProcesado(updateId) {
  PropertiesService.getScriptProperties()
    .setProperty('LAST_UPDATE_ID', updateId);
}

function guardar(updateId, message, fecha) {
  const sheet = SpreadsheetApp
    .openById(SHEET_ID)
    .getSheetByName('Registros');

  sheet.appendRow([
    fecha,
    message,
    updateId
  ]);
}*/
