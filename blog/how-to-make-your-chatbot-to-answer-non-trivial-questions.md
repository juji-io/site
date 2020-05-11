---
layout: blog/article.njk
featured: false
title: How to make your chatbot to answer non-trivial questions
date: 2020-05-11T01:07:45.510Z
author: Wenxi Chen
category: Guides
tags:
  - Juji Studio
image: /assets/uploads/placeholder.jpg
---
Conversation can be abitrarily complex, though most of time it's rather simply. If you are creating an AI chatbot that answers questions, chances are you can get away by simply [importing your Q&As into Juji's AI chatbot](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/). 

However, there are use cases the chatbot needs to obtain more information from the user before it can produce a satisfactory answer. For example, when the user asks "Where are you located?" The chatbot would simply give out the location if there's only one branch. But if you operates in multiple branches, a smart chatbot would first ask where the user locates and then give the nearest branch's location.

Luckly, this can be easily done in Juji's design page. 