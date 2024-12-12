const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const customResponses = [
    {
        message: "مرحبًا",  
        response: "مرحبًا بك في السيرفر! كيف يمكنني مساعدتك اليوم؟"
    },
    {
        message: "مساعدة",
        response: "إذا كنت بحاجة إلى مساعدة، يمكنك زيارة السيرفر عبر الرابط التالي."
    },
    {
        message: "كيف الحال؟",
        response: "أنا بخير، شكرًا لسؤالك! كيف يمكنني مساعدتك؟"
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
        const replyMessage = customResponse ? customResponse.response : "مرحبًا! كيف يمكنني مساعدتك؟";

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('انضم للسيرفر')
                .setStyle(ButtonStyle.Link)
                .setURL(serverLink)
        );

        await message.author.send({
            content: replyMessage,
            components: [row]
        });
    }
});

client.login('توكن_البوت');  //غير توكن البوت هنااااا  
