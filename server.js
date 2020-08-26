//ملف:server.js
///// معلومات مهمة
///// البوت أمن ولايوجد به مشاكل وان وجد مشاكل تواصل معي وسوف يتم حلها ، برابط المقطع 
//// رابط المقطع : https://youtu.be/pD52f5iWk-A
/// البوت تجميع ، وليس عمل من الصفر والغاية بالاخير افادة الناس وجميع الحقوق محفوظة وموجدة
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://derk.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
console.log("==================================");
console.log("1");
console.log("2");
console.log("3");
console.log("=========> Bot Online <=========");
console.log("========> TestBot <========");
console.log("=======> Token Bot **** <=======");
console.log("3");
console.log("2");
console.log("1");
console.log("====================================");
console.log("Bot Online 24/7");
///
//الاكواد

const dev = ["335645388323160064"]; ///تعديل مهم ايدي حسابك
const admin = "=";
var owner = "604849977776275457"; // Owner Bot Mention /// تعديل مهم ايدي حسابك
var number = "1"; // Unmber Bot
var ex = "2019/10/08";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!dev.includes(message.author.id)) return;
  if (message.content === admin + "vip") {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**This Command Just In Servers**");
    message.channel.send("> **# - `Premium Info` » **" + `${message.author}`);
    message.channel.sendMessage(
      `> **# - Premium Number:** **[** ${number} **]**\n> **# - Ends in:** **[** ${ex} **]**\n> **# - Owner:** **[** <@${owner}> **]**`
    );
  }
});





client.on("ready", () => {
  console.log(`----------------`);
  console.log(`ivankov`);
  console.log(`----------------`);
  console.log(`ON ${client.guilds.size} Servers '     Script By : ivankov  `);
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Vegaron Bot Is On`, "http://twitch.tv/ninja"); ///تعديل مهم غير كلمة هيلب وبرميوم للوتشينق اللي بدك اياه مثل اسم سيرفرك
  client.user.setStatus("stream");
});




 client.on('message', msg => {
    if (msg.content === '=clr') {// امر
      msg.channel.send({file : "https://cdn.pg.sa/1c4R2LijPA.png"})
    }
  });
client.on('guildMemberUpdate', (oldMember, newMember,) => {
if(oldMember.roles.size < newMember.roles.size) {
 let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
            let hector = new Discord.RichEmbed()
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('BLACK')
            .setDescription(`✅ تم اعطائك رتبة \n**الرتبة:** \`\`${role.name}\`\n **السيرفر:** ${newMember.guild.name}`)
            .setTimestamp()
            newMember.user.send(hector);
}   
});
 client.on('message', msg=>{
    if(msg.content == "hello"){
        msg.reply("welcome broo <a:563109620462256170:690502507738431499> ")
    }
})





client.on('message',async message => {
    if (!message.guild || message.author.bot) return;
    var command = message.content.toLowerCase().split(" ")[0];
   var args = message.content.toLowerCase().split(" ");
   var user = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
 
   if(command == prefix + 'topinv') {
       if(!args[1] !== 'inv')
       if(message.channel.type !== "text") return;
message.guild.fetchInvites().then(res => {
       let invs = new Discord.Collection();
       res.forEach(i => {
           if(!message.guild.member(i.inviter.id)) return;
           if(!invs.has(i.inviter.id)) invs.set(i.inviter.id, i.uses);
           else invs.set(i.inviter.id, invs.get(i.inviter.id)+i.uses);
       })
       let desc = "";
 
     
       console.log(invs.sort((a, b) => b - a))
       desc += invs.sort((a, b) => b - a).firstKey(10).map((id, index) => "#" + (index+1) + " | " + (message.guild.member(id) ? message.guild.member(id) : "``Unknown``") + " invites: `" + invs.sort((a, b) => b - a).array()[index] + "`").join("\n");
       let embed = new Discord.RichEmbed()
       .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
       .setTitle(" INVITES [ 1/1 ]")
       .setTimestamp()
       .setColor('Default')
       .setFooter(message.author.tag, message.author.avatarURL)
       .setDescription(desc);
       message.channel.send(embed);    
})
   }
       });


client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1D - Codes Team.


client.on("message", async message => {
  if (message.content.startsWith(prefix + "invbot")) {
    const invite = `**Invite: [No Any Perms](${await client.generateInvite()})\nInvite: [Administrator Perm](${await client.generateInvite(
      ["ADMINISTRATOR"]
    )})**`;
    message.channel.send(invite);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "inf")) {
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .addField(
          "**عدد الدعوات للسيرفر**",
          `**➥** [ شخص **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]   `
        )
        .setImage(
          ""
        )
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});



