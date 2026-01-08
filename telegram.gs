function enviarRecordatorioEstudio() {
  const props = PropertiesService.getScriptProperties();
  const TELEGRAM_TOKEN = props.getProperty('TELEGRAM_TOKEN');
  const CHAT_ID = props.getProperty('CHAT_ID');

  const mensaje = '📚 ¿Estudiaste hoy?\n\n' +
                  '📌 ¿Qué estudiaste?\n' +
                  '⏱️ ¿Cuánto tiempo?\n\n' +
                  'Respondé este mensaje para registrarlo.';

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  const payload = {
    chat_id: CHAT_ID,
    text: mensaje
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, options);
}
