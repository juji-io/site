---
layout: blog/article.njk
featured: true
title: "A Step to Step Guide: How to Make a Multi-Purpose Chatbot with No Coding"
date: 2020-09-30T21:59:01.949Z
author: Michelle Zhou
category: Guides
tags:
  - interleaving tasks
image: /assets/uploads/owen-beard-k21dn4ovxnw-unsplash.jpg
credit: https://unsplash.com/@owenbeard
---
UnYou want to make a chatbot for an insurance company website to greet their visitors, provide insurance quotes, as well as answer visitor questions. Your challenge is how to make a chatbot so it can answer user questions or social chitchat **in the middle of** the task of giving an insurance quote without derailing the task flow?   

![An insurance website chatbot answering a user's question during the task of giving an insurance quote]( "A multi-purpose chatbot for an insurance website")

You want to make a chatbot for a hospital website to greet their visitors, triage care situations, as well as answer visitor questions. Your challenge is how to make a chatbot so it can answer user questions or social chitchat **in the middle of** the task of performing a care triage without derailing the task flow?   

![A hospital website chatbot answering a user question during care triage]( "A multi-purpose chatbot for a hospital website")

You want to make a chatbot for a bank website to greet their visitors, manage bank accounts, as well as answer visitor questions. Your challenge is how to make a chatbot so it can answer customer questions or social chitchat **in the middle of** the performing account management without derailing the task flow? 

![A bank website chatbot answering a user question during account management]( "A multi-purpose chatbot for a bank website")

You want to make a chatbot for a job recruitment website to take job applications, as well as answer applicant questions. Your challenge is how to make a chatbot so it can answer applicant questions or social chitchat **in the middle of** taking an application without derailing the application flow? 

![An HR chatbot answering applicant questions during the process of taking the applicant application]( "A multi-purpose chatbot for HR recruitment")

You want to make a chatbot for a university website to introduce campus programs, and answer student questions, and survey students.  Your challenge is how to make a chatbot so it can answer student questions or social chitchat **in the middle of** introducing campus programs without derailing the task flow? 

![A university website chatbot answering student questions in the middle of introducing campus programs.]( "A multi-purpose chatbot for a university website")

# Challenges of Supporting Multi-Purpose Chatbots

All the above examples show that a chatbot often needs to serve multiple purposes. Moreover, such a chatbot must handle the interleaving of different tasks, such as answering a user's questions in the middle of performing a task.  To make the situation more complex, consider that a user's question involves a multi-turn interaction, which could be interrupted and interleaves with additional questions including more multi-turn questions!

In general, there are three main challenges in support of multi-purpose chatbots.  

## Tracking Conversation Context

The first challenge is to keep track of a conversation context (task flows) and maintain such a context. As shown in the first example above,  before finishing gathering a user's information to make an insurance quote, the chatbot was interrupted by a user's question. In this case, a capable chatbot should answer the user's question and then resume the original chat flow to finish the quoting task. If the chatbot cannot track and maintain the context, the user would not be able to obtain the quote or must restart the whole process again. You can imagine the kind of frustrations the user might endure.  

In practice, a multi-turn task flow can be interrupted \*\*arbitrarily\*\* at any step any time, in any depth \*\*recursively\*\* (e.g., by another multi-turn tasks, which could be interrupted again). Keeping track of such a dynamic context means remembering every conversation state, including task status and task progress, which is non-trivial. Most chatbot platforms leave chatbot designers or developers to manually tracking  a conversation context, which is impractical or even infeasible given the complexity of the potential interruptions. 

## Maintaining Conversation Context 

In addition to tracking a conversation context and its interruptions, a capable chatbot must maintain the context properly so it can resume it after each interruption. To resume a context, a chatbot must inform users where they are so the users are aware and can continue with the resumed flow. 

Using the chat examples shown above, a chatbot must repeat what it was saying (e.g., re-asking its question) before it was interrupted. This is similar to defining "reprompts" using [Google Dialogflow](https://en.wikipedia.org/wiki/Dialogflow). The challenge however is that a chatbot designer must  remember to define "reprompts" for every possible interruption point in a conversation because interruptions can occur any time. 

Again, most chatbot platforms leave the challenges of maintaining and resuming a conversation context to chatbot designers or developers, who must painstakingly recognize all potential interruptions and add "reprompts" to resume a conversation. This process is also impractical and infeasible as the number of tasks or intents grows.

# 3-Step Solution to Multi-Purpose Chatbots

To relieve chatbot designers or developers from manually tracking and maintaining a conversation context, Juji offers a solution that enables chatbot designers/developers to make a multi-purpose chatbots in three steps with no coding. 

## A Practical Example

Here we use a practical example to illustrate the solution. Our example is to make a simple but practical chatbot for an insurance company website. As shown below, this chatbot will accomplish two main goals: (1) helps site visitors obtain a car insurance quote; and (2) answers visitor questions during a conversation but without derailing the main task flow if user questions happen to occur in the middle of the task flow . 

![A chatbot design includes a 3-step task flow, 10 FAQs, 1 multi-turn FAQ.]( "The design of a multi-purpose chatbot for an insurance company website")

Before you read the solution below, I encourage you to first try to use a chatbot platform that you are most familiar with to implement this chatbot and see how long it will take you to accomplish both goals described above.

##  Step 1: Define a Main Chat Flow (Chatbot Initiated Tasks)

While it may take you days if not weeks to make such a chatbot using a normal chatbot platform, every cloud has a silver lining. It will take just three key steps to build such a chatbot on Juji with no coding.

The first step is to define a chatbot's main task flow. This includes all the tasks **your chatbot will initiate**. In our example, there is only one task that the chatbot will initiate: helping a visitor obtain a car insurance quote. Defining such a task flow in Juji is rather straightforward, similar to using any of the online survey software like SurveyMonkey to enter survey questions. As displayed below, just enter each of the three questions.  

![A chat flow defined for a chatbot to ask user questions]( "A graphical user interface of Juji no-coding AI chatbot builder for defining a chat flow")

Unlike a plain question in a survey form, in a Juji chatbot, a [pre-built mini conversation](https://juji.io/docs/topics/) is behind each entered question. For example, behind the question, "*What's your age*", the mini-conversation is used to automatically handle diverse user age input ("*My age is 23*" or "*I'm 35 year old*") and potential digressions (e.g., "*Why do you need my age*") to gather an age input.  Because this pre-built mini conversation automatically handles diverse user intents and stores legit user answers, Juji relieves a chatbot designing from manually doing all the work. A chatbot designer can of course [customize a pre-built mini conversation](https://juji.io/docs/design/#customizing-chatbot-actions) if needed. 

##  Step 2: Define Q&A List (User Initiated Tasks)

After defining the main chat flow that includes the tasks that a chatbot will initiate, the second step is to define tasks that **users will initiate** during a conversation. This includes user questions and comments. On Juji, defining such a Q&A list is also quite straightforward. [This blog](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/) details the step-to-step process of defining the Q&A list, including defining multi-turn Q&As. As shown below, for example, defining the multi-turn Q&A of helping a user to cancel an existing insurance policy, is similar to defining the main flow. 

Juji also supports the sharing of tasks between the main chat flow and multi-turn Q&A flow. For example, one can define a Q&A pair with a question like "*Could you give me a car insurance quote*". The answer of this question can be defined as a multi-step interaction that reuses what's defined in the main flow. The difference between the main flow of providing a quote and this multi-turn Q&A is that this multi-turn Q&A can be invoked by users any time during a conversation even after the main flow is completed. This is very useful. For example, initially when the chatbot starts the main flow, a user may not be ready to get a quote yet. However, the user might want to ask for a quote later during the conversation. This enables the user to do so whenever s/he is ready. 

## Step 3: Automatically Generate AI Chatbot

After both the main chat flow and Q&A list is defined, you can now proceed to step 3 to "Preview" your chatbot. This will **automatically generate** an AI chatbot. This chatbot will activate the main chat flow and anytime during the main chat flow, it can be interrupted to answer user questions that match with the Q&A list. After handling an interruption, it always automatically resumes the the interrupted flow (no matter it is the main flow or a multi-turn Q&A) to ensure task completion (e.g., giving an insurance quote or finishing a multi-turn Q&A). If a user question does not match with those on a Q&A list perfectly, the chatbot will [make recommendations](https://juji.io/blog/question-recommendation/), which informs users what it can do. 

In other words, this generated chatbot tracks and maintains a conversation context automatically,  relieving chatbot designers or developers from worrying about how a chatbot should be wired to manage different conversation threads and maintain a conversation context. In addition, updating or extending such a chatbot is very easy. For example, we can update the chatbot main flow with different tasks or extend the Q&A list with more Q&A pairs without worrying about anything else (e.g., no need to define specific "reprompts" for added tasks or Q&As).  This is because a Juji chatbot uses algorithms to automatically detect and manage a conversation context, no matter how the main chat flow or the Q&A list changes.

# Further Readings

What I've shown so far is a quick 3-step process to create a powerful AI chatbot that can initiate its own tasks as well as take care of user-initiated tasks anytime, anywhere during a conversation. Although every chatbot is made for a purpose, users often expect a chatbot to act as a person who can handle multiple types of tasks and switch between the tasks without losing any task context. 

We encourage you to build multi-purpose chatbots as shown here to automate meaningful business communications as well as deliver superior user experience. 

Here is further information you may find useful:

* [Best practice on building an AI chatbot ](https://juji.io/docs/chatbot-design-tips/#support-tasks-and-social-chitchat) 

* [Tips on designing a custom main chat flow](https://juji.io/docs/chatbot-design-tips/#start-w-chat-flow-outline)

 * [Tips on defining a Q&A list](https://juji.io/docs/chatbot-design-tips/#prepare-qa-list-and-chitchats)