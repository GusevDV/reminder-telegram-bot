import 'dotenv/config';
import { Telegraf } from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)

    // Using context shortcut
    ctx.leaveChat()
})

bot.on('text', (ctx) => {
    // Using context shortcut
    ctx.reply(`Hello, ${ctx.message.from.first_name}!`)
})

bot.on('callback_query', (ctx) => {
    // Explicit usage
    ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

    // Using context shortcut
    ctx.answerCbQuery()
})


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))