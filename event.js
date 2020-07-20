    //Database reference - Firebase
    const dbCount = database.ref(`Configurações/${member.guild.id}/System/countDown`).once('value', async function(countref){

    const infoCount = countref.val();
    
    //If value database is null, return null;
    if(infoCount == null) return;
    
    //get channel for change topic/V12
    const channel = client.channels.cache.get(infoCount.channel);
   
    //Put in your index
    //client.getEmoji = (emoji) => client.emojis.find(x => x.name == emoji);
    //How to use: client.getEmoji('name emoji');
   
          function example(_números) {
            _números = _números.toString();
           let texto = ``, números = { 1: `${client.getEmoji('name emoji')}`,
             2: `${client.getEmoji('name emoji')}`, 3: `${client.getEmoji('name emoji')}`,
               4: `${client.getEmoji('name emoji')}`,5: `${client.getEmoji('name emoji')}`,
                6: `${client.getEmoji('name emoji')}`, 7: `${client.getEmoji('name emoji')}`,
                 8: `${client.getEmoji('name emoji')}`, 9: `${client.getEmoji('name emoji')}`, 0:`${client.getEmoji('name emoji')}` };
             
            for(let i = 0; i < _números.length; i++) texto += '' + números[parseInt(_números[i])] + '';
          
           return texto;
          }
          
          const messageTopic = infoCount.mensagem.replace('{count}', example(member.guild.members.cache.size));
           
          channel.setTopic(messageTopic, `Change countdown ${client.user.username}`);
    });
