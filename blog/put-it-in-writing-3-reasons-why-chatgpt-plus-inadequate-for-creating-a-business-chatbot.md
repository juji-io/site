---
layout: blog/article.njk
featured: true
title: "Put It in Writing: 3 Reasons Why ChatGPT Plus Inadequate for Creating a
  Business Chatbot"
date: 2024-05-28T22:15:22.206Z
author: Michelle Zhou
category: Viewpoints
tags:
  - ChatGPT
  - GenerativeAI
  - LLMs
image: /assets/uploads/screen-shot-2024-05-28-at-3.19.49-pm.png
---
Fig 2 records the generated workflow, which allows a human designer to review and revise as needed. With the workflow in writing, the chatbot will follow the workflow consistently to interact with each user. 

W﻿ith the launch of ChatGPT plus, more and more organizations started to build their own chatbots. While ChatGPT Plus provides a natural language interface for almost anyone to build a chatbot, it is inadequate for building a chatbot in a business context.

Why? The rationale is quite straightforward.  In a business context, when we negotiate a business contract or agreement, we often say "put it in writing" for the purpose of recording important terms and make them official. The same principle should also apply to regulating an AI chatbot's behavior especially when the chatbot is to act on behalf of an organization or business.

Unfortunately, a prompt-driven tool like ChatGPT Plus does not put an AI chatbot’s behavior in writing, hence it is inadequate for building a chatbot for business use.\
\
In the rest of the blog, we outline 3 reasons why it is important to put AI chatbot behavior in writing, especially in a business context.

## Reason 1: Ensure the integrity of AI chatbot behavior

AI is far from perfect and makes mistakes from time to time. Let's assume that a health science researcher uses ChatGPT Plus to create an AI chatbot to interview patients and gather critical patient information. If such an AI chatbot is created and deployed solely based on the researcher's prompt describing the interview process, the AI chatbot will most likely behave differently with each interviewee since each conversation will be generated on the fly, and there is NO guarantee that the AI chatbot will even ask the same question in every conversation!\
\
Let's look at another example in education where an AI chatbot is created to give interactive tutorials on certain learning content. If an instructor just uses a prompt to instruct an AI chatbot to deliver such a tutorial, the AI chatbot may not even follow the same tutorial steps with each student.\
\
The culprit of such inconsistent AI behavior is the nature of large language models (LLMs) like GPT because they produce behavior (e.g., questions to ask users or answers to give users) based on probability distributions, which imply inherent uncertainty.\
\
If an AI chatbot is created for entertainment purpose, inconsistent or uncertain AI behavior may be tolerated or even be a good thing. However it is unacceptable for conducting a rigorous scientific research study or conducting organization communications, where AI behavior should be consistent and appropriate at all times.\
\
To ensure the integrity or consistency of AI chatbot or chatbot behavior, a good practice is to put the AI chatbot's behavior often in the form of a workflow in writing to make sure it follows the flow and behaves consistently with all users.

F﻿ig 1 below shows an example prompt used to generate a chatbot's workflow automatically. 

![A prompt used to generate a chatbot workflow automatically](/assets/uploads/image1.jpg "Fig 1. A prompt used to generate a chatbot workflow automatically")

Fig 2 records the generated workflow, which allows a human designer to review and revise as needed. With the workflow in writing, the chatbot will follow the workflow consistently to interact with each user. 

![A graphical user interface displays the generated chatbot workflow.](/assets/uploads/image2.jpg "Fig 2. The graphical display of a generated chatbot workflow that a human can review and edit.")

F﻿ig 3 shows another example prompt that is used to generate a multi-step, interactive tutorial based on given learning content, automatically. 

![A graphical user interface shows a prompt for generating a tutorial](/assets/uploads/image3.jpg "Fig 3. An example prompt used to auto-generate an interactive tutorial.")

F﻿ig 4 shows the generated tutorial steps in writing. Again, the recorded steps allow a human designer to review, revise, and approve the generated tutorials. 

![A graphical user interface displays a generated, multi-step tutorial](/assets/uploads/image4.jpg "Fig 4. The generated, multi-step tutorial for a human to review and edit.")

## R﻿eason 2: Ensure Deep Controls of AI Chatbot Behavior

Above we mentioned that documenting an AI chatbot’s behavior should document its workflow. The workflow however is a static representation of a chatbot’s behavior and there is AI logic behind the scene to drive the chatbot to execute its workflow when the chatbot interacts with a user. In other words, there is much more than meets the eye when designing a chatbot’s workflow, especially in a business context. 

Let's use the same example of creating an AI chatbot to serve as a patient care assistant, which will check-in on each patient daily and gather critical patient information. While tools like ChatGPT can easily generate a set of questions for such an AI chatbot to ask a patient and gather patient information, it is unclear what kind of behavioral logic drives the chatbot to conduct the check-in properly and successfully.

For example, does the existing AI behavioral logic handle the following situations:

\
How does the chatbot handle the situation if a user is unwilling to answer the question?\
How does the chatbot handle the situation if a user does not know the answer?\
How does the chatbot handle the situation if a user gives only very terse input?\
How does the chatbot handle the situation if a user expresses depressions or is in a bad mood?\
How does the chatbot handle the situation if a user asks for medical advice?

We can go on and on with such "if" statements. Just like that every organization has their logic of doing business or handling communications, which often are spelled out and written down, organizations should also demand to have their AI chatbot behavioral logic spelled out and written down. More importantly, organizations should customize the AI logic to suit their business needs or to fulfill their compliance requirements.\
\
Instead of requiring an organization to come up with the difficult-to-anticipate AI behavioral logic from scratch, Juji has distilled the most important set of AI behavioral logic, established optimal key configurations for a number of AI chatbot situations, and spelled out such a configuration for an organization to review and revise as needed.\
\
In other words, when you generate an AI chatbot in Juji Studio, you get the chatbot workflow (see our yesterday's post) with pre-built AI behavior logic, all spelled out and customizable. Truly more than meets the eye.\
\
Here are 3 examples:\
Image 1 shows part of configurable AI behavioral logic at the chatbot level.\
Image 2 shows part of configurable AI behavioral logic at a conversation topic level.\
Image 3 shows part of configurable AI behavioral logic at a specific type of user intent level.\
\
In short, "put it in writing" also means spelling out the behavioral logic of an AI chatbots so one can view and deeply control how AI behaves if needed.