---
layout: blog/article.njk
featured: false
title: 5 Design Tips for Conversational AI Designers to Make a Proactive AI Agent
date: 2024-04-27T01:54:34.708Z
author: Michelle Zhou
category: Guides
image: /assets/uploads/chatbot_5.jpg
---
Recently, we have heard more people, especially top technology experts, talk about creating "proactive" AI agents. In a recent [video](https://youtu.be/wM5837pVh1g?feature=shared), Andrew Ng discussed how “AI agentic workflows” will drive massive AI progress. He listed various agentic design patterns to achieve various purposes, such as reflection, planning, and tool use. No matter whether an agent is used in reflection or planning tasks, the shared pattern is that: the task to be accomplished always requires more than a single-turn of human-agent exchange (Andrew calls it zero-shot). There are always multi-turn Agent-Human interactions, during which both agent and humans can take initiatives and work together toward a common goal. Such an agentic workflow described by Andrew is also known as mixed-initiative systems, which Juji has been focusing on enabling to help organizations automate high-touch human engagements. Example high-touch engagements include academic advising, career development, and healthcare counseling, where both humans and AI agents must work proactively and collaboratively. 

Designing a proactive AI agent requires skills. In this article, we present 5 design tips for conversational AI designers to make effective proactive AI agents. In each design tip, we use concrete examples to explain the desired AI agent behavior and show the corresponding Juji features you can use to enable such a behavior. 

## Tip 1: Make an articulate AI agent

A proactive agent doesn’t just passively respond to user questions. Rather, it actively engages with a user and guides the user toward an agenda (e.g., tutoring the user to learn a skill or coaching the user on coming up with an individualized career development plan). During such an engagement, just like a good human agent, a proactive agent should be articulate in expressing itself, no matter whether it asks or answers a question. Below are two situations where a proactive agent should be articulate in making a conversation more natural and fluent. 

(1) In many applications including interviewing and counseling, a proactive AI agent often needs to ask user questions to elicit necessary information before guiding the user toward a goal. Just like a human interviewer, an effective AI agent should be able to ask the SAME question in different ways depending on the context. The image below shows a conversation where an AI agent must repeat its question when the user didn't answer the question. 

![A conversation where an AI agent must repeat its question when the user didn't answer the question](/assets/uploads/design_tips_1.1.png "Image 1.1")

Humans will never re-ask the question using exactly the same expression. Neither should the AI agent. The image below shows that the AI agent re-asks the same question in an alternative expression, which makes the conversation much more natural. 

![A conversation where an AI agent re-asks the same question in an alternative expression](/assets/uploads/design_tips_1.2.png "Image 1.2")

A conversational AI designer can use Juji Studio to customize an AI agent’s message, including paraphrasing a question either manually or automatically using generative AI.

![Use Juji Studio to customize an AI agent’s message, including paraphrasing a question either manually or automatically using generative AI](/assets/uploads/design_tips_1.3.png "Image 1.3")

Furthermore, for each expression, a conversational AI designer can indicate whether it is only used for re-asking, giving you fine-grained control to make an AI agent articulate. 

![A conversational AI designer can indicate whether it is only used for re-asking](/assets/uploads/design_tips_1.4.png "Image 1.4")

(2) In a situation where a proactive AI agent must ask a series of questions to elicit information, the AI agent should also be able to ask these questions in a conversational tone and with smooth transitions from one question to the next, similar to what an articulate human interviewer would do. 

In Juji Studio, conversational AI designers can use generative AI to auto-generate a conversation flow with multiple questions, which you may edit with more human touch as needed. 

![Use generative AI to auto-generate a conversation flow with multiple questions](/assets/uploads/design_tips_1.5.png "Image 1.5")

The result is a fluent conversation flow that resembles those of human-human conversations.

![A fluent conversation flow](/assets/uploads/design_tips_1.6.png "Image 1.6")

## T﻿ip 2: Make a well-prepared AI agent

Human conversations are highly diverse and rarely single threaded, which require active listening, empathy, and negotiation skills to keep a conversation going and achieve the intended communication goals. Just like a good human conversationalist, a proactive AI agent should also be well-prepared to handle diverse conversation situations gracefully. Below we list several frequent conversation situations where a proactive agent should be well-prepared to handle them. 

(1) Handle user reciprocal questions. In a human-human conversation, humans often ask reciprocal questions such as "What's yours" and "what about you". A well-prepared AI agent should also handle user reciprocal questions. 

![The user asks a reciprocal question](/assets/uploads/design_tips_2.1.png "Image 2.1")

(2) Handle user clarification questions. Different people have different background and knowledge. A perfectly clear question to one person may be difficult for another to understand. So prepare your AI agent to answer user clarification questions during a conversation. 

![The user asks a clarification question](/assets/uploads/design_tips_2.2.png "Image 2.2")

(3) Handle user excuses. Just like in human-human conversations, people may dodge a question by giving various excuses. A proactive AI agent should also be prepared to handle diverse user excuses to accomplish an agenda (e.g., eliciting quality information from a target audience).

![The user makes an excuse](/assets/uploads/design_tips_2.3.png "Image 2.3")

(4) Handle related user questions in context. During human-human conversations, people may ask relevant questions to a topic under discussion. A proactive AI agent should also anticipate relevant user questions and be prepared to answer the questions in a conversation. 

![The user asks a related question](/assets/uploads/design_tips_2.4.png "Image 2.4")

Feel overwhelmed that you have to handle all the above situations and don't know how? No worries, conversational AI designers can use Juji Studio to prepare an AI agent to handle all the situations mentioned effortlessly 100% #NOCODE. For example, A designer can easily toggle options to decide whether to accept a user's "I don't know" excuse or gibberish input in a specific conversation topic. 

![Toggle options to decide whether to accept a user's "I don't know" excuse or gibberish input ](/assets/uploads/design_tips_2.5.png "Image 2.5")

A designer can also upload one or more proprietary data and then ask Juji to generate a set of Q&As automatically to handle user questions related to a topic.

![Use AI to auto-generate a set of Q&As to handle user questions related to a topic](/assets/uploads/design_tips_2.6.png "Image 2.6")

## T﻿ip 3: Make a responsible AI agent

Every AI agent is designed with a purpose. A proactive AI agent must act responsibly to ensure task completion and goal fulfillment. So how can conversational AI designers instill a sense of responsibility into an AI agent? From our own experiences, we have found there are at least three types of responsibility that a proactive AI Agent should have. 

(1) Ask follow-up questions to deepen a conversation and accomplish the goal. In many applications such as interviewing and counseling, a proactive AI agent typically asks open-ended questions to elicit richer information. However, users may not cooperate and instead provide overly general or vague information. In such a situation, a responsible AI agent should ask follow-up questions to deepen the conversation, ensuring that relevant details are gathered. The two images below show an example where the AI agent automatically generates follow-up questions to elicit must-have and nice-to-have information based on the user's responses.

![The AI agent asks follow-up questions](/assets/uploads/design_tips_3.1.png "Image 3.1")

![Use AI to auto-generate follow-up questions](/assets/uploads/design_tips_3.2.png "Image 3.2")

(2) Stick to an agenda for task completion. Every proactive AI agent should have an agenda (aka workflow) that drives the conversation toward task completion. However, most conversations often digress. A responsible AI agent should manage the digressions/distractions and stick to the agenda. The following image provides an example of a conversation where the AI agent handles a user digression gracefully and then goes back to the agenda. Conversational AI designers don't need to do anything but directly leverage Juji Studio's built-in capabilities for AI agents to stick to their agenda automatically.

![The AI agent sticks to the agenda by re-asking the question](/assets/uploads/design_tips_3.3.png "Image 3.3")

(3) Be a good human collaborator. AI is far from perfect. There will always be questions that an AI agent can’t answer or tasks it can’t complete. A responsible AI agent should collaborate with human teammates when necessary. For example, the image below shows the interface in Juji Studio where an AI agent flags unanswered questions or unfinished tasks in a to-do list for humans to review and to improve the AI agent's performance over time.  

![The AI agent flags unanswered questions in a to-do list](/assets/uploads/design_tips_3.4.png "Image 3.4")

## T﻿ip 4: Make a perceptive AI agent