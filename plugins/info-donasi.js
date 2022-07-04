import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT ↓*
_*Pulsa/Pulse:*_ 087750234341
_*Gopay:*_ 087750234341
Setelah melakukan donasi kirim bukti pembayaran ke owner,Dengan melakukan donasi,kamu telah mensupport bot ini agar on 24 jam dan fast respon
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://www.instagram.com/playshop.online.id/', 'IG', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
