const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const customResponses = [
    {
        message: "الرساله_الي_تحددها",  
        response: "الرد"
    },
    {
        message: "الرساله_الي_تحددها",
        response: "الرد"
    },
    {
        message: "الرساله_الي_تحددها",
        response: "الرد"
    }
];

const serverLink = 'https://discord.gg/رابط_السيرفر';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.type === 'DM') {
        const customResponse = customResponses.find(response => message.content.includes(response.message));
        
        const replyMessage = customResponse 
            ? customResponse.response 
            : "مرحبًا! كيف يمكنني مساعدتك؟";

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('انضم للسيرفر')
                .setStyle(ButtonStyle.Link)
                .setURL(serverLink)
        );

        try {
            await message.author.send({
                content: replyMessage,
                components: [row]
            });
        } catch (error) {
            console.error("Error sending DM:", error);
        }
    }
});

client.login('توكن_البوت');
