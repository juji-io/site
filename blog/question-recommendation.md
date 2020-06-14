---
layout: blog/article.njk
featured: true
title: "Chatbot Design Tip: How to Handle User Questions That Chatbots Don't
  Understand"
date: 2020-06-11T04:57:17.697Z
author: Wenxi Chen
category: Guides
tags:
  - Chatbot Design Tip
  - Conversation Design
  - Question Answering Chatbot
  - Customer Support Chatbot
  - Conversational AI
  - Handling Unknown User Questions
image: /assets/uploads/question-mark-1872634_1280.jpg
credit: qimono
---
# Customer Service Chatbots

One of the most popular chatbot applications is perhaps to automate customer support tasks, where a chatbot automatically answers user questions, 24x7. In fact, in almost every chatbot application, a chatbot's ability to answer user questions, especially free-text questions, is always desirable. Just imagine that a travel chatbot is used in a marketing campaign to introduce a new travel destination to a target audience on Facebook Messenger. Customers who are interested in the product may want to ask questions about the new destination, such as "Do you offer a family package?" or "What's kind of travel package do you offer?". If a chatbot can understand such user questions and respond to them immediately, it turns a traditional, static marketing campaign into a live conversation, helping convert the visitors into customers instantly. On the other hand, if a chatbot does not allow users to ask any questions, it loses the precious opportunity to engage with users "on the spot".

![Smart travel chatbot for marketing with Q&A support](/assets/uploads/screen-shot-2020-06-13-at-10.56.15-pm.png "Conversational Marketing for Travel with Q&A chatbot")

Using the above example, you want your chatbot to answer as many user questions as possible, especially [answering free-text questions](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/), as examples shown below.

![A smart travel chatbot answers a user's question related to a marketing campaign](/assets/uploads/screen-shot-2020-06-13-at-11.19.08-pm.png "A travel chatbot answers a user's question about travel packages.")

![A smart chatbot answers another user question related to a marketing campaign](/assets/uploads/screen-shot-2020-06-13-at-11.19.31-pm.png "A travel chatbot answers a user's question about travel promotions.")

# Three Q&A Chatbot Challenges

However, no matter how smart your chatbot is, there will always be user questions that it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a question: 

1. the chatbot designer has not provided the chatbot with sufficient information to answer the question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the user question. 

# How to Fix a Q&A Chatbot

Based on the three reasons listed above, a chatbot designer can use different methods to "fix" a chatbot and improve its abilities to handle user free-text questions. 

## Improve a Q&A chatbot with more knowledge 

If it is the first reason, a chatbot designer wants to be notified whenever a user question is unanswered so that s/he can teach the chatbot to address the unanswered user questions. This way a chatbot will become smarter and smarter as it gains more knowledge. In fact, this is the topic of my next blog on how to monitor unanswered user questions so a chatbot can learn and be improved over time.  if you are interested in this topic, follow Juji [Linkedin page](https://www.linkedin.com/company/juji), which will feature each of our blogs.  

## Improve a Q&A chatbot with multi-turn replies

If it's the second case,  a chatbot designer anticipates this potential complication and adds a mini flow to handle it. In Juji Studio, this can be easily done by [adding a multi-turn reply to the question in Q&A Board](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). 

So how about the third case? What happens when your chatbot doesn't understand the user's question?

Traditionally there's nothing a chatbot can do if it does not understand the question. For a chatbot powered by an rule based expert system, not understanding the question would cause it to trigger its fallback (if it has one). In that case, the chatbot is likely to say something along the line of "Sorry, I don't know how to respond to that." What if the chatbot is powered by an end to end machine learning model? It could perform worse because an unrecognized input may trigger a random chatbot response that does not make sense.

In contrast, Juji chatbots are built on a hybrid approach. We build it in such a way that the chatbots enjoy the advantages of both rule based system and machine learning system. One of the thing that enabled us to do is creating a question answer recommendation mechanism to help dealing with the case when chatbot doesn't understand the user's question.

- - -

A while ago, my friend Sarah created a Juji chatbot as a receptionist on her website, where she hosted a lot of fun educational tasks for visitors. However, the visitor could only accumulate the task rewards if they were logged in. So she added a Q&A to handle questions such as "Where do I log in?" 

![Juji AI chatbot uses machine learning model to answer a user question](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png "Juji AI chatbot uses machine learning model to answer a user question")

Since Juji chatbots use a machine learning model to expand the Q&A questions, they not only recognize the exact wording but also its numerous variations (e.g., "where can I log in?"). However, if the user asks "where do I sign up?" and Sarah has only given answers to "where do I log in?", the machine learning model would indicate the user question is not covered by the existing Q&As. In this case, a good AI chatbot would humbly acknowledge that. In addition, it might recommend other ways for the user to look for the information (e.g., email the support). 

In fact Juji AI chatbots go one step further. They will try to suggest the user to check the answers of closely related questions. Even though the answer to the user's question might not be immediately available, some answers to other questions may contain relevant information. From the user's point of view, it will not cost him/her much to read related information, especially when they are given the choices to select what they would like to read. In contrast, it would provide immediate value to both the user and the business if the suggestion provided is.

What's better? Sarah did not need to do anything to enjoy this functionality. The question answer suggestion is automatically activated when the chatbot creator provides their Q&As. So in a conversation, when the chatbot realizes the user question is not directly answerd, another machine learning model would be triggered to identify closely related questions that may have useful information in their answers.

![Juji AI chatbot use another machine learning model to suggest related question answers](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png "Juji AI chatbot use another machine learning model to suggest related question answers")

That's why when Kate, a first time visitor to Sarah's website, asked "where do I sign up", Juji replied with a list of choices of potentially related questions. If there's no question related, Kate could simply select "None of above".

![Juji AI chatbot provides related information after user selected an related question](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png "Juji AI chatbot provides related information after user selected an related question")

However Kate thought "Where do I log in?" was close enough to her question, so she wanted to learn more about it. Once the option was selected, Juji sent to Kate the answer of that question. It turned out to be very helpful, because the login page had a button to create an account.

As you see, Juji AI chatbots work as hard as Juji's engineers in providing the best services for the charbot creators and their users. Of course, with the question answer recommendation mechanism in place, there are still questions the chatbot cannot answer. Luckily, we provide a solution just for that! Next, we will talk about the [Q&A dashboard](https://juji.io/docs/design/#handle-free-text-qas) that allows chatbot creators to monitor their unanswered user questions in real time!