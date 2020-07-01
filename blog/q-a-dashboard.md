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
3. Update the FAQ list to the chatbot

# Monitor Your User FAQs

Ideally your FAQ list is as complete as possible, however no one knows all the questions users might have asked. Thus, an effective monitoring mechanism for user questions is essential. Juji's Q&A Board does just that. The dashboard gives you real time notification of unanswered user questions. 

![Q&A Board showing unanswered questions in real time](/assets/uploads/screen-shot-2020-06-30-at-9.51.42-pm.png "Q&A Board showing unanswered questions in real time")

As you can see, the notification is visible across the Design page. In the example above, it indicates 5 unanswered questions from the users. Once you click into the Q&A Board, you will see a list of unanswered questions. And you can choose to answer them right away.

Alternatively, you can download your Q&As in a CSV file. The CSV file will not only list the existing FAQs, it will also show the unanswered questions and their stats. It arranges the unanswered questions in groups such that the similar ones are aggregated together. Beside each unanswered question, there is a number indicating the frequency of that question being asked. With this information, you can easily prioritize the unanswered questions to be handled especially when you have a lot of them.

![Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked](/assets/uploads/screen-shot-2020-06-30-at-10.01.17-pm.png "Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked")

# Update the chatbot's FAQs

If you just have a few unanswered questions, you may just want to add answers to them and forget about it. This, you can accomplish using the Q&A Board. All you need to do is adding your answer inside the textbox and submit. 

![Add an answer to an unanswered question in Q&A Board](/assets/uploads/screen-shot-2020-06-30-at-10.17.20-pm.png "Add an answer to an unanswered question in Q&A Board")