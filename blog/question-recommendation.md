---
layout: blog/article.njk
featured: true
title: What happens when your chatbot doesn't understand the user's question?
date: 2020-06-11T04:57:17.697Z
author: Wenxi Chen
category: Guides
tags:
  - Juji Studio
image: /assets/uploads/question-mark-1872634_1280.jpg
credit: qimono
---
Answering user question is an essential task of a chatbot. You would like your chatbot to be able to answer as many questions as possible, especially when you can [easily expand the chatbot's Q&A repository](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/). However, no matter how smart your chatbot is, there will always be some questions it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a question: 

1. the creator has not provided enough information to answer this question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the question. 

If it is the first reason, there's pretty much nothing the chatbot can do. On the other hand, the second case can be resolved if the chatbot's creator anticipated this potential complication and add a mini flow to handle it. In Juji Studio, this can be easily done by [adding an multi-turn reply to the question in Q&A Board](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). 

So how about the third case? What happens when your chatbot doesn't understand the user's question?

Traditionally there's nothing a chatbot can do if it does not understand the question. Fortunately, it's no longer the case. At Juji, we introduced a question answer recommendation mechanism to help dealing with this situation specifically.

A while ago, my friend Sarah created a Juji chatbot as a receptionist on her website, where she hosted a lot of fun educational tasks for visitors. However, the task rewards would only accumulate if the visitor was logged in. So she added a Q&A to handle question such as "Where do I log in?" 

![Juji AI chatbot uses machine learning model to answer a user question](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png "Juji AI chatbot uses machine learning model to answer a user question")

As shown in the screenshot above, Juji chatbot uses a machine learning model to expand the question so the it not only recognizes the exact question but also its numerous variations (e.g., "where can I log in?"). However, if the user asks "where do I sign up?", the machine learning model would indicate it is likely not covered by the Q&As provided by the designer. In this case, a good AI chatbot would acknowledge that its creator has not provided an answer. It might also recommend other ways for the user to look for the information (e.g., email the support). 

A Juji AI chatbot goes one step further then this. It will try to suggest the user to check answers of closely related questions. At Juji, we recognize that even though the answer might not be immediately available, some answers to other questions may contain related information. From the user's point of view, it will not cost him/her much to read related information, especially when they are given the choices to select what they would like to read. In contrast, it would provide immediate value to both the user and the business if the suggestion provides useful information to the user.

What's better? My friend Sarah did not need to anything to enjoy this feature. The answer suggestion is automatically activated when the chatbot creator provides their Q&As.

![Juji AI chatbot use another machine learning model to suggest related question answers](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png "Juji AI chatbot use another machine learning model to suggest related question answers")

As we can see in the screenshot, Kate is given a choice to seek further. If there's no question related, Kate can simply select "None of above" as default.

![Juji AI chatbot provides related information after user selected an related question](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png "Juji AI chatbot provides related information after user selected an related question")

In this case, Kate thinks "Where do I log in?" is close enough to her question, so she want to learn more about it. Once the option is selected, Juji chatbot provides the answer to that question. It turns out to be very helpful, because the login page has a button to create an account.