client.on("message", message => {
  if (message.content === "#close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("تم تقفيل الشات");
      });
  }
  if (message.content === "#open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("تم فتح الشات  ");
      });
  }
});



client.on("message", message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    if (message.author.bot || message.channel.type == "dm") return;
    let mention = new Discord.RichEmbed()
      .setColor("black")
      .setDescription(
        ` ✽  **Hi I'm System Bot**  
✽  **Support Server** [ https://discord.gg/aKdCRSX ] 
✽  **Video explained ** [ https://youtu.be/pD52f5iWk-A ] 
✽  **Bot orders** [ • **=help** • ]   `
      )

      .setImage(
        ""
      );
    message.channel.send(mention);
  }
});
/////





client.on("guildMemberAdd", member => {
  let id = member.user.id;
  let m = member.user;
  var embed = new Discord.RichEmbed()
    .setThumbnail(m.avatarURL)
    .setImage(
      ""
    )
    .addField(
      `<a:NW:620727189528117258><a:NE:620727187196215306><a:NL:620727189272526876><a:NC:620727189184446501><a:NO:620727189205155840><a:NM:620727189154955265><a:NE:620727187196215306>`,
      `<@${id}>`
    )
    .addField(" **__Welcome To Server__**", `**${member.guild.name}**`)
    .addField("**your name** ", `${member.guild.memberCount} `)
    .setColor("RANDOM");
  var channel = member.guild.channels.find("name", "welcome"); //تعديل مهم اسم روم الولكم
  if (!channel) return;
  channel.send({ embed: embed });
});











client.on("ready", () => {
  var x = client.channels.get("620424484502896658");
  if (x) x.join();
});








client.on("message", message => {
  if (message.content.startsWith(prefix + "setby")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** منشن روم . ❌**").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**ليس لديك صلاحيات . ❌**");
    message.channel.send(`**${args}. لقد تم شغيل المغادرة هنا.**`); //By ItzTexo
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**__الله معاك ✋ 😢 😔__**`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**__مع السلامه تشرفنا بك ✋😢 😔__** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(
          `==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`,
          "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
        );

      var channel = member.guild.channels.find("name", "leave");
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});




client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed().setImage(
    ""
  ).setDescription(` ✽ **Thank You for Adding  Bot To Your Server** ✅ ✽ 
   ✽ **Support Server** [ • https://discord.gg/Kvtg6BQ • ]  ✽ `); //تعديل مهم رابط سيرفرك
  guild.owner.send(embed);
});








client.on("message", message => {    
    if(message.content.startsWith(prefix + "emoji")) {   
        if(message.author.bot) return;  
        var emojiid =  message.content.split(" ").slice(1).join(" ")   
        console.log(emojiid) 
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage  
${prefix}emoji <EmojiID>`); 
        else    
        message.channel.send("This is the emoji that you requested:-",  
          { 
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]  
          }) 
        }  
})   



 client.on("message", message => {  
  if (message.channel.type === "dm") {    

      message.channel.startTyping();    
      setTimeout(() => {    
        message.channel.stopTyping();    
      }, Math.random() * (1 - 3) + 1 * 1000);  
   
  }  
});  


    

 
 
 
 
 
 
client.on("message", async message => {//..حقوق X Codes
 
  if (message.content.toLowerCase() === prefix + "profile") {//..حقوق X Codes
 
        message.channel.startTyping();//..حقوق X Codes
 
    setTimeout(() => {//..حقوق X Codes
 
      message.channel.stopTyping();//..حقوق X Codes
 
    }, Math.random() * (1 - 3) + 1 * 1000).then(//..حقوق X Codes
 
         message.channel.send({//..حقوق X Codes
 
        files: [//..حقوق X Codes
 
          {//..حقوق X Codes
 
            name: "prfoile.png",//..حقوق X Codes
 
            attachment: `https://api.probot.io/profile/${message.author.id}` //..حقوق X Codes
 
          }//..حقوق X Codes
 
        ]//..حقوق X Codes
 
      })//..حقوق X Codes
 
      )//..حقوق X Codes
 
    }//..حقوق X Codes
 
});//..حقوق X Codes





      
           
 



client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['-help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],``);
    }, ms);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("**My Prefix Is** : `+`")
    }
});







