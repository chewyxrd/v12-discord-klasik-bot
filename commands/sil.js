const Discord = require('discord.js');

exports.run = async(message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.reply(`Silinecek mesaj miktarını belirtmelisin! (İstediğin kadar)`);
  message.delete();
  let chewyayi = Number(args[0]);
  let chewyilinen = 0;
  for (var i = 0; i < (Math.floor(chewyayi/100)); i++) {
   message.channel.bulkDelete(100).then(r => chewyilinen+=r.size);
    chewyayi = chewyayi-100;
  };
  if (chewyayi > 0)  message.channel.bulkDelete(chewyayi).then(r => chewyilinen+=r.size);
  message.channel.send(` **\`\`${args[0]}\`\` Adet Mesaj Silindi.**`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = { 
  name: 'sil', 
  description: 'Belirtilen miktarda mesajı siler.',
  usage: 'sil',
};