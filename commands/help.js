module.exports = {
    name: 'help',
    aliases: ['h', 'helpme'],
    description: "Lists Bubblebot's commands!",
    execute(message, args, Discord) {
        const embed = new Discord.MessageEmbed()
        .setColor('#58D68D')
        .setTitle("Hey there, I'm Bubblebot!")
        .setDescription('Here are my commands. All of them start with "+"!')
        .addFields(
            {name: '+help', value: 'What you are looking at right now! List of Bubblebot commands. \
            \n Can also be called using +h or +helpme'},
            {name: '+marco', value: 'Polo!'},
            {name: "+wisdom", value: 'I bestow upon you some words of wisdom. They may or may not be helpful...'},
            {name: "+hi", value: "Say hi and I'll say something back! \
            \n Can also be called using +hey or +hi bubblebot"},
            {name: "+conch", value: "Ask the magic conch and recieve an answer!\
            \n Can also be called using +ask or +magicconch"}
            );

        message.channel.send(embed);
    }
}