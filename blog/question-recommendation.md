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
In an ideal world, the AI Chatbot you build would answer all user questions. However, that's not the case right now. No matter how smart your AI Chatbot is, there will always be some questions it does not know how to answer. There are mainly three reasons why a chatbot cannot answer a question: 1) the creator did not provide enough information to answer this question; 2) the user has not gave enough information for the chatbot to answer the question; 3) the chatbot fails to understand the question. For the first reason, there's pretty much nothing the chatbot can do. However, for the second reason, it can be solved if the chatbot creator anticipated this potential complication and add a mini flow to handle it. In Juji Studio, this can be easily done by [adding an multi-turn reply to the question in Q&A Board](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). How about the thrid reason? Traditionally there's nothing chatbot can do if it does not understand the question. Fortunately, it's no longer the case. At Juji, we introduced a question recommendation mechanism to mitigate the situation when the question is not understood by the chatbot.



  

