---
layout: blog/article.njk
featured: true
title: "A Step to Step Guide: How to Power Customer Service Chatbots with AI (No
  Coding Required)"
date: 2020-07-29T20:36:12.933Z
author: Michelle Zhou
category: Guides
tags:
  - customer service
  - free-text Q&A
  - NLP
image: /assets/uploads/andy-kelly-0e_vhmvql9g-unsplash-1-.jpg
credit: by Andy on https://unsplash.com/@askkell
---
As indicated by [this Forbes article](https://www.forbes.com/sites/forbestechcouncil/2019/05/07/will-2019-be-the-breakout-year-for-conversational-commerce-in-the-u-s/#158b88e24ac9), **76% of customers** use text messaging to contact businesses to make inquiries and get support. Now with the required social distancing during the COVID-19 pandemic, more and more consumers choose to interact with a brand online.

Many businesses now receive hundreds or even thousands of customer inquiries daily. Let's assume that each customer service agent could handle about 30 calls per day, [doubling the estimate in this report](https://blog.hubspot.com/service/inbound-call-strategy), it would need 10 human agents to field about 300 incoming customer inquiries. On the other hand, short of manpower implies the prolonged customer waiting time and a [Forrester study](https://www.ada.support/learning-centre/analyst-report/forrester-personalization-conversational-chatbot) shows that **2 out of 3 customers** don't want to wait for more than 2 minutes to get assistance.

To cope with the increasing volume of customer interactions, businesses started to look for solutions to automate customer interactions. One promising solution is to use a chatbot to augment human agents and help answer repetitive questions, such as "*How to reset my password*", "*What is your refund policy*" and "*Where can I download your mobile apps*". Even better, a chatbot can be trained to handle complex questions that require multi-turn interactions, such as "*Can you find an online tutor for me*?" and "*Could you show me how to use your product*?"

# Challenges for Making Customer Service Chatbot

However, setting up a capable chatbot for customer services may be non-trivial, since a customer service chatbot must have a set of key capabilities to deliver satisfactory customer experiences. From our own experiences of helping organizations set up and manage customer service chatbots, we have discovered that a customer service chatbot often fail to fulfill its purpose because one of the following reasons.

## **Lack of Natural Language Processing (NLP)**

If a chatbot does not have any [Artificial Intelligence (AI) capabilities](https://juji.io/blog/where-is-artificial-intelligence-ai-how-to-make-a-chatbot-smart/), it won't understand a user's natural language inquiries.  A chatbot without AI or NLP is most likely to force users to traverse a tree-based menu by clicking on the displayed choices one by one to find the answers they want. This approach never works well even if your business is super simple for two reasons. First, such a tree-based menu is often limited with choices and can hardly include every answer to customer questions. Second, customers may not know which path to take or which options to select. 

For example, on an e-learning website, I want to find out which SEO course would be suitable for a beginner like me. It would be hard to insert such an answer in a tree-based menu.  In another example, if I want to know if I can get a free trial, should I traverse the path to "Product" or "Price"? 

It is worth mentioning an often used "NLP" technique supported by some chatbot platforms: **keyword spotting**, which retrieves potential answers based on certain keywords mentioned in a user's question.  Unfortunately,  keyword-based processing is often inadequate for a customer service chatbot because it cannot distinguish the semantic differences between customer questions like: "*Can I get a refund for the course I paid for*" vs. "*When will I receive my refund*". Moreover, users would not be happy if they ask the latter question but get the answer to the former question, or vice versa. Here is a [short Youtube video](https://youtu.be/gBWab3yOsco) showing the difference between understanding the keywords vs. the semantics of user input.

## **Lack of Abilities to Handle Interruptions**

As a customer, you may have experienced such a frustration with an incapable chatbot: you asked for a service and you had followed a path for 5 steps. But you asked a question near the last step. Poof, all you had done so far was lost and you had to start over again. That is because such a chatbot does not know how to handle interruptions. Once it is interrupted, it could not resume its original flow but starts a process from scratch again. As you can imagine, how frustrated a customer could be when encountering such a situation! Again, the same [Forrester study](https://www.ada.support/learning-centre/analyst-report/forrester-personalization-conversational-chatbot) shows that 63% customers abandon a company after just one bad experience. 

## **Lack of Abilities to Help Human Agents**

No chatbot is perfect and it cannot answer every customer question. It thus is very important for a chatbot platform to have the abilities to monitor a chatbot activities,  know when a chatbot fails, and notify human agents of the failure so they can help address the gap. Ideally, a chatbot platform should also help a human agent better handle the handed-over, unresolved issues, such as suggesting potential answers or knowing the emotional state of the users involved. Many chatbot platforms support chatbot-human handoff, but few can truly aid human agents in resolving the issues efficiently let alone understanding the users involved.  

## **Difficult to Setup and Update AI Chatbots**

Some chatbot platforms may support all the three capabilities mentioned above. However, it may take a team of engineers months to set up a customer service chatbot and weeks to update such a chatbot, e.g., updating the chatbot's knowledge base. Moreover, most platforms require AI expertise (e.g., defining intents and entities) or programming experience (e.g., manually wiring all different intents and re-prompting) to power a customer service chatbot with AI capabilities described above.  With such a long turnaround time and difficulties in the chatbot upkeep, organizations often hesitate taking the steps to consider let alone implement a customer service chatbot. 

# Three Steps to Power Customer Service Chatbots with AI

To address the challenges in the making and adoption of customer service chatbots as discussed above, [Juji platform](https://juji.io/docs/) is designed to enable organizations to build and manage ***effective*** customer service chatbots ***rapidly***. Specifically, the [Juji Studio](https://juji.io/docs/juji-studio/) radically simplifies the teaching of AI and enables non-IT professionals to build and manage powerful AI chatbots for customer services in three steps ***with no coding***. 

## Step 1. Prepare a free-text Q&A list

The main purpose of a customer service chatbot is to answer customer inquiries. As mentioned above, customer inquiries may be highly diverse, in both expressions and topics, a tree-based menu can hardly satisfy customer needs. To deliver greater customer experience, a customer service chatbot should be able to understand customer free-text inquiries and respond accordingly.

To power a chatbot with free-text Q&A capabilities, Juji enables you to easily teach a chatbot in one of two ways. First, you can enter Q&A pairs directly in a table as shown below:

![Juji's graphical user interface shows a question and answer pair entered in a table. A "Submit" button is highlighted as the Q&A pair is selected for submission.](/assets/uploads/screen-shot-2020-07-30-at-1.52.28-pm.png)

Once the entered Q&A pairs are submitted (using the "Submit" button), a chatbot is enabled for free Q&A. With true NLP capabilities, Juji chatbots can recognize semantically similar user questions in diverse expressions.  

For example, with the above entered Q&A pair, the chatbot is able to answer a user question expressed very differently ("*How long will take my refund to arrive*") as shown below. 

![The chatbot was able to recognize a similar question but expressed differently](/assets/uploads/screen-shot-2020-07-30-at-1.53.51-pm.png)

Second, if you have a long list of Q&A pairs, you can put them into a CSV file as shown below:





with the following four corresponding criteria in mind:The Juji platform is carefully designed and engineered to enable a non-technical professional to set up  a capable customer service chatbot ***rapidly***. 

# How to Evaluate Customer Service Chatbot Platforms



**Speed.**  Compared other platforms that may require 3-6 months to set up a customer service chatbot with similar or even less capabilities, Juji enables you to set up a capable chatbot in a couple of hours, ***[no coding required](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/)***.

**Quality**. Juji supports a general customer service chatbot template. Each chatbot can handle diverse user situations from two aspects. First, Juji chatbots can handle free-text user inquiries expressed in diverse forms. For example, it can recognize "*When will I get my refund*" and "*How long will take my refund to reach me*" are essentially the same question. 

Second, it can [handle complex customer questions that require multi-turn interactions](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/) as well as arbitrary user interruptions occurred anytime during a chat with out losing the conversation context (see the screenshot below).

**Robustness**. As mentioned above, no chatbot is perfect. Juji has thus made tremendous effort to enable a robust chatbot -- handling unknown user input gracefully. For example, Juji chatbots can **[automatically recommend similar questions](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/)** to handle unknown user questions.  This ability enables a customer service chatbot to perform robustly and helps 

**Learnability**. To support a chatbot to learn over time and improve itself rapidly, Juji also facilities human agents do so easily. While other platforms may require weeks to improve a chatbot, Juji **[can enable a human agent to do so in real time](https://juji.io/blog/q-a-dashboard/)**. Specifically, Juji summarizes unanswered user questions and notifies human agents in real time. It allows human agents to enter new knowledge and update a customer service chatbot in real time***, with no coding.*** This ability greatly simplifies the upkeep of a customer service chatbot, reduces the downtime of the chatbot, and enables a chatbot to improve rapidly over a short period of time. 

Third, because of its powerful capabilities, Juji allows you to easily turn a customer service chatbot into a customer advocacy chatbot that it can elicit customer reviews or gather user feedback about relevant products and services in the same chat (see screenshots below)