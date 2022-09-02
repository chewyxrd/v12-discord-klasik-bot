const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('YETKİLİ ID')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`**⚠️ • Bu Komutu Kullanabilmek İçin \`Jail Hammer\` Yetkisine Sahip Olman Lazım**`))
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Chewy `, message.author.avatarURL()).setDescription("**:x: Bir Kişi Etiketlemelisin**"))
   }
   
   let jail = message.guild.roles.cache.find(r => r.id === '811988683019780156')//JAİL ROL GİR

   
   let tag = 'Jailed'
   let Jaillog = 'JAİL LOG KANAL ID'

   if(!Jaillog) {
     return message.channel.send(new Discord.MessageEmbed().setAuthor(`Chewy `, message.author.avatarURL()).setColor("BLACK").setDescription("**⚠️ • Jail Kanal Ayarlanmamış**"))
     
   }
   
   if(!jail) {
       return message.channel.send(new Discord.MessageEmbed().setAuthor(`Chewy `, message.author.avatarURL()).setColor("BLACK").setDescription("**⚠️ • Jail Rolü Ayarlanmamış**"))
   }

   let jail2 = message.guild.member(member)

   let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Chewy `, message.author.avatarURL()).setDescription(`**⚠️ • Sebep Belirtmelisin**`))

    message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Chewy`, message.author.avatarURL()).setThumbnail("https://media1.giphy.com/media/l3vQYLjGxvQewNUc0/giphy.gif").setDescription(`**⚠️ • ${message.author} Kullanıcıyı Kız Olarak Kayıt Etmek İstediğinize Emin Misiniz ? Lütfen __evet (e)__ veya __hayır (h)__ İle Cevap Verin.\n\n\`30\` Saniye İçerisinde İptal Edilcektir**`))
  let leise = false; 
  while (!leise) {
    const response = await message.channel.awaitMessages(Chewyxrd => Chewyxrd.author.id === message.author.id, { max: 1, time: 30000 }); 
    const Chewy = response.first().content
    if (Chewy == 'hayır' || Chewy == 'h') return message.channel.send(new Discord.MessageEmbed().setAuthor(`Chewy `, message.author.avatarURL()).setColor("BLACK").setThumbnail("https://media1.giphy.com/media/l3vQYLjGxvQewNUc0/giphy.gif").setDescription("**İşlem İptal Edildi**"))
    if (Chewy !== 'evet' && Chewy !== 'e') { 
      message.channel.send(new Discord.MessageEmbed().setAuthor(`Chewy`, message.author.avatarURL()).setColor("BLACK").setThumbnail("https://media1.giphy.com/media/l3vQYLjGxvQewNUc0/giphy.gif").setDescription("**Lütfen Sadece (e) evet Veya (h) hayır İle Cevap Verin**"))
    } 
    if (Chewy == 'evet' || Chewy == 'e') leise = true 
  } 
  
      db.add(`jailChewy.${message.author.id}`, 1)
    let jailChewy = db.fetch(`jailChewy.${message.author.id}`);
  
   member.roles.set(["JAİL ROL ID"])
   jail2.setNickname(`${tag}`)
   let embed = new Discord.MessageEmbed()
   .setAuthor(`Chewy `, message.author.avatarURL())
   .setColor('BLACK')
   .setDescription(`**Jail'e Atılan Kullanıcı : ${member} \nSebep : ${sebep} \nJail'e Atan Yetkili : ${message.author} \nYetkilinin Toplam Jaile Attığı Kişi : \`${jailChewy}\`**`)
   message.channel.send(embed);
  
    message.guild.channels.cache.get(Jaillog).send(new Discord.MessageEmbed().setAuthor(`Chewy `, message.author.avatarURL()).setColor("BLACK").setDescription(`${member} Adlı Üye Jaile Atıldı\nJaile Atan Yetkili ${message.author}\nSebep : ${sebep}\nYetkinin Toplam Jaile Attığı Üye Sayısı : \`${jailChewy}\``));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'jail',
    description: 'Jail atar.',
    usage: 'jail'
};


