function setSecrets() {
  // Este archivo se usa solo localmente para cargar secrets
}

function setSheetId() {
  PropertiesService.getScriptProperties().setProperty(
    'SHEET_ID',
    'YOUR_SHEET_ID_HERE'
  );
}
