---
layout: blog/article.njk
featured: true
title: "How to Design Chatbots for Better Customer Service: : Handling Unknown
  User Questions"
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

One of the most popular chatbot applications is perhaps to automate customer support tasks, where a chatbot automatically answers user questions, 24x7. In fact, in almost every chatbot application, a chatbot's ability to answer user questions, especially free-text questions, is always desirable. Just imagine that a travel chatbot is used in a marketing campaign to introduce a new travel destination to a target audience on Facebook Messenger. Customers who are interested in the product may want to ask questions about the new destination, such as "Do you offer a family package?" or "What kind of travel package do you offer?". If a chatbot can understand such user questions and respond to them immediately, it turns a traditional, static marketing campaign into a live conversation, helping convert the visitors into customers instantly. On the other hand, if a chatbot does not allow users to ask any questions, it loses the precious opportunity to engage with users "on the spot".

![Smart travel chatbot for marketing with Q&A support](/assets/uploads/screen-shot-2020-06-13-at-10.56.15-pm.png "Conversational Marketing for Travel with Q&A chatbot")

Using the above example, you want your chatbot to answer as many user questions as possible, especially [answering free-text questions](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/), as examples shown below.

![A travel chatbot answers a user's question about travel destinations on Facebook Messenger](/assets/uploads/screen-shot-2020-06-13-at-11.19.08-pm.png "A Facebook Messenger travel chatbot answers a user's question about travel packages.")

# Three Chatbot Challenges for Customer Service

However, no matter how smart your chatbot is, there will always be user questions that it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a question: 

1. the chatbot designer has not provided the chatbot with sufficient information to answer the question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the user question. 

# How to Design a Chatbot for Better Customer Service

Based on the three reasons listed above, a chatbot designer can use different methods to "fix" a chatbot and improve its abilities to handle user free-text questions. 

## Improve a chatbot with more knowledge

If it is the first reason, a chatbot designer wants to be notified whenever a user question is unanswered so that s/he can teach the chatbot to address the unanswered user questions. This way a chatbot will become smarter and smarter as it gains more knowledge. In fact, this is the topic of my next blog on how to monitor unanswered user questions so a chatbot can learn and be improved over time.  if you are interested in this topic, follow Juji's [Linkedin page](https://www.linkedin.com/company/juji), which will feature each of our blogs.  

## Improve a chatbot with multi-turn replies

If it's the second case,  a chatbot designer could ask users to supply missing information by [adding a multi-turn reply to the question](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). As shown below, the travel chatbot in our example above asks the user to provide more information before it gives out an answer.

![A Facebook Messenger travel chatbot uses a multi-turn reply to ask a user question before replying to the user](/assets/uploads/screen-shot-2020-06-13-at-11.19.31-pm.png "A Facebook Messenger travel chatbot answers a user's question about travel promotions. In this multi-turn Q&A, the chatbot asks the user a question before it replies.")

## Improve a chatbot to handle unknown user questions

So how about the third case? What happens when your chatbot doesn't understand a user's question?

One approach is that a chatbot simply acknowledges that it does not understand the question. If you have used any of the smart voice devices, such as [Amazon Alexa](https://en.wikipedia.org/wiki/Amazon_Alexa) or [Google Home](https://en.wikipedia.org/wiki/Google_Nest_(smart_speakers)), you might have already been used to hearing their apologetic responses when they don't understand your commands.  Similarly, a chatbot could respond with something like  "Sorry, I don't know how to respond to your question." 

While this "I don't understand your question" approach is straightforward, it does not really help a user get his/her question answered. Alternative, another approach is to  power a chatbot with a question recommendation mechanism, which will automatically suggest a set of similar questions to a user if a chatbot doesn't understand the user's question or does not have enough confidence to interpret a user's question.  Let me use the following use cases to explain how such a mechanism works, more importantly, improves customer experience and betters customer service. 

- - -

My friend Sarah hosts a fun educational website, which includes many fun educational games. She created a chatbot on Juji as her website assistant, who can guide her website visitors to navigate the site as well as answer their questions about the site and the games. Following our [chatbot design tips](https://juji.io/docs/chatbot-design-tips/#prepare-qa-list-and-chitchats), Sarah also added a list of Q&As, to handle visitor questions like "Where do I log in?" 

![A website chatbot answers a user's free-text question for customer service](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png "A website chatbot answers a user's free-text question for customer service")

Since an AI chatbot uses machine learning to interpret a user's free-text question, it could recognize questions with similar meanings (semantics) even if the questions don't contain the exact same expressions. For example, an AI chatbot can recognize "how old are you" and "what's your age" means the same thing, although they are expressed very differently. This means that if a chatbot designer teaches an AI chatbot to answer a question like "what's your age", the chatbot can automatically answer the question "how old are you" as it responds to "what's your age", because of the semantic equivalence of the two questions. 

However, an AI chatbot must decide what it should automatically answer and what it should not. For example, if a user asks "where do I sign up", should Sarah's chatbot automatically answers the question using the same answer for "where do I log in"? Are these questions close enough to share the same answer?  Unlike the example used above, these two questions definitely are further apart in terms of their semantic similarity because "sign up" and "log in" may be two different things. In such a case,  insead of automatically answering a "similar" question, the best AI chatbot should recognize the difference and asks for user confirmation. 

As shown below, the Juji AI chatbots suggests a list of closely related questions so that a user can determine which might be the best matched. 

![An AI chatbot suggests a list of questions related to a user question](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png "An AI chatbot suggests a list of questions related to a user question.")

From a user's point of view, s/he is given the choices to select what might match his/her true intended ask and obtain an answer. Moreover, it also teaches the user about the capabilities of the chatbot and facilitates future user-chatbot communication.

For example,  Kate, a first time visitor to Sarah's website, asked "where do I sign up". Since Juji could not find an exactly matched question that it knows about, it replied with a list of potentially related questions. Not only does the suggested list provide Kate a potential answer to her question, but she also get a chance to learn what Juji can answer. 

![Juji AI chatbot provides related information after user selected an related question](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png "Juji AI chatbot provides related information after user selected an related question")

Assume that Kate thought "Where do I log in?" was close enough to her question. She made her choice and was then led to the login page, where it also has a button for creating a new account. Kate's request was fulfilled. 

Although no chatbots are perfect, there are always ways to improve a chatbot and make it serve their customers better.  In case, users still don't find the suggested questions match theirs, what should a chatbot do or wha should a chatbot designer do? In my next blog, I will talk about how to help chatbot designers track unanswered user questions in real time so they can improve their chatbots in real time! 

In the meantime, I'd like to invite you to [sign up](juji.io/signup) free and create your customer service chatbot that can answer user free-text questions and gracefully handle unknown user questions by suggesting relevant questions.