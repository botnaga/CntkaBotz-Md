import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 INTRODUCTION 』*', `Hai kak, Aku adalah bot WhatsApp, Aku diberi nama BOT-PLAYSHOP, Yang dibuat Oleh manusia gabut yang bernama Anggara,dan dia masih pemula, jadi kalau ada yang error mohon dimaklumi ya:v\nSilakan klik tombol menu ya kak, dan mohon jangan di spam\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://bit.ly/playshop1', 'INSTAGRAM', null, null, [
[`Menu`, '.craft'],
[`\nAku gila dan aku bangga:v`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
