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

![A prompt used to generate a chatbot workflow automatically](/assets/uploads/image1.jpg "Fig 1. A prompt used to generate a chatbot workflow automatically.")

Fig 2 records the generated workflow, which allows a human designer to review and revise as needed. With the workflow in writing, the chatbot will follow the workflow consistently to interact with each user. 

![A graphical user interface displays the generated chatbot workflow.](/assets/uploads/image2.jpg "Fig 2. The graphical display of a generated chatbot workflow that a human can review and edit.")

F﻿ig 3 shows another example prompt that is used to generate a multi-step, interactive tutorial based on given learning content, automatically. 

![A graphical user interface shows a prompt for generating a tutorial](/assets/uploads/image3.jpg "Fig 3. An example prompt used to auto-generate an interactive tutorial.")

F﻿ig 4 shows the generated tutorial steps in writing. Again, the recorded steps allow a human designer to review, revise, and approve the generated tutorials. 

![A graphical user interface displays a generated, multi-step tutorial](/assets/uploads/image4.jpg "Fig 4. The generated, multi-step tutorial for a human to review and edit.")

## R﻿eason 2: Ensure Deep Controls of AI Chatbot Behavior

Above we mentioned that documenting an AI chatbot’s behavior should document its workflow. The workflow however is a static representation of a chatbot’s behavior and there is AI logic behind the scene to drive the chatbot to execute its workflow when it interacts with a user. In other words, there is much more than meets the eye when designing a chatbot’s workflow, especially in a business context. 

Let's use the same example of creating an AI chatbot to serve as a patient care assistant, which will check-in on each patient daily and gather critical patient information. While tools like ChatGPT can easily generate a set of questions for such an AI chatbot to ask a patient and gather patient information, it is unclear what kind of behavioral logic drives the chatbot to conduct the check-in properly and successfully.

For example, does the existing AI behavioral logic handle the following situations:

* How does the chatbot handle the situation if a user is unwilling to answer the question?
* How does the chatbot handle the situation if a user does not know the answer?
* How does the chatbot handle the situation if a user gives only very terse input?
* How does the chatbot handle the situation if a user expresses depressions or is in a bad mood?
* How does the chatbot handle the situation if a user asks for medical advice?

We can go on and on with such "if" statements. Just like that every organization has their logic of doing business or handling communications, which often are spelled out and written down, organizations should also demand to have their AI chatbot behavioral logic spelled out and written down. More importantly, organizations should customize the AI logic to suit their business needs or to fulfill their compliance requirements.\
\
Instead of requiring an organization to come up with the difficult-to-anticipate AI behavioral logic from scratch, Juji has distilled the most important set of AI behavioral logic, established optimal key configurations for a number of AI chatbot situations, and spelled out such a configuration for an organization to review and revise as needed.\
\
In other words, when you generate an AI chatbot in Juji Studio, you get the chatbot workflow (see our yesterday's post) with pre-built AI behavior logic, all spelled out and customizable. Truly more than meets the eye.\
\
J﻿uji supports a human designer to control an AI chatbot's behavior at 3 levels  below.

Fig 5 below shows various chatbot controls that a human designer can use to control a chatbot's overall behavior and logic. 

![Example chatbot-level controls for a human to control a chatbot's behavior ](/assets/uploads/image5.jpg "Fig 5. Example chatbot controls that are configurable per chatbot.")

Fig 6 shows various chatbot controls that human designers can configure to control the chatbot behavior and logic inside a particular conversation topic. 

![It displays various controls a human designer can use to control AI logic at a conversation topic level](/assets/uploads/image6.jpg "Fig 6. Example chatbot controls that are configurable based on a conversation topic.")

F﻿ig. 7 below shows controls that human designers can use to control a chatbot's behavior based on a specific type of user input. 

![Example chatbot controls for a human to control AI logic based on a user's input](/assets/uploads/image7.jpg "Fig 7. Example chatbot controls that are configurable based on user input. ")

In short, "put it in writing" also means spelling out the behavioral logic of an AI chatbots so one can view and deeply control how AI behaves if needed.

## R﻿eason 3: Ensure the business provenance of an AI chatbot  (AI chatbot Provenance)

Business provenance refers to the documentation and verification of the origin, history, and custody of business-related data, processes, and products. It is often required for various reasons (e.g., accountability and compliance). When an AI chatbot represents a business to engage with its customers, employees, and partners alike, this AI chatbot along with its associated assets, such as the avatar and the knowledge, all become business-related data, processes, and products, hence subjecting to business provenance.

We use the term "AI chatbot Provenance" to refer to the process of documenting, verifying, and monitoring the origin, history, and custody of AI chatbots and assets.

To facilitate AI chatbot provenance, Juji has provided an array of tools in the following 4 areas: 

(a) Trust and Transparency

In Juji, an AI chatbot's design, such as its general settings, workflows and knowledge used to answer user questions are explicitly written out and easily accessible and configurable by non-IT subject matter experts (SME). 

Fig 8 shows various configurations that non-IT SMEs can access and control.

![Various configuration settings that human designers can access and control](/assets/uploads/image8.jpg "Fig 8. Varied AI chatbot configuration settings for humans to review and control.")

 

Moreover, such business data and processes can be easily shared within an enterprise for further scrutiny and validation (Fig 9).

![A graphical user interface showing how to share a chatbot with others](/assets/uploads/image9.jpg "Fig 9. One can share a chatbot with colleagues for added trust and transparence in chatbot design.")

(b) Quality Control

No AI chatbots are perfect. While a collaborative AI chatbot design/development process helps improve the quality of AI chatbot, continuously monitoring AI chatbot's behavior is another critical step to AI chatbot provenance. Juji helps businesses monitor AI chatbot behavior continuously and creates a to-do list to alert human custody to audit and improve their AI chatbots accordingly (Fig 10).

![Graphical user interface that shows a to-do list and content to be audited for chatbot quality control](/assets/uploads/image10.jpg "Fig 10. A to-do list or content audit list for human designers to improve chatbot quality.")

(c) Regulatory Compliance

Just like products and processes in established industries such as pharmaceutical and Finance, AI chatbots as a new, imperfect product will surely be subject to regulatory compliance such as President Biden's executive order on generative AI. Juji's collaborative AI chatbot platform facilitates regulatory compliance as it enables non-IT professionals such as legal professionals to be part of the AI chatbot design and development process. Juji's multi-level AI safety measures also aid regulatory compliance. 

For example, Fig 11 below shows examples of AI responses labeled per their content origin. 

![Snippets of AI chatbot responses labeled to show the origin of the response content from 3 sources: human-curated, via RAG, and AI generated per public information. ](/assets/uploads/image11.jpg "Fig 11. Juji clearly labels AI chatbot responses based on the origin of the content. ")

(d) Risk Management

Juji's AI chatbot behavioral logs (e.g., workflows, chat transcripts, chat summaries, and to-do list) aid crisis management (e.g., detecting AI chatbot misbehavior timely) and prevent fraud (e.g., checking the history of saved or exported AI chatbot dossier to trace the history of an AI chatbot).