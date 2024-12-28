  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : ㅤ

 𓆩•✘‌༎꯭ࠫ™𝆺𝅥⃝⃪꯭ .🅢︭︣𝝰︩︪𝆭d *life*༎ࠫ𓆩⁣⃝💗─‌⃛𓆪


ㅤ
// @whatsapp : +6282211756454
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVB1NWQ5ZXV0OGFKR1ZMVWwvK3pjQVJrTm9weFc0Q1RsZVVpWTdtQW1XZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJvUGdRZHR0Z3c3TE1NN2NMRE9kOUc4Y21KN3ZrZ01YVklkeW9ZbGFXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRzYyUVE1SkZrekRuWnJ0b2VIS1VVQ29tUHdDaVE0dzlLTEs5N2xRbzA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydjhmcVI1Y3hhTHVqRnNZUlQ0dUhzTkdOM1FYZFFUZWRqNVpMeG5lVndZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGK3c4VGlPVGZpS3ZZUmpaZVo2cE5nUittNkZMeEFZU2tOZHI1eHFHR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhabFFmV3gwbjRKSnExbkdkRlZNeS9kNER0cmRyRmNSbDJ2Tk83SjF0Vjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJLY01OZUMvSU5iM0RCYzdqT2tQSnUxamtDYXJCdFlGZVUzZUhzL1FrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEdrK1dNVWxDR2x6Q2ZIb3IzZjFWK09CRUhLZHRQRVlJR3NXK08wemFEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhOTUpyVUlLa0JFaFZ3UTMrRFhaMWhsQ3gxenFkYUNuQTdjTzhFMnZZMVlNK1B2S3MyRVhmYTdiWlN1cVNtaXdtd0lrR0xJSXlWcjVJL21TQU8vaWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJnVnVUMEphSjJJN0g5WVYrSTNIQWdDRi9XdjR5eThvdlUyVzIzY2UxVTF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODIyMTE3NTY0NTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTlFMDg0MjFDNEMzNTY5MjMyMTU3NzA4QTEwM0Q4MjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTM5MDM4M30seyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4MjIxMTc1NjQ1NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyM0NGRkRCMUQzQ0EwRTE2MEEwRDZCNUYyNTcyQ0JEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1MzkwMzgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1LTdtdDZhblRRQzFBbXhVSEZKNVh3IiwicGhvbmVJZCI6IjQ1NzRjZDUyLWY1OTctNDAzMS04OTQ4LWMzNzgzMzE1NmVmMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkYk1rcTlwSU9BajczSS9rczQzMUgxc3VQdTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnRXR241TkxtU3FkMStnSjBtbzNxblZ0Wm1FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilk1SFhTN1hUIiwibWUiOnsiaWQiOiI2MjgyMjExNzU2NDU0OjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMjMxODUzNjY0NjgyNjozQGxpZCIsIm5hbWUiOiLinL/Nn82ezZ/NnuKYheGPmuG0j+qkquqkqOqkqsm04bSAyp/hj4bimaHhrYTPgOKEoiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVRMdlpRRkVLRHB2N3NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidGxpRVdWMG02bTBuVXEvbWtSZWFTNWRmTGV5VTVYdE9yaXdqckI5a1l5QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSkRUQWFCbENQZ1dwVUh5YjZESTJ2Mk1OejFDZVFoUjNDbjBOc2dGRTVuL0FjUnp6N2NRVWdhcEZCd2pCeHVnTlFDNml0Q1B5UHpDMk1qNVN5VnJzQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkZlNitkTTA2Tngvc2kzNUU0N0JGdHF2Y1M1OUl3TEg3aVcvbDY0elhtK3FQcmc5Y3dvczdZRFg3blFHWWxleFQ4eklJOVJWLzNkVmwwaEkwWEk2b2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4MjIxMTc1NjQ1NDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJaWWhGbGRKdXB0SjFLdjVwRVhta3VYWHkzc2xPVjdUcTRzSTZ3ZlpHTWcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzOTAzODEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVhKIn0=' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'HEART-MD' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '6282211756454' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || '✿͟͟͞͞★ᏚᴏꤪꤨꤪɴᴀʟᏆ♡᭄π™' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©ㅤ

 𓆩•✘‌༎꯭ࠫ™𝆺𝅥⃝⃪꯭ .🅢︭︣𝝰︩︪𝆭d *life*༎ࠫ𓆩⁣⃝💗─‌⃛𓆪


ㅤ"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "✿͟͟͞͞★ᏚᴏꤪꤨꤪɴᴀʟᏆ♡᭄π™" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Bot" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autostatusreact = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'true'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'true'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