client.on("message", (message) => {
     
   if (message.content.startsWith("+new")) {
        const reason = message.content.split(" ").slice(1).join(" ");      
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets <a:705731500972441659:743391856653500486>.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);     
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });     
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`<a:698978131884769431:743391832704155670> Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`+confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '+confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })     
                   .then((collected) => {
                       message.channel.delete();
                   })     
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});








let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "tAntihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**<a:698978131884769431:743391832704155670> The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**<a:741734395156627517:743394003487031368> The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        
 
  let banse = new Set();
  let bane = JSON.parse(fs.readFileSync('./data1.json' , 'utf8'));
  client.on('guildBanAdd', function(guild) {
    guild.fetchAuditLogs().then(logs => {
      const ser = logs.entries.first().executor;
      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
        bans: 2
      }
      if(antihack[guild.guild.id].onoff === 'Off') return;
      let boner = bane[ser.id+guild.id]
  banse.add(ser.id)
  boner.bans = Math.floor(boner.bans+1)
 
 
  setTimeout(() => {
    boner.bans = 2
    banse.delete(ser.id)
  },8000)
 
  if(boner.bans > 2) {
    let roles = guild.members.get(ser.id).roles.array()
  guild.members.get(ser.id).removeRoles(roles)
  }
 
      })
      fs.writeFile('./data1.json', JSON.stringify(bane), (err) => {
  if (err) console.error(err);
  })
 
  })
  client.on('guildMemberRemove', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `MEMBER_KICK`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {  
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
    const data = require("./data.json");
  });
  client.on('roleDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {    
                  r.edit({
                      permissions : []  
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
    const data = require("./data.json");
  });
  client.on('channelDelete', (u) => {   
      u.guild.fetchAuditLogs().then( s => {  
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_DELETE`) {  
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {  
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {  
                  data[ss.executor.id].time = 0
              }
          })
      };
      });  
    const data = require("./data.json");
  })





client.on('message', message=>{  
    if(message.author.bot) return;  
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) {  
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**you want `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log")  
    if(log) return message.reply("**the room logs existe**")   
    if(!log) {   
    message.guild.createChannel("log", "text").then(c=> {  
        c.overwritePermissions(message.guild.id, {  
            SEND_MESSAGES: false
    })
})
message.channel.send("**<a:698978131884769431:743391832704155670> ,done**")
    }
    }  
     })
client.on('error', console.error);
 
client.on('messageDelete', message => {  
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;  
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;  
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;  
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');  
    if(!logChannel) return;  
 
    let messageDelete = new Discord.RichEmbed()  
    .setTitle('**[MESSAGE DELETE]**')  
    .setColor('RED')  
    .setThumbnail(message.author.avatarURL)  
    .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()  
    .setFooter(message.guild.name, message.guild.iconURL)  
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {  
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;  
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n** <a:741570189040287754:743439396711301160> \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 

client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)  
        .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)  
   
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {  
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)  
        .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()  
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);  
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
   
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
   
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')
            .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);  
        }
        if(oldRole.hexColor !== newRole.hexColor) {  
            if(oldRole.hexColor === '#000000') {  
                var oldColor = '`Default`';  
            }else {
                var oldColor = oldRole.hexColor;
            }    
            if(newRole.hexColor === '#000000') {  
                var newColor = '`Default`';  
            }else {
                var newColor = newRole.hexColor;  
            }  
            let roleUpdateColor = new Discord.RichEmbed()  
            .setTitle('**[ROLE COLOR UPDATE]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')  
            .setDescription(`**\n**<a:741570189040287754:743439396711301160> Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()  
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
   
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {  
            let roleUpdate = new Discord.RichEmbed()  
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')
            .setDescription(`**\n**<a:741570189040287754:743439396711301160> Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate) 
        }
    })
});
 
 

