import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `Hai ${conn.getName(m.sender)} Mau Sewa?
*SEWA BOT*
┏━━〔 ıll HARGA llı 〕━



*卍ｓｅｗａ ｂｏｔ卍*

P̺͆L̺͆A̺͆Y̺͆S̺͆H̺͆O̺͆P̺͆

*_anti diley? Di sinih bot playshop anti diley_*
•-----•-----•-----•-----•-----•-----•-----•-----•-----•-----•------•

*FྂIྂTྂUྂRྂBྂOྂTྂ :*
☯ : fitur *welcome*
☯ : fitur *stiker*
☯ : fitur *setwelcome dan setleft*
☯ : fitur *antilink*
☯ : fitur *hidetag*
☯ : fitur *games , fun , dan masih banyak yang lainnya.*

•-----•-----•-----•-----•-----•-----•-----•-----•-----•-----•------•

*List sewa*
*PERMANEN : 4.000*

•-----•-----•-----•-----•-----•-----•-----•-----•-----•-----•------•
*🤖 : Bot on 24 jam,anti diley di jamin nyaman*
*MAX 257 MEMBER*
•-----•-----•-----•-----•-----•-----•-----•-----•-----•-----•------•







   ♡ ㅤ     ❍ㅤ       ⎙ㅤ       ⌲ `
conn.sendHydrated(m.chat, str, wm, pepe, 'https://instagram.com/itsme_nitsu', 'IG OWNER', null, null, [
['OWNER', '/owner']
], m)

}
handler.help = ['sewaa']
handler.tags = ['info']
handler.command = /^sewa(a|bot)$/i

export default handler
