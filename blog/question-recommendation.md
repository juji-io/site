---
layout: blog/article.njk
featured: true
title: "How to Design Chatbots for Better Customer Service: Handling Unknown
  User Questions"
date: 2020-06-11T04:57:17.697Z
author: Wenxi Chen
category: Guides
tags:
  - Chatbot Design Tip
  - Conversation Design
  - Question Answering Chatbot
  - Customer Service Chatbot
  - Conversational AI
  - Handling Unknown User Questions
image: /assets/uploads/question-mark-1872634_1280.jpg
credit: qimono
---
# Customer Service Chatbots

One of the most intuitive uses of chatbots is perhaps to automate customer service, where a chatbot automatically answers user questions, 24x7. In fact, in almost every chatbot application, a chatbot's ability to answer user questions, especially free-text questions, is always desirable. 

As shown below,  a travel chatbot is used in a marketing campaign to introduce new travel products on Facebook Messenger. Customers who are interested in may have questions about the products, such as "What packages do you offer" or "Do you any promotions" . 

![A travel chatbot powered by AI enables user free-text Q&A](/assets/uploads/screen-shot-2020-06-13-at-10.56.15-pm.png "Conversational Marketing Chatbot for Travel with Q&A support")

If a chatbot can understand such user questions and respond to them immediately, it will turn a traditional, static marketing campaign into an instant live conversation, helping convert the visitors into customers, perhaps immediately. The screenshot below shows that the travel chatbot understands a user's free-text question and responds to it immediately.

