module.exports = {
    name: 'magic_conch',
    description: "Ask the Magic Conch.",
    execute(message, args, Discord) {
        const answers = [
            "Maybe someday.",
            "Nothing.",
            "Neither.",
            "I don't think so.",
            "No.",
            "Yes.",
            "Sure?",
            "Go for it",
            "What do the stars say?",
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes – definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful tbh.",
            "Sounds like an iss-YOU not an iss-ME",
            "You're really gonna ask me that?",
            "Try asking again."
        ];

        var i = Math.floor(Math.random() * answers.length);
        var answer = answers[i];

        const embed = new Discord.MessageEmbed()
        .setColor('#9B83A2')
        .setTitle("All Hail Magic Conch!!")
        .setDescription("Ask your question with a '?' before it...")
        .setImage('https://static.wikia.nocookie.net/spongebob/images/9/9b/Club_SpongeBob_151.png/revision/latest?cb=20200208100215');

        const reply = new Discord.MessageEmbed()
        .setColor('#9B83A2')
        .setTitle("\"" + answer + "\"")
        .setImage('https://i.pinimg.com/originals/c1/3d/0b/c13d0bdd3ab710d7285629f284a43d4d.png');

        let filter = m => m.author.id === message.author.id;
        
        message.channel.send(embed).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 300000,
                errors: ['time']
         })
        .then(message => {
            message = message.first();
            if (message.content.startsWith('?')) {
                message.channel.send(reply);
             } else {
                 message.channel.send(`Start your question with a '?' and try again.`);
            } 
        })
        .catch(collected => {
            message.channel.send('Nevermind then...');
        });
    })
    }
}