import { Bot, Context, session, SessionFlavor, webhookCallback } from "grammy";
import { freeStorage } from "@grammyjs/storage-free";

interface SessionData {
  messageCount: number;
}

type MyContext = Context & SessionFlavor<SessionData>;

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot<MyContext>(token);

bot.use(
  session({
    initial: () => ({ messageCount: 0 }),
    storage: freeStorage<SessionData>(bot.token),
  })
);

bot.on("message", async (ctx) => {
  ctx.session.messageCount++;
  await ctx.reply(
    `${ctx.session.messageCount}. ${ctx.from.first_name} said "${ctx.message.text}"`
  );
});

export default webhookCallback(bot, "https");
