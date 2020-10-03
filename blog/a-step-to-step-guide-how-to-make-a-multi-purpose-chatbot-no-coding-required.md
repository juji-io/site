---
layout: blog/article.njk
featured: true
title: "A Step to Step Guide: How to Make a Multi-Purpose Chatbot with No Coding"
date: 2020-09-30T21:59:01.949Z
author: Michelle Zhou
category: Guides
tags:
  - task interleaving
image: /assets/uploads/owen-beard-k21dn4ovxnw-unsplash.jpg
credit: https://unsplash.com/@owenbeard
---
The [Chatbot Tsunami](https://juji.io/blog/chatbot-tsunami-the-good-bad/) has brought us a flood of chatbots to help automate various business functions, including [customer service chatbots](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/) that automate customer Q&A, [marketing research chatbots ](https://interpret.la/insights/)that automate customer interviews,  and [HR chatbots](https://dl.acm.org/doi/fullHtml/10.1145/3232077) that automate job interviews. Although a chatbot is often made to automate one type of business function, users expect the chatbot to perform  multiple related functions as if they are interacting with a person. Here are several examples.

You want to make a chatbot for an insurance company website. Although this chatbot's main function is to provide site visitors with an insurance quote,  it must  also answer user questions during the process (see chat example as below).

![An insurance website chatbot answering a user's question during the task of giving an insurance quote](/assets/uploads/insurance-1.png)

![An insurance website chatbot answering a user's question during the task of giving an insurance quote](/assets/uploads/insurance-2.png "The best AI chatbot should serve multi-purposes - insurance chatbot")

You want to make a chatbot for a hospital website. Although this chatbot's main function is to triage care situations, it must also answer visitor questions during the triage process (see chat example below).

![A hospital website chatbot answering a user question during care triage](/assets/uploads/healthcare-1.png)

![A hospital website chatbot answering a user question during care triage](/assets/uploads/healthcare-2.png "The best AI chatbot should serve multi-purposes - healthcare chatbot")

You want to make a chatbot for a bank website. Although this chatbot's main function is to help customers manage their bank accounts,  it must also answer customer questions during the management process (see chat example below).

![A bank website chatbot answering a user question during account management](/assets/uploads/bank-1.png)

![A bank website chatbot answering a user question during account management](/assets/uploads/bank-2.png "The best AI chatbot should serve multi-purposes - bank chatbot")

You want to make a chatbot for a job recruitment website. Although this chatbot's main function is to collect job applications, it must also answer applicant questions without derailing the application process (see the chat below).

![An HR chatbot answering applicant questions during the process of taking the applicant application](/assets/uploads/screen-shot-2020-10-01-at-10.30.21-pm.png "The best AI chatbot should serve multi-purposes - HR chatbot")



# Challenges of Supporting Multi-Purpose Chatbots

All the above examples show that the best chatbots are the ones that can serve multiple purposes and handle the **interleaving of different tasks**, such as answering a user's questions in the middle of performing another task. However, building such a chatbot is non-trivial due to two main challenges described below. 

## Tracking Conversation Context

The first challenge is to keep track of a conversation context (task status and flows) and maintain such a context. As shown in the first example above--the insurance chatbot example,  before finishing gathering a user's information to make an insurance quote, the chatbot was interrupted by a user's question. Note that answering the user question also involves multi-turn interaction, which could also be interrupted by additional questions.  In such cases, a capable chatbot should answer the user's question and then resume the original chat flow to finish the quoting task. If the chatbot cannot track and maintain a task context, the user would not be able to obtain the quote or must restart the whole process again. When that happens, we can imagine the kind of frustrations the user might endure.  

In practice, any multi-turn task flow can be ***interrupted arbitrarily***--at any step, any time, and any depth of a conversation (e.g., by another multi-turn tasks, which could be interrupted again). Keeping track of such a dynamic and complex context means remembering every conversation state, including task status and task flows, which is non-trivial. Most chatbot platforms leave chatbot designers or developers to manually tracking  a conversation context, which is impractical or even infeasible given the number of the potential interruptions. 

## Maintaining Conversation Context

In addition to tracking a conversation context, a capable chatbot must maintain the context properly so it can resume a task flow after each interruption. To resume a context, a chatbot must inform users where they are (e.g., which task and where in the task) so the users are aware and can continue with the resumed task flow. 

Using the chat examples shown above, each chatbot must ***repeat*** what it was saying (e.g., re-asking its question) when resuming from an interruption. This is similar to defining "reprompts" using [Google Dialogflow](https://en.wikipedia.org/wiki/Dialogflow). The challenge however is that if a chatbot designer must  manually define "reprompts" for every possible interruption point in a conversation. 

Again, most chatbot platforms leave the challenges of maintaining and resuming a conversation context to chatbot designers or developers, who must painstakingly recognize all potential interruptions and add "reprompts" to resume a conversation. This process is also impractical and infeasible as the number of tasks or intents grows.

# 3-Step Solution to Multi-Purpose Chatbots

To relieve chatbot designers or developers from manually tracking and maintaining a conversation context, Juji offers a solution that enables chatbot designers/developers to make a multi-purpose chatbots in three steps with no coding. 

## A Practical Chatbot Example

Here we use a practical example to illustrate the solution. Our example is to make a simple but practical chatbot for an insurance company website. As shown below, this chatbot will accomplish two main goals: (1) helping site visitors obtain a car insurance quote in 4 steps; and (2) answering certain visitor questions during a conversation. 

![A chatbot design includes a 3-step task flow, 10 FAQs, 1 multi-turn FAQ.](/assets/uploads/screen-shot-2020-10-01-at-9.49.27-pm.png "Design of chatbot flow and Q&A")

Like shown in the first example above, the chatbot should support arbitrary interleaving of tasks and question answering.  Before you read the solution below, I encourage you to first try to use a chatbot platform that you are most familiar with to implement this chatbot and see how long it will take you to accomplish both goals described above.

## Step 1: Define a Main Chat Flow (Chatbot Initiated Tasks)

While it may take you days if not weeks to make such a chatbot using a normal chatbot platform, it will take just three key steps to build such a chatbot on Juji with no coding.

The first step is to define a chatbot's main task flow. This includes all the tasks **your chatbot will initiate**. In our example, there is only one task that the chatbot will initiate: helping a visitor obtain a car insurance quote. Defining such a task flow in Juji is rather straightforward, similar to using any of the online survey software like SurveyMonkey to enter survey questions. As displayed below, just enter each of the three questions.  

![A chat flow defined for a chatbot to ask user questions](/assets/uploads/screen-shot-2020-10-01-at-9.00.53-pm.png "An example design of chatbot flow with no coding")

Unlike a plain question in a survey form, in a Juji chatbot, a [pre-built mini conversation](https://juji.io/docs/topics/) is behind each entered question. For example, behind the question, "*What's your age*", a mini-conversation is used to automatically handle diverse user age input ("*My age is 23*" or "*I'm 35 year old*") and potential digressions (e.g., "*Why do you need my age*").  Because this pre-built mini conversation automatically handles diverse user intents and stores legit user answers, Juji relieves a chatbot designer from manually doing all the work. A chatbot designer can of course [customize a pre-built mini conversation](https://juji.io/docs/design/#customizing-chatbot-actions) if needed. 

## Step 2: Define Q&A List (User Initiated Tasks)

After defining the main chat flow that includes the tasks that a chatbot will initiate, the second step is to define tasks that **users will initiate** during a conversation. This includes user questions and comments. On Juji, defining a chatbot Q&A list is also straightforward. [This blog](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/) details the step-to-step process of defining the Q&A list, including defining multi-turn Q&As. The example below shows a multi-turn Q&A that is defined to help a user subscribe to an email list. 



![A graphical user interface showing a multi-turn chatbot Q&A](/assets/uploads/screen-shot-2020-10-01-at-9.51.14-pm.png "An example design of chatbot Q&A (multi-turn)")

Juji also supports the sharing of tasks between the main chat flow and multi-turn Q&A flow. For example, one can define a Q&A pair with a question like "*Could you give me a car insurance quote*". The answer of this question can be defined as a multi-turn interaction that reuses what's defined in the main flow (see below). 

![Reuse of tasks defined in the main chat flow for a multi-turn Q&A](/assets/uploads/screen-shot-2020-10-01-at-11.04.51-pm.png "Defining a multi-turn Q&A by reusing tasks from the main chatbot flow")

The difference between the main flow of providing an insurance quote and this multi-turn Q&A is that the multi-turn Q&A can be invoked by users ***any time*** during a conversation even after the main flow is completed. This is very useful. For example, initially when the chatbot starts the main flow, a user may not want to get a quote yet. However, the user might want to ask for a quote later during the conversation. This enables the user to do so whenever s/he is ready. 

## Step 3: Automatically Generate AI Chatbot

After both the main chat flow and Q&A list is defined, you can now proceed to step 3 to "Preview" your chatbot. This will **automatically generate** an AI chatbot. This chatbot will activate the main chat flow first and it can be interrupted anytime during the main chat flow to answer user questions matching the Q&A list. After handling an interruption, it always automatically resumes the interrupted flow (no matter it is the main flow or a multi-turn Q&A) to ensure task completion (e.g., giving an insurance quote or finishing a multi-turn Q&A). If a user question does not match with those on a Q&A list perfectly, the chatbot will [make recommendations](https://juji.io/blog/question-recommendation/), which informs users what it can do. 

In other words, this generated chatbot tracks and maintains a conversation context automatically,  relieving chatbot designers or developers from worrying about how a chatbot should be wired to manage different conversation threads and maintain a conversation context. In addition, updating or extending such a chatbot is very easy. For example, we can update the chatbot main flow with different tasks or extend the Q&A list with more Q&A pairs without worrying about how they may interleave of each other during a conversation (e.g., no need to define specific "reprompts" for added tasks or Q&As).  This is because a Juji chatbot uses algorithms to automatically detect and manage a conversation context, no matter how the main chat flow or the Q&A list changes.

# Further Readings

What I've shown so far is a quick 3-step process to create a powerful AI chatbot that can initiate its own tasks as well as take care of user-initiated tasks anytime, anywhere during a conversation. Although a chatbot can be made to serve a single purpose, users often expect a chatbot to act as a person who can handle multiple types of tasks and switch between different tasks without losing any task context. Juji is designed to help chatbot designers make such chatbots easily and rapidly. 

We encourage you to build multi-purpose chatbots as shown here to automate meaningful business communications as well as deliver superior user experience. 

Here is further information you may find useful:

* [Best practice on building an AI chatbot ](https://juji.io/docs/chatbot-design-tips/#support-tasks-and-social-chitchat) 
* [Tips on designing a custom main chat flow](https://juji.io/docs/chatbot-design-tips/#start-w-chat-flow-outline)
* [Tips on defining a Q&A list](https://juji.io/docs/chatbot-design-tips/#prepare-qa-list-and-chitchats)