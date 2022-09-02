const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if(!message.member.roles.cache.has("YETKİLİ ID") && !message.member.hasPermission("ADMINISTRATOR"))

    return message.channel.send(
      "⛔ Bu komutu kullanabilmek için `Emojileri yönet` yetkisine sahip olmalısınız"
    );
  let LİNK = args[0];
  let İSİM = args[1];
  let guild = message.guild;
  if (!LİNK)
    return message.channel.send("Emojinin alınacağı linki girmelisin.");
  if (!İSİM) return message.channel.send("Emojinin ismini belirlemedin");

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Emoji Eklendi", message.guild.iconURL)
    .setDescription(` **${İSİM} İsmiyle Yeni Bir Emoji Oluşturuldu.**`)
    .setFooter(`Komutu kullanan yetkili : ${message.author.username}`);

  guild
    .emojis.create(`${LİNK}`, `${İSİM}`)
    .then(emoji => message.channel.send(embed));
  message.react("✅").catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["addemoji", "emojioluştur", "ee"],
  permLevel: 0
};
exports.help = {
  name: "emojiekle",
  description: "Sunucuya emoji eklersiniz",
  usage: "emojiekle <link> <isim>"
};
