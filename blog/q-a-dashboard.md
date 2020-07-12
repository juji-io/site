---
layout: blog/article.njk
featured: true
title: How to Improve QA chatbot with Real Time Dashboard
date: 2020-07-12T03:34:55.758Z
author: Wenxi Chen
category: Guides
tags:
  - Chatbot
  - FAQ Chatbot
  - QA chatbot
image: /assets/uploads/pulse-trace-163708_1280.jpg
credit: Pixabay
---
The ability for a chatbot to answer user questions is highly desirable. Previously, I talked about how to create a Q&A chatbot in a few minutes to [answer users' free-text questions](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/) as well as [handle multi-turn Q&A](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/), all without coding. Because no chatbot is perfect, I also mentioned how to teach a chatbot better [handle unknown user questions](https://juji.io/blog/question-recommendation/) and improve customer satisfaction.  

Now that you have built a very capable Q&A chatbot, you may want to know how your chatbot performs:

1. What are the questions the chatbot has answered?
2. What are the questions the chatbot cannot answer?  How many of them?
3. Among the unanswered questions, how frequently do user ask these questions? 
4. How are these unanswered questions related to each other? 

Obviously, answers to the above questions can provide chatbot owners or admins valuable insights to improve a chatbot, e.g., improving a chatbot to answer the unanswered questions.  Unfortunately, few chatbot platforms provide such insights, which makes a chatbot owner/admin unaware of a chatbot's Q&A performance, let alone helps improving its Q&A capabilities.  

To help chatbot owners improve a Q&A chatbot easily and quickly, the Juji platform provides built-in Q&A monitoring facility to inform chatbot owners of their chatbot Q&A performance. 

# Monitor Q&A Chatbot Performance

Specifically, we built a suite of Q&A chatbot monitoring tools to answer the questions above. Here I'll focus on how Juji provides insights to questions 2-4 because such insights can directly help improve a chatbot's Q&A capability.

The process to update an existing FAQ list can be divided into three steps:

1. Monitor unanswered questions
2. Come up with question variations and answers
3. Update the FAQ list to the chatbot

Ideally your FAQ list is as complete as possible, however no one knows all the questions users are going to ask. Thus, an effective monitoring mechanism for user questions is essential. Juji's Q&A Board does just that. The dashboard gives you real time notification of unanswered user questions. 

![Juji Q&A Board showing unanswered questions in real time](/assets/uploads/screen-shot-2020-07-11-at-5.52.19-pm.png "Juji Q&A Board showing unanswered questions in real time")

As you can see, the notification is visible across the Design page. In the example above, it indicates 5 unanswered questions from the users. Once you click into the Q&A Board, you will see a list of unanswered questions. Then, you can choose to answer them right away.

Alternatively, you can download your Q&As in a CSV file. The CSV file will not only list the existing FAQs, it will also show the unanswered questions and their stats. It arranges the unanswered questions in groups such that the similar ones are aggregated together. Beside each unanswered question, there is a number indicating the frequency of that question being asked. With this information, you can easily prioritize the unanswered questions to be handled especially when you have a lot of them.

![Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked](/assets/uploads/screen-shot-2020-06-30-at-10.01.17-pm.png "Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked")

# Update the chatbot's FAQs

There are two ways to update your chatbot's FAQs. You can update them directly inside the Q&A Board. Alternatively, you may update your FAQs first in your CSV file, then upload it to the chatbot.

## Update FAQs on the Q&A Board

If you just have a few unanswered questions, you may want to add their answers right away. All you need to do is adding your answer inside the textbox and submit on the Q&A Board. 

![Add an answer to an unanswered question in Q&A Board](/assets/uploads/screen-shot-2020-07-11-at-7.52.30-pm.png "Add an answer to an unanswered question in Q&A Board")

However, the Q&A Board provides multiple useful functionalities to help your better customize your answers.

* The "+" sign and the downward arrow in a textbox allow you to add and select variations to question or answer. Question variations help your chatbot better recognize user questions; meanwhile, answer variations give your chatbot a set of answers to choose from, so it can appear more natural to the users.
* The "->A" button on the top right corner of the answer textbox lets you merge the unanswered question as a variation of one of your existing answered questions. The button will open a modal where you can search and select the question you would like to merge with. This is helpful for people who have a lot of questions already.
* The "\[+]" button on the bottom right of the answer textbox opens up Juji's powerful multi-turn answer editor which is similar to the Main Chat Flow page. In there, you can define a mini chat flow to be carried out when the question is asked. We have [a blog post dedicated](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/) to explain this powerful tool.

Moreover, the Q&A Board allows you to add brand new FAQs as well as editing existing ones. To add a new FAQ, simply click on the "+" sign at the top of the table. Then you can edit the question and its answer just like an unanswered question. If you click on the magnifying glass next to the "+" sign, you will be able to search for and select an existing FAQ to be edited.

![Search an existing FAQ to edit](/assets/uploads/screen-shot-2020-07-11-at-7.38.19-pm.png "Search an existing FAQ to edit")

## Update your FAQ CSV file and then upload

Although the Q&A Board makes it very easy to update your FAQs, updating the FAQs inside the CSV file first may be more convenient for you if you have a large number of unanswered questions or if there are multiple people involved in updating the FAQs. If that's the case, you simply upload your CSV after all the editing is done. In case you are not already familiar with updating the FAQs with a CSV file, you can checkout our [previous blog on this](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/).

- - -

Creating a chatbot and publish it is not the end. It's just the beginning. A chatbot needs to be continuously evolved like a human, so it can stay updated with the world and become better at its job. Answering FAQs is an important task for most chatbots. Juji's Q&A Board is here to help the chatbot designers to keep their chatbots always stay ahead.

If you would like to learn more about what other amazing things Juji's AI chatbots can do, [this is a great article to start](https://juji.io/blog/where-is-artificial-intelligence-ai-how-to-make-a-chatbot-smart/). Or try it yourself by signup at [juji.io](https://juji.io/).