![A travel chatbot answers a user's question about travel destinations on Facebook Messenger](/assets/uploads/screen-shot-2020-06-14-at-1.20.30-pm.png "A Facebook Messenger travel chatbot answers a user's question about travel packages.")

Since [66% customers leave after waiting for 2 minutes](https://info.ada.support/forrester-drive-personalization-with-a-conversational-chatbot-0) to get an answer, a chatbot's always-on, immediate responses could really give a business the advantage of serving its customers. On the opposite,  if a chatbot does not allow users to ask any questions, it will lose the precious opportunity to engage with the users "on the spot".  

# Three Chatbot Challenges for Customer Service

However, no matter how smart your chatbot is, there will always be user questions that it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a user question: 

1. the chatbot designer has not provided the chatbot with sufficient information to answer the question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the user question. 

# How to Design a Chatbot for Better Customer Service

Based on the three reasons listed above, a chatbot designer can use different methods to "fix" a chatbot and improve its abilities to handle user free-text questions. 

## Improve a chatbot with more knowledge

If it is the first reason, a chatbot designer wants to be notified whenever a user question is unanswered so that s/he can teach the chatbot to address the unanswered questions. This way a chatbot will become smarter and smarter as it gains more knowledge. In fact, this is the topic of my next blog on how to monitor unanswered user questions so a chatbot can learn and be improved over time.  if you are interested in this topic, follow Juji's [Linkedin page](https://www.linkedin.com/company/juji), which will feature each of our blogs.  

## Improve a chatbot with multi-turn replies

If it's the second case,  a chatbot designer could ask users to supply missing information by [adding a multi-turn reply to the question](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). As shown below, the travel chatbot in our example asks the user to provide additional information before it gives out an answer.

![A Facebook Messenger travel chatbot uses a multi-turn reply when answering a user question](/assets/uploads/screen-shot-2020-06-14-at-1.21.28-pm.png "A Facebook Messenger travel chatbot answers a user's question about travel promotions. In this multi-turn Q&A, the chatbot asks the user a question before it replies.")

## Improve a chatbot to handle unknown user questions

So how about the third case? What happens when your chatbot doesn't understand a user's question?

One approach is that a chatbot simply acknowledges that it does not understand the question. If you have used any of the smart voice devices, such as [Amazon Alexa](https://en.wikipedia.org/wiki/Amazon_Alexa) or [Google Home](https://en.wikipedia.org/wiki/Google_Nest_(smart_speakers)), you might have already been used to hearing their apologetic responses when they don't understand your commands.  Similarly, a chatbot could respond with something like  "Sorry, I don't know how to respond to your question." 

### Question recommendation 

While this "I don't understand your question" approach is straightforward, it does not really help a user get his/her question answered. Alternatively, another approach is to  power a chatbot with a question recommendation engine, which will automatically suggest a set of similar questions to a user if a chatbot doesn't understand his/her question or does not have enough confidence to interpret such a question.  

Let me use the following use cases to explain how such a mechanism works, more importantly, how it helps improve customer experience and better customer service. 

- - -

### Use Case

My friend Sarah hosts an educational website, which includes many fun, online educational games. She created a chatbot on Juji as her **website assistant**, who can guide her site visitors to navigate the site as well as answer their questions about the company and the games. Following our [chatbot design tips](https://juji.io/docs/chatbot-design-tips/#prepare-qa-list-and-chitchats), Sarah added a list of Q&As, to handle visitor questions like "Where do I log in" (see below).

![A website chatbot answers a user's free-text question to automate customer service](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png "A website chatbot answers a user's free-text question to automate customer service")

Since an AI chatbot uses machine learning to interpret a user's free-text questions, it could recognize questions with similar meanings (semantics) even if the questions are expressed differently. For example, an AI chatbot can recognize that "how old are you" and "what's your age" mean the similar thing, although their expressions are very different. In other words, if an AI chatbot knows how to answer "what's your age", it can ***automatically*** answer the question "how old are you" because the two questions are considered semantically similar. 

However, an AI chatbot must decide what it should automatically answer and what it should not. Consider Kate, a first time visitor to Sarah's website. She asked "where do I sign up". Since Juji  (Sarah's chatbot) could not find a closely matched question that it could automatically answer, should Juji consider Kate's question the same question as "where do I log in"? Are these two questions close enough to share the same answer?  In many cases like this, an AI chatbot faces making a decision under uncertainty. Instead of simply making a decision on its own, the best AI chatbot often involves users in such a decision-making process. 

As shown below, the Juji AI chatbot suggests a list of closely related questions to Kate so that she can help determine which might best match with her intention. 

![An AI chatbot suggests a list of questions related to a user question](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png "An AI chatbot suggests a list of questions related to a user question.")

From Kate's point of view, she is given the choices to select a matched question and obtain a potential answer to her question. Through the suggested questions, even if Kate could not find a good match, she still gets an opportunity to learn about the capabilities of the chatbot, which in turn facilitates her future communication with the chatbot.



![Juji AI chatbot provides related information after user selected an related question](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png "Juji AI chatbot provides related information after user selected an related question")

Assume that Kate thought "Where do I log in?" was close enough to her question. She made her choice and was then led to the login page, where it also has a button for creating a new account. Kate's request was fulfilled. 

- - -

### Design considerations for question recommendation

If you decide to power your chatbot with a question-recommendation engine yourself, here are several things to consider:

1. How often should a chatbot make question recommendations? What is the threshold or condition to trigger the recommendation?
2. How to determine a list of "similar" questions to recommend? What other criteria beyond semantic similarity should be considered in ranking questions? 
3. How to present the top-N matched questions? How many should be presented (what is the N)?

The first aspect is to consider ***how often*** a chatbot should make a suggestion. Ideally, a chatbot should only make question recommendations when it is necessary. If it recommends too often, a user will feel that a chatbot has little intelligence and the process is too burdensome. On the other hand, if a chatbot makes too few recommendations, it may annoy users with wrong or no answers to their questions. 

The second aspect is to consider ***what to recommend*** by balancing a set of criteria.  An "optimal" list of question suggestions should be closely related to a user question while covering diverse topics to avoid "tunnel vision".  

The third aspect is to consider ***how many*** questions to suggest. If there are too few, a user may not find a matched question; if there are too many, a user may feel overwhelmed. 

All these considerations above are to maximize the probability for a user to find the information s/he seeks while minimizing the user's effort/burden in this process.  

As you can see, just like building any recommendation engine, supporting effective question recommendation is non-trivial. The good news is that if you don't wish to do it on your own, you can always utilize what's already built, like the **built-in** question recommendation capabilities ***automatically*** provided by [Juji](https://juji.io/).

- - -

Although no chatbots are perfect, there are always ways to improve a chatbot and make it serve their customers better.  In the worst case scenario, if users still don't find the suggested questions helpful, what should a chatbot do or what should a chatbot designer do? In my next blog, I will talk about how to help chatbot designers track unanswered user questions in real time so their chatbots can be improved in real time! 

In the meantime, I'd like to invite you to [sign up](juji.io/signup) free and follow this [short tutorial](https://juji.io/docs/tutorial/#make-ai-chatbots-for-free-text-qa-and-deploy-to-facebook-messenger) to create your own customer service chatbot that can answer users' free-text questions and gracefully handle the unknown ones by suggesting relevant questions.