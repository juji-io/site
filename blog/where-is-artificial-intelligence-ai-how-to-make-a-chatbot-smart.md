---
layout: blog/article.njk
featured: true
title: Where is Artificial Intelligence (AI)? Invisible AI That Makes a Chatbot Smart
date: 2020-07-06T18:52:02.003Z
author: Michelle Zhou
category: Guides
tags:
  - chatbot
  - conversational ai
  - ai chatbot
  - ai chat
  - smart chatbot
  - why ai chatbot
  - chatbot development
  - personal healthcare assistant
image: /assets/uploads/robot.gif
---
A while back, I wrote a blog on ["Chatbot Tsunami"](https://juji.io/blog/chatbot-tsunami-the-good-bad/), mentioning that our world is inundated with chatbots, including both [good ones](https://www.newvoicesnasem.org/post/using-artificial-intelligence-to-combat-misinformation-about-covid-19) that can help us fulfill our requests and bad ones that can hardly understand or achieve anything.

Since Juji always aims at powering all good chatbots with the smarts needed to help users, I had assumed two things:

* Everyone would know what these smarts are 
* Everyone would know how hard it is to teach chatbots such smarts

Until recently, I realized that something I took for granted (the two things listed above) is not common knowledge. 

Just a few weeks ago, I was demoing our [conversational AI (AI chatbot) platform](https://juji.io/juji-platform/) to a customer. In this demo, I showed how to build a chatbot as a personal healthcare assistant that can check in on a user on a daily basis (Figure 1) as well as provide just-in-time help as the user requests it (Figure 2). It took me literally 3 minutes to create the chatbot. I then spent a few minutes to show the chatbot in action (try it yourself if you wish to).  

![A chat between a chatbot and a user where a chatbot asks how the user is feeling.]( "Figure 1. A screenshot showing a Juji chatbot as a personal healthcare assistant to greet a user daily.")

![A chat between the Juji chatbot and the user when the user interrupts the flow by making a request to see a doctor. ]( "Figure 2. A screenshot showing how the uji chatbot handles a user interruption in the middle of a chat flow, fulfills the user’s request, and then resumes the original flow.")

Because everything worked flawlessly, I was thinking to myself they ought to be impressed by our work. However, there was a dead silence after my demo. I then asked "do you have any questions about the demo?" One person asked: "I got it. But where is the AI?" Coincidently (or not so), in a separate meeting after this demo, another customer commented that "I tried Juji. While it is very easy to use and create a chatbot, I'm not sure where the AI is."  

I was certainly taken aback by the questions and also felt quite disappointed at myself that I failed to demonstrate the smarts of Juji chatbot -  the hallmark of Juji, something that we have worked so hard to differentiate Juji from all other chatbot platforms! 

These two clients' question also reminded me of other comments I received before. Some folks who read our [documentation](https://juji.io/docs/) on the topic of "[why AI chatbots](https://juji.io/docs/why-ai-chatbots/)"  told me "by reading your documentation, it seems I don't need an AI chatbot." I didn't think too much about their comments then, and simply believed that they just need a "dumb bot" for their simple tasks, then why bother to build a smart one? 

Now I realized that all these comments are in fact related -- not everyone is aware of the smarts needed in a chatbot (conversational interface) let alone tell whether a chatbot has any intelligence (AI) in it. I thus feel compelled to use this blog to highlight the types of AI that make a chatbot smart and how to tell if a chatbot has any of such AI.   

# What is Artificial Intelligence (Definition of AI)

Before I outline the type of AI a chatbot should have, I want to briefly mention my definition of AI because I get asked alot on this question and my definition is also directly related to the type of chatbot AI I highlight below.  

Although you could look up the [definition of AI on wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence) to get a more comprehensive idea, my answer is often pragmatic and short: *AI is any human skills that we intend to teach a machine to have*. 

# Four Smarts (AI) Every Chatbot Should Have

Based on my definition of AI and the purpose of a chatbot to automate human interactions, I use the following diagram to outline the human skills that a chatbot should be taught:

![A diagram shows four core human skills a chatbot should have]( "Four smarts (Artificial Intelligence) that every chatbot should have.  Here assumes that a chatbot only interacts with a human user via text messages. ")

As shown above, just like a human,  a chatbot should have four core human skills to interact with a human user effectively,:

1. **[Natural Language Understanding ](https://en.wikipedia.org/wiki/Natural-language_understanding)(NLU)**. This is to interpret a user's expressions and understand the user's intent(s).
2. **[Dialog Management](https://en.wikipedia.org/wiki/Dialog_manager)**. Once a chatbot understands the intent of a user, it needs to figure out ***what to do*** and manage the flow of the conversation. For example, it may decide to directly respond to a user's request in the middle of the flow (Figure 2) or to ignore the request for now (Figure 3). 
3. **[Natural Language Generation](https://en.wikipedia.org/wiki/Natural-language_generation) (NLG)**. After a chatbots decides what to do, it then composes its response to the user. 
4. **[Reading between the Lines to Understand Users Deeply](https://en.wikipedia.org/wiki/Psycholinguistics) (Personal Insights Modeling)**. A good human conversationalist not only can grasp the intent of his/her conversation partner, but s/he can also read between the lines to infer the partner's true needs and wants, as well as the partner's characteristics (e.g., cautious vs. easy going). If a chatbot can obtain such insights about its users, it can then [personalize a conversation with each user](https://dl.acm.org/doi/fullHtml/10.1145/3232077). 

![A chat between a Juji chatbot as an interviewer and a job candidate. The Juji chatbot decided to ignore a job candidate's question during an interview and asked the candidate to ask her question later.]( "Figure 3. Screenshot showing that a Juji chatbot as an interviewer decided to ignore a user's question during an interview")

Just like a person, a chatbot can take one of many plausible actions and manage the flow of a conversation.

asked him why he wanted a chatbot.  He replied that he just want a chatbot to gather some information from his

Now thinking back, I probably should not be surprised by the "Where is the AI" question because