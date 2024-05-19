const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/HyHamza/B";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://hyhamza.vercel.app/assets/img/profile.png" ;
global.caption = process.env.CAPTION || global.caption || "Byte, created By Hamza" 


global.devs = "2348039607375"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923072380380";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923072380380";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://hyhamza.vercel.app/assets/img/profile.png/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "all";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUsyU0s1KzdBTzlwVy9Vc1IvUm5FMlJxRDlGbVZpcGxrQlpybk9kYUhYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHozWFhQVjJ3OFpoUFdxTFBXYVNKcHpxQjJhRVVEdXYya1dyMTVsUnlEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQkJCbjRJYUVrU3V2MGFFR3psUHlsOW81QzkxNFk5UjFiVHhWbjRMQ2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SWZQR0tBYmVGZnhTM0MxdHVWUlVCSlNIeFJDZ2ZiUTBhNlQ5RmNpTzJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KVGMrOUFBRjltek1JOUhpclEybzJ3dTQ2TmdVUzZsSkNNcEVZMmNzbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxrM09wMUZkK2NyREZGTUtCSjlFM0x4NDdWWTRiZ1l3UElORXlDZEd2d0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVTNm5WcnVETTN2dVpUS2hya2k2cmVYS1ovYTBjOFFhM3JtdzJlMlhXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhHSy9FUDQzYXNhZWFyMWxBK053Rk9mdGxtTHlUUHVqbk1Zenpzd3RBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY4YWhCYkRuUlZwZjRUVXlWZjl5WHpsbmQ2QmwrNkFMZnJWcEF1UC8rVlZ1K0R6MUs5cm5BS0NRcVVmNnJIZm5ENExSYWlzLy81YWwrTEpMY3VDVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJ0ZTNzOHk0bWJtUysyRzQxMFh1Y2cvMEVNMXFkcFFKOERIQ1hoWWtVQUtrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRkQ1NzU3Q0QxRkY3MDA3RjdFRjk4MERFRUE1MUZFMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE2MTU3OTk4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDA5RjREOEZDMTZFRDI2REIzQTQ4NTE3ODI1MzFGOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNjE1Nzk5OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOGxHODlNZF9UM21JQi1ZQTBiQlA0USIsInBob25lSWQiOiJiM2UyNDYwYy1lYzcyLTQ3ZmYtODc5OS0yYzFiYmI3NWQ0MjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG9mSnlzem1vZkNpcWs5WCt4V0xtbTQ2bFdBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im50RnlqR09uWFU5cmVvUGo2NlVENmJiTXNkRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNWkxSUVZDQyIsIm1lIjp7ImlkIjoiOTIzMDcyMzgwMzgwOjg0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhhbXphIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNU0E5SXdHRUtEOHFiSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxYlpSOVhybDlsUnBmb0ZaWTJHdWlCRDFLak9pUnN2ejVBSTVxalM0bW5NPSIsImFjY291bnRTaWduYXR1cmUiOiJJbVJyMnhidm1Yei9FSUtzYjFrZFJvK2t0VjFqRjF5bDl5RGw2bzdWMkUyRE5XcUU2anJUNnNRbldPd0pPTFFBempBTDUramh6MmR4Qlh3eU5qVVhBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWtJYWE4L1VkTGQzVkJvNVBCVEpmU0tQbGVNa01GeDVzOUtNRXNORC8xYW1KSk10M0x0cWNjZ09OUlRXazJDcVJGb2l6aHlNRDR1UTBoaktVRUFQQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzIzODAzODA6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW0yVWZWNjVmWlVhWDZCV1dOaHJvZ1E5U296b2tiTDgrUUNPYW8wdUpweiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjE1Nzk5NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBT3UifQ=="


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "Byte" , 
 
  author : process.env.PACK_AUTHER|| "Byte",
  packname: process.env.PACK_NAME || "Byte",
  botname : process.env.BOT_NAME  || "Byte",
  ownername:process.env.OWNER_NAME|| "Hamza",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-09a0df65-d26e-473c-9b32-a951f8a1ec9f",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "talkdrove1",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
