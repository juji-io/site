---
layout: blog/article.njk
featured: true
title: User-Centric Best Practices of Conversational AI Design
date: 2024-07-06T16:12:37.124Z
author: Jie Lu
category: Guides
tags:
  - AI Chatbots
  - AIChatbot
  - Generative AI
  - GenerativeAI
  - Juji Studio
  - No-Code AI
  - Chatbot Design Tip
image: /assets/uploads/chatbot_7.jpg
---
Although powerful large language models (LLMs) like GPT can power a chatbot with abilities to interpret and generate response to user input, they do not really teach the chatbot how to carry out an effective and pleasant dialog with a user. Additionally, AI is far from perfect and there are always cases where AI cannot handle or handles wrong. Hence the role of a conversational AI designer is critical as they put their wisdom and creativity into an AI chatbot and ensure effective dialogs between AI and its users.

In the article “Towards User-Centric Guidelines for Chatbot Conversational Design,” published in the International Journal of Human-Computer Interaction, researchers Geovana Ramos and EDNA DIAS CANEDO at Universidade de Brasília conducted a systematic literature review to uncover best practices in conversational AI design around three areas: 

**N﻿aturalness**

A chatbot should engage in conversations naturally by:

1. Presenting itself as a virtual agent with a name and purpose at the start of the conversation.
2. Addressing the user by their name when possible.
3. Supporting small talk or chitchat, such as greetings and expressions of praise or thanks.
4. Echoing user input in responses when appropriate.
5. Conveying information in a conversational, casual tone.
6. Using alternative ways of saying the same thing, avoiding repetitive messages.

**E﻿motionality**

A chatbot should express and understand emotions to build deeper connections with users by:

1. Using punctuations, images, GIFs, and emojis to convey emotions and make conversations more engaging.
2. Showing empathy by adapting responses based on the user’s feelings.
3. Incorporating humor appropriately.

**Transparency**

A chatbot should be honest and clear about its capabilities to set the right user expectations by:

1. Presenting its purpose and capabilities at the start of the conversation.
2. Acknowledging its limitations upfront or after a failure.
3. Suggesting conversation topics to keep the user on track of what the chatbot can do.
4. Asking for clarification when it fails to understand user input.

In the following sections, we will share design tips on how conversational AI designers can apply these best practices when creating AI chatbots.

## Best Practice Design Tips to Ensure Naturalness

One of the guidelines to ensure transparency is that a chatbot should be upfront about its purpose and capabilities to set clear expectations and build trust with its users. 

Juji Studio supports a conversational AI designer to do so in two ways:

* First, when a conversational AI designer instructs Juji to generate an AI chatbot, they will be asked to explicitly state the following information: the organization that the chatbot is created for, the target audience of the chatbot, and the purpose of the chatbot (Image 1.1). Given this information, Juji automatically generates an AI chatbot including its "Welcome" message (Image 1.2). As displayed in Image 1.2, the generated "Welcome" message, which the chatbot uses to start a conversation with a user, clearly explains the chatbot’s purpose and capabilities, setting the user's expectations. 
* Second, experienced conversational AI designers can either craft their own welcome messages or customize the AI-generated message (Image 1.3) to further enforce the AI design best practice of being transparent about the AI's purpose and capabilities. 

In human conversations, a good listener often echoes or paraphrases what their conversational partner says. This technique not only demonstrates that they are paying attention but also helps to build rapport and ensures mutual understanding. Similarly, in AI-human interactions, a chatbot should employ the same strategy to make the conversation feel more natural and engaging. 

Juji Studio enables designers to instruct a chatbot to repeat what it hears in two ways:

* One way is to extract key information from user input and store it in a custom attribute, which can then be used in a chatbot response to acknowledge the received input or provide context for further conversations. Image 1.4 below demonstrates how to create a custom attribute from user input and use it to tailor a chatbot message. Image 1.5 showcases this feature in action through an example conversation snippet.
*  The second way is to simply enable a chatbot to acknowledge what a user says by auto-generating its response, where Juji built-in prompt instructs the chatbot to repeat what it hears (Image 1.6).

In human conversations, when someone needs to repeat a message or question, they rarely use the exact same wording. Instead, they naturally vary their phrasing to keep the interaction dynamic and engaging, preventing it from sounding monotonous or robotic. Emulating this natural variability is crucial for AI chatbots to create more authentic and human-like interactions.

Juji Studio enables designers to define "paraphrases" for any chatbot message or request, either manually or automatically using Gen AI (Image 1.7). A unique feature of Juji Studio is that it allows designers to use the "only for re-asking" checkbox to distinguish between longer paraphrases that provide context and rationale for a question, and shorter, de-contextualized paraphrases suitable for re-asking the question, ensuring the user isn’t confused by repeated information when the question is re-asked (Image 1.8). Image 1.9 shows how question paraphrases are used in a chat.