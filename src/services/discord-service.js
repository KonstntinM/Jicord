const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("YOUR WEBHOOK URL");

const hook = new Webhook(process.env.DISCORD_WEBHOOK_URL)

async function sendMessage (message) {
    hook.send(message)
}