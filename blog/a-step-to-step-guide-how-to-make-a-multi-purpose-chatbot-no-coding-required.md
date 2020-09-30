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

All the above examples show that a chatbot often needs to serve multiple purposes. Moreover, such a chatbot must handle the interleaving of different tasks, such as answering a user's questions in the middle of performing a task.  The situation gets even more complex, if a user's question requires a multi-turn interaction, which could be interrupted and interleaves with additional questions (could be other multi-turn questions too!). 

Most chatbot platforms leave the challenges of handling task-switching or user digressions to chatbot developers, who must painstakingly hard wire all possible flows together. For example, using [Google Dialogflow](https://en.wikipedia.org/wiki/Dialogflow#:~:text=cloud.google.com%2Fdialogflow,response%20systems%2C%20and%20so%20on.), one must define context-specific "reprompts" themselves because default ones are often insufficient. For  example, the "reprompts" should be different for each user input when answering a chatbot's question "What 

"I don't want to answer your question" 

"I don't know how to answer this" 

"Why do you want to know my input?"

"What do you think of it?"