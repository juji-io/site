---
layout: blog/article.njk
featured: true
title: What does it take to build a chatbot using GPT-4?
date: 2023-04-20T01:03:24.601Z
author: Wenxi Chen
category: Guides
tags:
  - AI Chatbots
  - Industry Trends
  - ChatGPT
  - LLM
image: https://juji.io/assets/uploads/future-chatbot-stable-diffusion.jpeg
credit: Generated using Stable Diffusion
---
# Can I build my own chatbot using GPT-4?

# How hard is it?

With the popularity of [ChatGPT](https://openai.com/blog/chatgpt) and more recently [AutoGPT](https://autogpt.net/), more and more organizations (or individuals) are considering the adoption of a chatbot for their website or proprietary applications (e.g., a learning program website or a mobile healthcare application). The pressing question is: should I build or buy one?

The answer is: it really depends on what kind of chatbot you want to have. To determine what kind of chatbot you want, the questions like the following but not limited to the following must be answered:

* What kind of tasks is my chatbot set to accomplish?
* Whom will the chatbot interact with? How many users will use the chatbot?
* What kind of knowledge must it have? Where does the knowledge come from?
* Who would maintain or update the chatbot?
* What kind of progress report should the chatbot generate and where will the reports be stored?

When I was getting my Master's in Computer Science, I naively thought a chatbot was just a machine learning model that can be set up easily and rapidly. After spending 5+ years on building chatbots for business organizations in their real-world applications, I realized that building a usable and useful chatbot takes much greater effort beyond enabling natural language understanding (NLU) and natural language generation (NLG), or even beyond implementing AI capabilities.

# Requirements for Building a Chatbot with GPT-4

Although chatbots can be used in a wide range of applications and industries, their main purpose can be roughly categorized into five types. For each type, I will describe how GPT-4 (which has the latest NLU and NLG capabilities) or an equivalent large language model (LLM) can be used to power a chatbot in that category, including

* the simplest implementation, and
* additional developments that one might want to consider to make a chatbot useful and usable for real-world applications.

## Type I: Chitchat Chatbots

As a student in computer science, this was what I had in mind: a chatbot that entertains you with its humorous sentences on a lonely night (see screenshot below).

<center><img src="/assets/uploads/image10.png" alt="Example of a simple entertaining chatbot" title="Example of a simple entertaining chatbot" width="60%"></center>

If you have access to a LLM like GPT-4, this kind of chatbot is relatively easy to set up. Actually I just asked GPT-4 "What are the steps to create a chatbot using GPT-4?" Below is its answer.

Even though it's wrong about its own release status (GPT-4 is already released!), the main idea was rather straightforward: one can use the GPT-4 API to get input from a user, pass on the user input to get the chatbot response, and then relay the chatbot response back to the user.

![GPT-4's take on how to create a chatbot using GPT-4](/assets/uploads/gpt-4-answer-on-gpt-4-chatbot.png "GPT-4's take on how to create a chatbot using GPT-4")

This sounds magical: now you could have a humorous chit-chat chatbot on your platform to entertain your visitors. However, what if your chatbot gives out erroneous information just as it did about its own release? What if your chatbot responded to your visitors that other brands offer better products/services than yours? The bad news is that LLMs including GPT-4 [hallucinate](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) and might give false statements of fact with confidence. If you are a business owner, you might not want your visitors to get the wrong idea about you or your brand.

Then what if someone tries to attack your chatbot maliciously? Or what if a huge number of users suddenly appeared on your website and overwhelmed your chatbot? You will then need to think about system security and safety, as well as resource scaling just like building any other type of computer applications and systems.

### Key Skills Required

* Basic Programing
* Web Development

## Type II: Custom Q&A Chatbots

After reading the above that directly using GPT-4's answers to user questions might not be a good idea for your brand or business, now you want to inject your own information into your chatbot so it can respond to users appropriately. In fact, one of the most common chatbot uses is a custom Q&A chatbot that uses proprietary information to answer user questions. For example, universities want a custom chatbot on their website to answer prospect or student questions about their learning programs (see below an example chat) or hospitals want a chatbot in their mobile app to answer patient questions about their medical services.

<center><img src="/assets/uploads/image1.png" alt="Example of an university custom Q&A chatbot" title="Example of an university custom Q&A chatbot" width="60%"></center>

Since GPT-4 does not have your proprietary information, you will need to inject the information into the chatbot yourself. While there are many ways to inject knowledge into your chatbot, you might have to make a number of design decisions about your chatbot:

1. Do you want your chatbot to sound conversational or use the tone consistent with your brand personality when it answers your audiences' questions? Keep in mind, the proprietary data you have (e.g., your website information) may exist in a different form for a different purpose (e.g., long paragraphs or sentences for people to read) instead of in a natural conversational tone. If you care about having your chatbot deliver information in a natural conversational tone, you'll have to transform your data into a conversational one.
2. What should your chatbot do if it cannot answer a user question? Would you rather have the chatbot acknowledge its ignorance or always provide an answer that might not be accurate? Or do you wish to let the chatbot acknowledge its ignorance for only certain cases but let GPT-4 handle the rest even if its answer might be wrong?
3. What kind of report do you want to have about your chatbot's Q&A status? Do you want the chatbot to notify you in real time if it cannot answer a user's question? Do you want to use additional channels (e.g., emails or SMS) to notify users that their unanswered questions are now answered? How can you or a chatbot supervisor improve the chatbot quickly if it misses user questions?
4. Do you want your chatbot to gather user feedback on its answers? How do you want to handle user feedback, especially the negative ones so you can improve your chatbot?

Based on your answers to these questions, you can then decide how to build your chatbot with GPT-4 to handle various situations as described above.

As shown below, the simplest implementation of a custom Q&A chatbot is to include your FAQ list in the system prompt to GPT-4. It will use your FAQ to answer user questions if a user question happens to match one of your FAQs.

![Example of a simple GPT-4 custom Q&A chat](/assets/uploads/image7.png "Example of a simple GPT-4 custom Q&A chat")

However, there are several drawbacks. First, your chatbot may give wrong information to your users when it cannot find any match in your FAQ to the user question. As shown in the screenshot below, my FAQ does not include financial aid information but GPT-4 is not shy about coming up with an answer of its own with confidence, which may pose a liability for you or your business. Second, as the chatbot creator, there is no way for you to be aware of such a situation since this chatbot does not give notifications when it could not find a FAQ match. Of course it won't be able to gather any user feedback either for you to address.

![Example of GPT-4 give out its own answer](/assets/uploads/image6.png "Example of GPT-4 give out its own answer")

Another more serious limitation of this simple implementation is scalability. As your FAQ list grows, e.g., over a thousand Q&A pairs, you won't be able to upload all your Q&As to GPT-4 since it has a limit on taking in the maximum 8192 tokens (approximately 200 Q&A pairs) at a time.

If you wish to build a custom Q&A chatbot that is scalable and delivers great user experience, things can get even more complex quickly. For example, you'd want to build [a real-time chatbot Q&A monitoring system](https://juji.io/blog/q-a-dashboard/) to track when your chatbot fails at answering a user question and then instruct what the chatbot should do in this situation (e.g., routing it to a live agent or taking down a user's contact information for answer notification). To continuously improve your chatbot, you'd also need to [implement a system that lets you or other humans update your chatbot](https://juji.io/blog/question-recommendation/) with an improved FAQ list without interrupting ongoing conversations. For example, you don't wish to interrupt any ongoing conversations that your chatbot has with a student who is learning about a subject or a patient who is inquiring about medical procedures in order to update the knowledge of your chatbot.

In general, assuming a mid-size simple FAQ list (i.e., a couple of thousands of Q&As with no multi-turn Q&As, see multi-turn Q&A below), plan to budget two full-time engineers (e.g., one working on the backend and one on the front-end), who might be able to build a decent custom Q&A chatbot with GPT-4 in 4-6 months. Keep in mind, this implementation supports only simple, single-turn-based Q&A, excluding multi-turn Q&A that must be supported by the Type IV chatbots described below.

### Key Expertise Required

* Database
* System Design
* UI/UX
* Web Development

## Type III: Custom Interview Chatbots

Another common use of chatbots is conducting interviews to gather information from an intended audience. [Studies](https://arxiv.org/abs/1905.10700) show that people are more willing to provide higher quality responses in a conversation than in a traditional form-based survey. In fact, organizations have used interview chatbots to conduct [social research studies](https://www.businesswire.com/news/home/20210629005084/en/Juji-Inc.-Powers-Cornell-University-Study-on-Human-Machine-Team-Creativity), [personality assessments](https://www.businesswire.com/news/home/20230124005074/en/Juji-Inc.-Powers-Auburn-Led-Five-University-Study-on-Validating-Personality-Scores-Inferred-by-an-AI-Chatbot), and [job interviews](https://dl.acm.org/doi/10.1145/3232077).

Below is an example of interview chat for a police officer position:

<center><img src="/assets/uploads/image3.png" alt="Example interview chat for a police officer position" title="Example interview chat for a police officer position" width="60%"></center>

To build a useful and usable interview chatbot, you might want to consider a number of design decisions beside determining a list of interview questions for your chatbot to use:

1. How would you like to control the interview process to ensure the quality of interviewee responses? Can users skip certain questions? Do you want your chatbot to ask follow-up questions or branch off to different sub-flows? Do you wish to reinforce certain constraints on user answers, e.g., the length of their answers? How to handle user irrelevant answers or gibberish input?
2. What kind of interview report would you like to have? In what format (e.g., CSV vs. text file of dialog history)? Would you like to visualize user answers that might help you identify insights? How would you like to view users' free-text responses to open-ended chatbot questions? Should the text responses be summarized in a way that is easy and fast for human consumption?
3. How should the chatbot behave when it is interrupted? For example, should the chatbot answer user questions during the interview or just ignore them? What about user's clarification questions regarding an interview question?

As shown below, the simplest implementation of a custom interview chatbot can be made with a system prompt to GPT-4.

![Example of a simple custom interview chatbot based on GPT-4](/assets/uploads/image9.png "Example of a simple custom interview chatbot based on GPT-4")

Since the main purpose of an interview chatbot is to gather information, it is important to ensure that respondents provide quality input during their interview. The simplest implementation does not allow you to customize how to handle a user's response in various situations. For example, what if a user wants to skip a question, would your chatbot allow it? As shown in the example below, I interrupted the flow with a question, the chatbot answered my question but skipped the current question.

![Example of GPT-4 interview chatbot skipping an interview question due to user's interruption](/assets/uploads/image8.png "Example of GPT-4 interview chatbot skipping an interview question due to user's interruption")

Don't be surprised that human users interrupt a chatbot or an interview flow all the time with diverse expressions. For example, users might give an irrelevant answer to a question, give an excuse to why they won't answer the question, respond with "I don't know", or simply answer with gibberish input. To ensure the quality of user responses, you'd need to implement a full-fledged, configurable interview chatbot to support:

* Question configuration (e.g., similar to what other survey platforms have supported the definition of survey questions but more)
* Question routing (e.g., if an interview question is interrupted, how the chatbot behaves)
* Question communication (e.g., when a chatbot needs to repeat a question, should it repeat the original question or a shorter alternative expression)

It would require tremendous amounts of design and engineering efforts to just figure out how to manage a custom question routing flow intertwined with the GPT-4 chat flow! Expect one full-time AI engineer to spend about 10-12 months to support the functions robustly.

Another important requirement of an interview chatbot is proper recording and reporting of user responses. For practical uses, interview reporting should include the following for the minimum:

* Real time recording of interview results
* Retrieve and display of interview status (how many ongoing and how many have completed)
* Retrieve and display of quantitative responses and analyses
* Retrieve and display of qualitative responses and analyses (e.g., qualitative responses require further text processing)

In summary, significant engineering efforts will be required to support interview results recording and reporting, including database setup and management, data retrieval and analyses, and interactive visualization of data analysis results. Budget 1 backend engineer and 1 front-end engineer to implement a decent recording and reporting system in about 4-6 months.

### Key Expertise Required

* NLP/ML
* Data Analytics
* Database
* System Design
* UI/UX
* Web Development

## Type IV: Custom, Two-way Conversational Chatbots

In real-world applications, chatbots often [perform multiple tasks](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/) at the same time. For example, a chatbot on a university website may ask visitor questions to get to know more about them while answering their questions about the university programs (see the screenshot below). Likewise, a chatbot inside a healthcare mobile app may ask patients questions to check in on them daily while answering patient questions.

<center><img src="/assets/uploads/image2.png" alt="Example conversation between a chatbot and visitor about education programs (part 1)" title="Example conversation between a chatbot and visitor about education programs (part 1)" width="60%"></center>

<center><img src="/assets/uploads/image5.png" alt="Example conversation between a chatbot and visitor about education programs (part 2)" title="Example conversation between a chatbot and visitor about education programs (part 2)" width="60%"></center>

<center><img src="/assets/uploads/image4.png" alt="Example conversation between a chatbot and visitor about education programs (part 3)" title="Example conversation between a chatbot and visitor about education programs (part 3)" width="60%"></center>

We can consider these chatbots a combination of the Q&A and interview chatbots mentioned above: they can ask as well as answer user questions during a conversation. Because these chatbots are a hybrid of both types of chatbot, many more decision points must be taken into consideration in addition to designing just one type of them:

* Who should start the chat, the chatbot or the user, in this two-way conversation? Who should drive the conversation forward? Can each of them drive the conversation as needed? How to customize the configurations?
* How to handle arbitrary tasks interleaving? As shown in the example above, a user is asking for a program recommendation. However, before the chatbot could provide the recommendation, the user asks about financial aid.
* For complex tasks like daily check-in on a patient or student, how to preserve the conversation context so that a chatbot can engage with a user continuously across a long period of time?
* What kind of reporting dashboard would you like to see since chatbots can perform multiple tasks?

Unfortunately, LLMs including GPT-4 does NOT help you address any of the design decisions listed above. This means that you will have to build each part from the ground up. To build such a system, in addition to using LLM like GPT-4 to help chatbot interpret user input or generate certain messages, you'll also need the following:

1. A front-end system that allows the customization of chatbot tasks and Q&As
2. Sophisticated algorithms that can handle arbitrary task interleaving
3. Database management system to track conversation history and preserve context for continued engagements
4. Chatbot dashboard to display user interaction history or KPIs (e.g., what are the most frequently asked user questions in a given task? Which task has the highest completion rate?)

In general, while GPT-4 could help provide NLU and NLG capabilities, it will take tremendous amounts of engineering efforts to build a practical two-way conversational chatbot that can achieve multiple tasks. Budget 3-5 full-time engineers for about 12-18 months ($2 to $2.5 million) to build a chatbot to support a set of specific tasks. If you wish to support a wide variety of types of tasks, it would require even more effort.

### Key Expertise Required

In addition to the expertise required for building a Custom Q&A Chatbot and a Custom Interview Chatbot, building a Custom Two-way Conversational Chatbots also requires the following expertise:

* System Architecture
* ML Algorithm

Furthermore, to ensure the performance of such system, the following expertise is also desired:

* Operation
* Distributed System

## Type V: Custom, Two-way conversational Chatbots with Third-Party Integration

In an enterprise, chatbots often need to be integrated with other systems to fulfill their tasks. For example, AI is far from perfect, organizations may want to integrate AI chatbots with a live human chat system so users can be transitioned to human agents who can further help them whenever needed (see an example of AI-Human handoff below).

<center><img src="/assets/uploads/image11-copy-.png" alt="Example transition from chatbot to human agent" title="Example transition from chatbot to human agent" width="60%"></center>

To store and retrieve enterprise data during a chat, chatbots may also need to be integrated with an enterprise's backend data systems (e.g., a CRM system that stores prospect or customer information or a learning system that stores all learning materials).

Each third-party integration will require additional engineering effort, including authentication, testing, system interfacing, and performance scalability. Unfortunately GPT-4 or AutoGPT cannot help you do the integration yet. If you use GPT-4 to build a real-world, two-way chatbot that supports a set of specific tasks and integrate with third-party systems from the ground up, budget 4-6 engineers for 10-12 months of effort ($2.5 to $3 million).

### Key Expertise Required

Each third-party integration will require collaboration between both the front-end and backend engineers. The following expertise will be important for integrating third-party systems:

* System Design / System Architecture
* UI/UX
* Web Development

# Who's involved in building a chatbot?

Building a chatbot is NOT just an engineering project. For the past few years, I have helped many customers build their chatbots. Most of the time I work with subject matter experts (SMEs) who are none-IT specialists. They are marketing specialists, recruitment gurus, HR experts, and learning specialists. They are the supervisor of a chatbot—setting it up and taking care of the chatbot as it grows. They are also the source of chatbot content since they have the domain knowledge that a chatbot needs to function professionally. For example, a university recruitment chatbot takes content from recruitment specialists, while a healthcare chatbot takes content from healthcare coordinators.

So what I really want to emphasize is the importance of involving and empowering SMEs in your chatbot creation process. This means that when you decide to create a chatbot solution on your own, it is like starting a company-wide project that requires the coordination of multiple departments, involving communications across multiple teams and overcoming organizational cultural barriers and politics. Additionally, such a coordinated effort will have to last forever as long as your chatbot exists because adopting a chatbot is like adopting a child, your chatbot needs continuous nurturing in its existence: to be monitored, maintained and updated. Even with so much effort in place, you might have created just one specific chatbot solution (e.g., aiding students in their learning), which may not be easily extended to handle another use case (e.g., assessing students learning outcomes).

# Main Takeaways

In summary, building a chatbot on your own with GPT-4 is possible but requires varied levels of development efforts depending on your goal. Though the simplest solution may be fast and easy to implement, it is often not meant for practical, real-world business applications.

To the minimum, you'll have to

1. Set up a web hosting platform;
2. Write a computer program to make API calls to GPT-4 or an equivalent LLM accesses;
3. Build an interface for your chatbot to chat with your users.

If you want your chatbot to answer or ask questions using your proprietary information, you will then need to support the following minimal requirements:

4. Integrate with a data storage to ingest proprietary interview questions or Q&A knowledge (simple Q&A only, no multi-turn Q&A as shown above);
5. Develop algorithms to monitor and control chatbot behavior to handle unknown questions or uncooperative users;
6. Store, monitor, and report chat results, including chatbot unanswered questions, user responses or feedback.

If you would like to go to the next level with a chatbot that can ask and answer questions in a two-way conversation, the following also need to be supported to the minimum:

7. Develop a system that can configure, track, and control your chatbot's conversation flow under diverse circumstances (e.g., interleaving of multiple tasks);
8. Develop a system that can maintain the state of a conversation and handle arbitrary user interruptions properly to manage task completion;
9. Develop a monitoring, analytics and reporting sub-system that can deliver user insights and chatbot stats for continuous improvement and maintenance.

Furthermore, integration with third-party systems would require another level of efforts:

10. Develop connections to external third-party systems securely;
11. Develop supports of customized API calls within conversation;
12. Develop algorithms to handle complex chat flow management such as human-AI handoff.

Last but not least, keep in mind to involve the content creators all the time, the real AI supervisor of your chatbot. Without them, your chatbot will not be able to get the job done.

## What's next?

If you are looking for a better and more efficient way to build a chatbot for your business. Not to worry, help is on the way! See my blog post on [how you can use Juji to build a chatbot that uses GPT-4 rapidly with #NOCODE](https://juji.io/blog/how-can-juji-help-you-build-a-chatbot-using-gpt-4-rapidly-with-nocode/).
