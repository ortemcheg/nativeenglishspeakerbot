import { Bot, webhookCallback } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.on("message", async (ctx) => {
  await ctx.reply("Hi there!");
});

export default webhookCallback(bot, "https");
