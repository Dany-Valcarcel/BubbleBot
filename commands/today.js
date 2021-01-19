const { DataResolver } = require("discord.js");

module.exports = {
    name: 'today',
    description: "Tells the day, with whatever holiday.",
    execute(message, args) {
        let day = new Date();
        let d = day.getDate();

        var months = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"];
        let m = months[day.getMonth()];
        
        let y = day.getFullYear();
        message.channel.send("Today is " + m + " " + d + ", " + y + "!");
    }
}