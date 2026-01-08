# 📚 Telegram Study Tracker

Bot de Telegram que envía recordatorios diarios para registrar sesiones de estudio
y guarda la información en Google Sheets para su análisis posterior.

## 🛠️ Tecnologías
- Google Apps Script
- Telegram Bot API
- Google Sheets

## 🔄 Flujo
1. Trigger diario envía recordatorio (tarde / noche)
2. Usuario responde por Telegram
3. Webhook recibe el mensaje
4. Datos se guardan en Sheets

## ⚙️ Setup
1. Crear bot en Telegram
2. Configurar secrets con PropertiesService
3. Crear triggers de tiempo
4. Publicar Apps Script como Web App

## 🔐 Seguridad
Los tokens y credenciales **no se suben al repositorio**.
Se gestionan mediante `PropertiesService`.

## 🚀 Próximas mejoras
- Botones interactivos
- Dashboard en Looker Studio
- Validación de respuestas
