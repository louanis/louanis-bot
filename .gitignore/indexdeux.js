const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Command: 🐢help");
	console.log("Connectedç");
});

bot.login("NDU2NDI1MTkzODg0MzUyNTI3.DgfPVg.ytC_pP_t4qtf-xfC-hFKJ93Zwu4")
