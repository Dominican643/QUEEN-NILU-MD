/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;M6l0xDLZ#UY19RjzKY5HFj9EWRa0iS2D-LCV_h3e9s71Gsk8-d-I' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '2349063382597'

global.OWNER_NAME = '𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇 𝞑𝞗𝙏'

global.FOOTER = '©𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇²²¹-𝞛𝘿'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '𝞑𝞢𝙇𝞗𝞜𝙂𝙎 𝙏𝞗 | 𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '+' // Bot Prefix

global.CAPTION = '©𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇²²¹-𝞛𝘿' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/2c22c342be2090d59ebd3.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'Hello' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https:wa' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
