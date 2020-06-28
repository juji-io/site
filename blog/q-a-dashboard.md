---
layout: blog/article.njk
featured: true
title: Q&A Dashboard
date: 2020-06-28T07:07:48.024Z
author: Wenxi Chen
category: Guides
tags:
  - Chatbot
image: /assets/uploads/alex-knight-2ejcsulrwc8-unsplash.jpg
---
So you have [built a chatbot that answers FAQs using Juji Studio](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/). You know it is powerful because it uses machine learning model to understand user questions and [recommends related questions when the question's answer is not immediately availble](https://juji.io/blog/question-recommendation/). However, there are still cases when the chatbot does not know how to answer the user's question. While there are varies reasons this can happen, one of the most common causes is that the chatbot designer has not yet include such question in its FAQ list. In that case, the only way to solve this is to add the related FAQ. Though the task might sound very straightforward, it is not intuitively supported by many existing chatbot builders.

The process to update an existing FAQ list can be divided into three steps:

1. Monitor unanswered questions
2. Write down some question variations and answers
3. Update the FAQ list to the Chatbot

Ideally your FAQ list is as complete as possible, however no one knows all the questions users might have asked. Thus, an effective monitoring mechanism for user questions is essential. Juji's Q&A Board does just that. The dashboard gives you real time notification of unanswered user questions.