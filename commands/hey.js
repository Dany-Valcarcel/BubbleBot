module.exports = {
    name: 'hey',
    description: "Bubblebot responds to you.",
    execute(message, args) {
        var replies;

        if (message.author.id == 203261206969057280) { // Danielle
            replies = [
                "Hello, Danielle!"
            ];
        } else if (message.author.id == 640046013729472512) { // Fionna
            replies = [
                "https://www.youtube.com/watch?v=2N6AcMv2OGE",
                "Hiya, Fifi"
                "Hey, how are ya?"
            ];
        } else if (message.author.id == 270276933894275074) { // Janet
            replies = [
                "Make way for Jan!",
                "Hi Jan! You look fabulous today!",
                "Haiiii! UwU"
            ];
        } else if (message.author.id == 616315469774716934) { // Angela
            replies = [
                "お早うございます",
                "こんにちは",
                "大丈夫ですか",
                "誰があんたを惑星に置いたのか",
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
                "Hope you actually finished your homework lol,
                "Yoooo what's up Yvette?! :sunglasses:"
            ];
        } else if (message.author.id == 695345723591622758) { // Rebecca
            replies = [
                "Yo yo yoooo Rebecca."
            ];
        } else if (message.author.id == 689976696434458664) { // Victoria
            replies = [
                "Hola, Vicky!"
            ];
        } else if (message.author.id == 675421163903516698) { // Belane
            replies = [
                "Hey, Belane! Good to see you!"
            ];
        } else if (message.author.id == 689977303283007541) { // Muna
            replies = [
                "HI MUNA!!
            ];
        } else {
            replies = ["Howdy!"];
        }

        var i = Math.floor(Math.random() * replies.length);
        message.reply(replies[i]);
    }
}
