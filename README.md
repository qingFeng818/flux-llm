# flux-llm-sdk

"" 大模型 SDK

## 📖 使用文档

- [文心一言](./doc/ernie.md)
- [通义千问](./doc/qwen.md)
- [讯飞星火](./doc/spark.md)
- [混元助手](./doc/hunyuan.md)
- [Minimax](./doc/minimax.md)
- [ImagineArt](./doc/vyro.md)

## 📦 安装

要安装 `flux-llm-sdk`，请运行以下命令:

```bash
$ pnpm install flux-llm-sdk
```

## 👋 使用

在这里获取你的 [accessToken](https://aistudio.baidu.com/index/accessToken) 值。

```ts
import { ErnieAI } from 'flux-llm-sdk';

const client = new ErnieAI({
  apiKey: 'My API Key', // defaults to process.env["EB_API_KEY"]
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    model: 'ernie-bot-turbo',
    messages: [{ role: 'user', content: 'Say this is a test' }],
  });
}

main();
```

### 支持流式

使用与 OpenAI 的 SDK 完全一致。

```ts
import { ErnieAI } from 'flux-llm-sdk';

const client = new ErnieAI();

async function main() {
  const stream = await client.chat.completions.create({
    model: 'ernie-bot-turbo',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();
```
