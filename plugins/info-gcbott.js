import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `WEBSITE BOT KAMI \nhttps://bot-playshop.blogspot.com/2022/06/home.html`
conn.sendButtonDoc(m.chat, str, wm, 'Owner','.owner', ftextt, m)
}
handler.command = handler.help = ['gcbott']
handler.tags = ['info']

export default handler
