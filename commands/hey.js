module.exports = {
    name: 'hey',
    description: "Bubblebot responds to you.",
    execute(message, args) {
        var replies;

        if (message.author.id == 203261206969057280) { // Danielle
            replies = [
                "Hello Mother uwu",
                "Make way for smelly supreme!"
            ];
        } else if (message.author.id == 640046013729472512) { // Fionna
            replies = [
                "https://www.youtube.com/watch?v=2N6AcMv2OGE",
                "Here comes the clownmeister herself~",
                "HONK HONK :clown:",
                "Ew. It's youuuuu..."
            ];
        } else if (message.author.id == 270276933894275074) { // Janet
            replies = [
                "Hewwo! OwO!!",
                "pee pee poo poo",
                "Hi Janet! Still simping, I see...",
                "Haiiii! UwU"
            ];
        } else if (message.author.id == 616315469774716934) { // Angela
            replies = [
                "お早うございます",
                "こんにちは",
                "大丈夫ですか",
                "誰があんたを惑星に置いたのか",
                "The weeb cometh."
            ];
        } else if (message.author.id == 235835476655734785) { // Melody
            replies = [
                "Hi! Don't forget the sauce!",
                "Hiya! Please tell me you didn't hurt yourself today <3",
                "Hey Melody! Any funny work stories?",
                "Hiii! You're looking fabulous today!"
            ];
        } else if (message.author.id == 432020359164723200) { // Yvette
            replies = [
                "Hope you actually finished your homework lmao.",
                "Yoooo what's up Yvette?! :sunglasses:"
            ];
        } else if (message.author.id == 695345723591622758) { // Rebecca
            replies = [
                "Yo yo yoooo Rebeccaaaa."
            ];
        } else if (message.author.id == 689976696434458664) { // Victoria
            replies = [
                "Hola, chismosa!"
            ];
        } else if (message.author.id == 675421163903516698) { // Belane
            replies = [
                "Hey, Belane! Good to see you!"
            ];
        } else if (message.author.id == 689977303283007541) { // Muna
            replies = [
                "OH MY GOD! MUNA'S ON THE SERVER!!"
            ];
        } else {
            replies = ["Howdy!"];
        }

        var i = Math.floor(Math.random() * replies.length);
        message.reply(replies[i]);
    }
}