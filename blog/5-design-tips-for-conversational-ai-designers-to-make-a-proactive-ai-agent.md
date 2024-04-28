---
layout: blog/article.njk
featured: false
title: 5 Design Tips for Conversational AI Designers to Make a Proactive AI Agent
date: 2024-04-27T01:54:34.708Z
author: Michelle Zhou
category: Guides
image: /assets/uploads/chatbot_5.jpg
---
Recently, we have heard more people, especially top technology experts, talk about creating "proactive" AI agents. In a recent [talk](https://youtu.be/wM5837pVh1g?feature=shared), Andrew Ng discussed how “AI agentic workflows” will drive massive AI progress. He listed various agentic design patterns to achieve various purposes, such as reflection, planning, and tool use. No matter whether an agent is used in reflection or planning tasks, the shared pattern is that: the task to be accomplished always requires more than a single-turn of human-agent exchange (Andrew calls it zero-shot). There are always multi-turn Agent-Human interactions, during which both agent and humans can take initiatives and work together toward a common goal. Such an agentic workflow described by Andrew is also known as mixed-initiative systems, which Juji has been focusing on enabling to help organizations automate high-touch human engagements. Example high-touch engagements include academic advising, career development, and healthcare counseling, where both humans and AI agents must work proactively and collaboratively.

Designing a proactive AI agent requires skills. In this article, we present 5 design tips for conversational AI designers to make effective proactive AI agents. In each design tip, we use concrete examples to explain the desired AI agent behavior and show the corresponding Juji features you can use to enable such a behavior. 

## Tip 1: Make an articulate AI agent

A proactive agent doesn’t just passively respond to user questions. Rather, it actively engages with a user and guides the user toward an agenda (e.g., tutoring the user to learn a skill or coaching the user on coming up with an individualized career development). During such an engagement, just like a good human agent, a proactive agent should be articulate in expressing itself, no matter whether it asks or answers a question. Below are two situations where a proactive agent should be articulate in making a conversation more natural and fluent. 

(1) In many applications including interviewing and counseling, a proactive AI agent often needs to ask user questions to elicit necessary information before guiding the user toward a goal. Just like a human interviewer, an effective AI agent should be able to ask the SAME question in different ways depending on the context. Image 1.1 below shows a conversation where an AI agent must repeat its question when the user didn't answer the question. 

![A conversation where an AI agent must repeat its question when the user didn't answer the question](/assets/uploads/design_tips_1.1.png "Image 1.1")

Humans will never re-ask the question using exactly the same expression. Neither should the AI agent. Image 1.2 below shows that the AI agent re-asks the same question in an alternative expression, which makes the conversation much more natural. 

![A conversation where an AI agent re-asks the same question in an alternative expression](/assets/uploads/design_tips_1.2.png "Image 1.2")

A conversational AI designer can use Juji Studio to customize an AI agent’s message, including paraphrasing a question either manually or automatically using generative AI (Image 1.3 below).

![Use Juji Studio to customize an AI agent’s message, including paraphrasing a question either manually or automatically using generative AI](/assets/uploads/design_tips_1.3.png "Image 1.3")

Furthermore, for each expression, a conversational AI designer can indicate whether it is only used for re-asking, giving you fine-grained control to make an AI agent articulate (Image 1.4 below). 

![A conversational AI designer can indicate whether it is only used for re-asking](/assets/uploads/design_tips_1.4.png "Image 1.4")

(2) In a situation where a proactive AI agent must ask a series of questions to elicit information, the AI agent should also be able to ask these questions in a conversational tone and with smooth transitions from one question to the next, similar to what an articulate human interviewer would do. 

In Juji Studio, conversational AI designers can use generative AI to auto-generate a conversation flow with multiple questions (Image 1.5 below), which you may edit with more human touch as needed. 

The result is a fluent conversation flow that resembles those of human-human conversations (Image 1.6 below).