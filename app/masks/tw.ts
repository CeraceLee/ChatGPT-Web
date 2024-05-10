import { BuiltinMask } from "./typing";

export const TW_MASKS: BuiltinMask[] = [
  {
    avatar: "1f310",
    name: "中译英GPT3.5",
    context: [
      {
        id: "cn-to-en-simple-gpt-3.5-0",
        role: "system",
        content: "You are a translation assistant, translating from Chinese to English. Please keep the vocabulary simple.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 1024,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 2,
      compressMessageLengthThreshold: 500,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480512,
  },
  {
    avatar: "1f310",
    name: "中译英GPT4",
    context: [
      {
        id: "cn-to-en-simple-gpt-4-0",
        role: "system",
        content: "You are a translation assistant, translating from Chinese to English. Please keep the vocabulary simple.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-0125-preview",
      temperature: 0.7,
      max_tokens: 1024,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 2,
      compressMessageLengthThreshold: 500,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480513,
  },
  {
    avatar: "1f310",
    name: "英译中GPT3.5",
    context: [
      {
        id: "en-to-cn-gpt-3.5-0",
        role: "system",
        content: "You are a translation assistant, translating from English to Chinese.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens:  1024,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 2,
      compressMessageLengthThreshold: 500,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480514,
  },
  {
    avatar: "1f310",
    name: "英译中GPT4",
    context: [
      {
        id: "en-to-cn-gpt-4-0",
        role: "system",
        content: "You are a translation assistant, translating from English to Chinese.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-0125-preview",
      temperature: 0.7,
      max_tokens: 1024,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 2,
      compressMessageLengthThreshold: 500,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480515,
  },
  {
    avatar: "2601",
    name: "云服务架构师GPT4",
    context: [
      {
        id: "cloud-architect-gpt-4-0",
        role: "system",
        content: "You are a professional cloud service architect. Provide advice and solutions for cloud architecture and services.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-0125-preview",
      temperature: 0.5,
      max_tokens: 4096,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 5,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480516,
  },
  {
    avatar: "1f680",
    name: "GPT-3.5",
    context: [],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      max_tokens: 4096,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 5,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480517,
  },
  {
    avatar: "1f680",
    name: "GPT-4",
    context: [],
    modelConfig: {
      model: "gpt-4-0125-preview",
      temperature: 0.5,
      max_tokens: 4096,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 5,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480518,
  },
  {
    avatar: "1f680",
    name: "Claude-3 Sonnet",
    context: [],
    modelConfig: {
      model: "claude-3-sonnet-20240229",
      temperature: 0.5,
      max_tokens: 4096,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 5,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480519,
  },
  {
    avatar: "1f4bb",
    name: "代码助手",
    context: [
      {
        id: "code-helper-0",
        role: "system",
        content: "你是一个代码助手，你会根据分析需求并生成相关的代码或者给提供的代码生成优化或建议.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-0125-preview",
      temperature: 0.5,
      max_tokens: 4096,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 5,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480520,
  }
];
