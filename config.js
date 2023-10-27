import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//Number of owners
global.owner = [
  ['96894116692', 'Dev >> dark man', true],
  ['96894116692', 'Dev >> dark man', true] // هنا قم بتبديل رقمك واسمك
] 

// Mods
global.mods = ['212646155773','96894116692'] 
global.prems = ['212646155773','96894116692']

// Sticker WM
global.ownername = 'Dev >> dark man'
global.botname = 'DARCO-BOT-V2'
global.premium = 'false'
global.packname = 'DARCO-BOT-V2' 
global.author = 'Dev >> dark man' 
global.darco_wa = 'https://chat.whatsapp.com/Har7Z8RPqDO0jZP2FeRApN'


global.APIs = {
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Fun
global.wait = '*⌛ _جاري التنفيذ..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '😊'
global.done = '🍁'
global.error = '❌' 
global.xmoji = '☘️' 

global.multiplier = 69 
global.maxwarn = '3' // maxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
