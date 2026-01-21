function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (!data.message || !data.update_id) {
      return ContentService.createTextOutput('ok');
    }

    const mensaje = data.message.text || '';
    const updateId = data.update_id;
    const fecha = new Date();
    const turno = obtenerTurno(fecha);

    const parsed = parseMensaje(mensaje);

    const sheetId = PropertiesService
      .getScriptProperties()
      .getProperty('SHEET_ID');

    const sheet = SpreadsheetApp
      .openById(sheetId)
      .getSheetByName('Registros');

    sheet.appendRow([
      fecha,                 // fecha
      turno,                 // turno
      parsed.tecnologia,     // tecnologia
      parsed.curso,          // curso
      parsed.tema,           // tema
      parsed.minutos,        // minutos
      'manual',              // tipo_registro
      mensaje,               // mensaje_original
      updateId               // update_id
    ]);

    

  } catch (err) {
    Logger.log(err);
    return ContentService.createTextOutput('ok');
  }
}

function obtenerTurno(fecha) {
  const hora = fecha.getHours();
  return hora < 20 ? 'Tarde' : 'Noche';
}

function parseMensaje(texto) {
  const partes = texto.split('|').map(p => p.trim());

  const minutosMatch = texto.match(/(\d+)/);

  return {
    tecnologia: partes[0] || '',
    curso: partes[1] || '',
    tema: partes[2] || '',
    minutos: minutosMatch ? Number(minutosMatch[1]) : null
  };
}

