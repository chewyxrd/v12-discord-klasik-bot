const Discord = require('discord.js')

exports.run = function(client, message, args) {
const leise = message.mentions.users.first()
let user;
if (message.mentions.users.first())  {user = message.mentions.users.first();}
 else {user = message.author;}
return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${user.tag}** Avatarın;`)
.setImage(user.displayAvatarURL()))
                            
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
  };
