---
layout: blog/article.njk
featured: true
title: How to Evolve Your Chatbot's FAQs with Realtime Monitoring
date: 2020-06-28T07:07:48.024Z
author: Wenxi Chen
category: Guides
tags:
  - Chatbot
image: /assets/uploads/pulse-trace-163708_1280.jpg
credit: Pixabay
---
So you have [built a chatbot that answers FAQs](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/). You know it is powerful because it uses machine learning model to understand user questions and [recommends related questions when the answer is not immediately available](https://juji.io/blog/question-recommendation/). However, there cae still be cases when the chatbot does not know how to answer the user's question. While there are various reasons this can happen, one of the most common causes is that the chatbot designer has not yet include such question in its FAQ list. In that case, the only way to solve this is to add the related FAQ. Though the task might sound very straightforward, it is not intuitively supported by many existing chatbot builders.

The process to update an existing FAQ list can be divided into three steps:

1. Monitor unanswered questions
2. Come up with question variations and answers
3. Update the FAQ list to the chatbot

# Monitor Your User FAQs

Ideally your FAQ list is as complete as possible, however no one knows all the questions users are going to ask. Thus, an effective monitoring mechanism for user questions is essential. Juji's Q&A Board does just that. The dashboard gives you real time notification of unanswered user questions. 

![Q&A Board showing unanswered questions in real time](/assets/uploads/screen-shot-2020-07-11-at-5.52.19-pm.png "Q&A Board showing unanswered questions in real time")

As you can see, the notification is visible across the Design page. In the example above, it indicates 5 unanswered questions from the users. Once you click into the Q&A Board, you will see a list of unanswered questions. And you can choose to answer them right away.

Alternatively, you can download your Q&As in a CSV file. The CSV file will not only list the existing FAQs, it will also show the unanswered questions and their stats. It arranges the unanswered questions in groups such that the similar ones are aggregated together. Beside each unanswered question, there is a number indicating the frequency of that question being asked. With this information, you can easily prioritize the unanswered questions to be handled especially when you have a lot of them.

![Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked](/assets/uploads/screen-shot-2020-06-30-at-10.01.17-pm.png "Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked")

# Update the chatbot's FAQs

There are two ways to update your chatbot's FAQs. You can update them directly inside the Q&A Board. Alternatively, you may update your FAQs first in your CSV file, then upload it to the chatbot.

## Update on the Q&A Board directly

If you just have a few unanswered questions, you may want to add their answers right away. This, you can accomplish using the Q&A Board. All you need to do is adding your answer inside the textbox and submit. 

![Add an answer to an unanswered question in Q&A Board](/assets/uploads/annotated.png "Add an answer to an unanswered question in Q&A Board")

The Q&A Board provides multiple useful functionalities to help your customize your answer:

* The "+" sign and the downward arrow allows you to add and select variations to both question and answer. Question variations helps your chatbot better recognize user questions; meanwhile, answer variations give your chatbot a set of answer to choose from, so it appears more natural to the users.
* The "->A" button lets you merge the unanswered question as a variation to one of your existing answered questions. The button will open a modal where you can search and select the question you would like to merge to. This is helpful for people who have a lot of questions already.
* The "\[+]" button on the right bottom of the answer textbox opens up Juji's powerful multi-turn answer flow editor which is just like the Main Chat Flow page. In there, you can define a mini chat flow to be carried out when the question is asked. We have [a blog post dedicated](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/) to explain this powerful tool.

Moreover, the Q&A Board allows you to add brand new FAQs as well as editing existing ones. To add a new FAQ, simply click on the "+" sign at the top of the table. Then you can edit the question and answer just like the unanswered questions. If you click on the magnifying glasses next to the "+" sign, you will be able to search for and select an existing FAQ to be edited. \[maybe a photo here]

## Update your FAQ CSV file and then upload

Although the Q&A Board makes it very easy to update your FAQs, updating the FAQs inside the CSV file first may be more convenient if you have a large number of unanswered questions or if there are multiple people involved in updating the FAQs. If that's the case, you just need to upload your CSV after all the editing is done. You probably are already familiar with updating the FAQs with CSV file at this point. If not, you can checkout our [previous blog on this](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/).