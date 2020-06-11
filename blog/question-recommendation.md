---
layout: blog/article.njk
featured: true
title: "Question Recommendation "
date: 2020-05-28T06:34:46.200Z
author: Wenxi Chen
category: Guides
tags:
  - Juji Studio
image: /assets/uploads/local-file-not-found-295x300.png
---
In an ideal world, the AI chatbot you build would answer all user questions. However, that's not the case right now. No matter how smart your AI chatbot is, there will always be some questions it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a question: 

1. the creator has not provided enough information to answer this question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the question. 

If it is the first reason, there's pretty much nothing the chatbot can do. On the other hand, the second case can be resolved if the chatbot's creator anticipated this potential complication and add a mini flow to handle it. In Juji Studio, this can be easily done by [adding an multi-turn reply to the question in Q&A Board](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). 

How about the third case? Traditionally there's nothing chatbot can do if it does not understand the question. Fortunately, it's no longer the case. At Juji, we introduced a question recommendation mechanism to help dealing with this situation specifically.

My friend Sarah created a Juji chatbot as a receptionist on her website. She has a lot of fun educational tasks for visitors. However, the rewards will only accumulate if the visitor is logged in. So she added a Q&A to handle question such as "Where do I log in?" 

![Juji AI chatbot uses machine learning model to answer a user question](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png "Juji AI chatbot uses machine learning model to answer a user question")

As shown in the screenshot above, Juji chatbot uses a machine learning model to expand the question so the it not only recognizes the exact question but also its numerous variations (e.g., "where can I log in?"). However, if the user asks "where do I sign up?", the machine learning model would indicate it is likely not covered by the Q&As provided by the designer. In this case, a good AI chatbot would acknowledge that its creator has not provided an answer. It might also recommend other ways for the user to look for the information (e.g., email the support). 

A Juji AI chatbot goes one step further then this. It will try to suggest the user to check answers of closely related questions. At Juji, we recognize that even though the answer might not be immediately available, some answers to other questions may contain related information. From the user's point of view, it will not cost him/her much to read some related information, especially when they are given the choice to select what they would like to read. In contrast, it would provide immediate value to both the user and the business if the suggestion provides useful information to the user.

What's better? My friend Sarah does not need to anything. The answer suggestion is automatically activated when the chatbot creator provides at least one Q&A.

![Juji AI chatbot use another machine learning model to suggest related question answers](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png "Juji AI chatbot use another machine learning model to suggest related question answers")

As we can see in the screenshot, Kate is given a choice to seek further. If there's no question related, Kate can simply select "None of above" as default.

![Juji AI chatbot provides related information after user selected an related question](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png "Juji AI chatbot provides related information after user selected an related question")

In this case, Kate thinks "Where do I log in?" is close enough to her question, so she want to learn more about it. Once the option is selected, Juji chatbot provides the answer to that question. It turns out to be very helpful, because the login page has a button to create an account.