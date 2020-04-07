---
layout: blog/article.njk
status: published
featured: true
title: How to build a Smart Chatbot in a Few Minutes to Answer Free-text Questions
date: 2020-02-20T04:44:00.000Z
author: Wenxi Chen
category: Guides
tags:
  - Q&A
image: /assets/uploads/alex-knight-2ejcsulrwc8-unsplash.jpg
---
![Chatbot answers user free-text questions in the middle of another topic](/assets/uploads/qa1.png "Chatbot answers user free-text questions in the middle of another topic")

People always have questions. You are running a business, you find yourself keep answering customer questions. You are a community manager, you find yourself keep answering community member questions. You are on Facebook Messenger, you find yourself keep answering your friends’ or colleagues’ questions. Sometimes you just want someone or something to answer these questions for you!

Chatbots come to the rescue. Here I want to show you how to build a smart chatbot in minutes to answer free-text questions. Your chatbot can answer questions specified in diverse forms. It can suggest answers even if it is unsure what a user is asking. Moreover, it automatically tracks unanswered user questions, so you can supply answers to these new questions and improve your chatbot quickly.

![Chatbot recognizes questions in different wording as specified; it also suggests related questions if it is unsure](/assets/uploads/qa2.png "Chatbot recognizes questions in different wording as specified; it also suggests related questions if it is unsure")

Let’s use the[ Juji](http://juji.io/) platform (https://juji.io) for this task. Once you log in, click on “+ AI Helper” to create a chatbot. For this exercise, let’s use a blank template as shown below.

![Create a new AI Helper and choose the blank template to start with](/assets/uploads/qa3.png "Create a new AI Helper and choose the blank template to start with")

Then, click on “Customize Chatbot” and then go to the **Q&A BOARD** directly.

![Edit Questions and Answers on Q&A BOARD](/assets/uploads/qa4.png "Edit Questions and Answers on Q&A BOARD")

First, click on the “Download” button to download the CSV template. All you need to do is to fill in your Questions and Answers as following:

![Sample Q&A csv content](/assets/uploads/qa5.png "Sample Q&A csv content")

The ID column is useful for you to group the alternative expressions of a question so they can share the same answer(s), although the chatbot can also automatically detect many matched question expressions. A comment is optional. You can learn more about the [format here](https://docs.juji.io/design/#customize-qa-and-fallback).

Once you are done, save it into a csv file (simply choose to “Save As…” a .csv in Excel) and then upload it.

![Choose to replace the current Q&As if you don’t want the existing template Q&As](/assets/uploads/qa6.png "Choose to replace the current Q&As if you don’t want the existing template Q&As")

Now the moment of truth! You can always **PREVIEW** your chatbot before publishing it. Try asking questions in different ways to test the power of AI. If you wish to include more questions, edit the CSV file and upload it again.

![AI Chatbot understands question worded a bit different from the ones in the csv file](/assets/uploads/qa7.png "AI Chatbot understands question worded a bit different from the ones in the csv file")

Once you are ready to publish, click on **DEPLOY** to publish your chatbot to a Facebook Messenger or on a website. More [details](https://docs.juji.io/release/) here.

![Deploy a chatbot to Facebook messenger](/assets/uploads/qa8.png "Deploy a chatbot to Facebook messenger")

After your chatbot is published, it’s always good to go back to your **Q&A BOARD** and check if there are any questions your chatbot could not answer or was not sure about the answer.

![Fill in answers for unanswered questions](/assets/uploads/qa9.png "Fill in answers for unanswered questions")

As shown above, there are two unanswered questions. One has a chatbot-suggested answer highlighted in red. One requires an answer since a good match could not be found. I can enter or edit the answers and then **submit** them. Once the answers are submitted, the chatbot learns instantly and now can answer these questions.

The Juji platform is a one-stop-shop for building smart chatbots. It allows you to easily create a chatbot to answer questions anytime during a chat and still remember where the conversation is! (check out this[ YouTube video](https://youtu.be/U0tR04xQTio) and this [live gallery](https://juji.io/#gallery) of smart Juji chatbots). 

Remember to check your **Q&A BOARD** regularly and update your chatbot with new answers. This way, your chatbot keeps learning and becomes smarter and smarter.

Have fun building chatbots and may the chatbot force be with you!