---
layout: blog/article.njk
featured: true
title: How to Improve Q&A Chatbots with Real-Time Monitoring and Notification
date: 2020-07-12T03:34:55.758Z
author: Wenxi Chen
category: Guides
tags:
  - chatbot
  - FAQ chatbot
  - Q&A chatbot
  - chatbot performance
image: /assets/uploads/pulse-trace-163708_1280.jpg
credit: Pixabay
---
Since one of the most popular chatbot uses is to **automate customer service**, a chatbot's abilities to answer user questions is directly related to brand image and customer satisfaction.  Previously, I talked about how to create a Q&A chatbot in a few minutes to [answer users' free-text questions](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/) and [handle complex, multi-turn Q&As](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/), all without coding. Because no chatbot is perfect, I also mentioned how to teach a chatbot [handle unknown user questions](https://juji.io/blog/question-recommendation/) and further improve customer satisfaction.  

But how do we know the performance of a Q&A chatbot?  For example, we want to know the "goodness" of a chatbot by asking:

1. What are the questions the chatbot has answered? How many of them?
2. What are the questions the chatbot cannot answer?  How many of them?
3. Among the unanswered questions, how frequently do users ask these questions? 
4. How are these unanswered questions related to each other? 

Obviously, answers to the above questions can provide chatbot owners or admins valuable insights to improve a chatbot, e.g., improving a chatbot to address the most frequently asked, unanswered questions  Unfortunately, few chatbot platforms provide such insights, which makes a chatbot owner/admin unaware of a Q&A chatbot's performance, let alone helps improving its Q&A capabilities.  

To help chatbot owners improve a Q&A chatbot easily and quickly, the Juji platform provides built-in Q&A monitoring facility to inform chatbot owners of their chatbot Q&A performance. 

# Monitor Q&A Chatbot Performance: Monitoring Unanswered User Questions

Specifically, we have built several Q&A chatbot monitoring tools to answer the questions above. Here I'll focus on how Juji helps chatbot owners obtain answers to questions 2-4 and how such insights can help improve a chatbot's Q&A capability quickly.

Ideally, your FAQ list should be as complete as possible. However, it is difficult to anticipate all the questions users might ask. Thus, it is useful to know what user questions are ***not*** answered by a chatbot. Juji's Q&A Board does just that. As shown below, the Q&A board provides you with real-time notifications of unanswered user questions as users are interacting with your chatbot. 

![A real-time dashboard displaying a list of user questions that a chatbot cannot answer.](/assets/uploads/screen-shot-2020-07-11-at-5.52.19-pm.png "Juji Q&A Board is a real-time dashboard that displays a list of unanswered user questions. ")

As shown in the screenshot above, the number shown in red next to the label "Q&A BOARD" indicates the number of unanswered user questions the chatbot has encountered The number gets updated in real-time. So a chatbot owner can easily know how many unanswered questions are there. In the example above, there are 5 unanswered user questions. Moreover, all the unanswered questions are listed inside a Q&A table where a chatbot owner or admin can answer them right away.

Alternatively, you can download all Q&As including the unanswered questions in a CSV file. The CSV file typically lists all the unanswered user questions and their stats at the end of the file. Juji also automatically analyzes all unanswered questions and arranges them in different groups by their semantic similarity. 

As shown in a sample CSV file below, there are five unanswered questions (rows 38-44), arranged into three groups: rows 38-39, rows 41-42, and row 44. Next to each unanswered question, there is also a number indicating how many times (frequency) that question was asked. In the example below, the question "*How do I log in*" (row 38) was asked once, while another similar question "*How do I sign in*" was asked twice (row 39). 

Such information can then be used to easily prioritize the handling of unanswered questions especially if there are a number of unanswered questions.  

![Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked](/assets/uploads/screen-shot-2020-06-30-at-10.01.17-pm.png "Downloaded Q&A CSV groups related unanswered questions together with stats on how many times each question has been asked")

# Update Chatbot FAQs

Once you know what questions are unanswered, there are two ways to update chatbot FAQs. You can update them directly on the Q&A Board. Alternatively, you can update the CSV file, then upload it to the chatbot.

## Update FAQs on the Q&A Board

If you just have a few unanswered questions, you may want to add their answers right away. To do so, just add your answer in the corresponding text box and submit it using the "Submit" button. Unless you have edited a multi-turn answer, the submission will take an immediate effect. This is very handy, because it updates your chatbot Q&As *immediately* without the need to restart it. Let's say you see an unanswered question pop up on your Q&A Board, and you answer it and submit right away. If the user who has asked this question asked again in the same chat, the chatbot will then magically answer the very same question it was not able to answer a minute ago. Beside such dramatic effect, the nondisruptive nature of the update has proven to be very convenient to many of our clients that have large number of users.

![Add an answer to an unanswered question in Q&A Board](/assets/uploads/screen-shot-2020-07-13-at-9.04.45-pm-copy.png "Add an answer to an unanswered question in Q&A Board")

As shown above in a screenshot, the Q&A Board also provides several useful tools to help a chatbot owner customize answers:

* The "+" sign in a text box allows you to enter alternative question/answer expressions, while the downward arrow button allows you to view and select these varied expressions. Question variations help a chatbot better recognize user questions. On the other hand, answer variations give a chatbot a set of answers to choose from, so its response can appear more natural to users.
* The "→A" button on the top right corner of the answer text box lets you search for the answer of a matched question, saving your time to enter an answer from scratch.  This is especially helpful if there is an extensive existing Q&A list.
* The "\[+]" button on the bottom right of the answer text box lets you open up an editor to define or edit a multi-turn answer. My [previous blog post](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/) explained this powerful tool.

Moreover, the Q&A Board allows you to add new Q&A pairs. To add a new pair of Q&A, simply click on the "+" sign at the top of the table. You can then edit the question and answer as described above. 

Similarly, you can select an existing Q&A pair to edit by clicking on the magnifying glass next to the "+" sign. As shown below, it will open up a modal where you are able to search for an existing Q&A. In the modal, you can see the Q&A's question variations and answers. Once you select a Q&A, it will show up as a row in the Q&A table for you to update.

![Search an existing FAQ to edit](/assets/uploads/screen-shot-2020-07-11-at-7.38.19-pm.png "Search an existing FAQ to edit")

## Update and upload your FAQ CSV file

Although the Q&A Board makes it very easy to update your FAQs, updating the FAQs inside the CSV file may be more convenient if there is a large number of unanswered questions or if there are multiple people involved in updating the FAQs. 

You can simply upload your CSV after all the editing is done. In case you are not already familiar with how to update the FAQs in a CSV file, you can check out my [previous blog on this](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/).

# Monitor Overall FAQ Performance

![Reports page shows question answer rate of the chatbot](/assets/uploads/screen-shot-2020-07-13-at-10.16.33-pm.png "Reports page shows question answer rate of the chatbot")

Besides unanswered questions, you can also monitor your chatbot's overall FAQ performance on the Reports page under the CHAT STATS section. One of the metrics there is the answer rate. As shown above, you will have a visual view as well as the exact number of how many questions are asked by your users and how many are answered. While the numbers are straightforward, they are a good measurement of how well your chatbot has performed in answering questions. A low answer rate may be a strong indicator that your FAQs need to be updated. Moreover, comparing the number of total asked questions with the chatbot's total number of participants, you see on average how many questions are asked by each user.

- - -

Creating a chatbot and publishing it is not the end but the beginning of a journey, just like raising a kid, who needs to be taught and nurtured as s/he grows.  Similarly, a chatbot needs to be continuously taught, so it can be improved and become better and better at its tasks. Answering user questions is an important skill for almost all chatbots. That's why Juji Q&A dashboard exists to help chatbot designers and owners monitor their chatbots easily and improve their chatbots quickly.

If you would like to learn more about what kind of smarts Juji chatbots have, [this is a great article to start](https://juji.io/blog/where-is-artificial-intelligence-ai-how-to-make-a-chatbot-smart/). Or [sign up free](https://juji.io/signup) to have some fun of creating your own smart chatbots.