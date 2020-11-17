---
layout: blog/article.njk
featured: false
title: "Case Study:  Accelerated Product Insights from a Customer Service Chatbot"
date: 2020-10-27T04:06:02.717Z
author: Michelle Zhou
category: Study
tags:
  - customer service
  - online learning
image: /assets/uploads/nordwood-themes-q8u1ygbarqk-unsplash.jpg
credit: Image by https://unsplash.com/@nordwood
---
JumpStart® is the leader in creating interactive experiences that enrich, entertain and educate. It produces high-quality educational games that provide positive, safe and fun experiences. Their games have earned the trust of millions of teachers, parents, and respected organizations such as Common Sense Media and The National Parenting Center.

# The Challenges

As online learning has become increasingly more important, the JumpStart team developed and launched a new online service called [Activity Studio](https://activity.jumpstart.com/#/). This  service enables teachers to create, share, and incorporate fun, game-based learning in their teaching activities. Additionally, these online learning materials can help improve student engagements and boost students' learning interests. 

When Activity Studio was launched several months ago as a new service, the team faced two challenges. First, it was time consuming and labor intensive to manually respond to numerous user questions because users often prefer obtaining direct answers instead of wading through a website to search for potential answers.  Second, there were no natural and easy ways to engage with users and help them out while they encounter difficulties (e.g., helping users when they abandoned certain activities), as well as gather their real-time feedback to glean product insights and use such insights to improve the service. 

# The Implementation

To address the two challenges mentioned above, the service team designed and implemented a chatbot, called Johnny, which performs three tasks:

1. Anwer users' questions about the service
2. Elicit users' input
3. Teach users key service features

There are two versions of Johnny, [one serving teachers](https://activity.jumpstart.com/#/jsaactivity) while the [other serving students](https://activity.jumpstart.com/#/student). 

## Anwer free-text user questions about the service

Like any new service deployed, initial users (i.e., teachers and students) normally have questions regarding the service. For example, the users want to know how the service can help them or a particular feature of the services. Since such user questions can be quite diverse, Jonny was designed to enable users to obtain answers to their free-text questions instantly instead of finding answers by searching through a website/FAQ list or being forced to traverse down a fixed tree-based menu.

As shown in the screenshot below, a user can ask free-text questions, including  questions that require multi-turn interactions. 

![An online education chatbot answers users' questions about accessing online learning materials](/assets/uploads/johnny-qa-1.png)

![An online education chatbot answers users' questions about accessing online learning materials](/assets/uploads/johnny-qa-2.png)

## Elicit User Input

While Jonny helps answer user questions and solve user issues, it was also designed to ask questions and elicit users' input. For example, Johnny asks teachers which grade and subject they are teaching and their NPS score about Activity Studio (see screenshot below).

![The chatbot Johnny elicits user (teacher) input after answering user questions. Chatbot Johnny asks a user which school s/he teaches](/assets/uploads/screen-shot-2020-11-14-at-12.20.45-pm.png)

![Johnny the chatbot asked a user which subject s/he teaches - chatbot for online education](/assets/uploads/screen-shot-2020-11-14-at-12.21.04-pm.png)

This chatbot behavior is quite similar to human-driven call center services. When a customer calls a call center for support, the customer may be asked to fill in a survey to provide his/her feedback about the service received.  

## Teach Users Key Features of New Service

In addition to answering and asking user questions, the chatbot Johnny also serves as a "service guide" to teach users the key features of Activity Studio. As shown below, it informs teachers about the most frequently used service features and encourage the teachers to check them out. 

![The online education chatbot Johnny teaches users the key features of the new service](/assets/uploads/screen-shot-2020-11-14-at-12.25.22-pm.png)

![Johnny the chatbot guides a user to create an activity (learning game)](/assets/uploads/screen-shot-2020-11-14-at-12.26.06-pm.png)

## Use Juji Studio and Juji API

To support all three functions described above, the JumpStart team uses [Juji Studio](https://juji.io/no-coding-ai-chatbot-builder/), a no-coding AI chatbot builder, to [build the main chat flow](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/) of Johnny. The team also [defined and uploaded a small Q&A list](https://juji.io/docs/design/#customize-qa-and-fallback) to start with, including the most common questions, such as "*What's Activity Studio*".  This Q&A list has grown rapidly as [unanswered user questions were automatically captured and managed](https://juji.io/blog/q-a-dashboard/) after Johnny went live. 

Although the JumpStart team can directly embed the deployed Johnny into their website, the team decided to use [Juji API](https://juji.io/ai-chatbot-api/) to integrate Johnny into the Activity Studio web application. This enables Johnny to be an integral part of the website (e.g., Johnny could be activated based on user activities on the website) and makes its appearance consistent with the rest of the website. 

After Johnny is deployed, the team also used the [Juji results dashboard](https://juji.io/blog/q-a-dashboard/) to monitor Johnny's status and improve Johnny progressively.  

# The Outcome

Johnny has served over 50000 users during the last six months. It provides several key values as described below.

## Automate Customer Support

Johnny automated frequently asked customer questions (73% answering rate), such as the use of certain service features (e.g., how to share a game) and certain operations (e.g., login), 24x7. This relieves much human effort, which could be directed to more important tasks (e.g., content creation and feature improvements). In the meantime, this also improves user experience and satisfaction because they could get a direct answer they want anytime without waiting for a reply or searching for the website.  

## Product Insights

Through the interaction, Johnny was also able to learn what features users care about the most as well as their needs and pain points. For example, teachers' questions, such as "*how can I view my students' results"* and "*how do I check my students' learning progress" ,* enabled the product team to learn user feedback and improve the reporting functions of Activity Studio to make the service truly customer centric. 

"*Activity Studio has been evolving rapidly and improved constantly due to the fast customer feedback gathered by Johnny. Without the chatbot, I could not think of a more natural and better way for us to engage with our users and collect their feedback to improve our service so quickly*."  stated by Tracy Chi, who is the Senior Director in charge of the development of Activity Studio. 

## A Natural Channel for Introducing Product Features

Johnny is also a natural channel for the product team to introduce new or important features to users. Not only does this help the product team learn about user needs (e.g., users care about one feature other the other), but it also enables users to learn about the service easily, saving users' time to search for needed features or services. 

# Summary

In short, this case study describes the creation of an online learning chatbot that performs three functions in one: automating customer services (free-text Q&A), eliciting product insights, and introducing product features. It also demonstrated a successful use case where a customer service chatbot can multitask to serve the purposes of product development and product marketing. 

# Relevant Resource

* [How to create a multipurpose chatbot ](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/)that can perform multiple tasks, including customer service and marketing in one chat.
* [How to power a customer service chatbot that is versatile and robust](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/)

[](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/)