const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook('https://discordapp.com/api/webhooks/760133416213282836/HXlxxtAcpgkAh-FeeWK0KQPH4m3baeKQxQNI7hfg0JNbNG-D3lrjNhbBKiCyJ0wSRUi_')

hook.setUsername('Redaktionsroboter')
hook.setAvatar('https://cdn.worldvectorlogo.com/logos/jira-1.svg')

async function sendMessage (message) {
    hook.send(message)
}

async function sendAttachment (attachment) {

    const message = new MessageBuilder()
        .setAuthor(attachment.author.name, attachment.author.avatar)
        .setTitle(attachment.title)
        .addField(attachment.production.title, attachment.production.description)
        .setURL(attachment.production.url)

    sendMessage(message)
}

module.exports = {
    sendAttachment
}