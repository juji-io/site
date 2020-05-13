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
Conversation can be arbitrarily complex, though most of time it's rather simple. If you are creating an AI chatbot that answers questions, chances are you can get away with [importing your Q&As into Juji's AI chatbot](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/). 

However, there are use cases the chatbot needs to obtain more information from the user before it can produce a satisfactory answer. For example, when the user asks "Where are you located?" The chatbot can respond with the location if there's only one branch. But if you operates in multiple branches, a smart chatbot would first ask where the user locates and then give the nearest branch's location.

Luckily, this can be easily done in the Q&A Board in Juji Studio.  

![Click on extended reply button to initiate your Q&A flow](/assets/uploads/screen-shot-2020-05-12-at-11.19.35-pm.png "Click on the extended reply button to create a flow to handle the question")

Instead of putting in the quick response directly in the Answer textbox, click on the extended reply button will open a slider for you to create more complex flow as answer. The editor works just like the main chat flow editor (**link to normal flow tutorial**). So you can create topics with customized actions to handle the question.

![Creating a topic to handle the question](/assets/uploads/screen-shot-2020-05-12-at-11.39.03-pm.png "Creating a topic to handle the question")

In this example, I create a topic that first asks which city the user lives. Then, I use the customized actions to tell them about different locations nearest to them. Once you are done with your topics, you can click back to the Q&A Board to submit your changes.

Let's see the effects.

![The chatbot first checks the user's location, then provides the nearest branch's location](/assets/uploads/screen-shot-2020-05-12-at-11.54.45-pm.png "The chatbot first checks the user's location, then provides the nearest branch's location")

This is exactly what we wanted. The chatbot not only providing the nearest branch's location according to user's neighborhood, it also resumes its original flow.

Although we have make it looks really easy, this functionality is very powerful. Doctor can use this to answer user's question on symptioms. Store can use this to make recommendation when an user asks about its products. Since the extended reply works just like the main chat flow, designer can also record attributes, create followups and all kinds of powerful topics inside.

Hope you enjoy.