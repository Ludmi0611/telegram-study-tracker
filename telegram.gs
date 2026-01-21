function enviarRecordatorio(sesion) {
  const props = PropertiesService.getScriptProperties();
  const TELEGRAM_TOKEN = props.getProperty('TELEGRAM_TOKEN');
  const CHAT_ID = props.getProperty('CHAT_ID');

  const mensaje =
    `📚 ¿Estudiaste hoy?\n\n` +
    `👉 Registrá tu sesión en este orden:\n` +
    `tecnología | curso | tema | minutos\n\n` +
    `Ejemplo:\n` +
    `Python | YouTube | funciones | 60`;

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
