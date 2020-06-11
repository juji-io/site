---
layout: blog/article.njk
featured: true
title: What happens when your chatbot doesn't understand the user's question?
date: 2020-06-11T04:57:17.697Z
author: Wenxi Chen
category: Guides
tags:
  - Juji Studio
  - DIY AI Chatbot
  - Free-text Q&A
  - Question Answering
  - Chatbot Question Answering
  - Customer Support
image: /assets/uploads/question-mark-1872634_1280.jpg
credit: qimono
---
Answering user question is an essential task of a chatbot. You would like your chatbot to be able to answer as many questions as possible, especially when you can [easily expand the chatbot's Q&A repository](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/). However, no matter how smart your chatbot is, there will always be some questions it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a question: 

1. the creator has not provided enough information to answer this question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the question. 

If it is the first reason, there's pretty much nothing the chatbot can do. On the other hand, the second case can be resolved if the chatbot's creator anticipates this potential complication and adds a mini flow to handle it. In Juji Studio, this can be easily done by [adding an multi-turn reply to the question in Q&A Board](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). 

So how about the third case? What happens when your chatbot doesn't understand the user's question?

Traditionally there's nothing a chatbot can do if it does not understand the question. Fortunately, it's no longer the case. At Juji, we introduced a question answer recommendation mechanism to help dealing with just that.

A while ago, my friend Sarah created a Juji chatbot as a receptionist on her website, where she hosted a lot of fun educational tasks for visitors. However, the visitor could only accumulate the task rewards if they were logged in. So she added a Q&A to handle questions such as "Where do I log in?" 

![Juji AI chatbot uses machine learning model to answer a user question](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png "Juji AI chatbot uses machine learning model to answer a user question")

Since Juji chatbots use a machine learning model to expand the Q&A questions, they not only recognize the exact wording but also its numerous variations (e.g., "where can I log in?"). However, if the user asks "where do I sign up?" and Sarah has only given answers to "where do I log in?", the machine learning model would indicate the user question is not covered by the Q&As provided by the designer. In this case, a good AI chatbot would humbly acknowledge that. In addition, it might recommend other ways for the user to look for the information (e.g., email the support). 

In fact Juji AI chatbots go one step further. They will try to suggest the user to check the answers of closely related questions. Even though the answer to the user's question might not be immediately available, some answers to other questions may contain related information. From the user's point of view, it will not cost him/her much to read related information, especially when they are given the choices to select what they would like to read. In contrast, it would provide immediate value to both the user and the business if the suggestion provides useful information.

What's better? Sarah did not need to anything to enjoy this functionality. The question answer suggestion is automatically activated when the chatbot creator provides their Q&As.

![Juji AI chatbot use another machine learning model to suggest related question answers](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png "Juji AI chatbot use another machine learning model to suggest related question answers")

As we can see in the screenshot above, Kate was given a choice to seek further. If there's no question related, Kate could simply select "None of above".

![Juji AI chatbot provides related information after user selected an related question](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png "Juji AI chatbot provides related information after user selected an related question")

However Kate thought "Where do I log in?" was close enough to her question, so she wanted to learn more about it. Once the option was selected, Juji chatbot provided the answer to that question. It turned out to be very helpful to Kate, because the login page has a button to create an account.

Now you see, Juji AI chatbots are as hard working as Juji's engineers in providing the best service for you and your users. Of course, with the question answer recomentation mechanism in place, there can still be questions the chatbot cannot answer. Luckily, we provide a solution just for that. Next, we will talk about the Q&A dashboard that allows chatbot creators monitor their unanswered user questions in real time!