client.on('channelCreate', channel => { 
  
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { 
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { 
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => { 
        var userID = logs.entries.first().executor.id; 
        var userAvatar = logs.entries.first().executor.avatarURL;
   
        let channelCreate = new Discord.RichEmbed() 
        .setTitle('**[CHANNEL CREATE]**') 
        .setThumbnail(userAvatar)
        .setDescription(`**\n** <a:741570189040287754:743439396711301160>  Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
}); 
client.on('channelDelete', channel => { 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return; 
 
    if(channel.type === 'text') { 
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { 
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { 
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar) 
        .setDescription(`**\n**<a:741570189040287754:743439396711301160> Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete); 
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
   
    oldChannel.guild.fetchAuditLogs().then(logs => { 
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;

        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() 
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) 
 
            logChannel.send(newName); 
        }
        if(oldChannel.topic !== newChannel.topic) { 
            let newTopic = new Discord.RichEmbed() 
            .setTitle('**[CHANNEL EDIT]**') 
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**<a:741570189040287754:743439396711301160> Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 

client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return; 
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**<a:741570189040287754:743439396711301160> Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; 
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**<a:741570189040287754:743439396711301160> Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => { 
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id; 
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`'; 
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**') 
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) 
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) 
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
  if(!logChannel) return;
  
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**') 
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n** <a:741570189040287754:743439396711301160> Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => { 
  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
  if(!logChannel) return; 
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**<a:741570189040287754:743439396711301160> Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)  
  .setTimestamp() 
  .setFooter(member.user.tag, member.user.avatarURL)
  
  logChannel.send(leaveMember);
});
 
 

client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 

        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }

        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }

        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }

        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed() 
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv); 
        }
    })

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave); 
    }

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n** <a:741570189040287754:743439396711301160> Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }  
}); 





client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});





client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '+'; 
    
    if(args[0] === `-{prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});














client.on('message', message => { 
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });



	client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | warned')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`**you hasbne warned from posting link please contact owner is the server**`)
        .addField(`by`,`power bot. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});






client.on('message', message => {
    if (message.content.startsWith("+bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('Info WESO.Bot.')
            .addField('`` My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('`` RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('`` servers``', [client.guilds.size], true)
            .addField('`` channels``' , `[ ${client.channels.size} ]` , true)
            .addField('`` Users``' ,`[ ${client.users.size} ]` , true)
            .addField('`` My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('`` My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ + ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
    })
}
});

client.on("message", message => {
    const prefix = "+"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "avatar server"){
          const embed = new Discord.RichEmbed()
  
      .setTitle(`ServerAvatar${message.guild.name} **  `)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "done" , 
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });




























 

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**tnx for adding bot <a:722467337432858716:743395370540990524> **`)
      guild.owner.send(embed)
});











client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("you dont have a permission !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("i dont have a permission ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** I can't find the role mute 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** you must mention a character **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  muter**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  by **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} اYou are punished with a written death for violating laws
${message.author.tag} You were punished by
[ ${reason} ] : reason
If the punishment was a mistake, talk to the officials
`)
		.setFooter(`server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**mention the character**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**this is not given as a dying person**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**the user is hasbne unmuted**:white_check_mark:");

  return;

  }

});




 
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**mention the character**");
  if(!reason) return message.reply ("**Write down the reason for the expulsion**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I cannot dismiss someone above my rank, hoping to give the bot a high rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**mention the character**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**The rank of the bot must be higher than the rank of the person to be adopted**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

client.on('message', message => {
            var prefix = "+";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});





const perfix = '+';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**mention the character**`)
      if (!args[1]) return msg.reply(`**your message to send**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**The person must be identified**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setTitle(`**A new message for you from someone**`)
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**done the message  is hasbne sended <a:712106789776392242:743948799432589342>**`)
    }
});



client.on('message' , message => {
    ;
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`you dont have `**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`The person's band has been unlocked \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});



  
  client.on('message', message => {
       if (message.content.startsWith(prefix + 'bs')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});
  



   
   
   client.on('message', message => {
	var prefix = "+";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**<a:724673972930740264:743948087340564492> Success Moved All To Your Channel**`)


     }
       });
   
   
   

   client.on('message', msg => {  
    if (msg.content === '+help') {  
      msg.reply('** go chek your dm :white_check_mark: **');  
    }
  });
   
   

   
   
 
   
   client.on('message', message => {
    if (message.content.startsWith(prefix + 'roles')) {
 
        const Rank = message.guild.roles.map(e => e.toString()).join(" ");
 
        const RankList = new Discord.RichEmbed()
            .setTitle('➠ Roles.')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(Rank)
            .setFooter(message.guild.name)
        message.channel.send(RankList)
    }
});
   
client.on('message', message => {
	var prefix = "+";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
 }}});
  






client.on('message', message => {
if(message.content.startsWith("+slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!" 
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});



client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



    client.on('message',async message => {
    if(message.content.startsWith(prefix + "setbot")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **you dont have a permission**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **i dont have a permission**');
    message.channel.send('✅| **done**');
    message.guild.createChannel(`Bots : : [ ${message.guild.members.filter(m=>m.user.bot).size} ]` , 'voice').then(c => {
      console.log(`Done make room in: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(() => {
        c.setName(`Bots : [ ${message.guild.members.filter(m=>m.user.bot).size} ]`)
      },1000);
    });
    }
  });


client.on('message', msg => {
    if(msg.content.startsWith('+binv')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**chose bot**' + '``')
if(!user.bot) return msg.reply('`mention the bot`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});








client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { //DiamondCodes - [ X_KillerYT ]
    let pages = [`
**
        **__General orders__<a:735641780204339207:743394011745615943>**
**
『<a:735641780204339207:743394011745615943> +help | Show ALL My Command 
『<a:735641780204339207:743394011745615943> +ping | Show Your Ping 
『<a:735641780204339207:743394011745615943> +avatar [mention] | Avatar
『<a:735641780204339207:743394011745615943> If You Want Full log Add Room [+setlog]
『<a:735641780204339207:743394011745615943> +bot to show id bot etc...
『<a:735641780204339207:743394011745615943> +binv  show invite bot avec mention
『<a:735641780204339207:743394011745615943> +report to report a problems
『<a:735641780204339207:743394011745615943> +avatar server / to show avatar server discord
『<a:735641780204339207:743394011745615943> +avatar  / to show your avatar discord
『<a:735641780204339207:743394011745615943> +role  / show all roles in a server
『<a:735641780204339207:743394011745615943> +new /to epen ticket
『<a:735641780204339207:743394011745615943> +profile / to show your profile discord
『<a:735641780204339207:743394011745615943> +slots / casino
『<a:735641780204339207:743394011745615943> +user / show your info
**
  `
,`
        **__Admin orders__<a:741734395156627517:743394003487031368>**
**
『<a:741734395156627517:743394003487031368> +ban / ban member
『<a:741734395156627517:743394003487031368> +kick / kick member
『<a:741734395156627517:743394003487031368> +mute / mute punished with a written death for violating laws etc...
『<a:741734395156627517:743394003487031368> +unmute / to unmute punished 』
『<a:741734395156627517:743394003487031368> +embed / for repeat the message embed
『<a:741734395156627517:743394003487031368> +setlog /to vien audit log
『<a:741734395156627517:743394003487031368>​ +tAntihack / to activate security in your server
『<a:741734395156627517:743394003487031368> +clear / clear message in the room
**
  `
,`
        **__Fun orders__<a:722467337432858716:743395370540990524>**
**
『<a:722467337432858716:743395370540990524> +love
『<a:722467337432858716:743395370540990524> +hug
『<a:722467337432858716:743395370540990524> +slap
**
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message',  (message) => {
        if(message.content.startsWith('+love')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let loves = [
    'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
    'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
    'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
    'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
    'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
    'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
    'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
    'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
    'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
    'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
    'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
    'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
    'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
    'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
    'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
    'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
    'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
    'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
    'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
    'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
    'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
    'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
    'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
    'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
    'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
    'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
    'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
    'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
    'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
    'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} <a:722467337432858716:743395370540990524>  you love   ${user.username}!`,
      image: {
        url: loves[Math.floor(Math.random() * loves.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('+hug')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
	'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
	'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
	'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
	'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
	'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
	'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
	'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
	'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
	'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
	'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
	'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
	'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
	'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
	'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
	'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
	'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
	'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
	'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
	'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
	'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
	'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
	'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
	'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
	'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
	'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
	'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
    'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} you hug <a:722467337432858716:743395370540990524> ${user.username}!`,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('+slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
    'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
    'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
    'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
    'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
    'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
    'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
    'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
    'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
    'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
    'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
    'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
    'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
    'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
    'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
    'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
    'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
    'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
    'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
    'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} you slap <a:722467337432858716:743395370540990524> ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("If the reporting was a joke, the person reporting would be subjected to penalties")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});





client.on('message', message => {
	if (message.content === prefix + 'lock') {
		if (!message.channel.guild)
			return message.channel.send('**This command is only done on servers**');
		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return message.channel.send('**:x: - No Permissions ! **');
		message.channel
			.overwritePermissions(message.guild.id, {
				SEND_MESSAGES: false
			})
			.then(() => {
				message.channel.send(
					'** Channel is closed <:741032715826233417:743946283634524300>**'
				);
			});
	}
	if (message.content === prefix + 'unlock') {
		if (!message.channel.guild)
			return message.channel.send('**This command is only done on servers**');
		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return message.channel.send('**:x: - No Permissions ! **');
		message.channel
			.overwritePermissions(message.guild.id, {
				SEND_MESSAGES: true
			})
			.then(() => {
				message.channel.send(
					'** Chanenel is open <:741033177300336690:743946955540922539>**'
				);
			});
	}
});

 





























