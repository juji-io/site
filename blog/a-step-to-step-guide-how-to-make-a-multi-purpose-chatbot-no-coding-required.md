---
layout: blog/article.njk
featured: true
title: "A Step to Step Guide: How to Make a Multi-Purpose Chatbot (No Coding
  Required)"
date: 2020-09-30T21:59:01.949Z
author: Michelle Zhou
category: Guides
tags:
  - interleaving tasks
image: /assets/uploads/owen-beard-k21dn4ovxnw-unsplash.jpg
credit: https://unsplash.com/@owenbeard
---
You want to make a chatbot for an insurance company website to greet their visitors, provide insurance quotes, as well as answer visitor questions. Your challenge is how to make a chatbot so it can answer user questions or social chitchat **in the middle of** the task of giving an insurance quote without derailing the task flow?   

![An insurance website chatbot answering a user's question during the task of giving an insurance quote]( "A multi-purpose chatbot for an insurance website")

You want to make a chatbot for a hospital website to greet their visitors, triage care situations, as well as answer visitor questions. Your challenge is how to make a chatbot so it can answer user questions or social chitchat **in the middle of** the task of performing a care triage without derailing the task flow?   

![A hospital website chatbot answering a user question during care triage]( "A multi-purpose chatbot for a hospital website")

You want to make a chatbot for a bank website to greet their visitors, manage bank accounts, as well as answer visitor questions. Your challenge is how to make a chatbot so it can answer customer questions or social chitchat **in the middle of** the performing account management without derailing the task flow? 

![A bank website chatbot answering a user question during account management]( "A multi-purpose chatbot for a bank website")

You want to make a chatbot for a job recruitment website to take job applications, as well as answer applicant questions. Your challenge is how to make a chatbot so it can answer applicant questions or social chitchat **in the middle of** taking an application without derailing the application flow? 

![An HR chatbot answering applicant questions during the process of taking the applicant application]( "A multi-purpose chatbot for HR recruitment")

You want to make a chatbot for a university website to introduce campus programs, and answer student questions, and survey students.  Your challenge is how to make a chatbot so it can answer student questions or social chitchat **in the middle of** introducing campus programs without derailing the task flow? 

![A university website chatbot answering student questions in the middle of introducing campus programs.]( "A multi-purpose chatbot for a university website")

# Challenges of Supporting Multi-Purpose Chatbots

All the above examples show that a chatbot often needs to serve multiple purposes. Moreover, such a chatbot must handle the interleaving of different tasks, such as answering a user's questions in the middle of performing a task.  To make the situation more complex, consider that a user's question involves a multi-turn interaction, which could be interrupted and interleaves with additional questions including more multi-turn questions!

In general, there are three main challenges in support of multi-purpose chatbots.  

## Tracking Conversation Context

The first challenge is to keep track of a conversation context (task flows) and maintain such a context. As shown in the first example above,  before finishing gathering a user's information to make an insurance quote, the chatbot was interrupted by a user's question. In this case, a capable chatbot should answer the user's question and then resume the original chat flow to finish the quoting task. If the chatbot cannot track and maintain the context, the user would not be able to obtain the quote or must restart the whole process again. You can imagine the kind of frustrations the user might endure.  

In practice, a multi-turn task flow can be interrupted \*\*arbitrarily\*\* at any step any time, in any depth \*\*recursively\*\* (e.g., by another multi-turn tasks, which could be interrupted again). Keeping track of such a dynamic context means remembering every conversation state, including task status and task progress, which is non-trivial. Most chatbot platforms leave chatbot designers or developers to manually tracking  a conversation context, which is impractical or even infeasible given the complexity of the potential interruptions. 

## Maintaining Conversation Context 

In addition to tracking a conversation context and its interruptions, a capable chatbot must maintain the context properly so it can resume it after each interruption. To resume a context, a chatbot must inform users where they are so the users are aware and can continue with the resumed flow. 

Using the chat examples shown above, a chatbot must repeat what it was saying (e.g., re-asking its question) before it was interrupted. This is similar to defining "reprompts" using [Google Dialogflow](https://en.wikipedia.org/wiki/Dialogflow). The challenge however is that a chatbot designer must  remember to define "reprompts" for every possible interruption point in a conversation because interruptions can occur any time. 

Again, most chatbot platforms leave the challenges of maintaining and resuming a conversation context to chatbot designers or developers, who must painstakingly recognize all potential interruptions and add "reprompts" to resume a conversation. This process is also impractical and infeasible as the number of tasks or intents grows.

# 3-Step Solution to Making Multi-Purpose Chatbots

Instead of placing the burdens described above 

If you don't believe me how difficult it is to create a multi-purpose chatbot, try the following challenge. As shown below, design a chatbot for an insurance company website to accomplish the following: its main task is to help visitor obtain an insurance quote in a 3-step process. It also needs to answer 10 frequently asked questions. See how long it will take you to use any chatbot platform you are most familiar with to make this chatbot so that it can help users get an insurance quote AND answer user questions (among the 10 FAQs) anytime during the quoting process. Then extend the chatbot to support a multi-turn Q&A on checking insurance cancellation policy, which would require certain pieces of user information. Now see if you can ask this multi-turn Q&A during the quoting process and can this multi-turn be interrupted by other questions?

![A chatbot design includes a 3-step task flow, 10 FAQs, 1 multi-turn FAQ.]( "The design of a multi-purpose chatbot for an insurance company website")