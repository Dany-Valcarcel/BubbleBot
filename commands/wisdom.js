module.exports = {
    name: 'wisdom',
    description: "Wisdom Dispenser.",
    execute(message, args) {
        var wisdomArray = [
            "To spot the expert, pick the one who predicts the job will take the longest and cost the most.",
             "The other line always moves faster.",
             "Never play leapfrog with a unicorn.",
             "If you're feeling good, don't worry, you'll get over it.",
             "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong.",
             "A meeting is an event at which the minutes are kept and the hours are lost.",
             "Friends come and go, but enemies accumulate.",
             "If you try to please everybody, nobody will like it.",
             "A short cut is the longest distance between two points.",
             "The chance of a piece of bread falling with the buttered side down is directly proportional to the cost of the carpet.",
             "Anything you try to fix will take longer and cost more than you thought.",
             "When a broken appliance is demonstrated for the repairman, it will work perfectly.",
             "Everyone has a scheme for getting rich that will not work.",
             "When in doubt, mumble. When in trouble, delegate.",
             "Nature always sides with the hidden flaw.",
             "If everything seems to be going well, you obviously don't know what the heck is going on.",
             "You will always find something in the last place you look.",
             "No matter how long or hard you shop for an item, after you've bought it, it will be on sale somewhere cheaper.",
             "Build a system that even a fool can use, and only a fool will use it.",
             "After all is said and done, a heck of a lot more is said than done.",
             "Never argue with a fool, people might not know the difference.",
             "When all else fails, read the instructions.",
             "Logic is a systematic method of coming to the wrong conclusion with confidence.",
             "An apple a day keeps anyone away if you throw it hard enough",
        ];

        var i = Math.floor(Math.random() * wisdomArray.length);
        message.channel.send('My wisdom to you: ' + wisdomArray[i]);
    }
}