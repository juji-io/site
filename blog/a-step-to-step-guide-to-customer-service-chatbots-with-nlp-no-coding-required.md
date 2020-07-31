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

Second, if you have a long list of Q&A pairs already, you can download our CSV template and put them into a CSV file as shown below. The  format of the CSV file is also explained in [our online documentation](https://juji.io/docs/design/#handle-free-text-qas). 

![An example CSV file showing three columns. From left to right, column 1 lists IDs, column 2 lists questions, and column 3 lists answers to the corresponding questions.](/assets/uploads/screen-shot-2020-07-30-at-2.12.43-pm.png)

### Design helpful HELP command

Once you enable your chatbot to support free-text Q&A, it is always a good idea to write a helpful HELP command that can guide your users' interaction with the chatbot. 

Similar to a restaurant menu, a HELP command can help achieve two goals:

1. helps users get started especially if a user is new;
2. teaches users your chatbot's capabilities and sets up the right user expectations.

Here are 3 quick tips on writing a good HELP command for your chatbot:

* Write a response that gives an overview of your chatbot
* [Paraphrase HELP responses](https://juji.io/docs/chatbot-design-tips/#paraphrase-messages-and-requests) to expose different but specific chatbot functions (see the screenshot below)
* Make sure your chatbot does what it promises in its HELP command. 

![A chatbot conversation showing a user texts "help" twice, each time receives different help information.](/assets/uploads/screen-shot-2020-07-30-at-4.50.36-pm.png)

Satisfying the last point above is most important, since it directly affects user experience. You want to make sure the following conversation won't ever happen to your chatbot:

\
User: help\
Chatbot: I can help you transfer money.\
User: transfer money\
Chatbot: I am sorry I don't understand you.\
\
To prevent such user frustrations, you want to (1) carefully word the HELP command to anticipate and minimize possible user input variations; and (2) handle potential user input variations that you can anticipate.

### Convert website FAQs to Q&A entries

If you have a webpage that includes FAQs about your business, you can also contact us and check if we could help you automatically convert these FAQs into the entries in a CSV file.  

For more information, here is [a short Youtube video](https://www.youtube.com/watch?v=U0tR04xQTio) showing the process of preparing your custom Q&As and [a blog post](https://juji.io/blog/building-a-smart-chatbot-in-a-few-minutes-to-answer-free-text-questions/) describing the process in detail. 

## Step 2. Define multi-turn conversation flows to handle  complex questions

Sometimes, a chatbot must engage with a user in a multi-turn conversation in order to answer the user's question. Consider the following example:

![A chatbot conversation showing a user asks a question about seeing a doctor and the chatbot collects information from the user.](/assets/uploads/screen-shot-2020-07-30-at-5.42.26-pm.png)

![A chatbot conversation showing a user asks a question about seeing a doctor and the chatbot collects information from the user before telling user about the solution.](/assets/uploads/screen-shot-2020-07-30-at-5.42.47-pm.png)

As shown above, the chatbot needs to collect some information from the user first before answering the question. 

To enable your chatbot to handle complex questions, Juji allows you to define a multi-turn conversation easily. In particular, you can define a mini chat flow that can elicit user information and use such information to decide how to best answer the user's question. 

The screenshot below shows a chat flow defined to handle the user's request of seeing a doctor. 

![Screenshot shows a question and answer pair where a multi-turn interaction is defined](/assets/uploads/screen-shot-2020-07-30-at-5.56.10-pm.png)

![The screenshot shows the defined multi-turn interaction for the question above.](/assets/uploads/screen-shot-2020-07-30-at-5.56.51-pm.png)

During such a multi-turn interaction flow, a user may interrupt the flow with additional questions. For example, the chat flow below shows that the user asks a question about insurance before finishing up the thread on seeing a doctor.

![A chat between a chatbot and a user where a user interrupts a flow with a question.](/assets/uploads/screen-shot-2020-07-30-at-6.08.05-pm.png)

![Continue the above chat to show the chatbot is able to return its previous flow automatically after the interruption](/assets/uploads/screen-shot-2020-07-30-at-6.08.47-pm.png)

As you can imagine, a user can interrupt an ongoing chat flow and activates a new one anywhere, anytime and one chat flow can be arbitrarily nested in another chat flow. Fortunately, Juji ***automatically*** manages all chat flows so you don't need to track the conversation context or wire different chat flows together manually.

Here is a [short Youtube video](https://youtu.be/6kzST4vO_KU) that shows how to create multi-turn chat flows to handle complex questions and [a blog post](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/) on the whole process in more detail. 

## Step 3. Monitor and improve customer service chatbot periodically

There are always questions that a chatbot does not understand and cannot answer. A good AI chatbot should be able to [handle unknown user questions](https://juji.io/blog/question-recommendation/) as well as notify human agents where a chatbot fails. To better help human agents, Juji provides a Q&A dashboard that lists unanswered user questions as shown below.

![A screenshot shows the Juji Q&A dashboard with one unanswered user question](/assets/uploads/screen-shot-2020-07-30-at-9.24.48-pm.png)

Whenever Juji detects an unanswered user question during a chatbot, it lists the question on the Q&A dashboard. Juji also automatically suggests a potentially matched answer (as highlighted in red above) if an unanswered user question is similar enough to an existing question in the knowledge base (e.g., exceeding a similarity threshold). 

To keep a customer service chatbot up-to-date and improve the chatbot over time, we encourage a human agent or chatbot owner to check the Q&A dashboard periodically (e.g., once a day) and perform two actions:

* check the Q&A dashboard to verify the suggested answer or provide proper answer to each unanswered user question 
* submit the Q&A pairs to update the chatbot

Once the the Q&A pairs are submitted, the chatbot is updated immediately and can answer similar questions in any ongoing chats. Here is a blog post detailing [how the Juji Q&A dashboard works](https://juji.io/blog/q-a-dashboard/) and helps human agents improve a chatbot instantly.

# How to Evaluate Customer Service Chatbot Platforms

As described above, Juji supports an easy 3-step process for an organization to build and upkeep a customer service chatbot with powerful AI capabilities and no coding required. Since chatbot platforms are abundant, in case you wish to compare different chatbot platforms before deciding on which one to build your customer service chatbot, we suggest that you evaluate a platform from four aspects:

**Quality**. This is to measure how well a chatbot can serve your customers. Can the chatbot understand user questions in diverse natural language expressions?  Can the chatbot handle complex user questions that require a multi-turn conversation? Can the chatbot handle arbitrary user interruptions occurred anytime during a chat while still keeping the conversation context? If the answer is yes to all the above questions, you have a quality customer service chatbot. 

**Speed.**  This is to measure how fast you can set up a quality chatbot with AI capabilities as discussed above to deliver satisfactory customer services. Some platforms may require 3-6 months, while Juji enables you to build one in a couple of hours, and no coding required.

**Robustness**. This is to measure how well a chatbot can handle uncertainties -- unknown user inquiries. No chatbot is perfect. You want a customer service chatbot to manage uncertainties effectively. For example, Juji chatbots [will recommend similar questions](https://juji.io/blog/question-recommendation/) when encountering unknown user questions so users can get a chance to find the answers they want. In contrast, many other chatbots may simply respond with "sorry, I don't understand your question."

**Learnability**. This is to measure how fast and easy a chatbot can be improved. Adopting a chatbot is like raising a child, you'll have to update the knowledge of a chatbot periodically to improve its performance. Selecting a platform that can help human agents to update a chatbot easily can greatly improve the ROI of a customer service chatbot. While other platforms may require weeks to improve a chatbot, Juji can [enable a human agent to do so in real time](https://juji.io/blog/q-a-dashboard/).

# Turning Customer Service to Customer Advocacy

Third, because of its powerful capabilities, Juji allows you to easily turn a customer service chatbot into a customer advocacy chatbot that it can elicit customer reviews or gather user feedback about relevant products and services in the same chat (see screenshots below)