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

In practice, a multi-turn task flow can be interrupted \*\*arbitrarily\*\* at any step any time, in any depth \*\*recursively\*\* (e.g., by another multi-turn tasks, which could be interrupted again). Keeping track of such a dynamic context is non-trivial. Most chatbot platforms leave chatbot designers or developers to manually tracking  a conversation context, which is impractical or even infeasible given the complexity of the potential interruptions. 

## Maintaining Conversation Context 

In addition to tracking a conversation context and its interruptions, a capable chatbot must maintain the context properly so it resume it after each interruption. While resuming a context, a chatbot should also inform users where they are so the users are aware and can continue with the resumed flow. 

This is similar to defining different "reprompts" in [Google Dialogflow](https://en.wikipedia.org/wiki/Dialogflow#:~:text=cloud.google.com%2Fdialogflow,response%20systems%2C%20and%20so%20on.). The challenge is that it requires many context-specific "reprompts" because a default one is often insufficient. For  example, when answering a chatbot's question "*What is your main reason for visiting us*", the "reprompts" should be different for handling each type of user input: 

* "I don't know how to answer this" 
* "Why do you want to know my input?"
* "What would you recommend?"

Again, most chatbot platforms leave the challenges of maintaining and resuming a conversation context to chatbot designers or developers, who must painstakingly recognize and add all potential "reprompts". This process is also impractical and infeasible as the number of tasks or intents grows.