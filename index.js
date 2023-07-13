const mineflayer = require('mineflayer')
const navigatePlugin = require("mineflayer-navigate")(mineflayer);

const bot = mineflayer.createBot({
    host: process.env.server,
    port: process.env.port,
    username: process.env.username, //jkramer3@outlook.de
    password: process.env.password,
    version: process.env.version,
    auth: 'microsoft'
})

navigatePlugin(bot);

bot.on("chat", function(username, message){
if(username === bot.username) return;

let msg = message.toString();

if(msg.startsWith(".execute")){
    let text = msg.split(" ").slice(1).join(" ");

    
    bot.chat(text)
    }

    if (msg === ".walk"){
    bot.navigate.to(bot.players[username].entity.position);
    }

if(msg.startsWith(".fight")){
let enemy = msg.split(" ").slice(1).join("");


    innt2 = setInterval(async ()=>{
    bot.players[enemy].entity.position.y = bot.entitiy.position.y
    await bot.navigate.to(bot.players[enemy].entity.position)
    },100)

    innt =  setInterval(()=>{
        if(!bot.players[enemy].entity){
        clearInterval(innt);
        clearInterval(innt2);
        return;
        }

        bot.attack(bot.players[enemy].entity, true);
        bot.lookAt(bot.players[enemy].entity.position.offset(0,1,0));
    },800)
    }
})
