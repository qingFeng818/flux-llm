import { ErnieAI } from '../../src';

const ernie = new ErnieAI();

async function main() {
  const chatCompletion = await ernie.chat.completions.create({
    model: 'ernie-bot',
    messages: [{ role: 'user', content: '帮我生成一张 Dog 的图片' }],
  });
  
  console.log(chatCompletion.choices[0].message.content);
}

main();
