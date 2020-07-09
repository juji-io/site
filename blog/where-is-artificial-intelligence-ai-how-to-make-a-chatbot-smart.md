---
layout: blog/article.njk
featured: true
title: Where is the Artificial Intelligence (AI)? Detecting the Invisible AI
  that Makes a Chatbot Smart
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
credit: adopted from https://giphy.com/
---
A while back, I wrote a blog on ["Chatbot Tsunami"](https://juji.io/blog/chatbot-tsunami-the-good-bad/), mentioning that our world is inundated with chatbots, including both [good ones](https://www.newvoicesnasem.org/post/using-artificial-intelligence-to-combat-misinformation-about-covid-19) that can help us fulfill our requests and bad ones that can hardly understand or achieve anything.

Since Juji always aims at powering all good chatbots with the smarts needed to help users, I had assumed two things:

* Everyone would know what these smarts are 
* Everyone would know how hard it is to teach chatbots such smarts

Until recently, I realized that something I took for granted (the two things listed above) is not common knowledge. 

Just a few weeks ago, I was demoing our [conversational AI (AI chatbot) platform](https://juji.io/juji-platform/) to a customer. In this demo, I showed how to build a chatbot as a personal healthcare assistant that can check in on a user on a daily basis (Figure 1). 

![A chat between a chatbot and a user where a chatbot asks how the user is feeling.](/assets/uploads/fig1.png "Figure 1. A screenshot showing a Juji chatbot as a personal healthcare assistant to greet a user daily.")

Upon receiving a user's request, the same chatbot can also provide just-in-time help (Figure 2).  

![The screenshot showing a user interrupts a chat flow by making a request to see a doctor. The chatbot responds to the user's request by started taking information from the user to fulfill the request.](/assets/uploads/fig2-a.png)

![The screenshot shows the user interrupts the chat flow again by asking an additional question while the chatbot is gathering information to fulfill the user's request.](/assets/uploads/fig2-b.png "Figure 2. A screenshot showing how the uji chatbot handles a user's multiple interruptions during a dialog and remembers the conversation context.")

It took me literally 3 minutes to create the chatbot. I then spent a few minutes to show the chatbot in action (try it yourself if you wish to). 

Because everything worked flawlessly, I was thinking to myself they ought to be impressed by our work. However, there was a dead silence after my demo. I then asked "do you have any questions about the demo?" One person asked: "I got it. But where is the AI?" Coincidently (or not so), in a separate meeting after this demo, another customer commented that "I tried Juji. While it is very easy to use and create a chatbot, I'm not sure where the AI is."  

I was certainly taken aback by the questions and also felt quite disappointed at myself that I failed to demonstrate the smarts of Juji chatbot -  the hallmark of Juji, something that we have worked so hard to differentiate Juji from all other chatbot platforms! 

These two clients' question also reminded me of other comments I received before. Some folks who read our [documentation](https://juji.io/docs/) on the topic of "[why AI chatbots](https://juji.io/docs/why-ai-chatbots/)"  told me "by reading your documentation, it seems I don't need an AI chatbot." I didn't think too much about their comments then, and simply believed that they just need a "dumb bot" for their simple tasks, then why bother to build a smart one? 

Now I realized that all these comments are in fact related -- not everyone is aware of the smarts needed in a chatbot (conversational interface) let alone tell whether a chatbot has any intelligence (AI) in it. I thus feel compelled to use this blog to highlight the types of AI that make a chatbot smart and how to tell if a chatbot has any of such AI.   

# What is Artificial Intelligence (Definition of AI)

Before I outline the type of AI a chatbot should have, I want to briefly mention my definition of AI because I get asked alot on this question and my definition is also directly related to the type of chatbot AI I highlight below.  

Although you could look up the [definition of AI on wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence) to get a more comprehensive idea, my answer is often pragmatic and short: *AI is any human skills that we intend to teach a machine to have*. 

# Four Smarts (AI) Every Chatbot Should Have

Based on my definition of AI and the purpose of a chatbot to automate human interactions, I use the following diagram to outline the human skills that a chatbot should be taught:

![A diagram shows four core human skills a chatbot should have: natural language understanding (NLU), dialog management, natural language generation (NLG), and personal insights modeling.]( "Four smarts (AI) that every chatbot should have.  Here assumes that a chatbot only interacts with a human user via text messages. ")

As outlined above, a chatbot should have four core **human skills** (smarts) to interact with a human user effectively:

1. **[Natural Language Understanding ](https://en.wikipedia.org/wiki/Natural-language_understanding)(NLU)**. This smart refers to a chatbot's abilities to interpret a user's natural language expressions and understand the user's intent(s). 
2. **[Dialog Management](https://en.wikipedia.org/wiki/Dialog_manager)**. Once a chatbot understands the intent of a user, it needs to figure out **\*what to do**--*how to best respond to the user and move the conversation forward***.*** For example, it may decide to answer a user's question in the middle of the flow (Figure 2) or to ignore the question for now (Figure 3). Because a user often does ***not*** follow a pre-defined chat flow, this smart often refers to a chatbot's abilities to manage user digressions, keep track of the context of a conversation, and ensure the completion of a dialog (task). 
3. **[Natural Language Generation](https://en.wikipedia.org/wiki/Natural-language_generation) (NLG)**. After a chatbots decides what to do, the chatbot then composes its response to the user. This smart refers to a chatbot's abilities to compose natural language responses in context. For example, a chatbot may compose different expressions to communicate the same content to different users. 
4. **[Reading between the Lines to Understand Users Deeply](https://en.wikipedia.org/wiki/Psycholinguistics) (Personal Insights Modeling)**. A good human conversationalist not only can grasp the intent of his/her conversation partner, but s/he can also read between the lines to infer the partner's true needs and wants, as well as the partner's characteristics (e.g., cautious vs. easy going). If a chatbot can obtain such insights about its users, it can then [personalize a conversation with each user](https://dl.acm.org/doi/fullHtml/10.1145/3232077).  For example, [this chatbot recommends different books](https://www.messenger.com/t/109315067094969) to different users based on the reader DNA inferred for a chat. 

![A chat between a Juji chatbot as an interviewer and a job candidate. The Juji chatbot decided to ignore a job candidate's question during an interview and asked the candidate to ask her question later.]( "Figure 3. Screenshot showing that a Juji chatbot as an interviewer decided to ignore a user's question during an interview")

While NLU is still imperfect and most of chatbots have very limited NLU capabilities (Figure 4), there is much progress made on NLU especially with the recent advances in machine learning. 

![It shows two chatbots that don't understand a user's natural language input. The chatbot on the left asks "What's your name?". The user replied "My name is chatbot". And the chatbot thought the user's name is "My name is chatbot". On the right, the chatbot asks "What's your name?", the user responds "What's yours?". The chatbot thanked the user and moved on (and perhaps thought the user's name is "What's yours". ](/assets/uploads/screen-shot-2020-07-08-at-5.32.26-pm.png "Figure 4. Two chatbots ask for a user's name and both fail to understand the user's input")

For example, Juji chatbots are able to [understand highly diverse and complex natural language expressions](https://dl.acm.org/doi/abs/10.1145/3313831.3376131) using mixed pattern-based and data-driven machine learning methods.  In contrast to the two chatbots shown in Figure 4, Figure 5 shows a Juji chatbot is able to grasp a user's input correctly.

![]( "Figure 5. A Juji chatbot asks for a user's name and correctly interprets the user's input.")

Similar to NLU, NLG has made great advances as summarized by Professor Kathy McKeown in her recent [ACL 2020 keynote](https://acl2020.org/program/keynotes/). On the other hand, another two smarts ***dialog management*** and ***reading between the lines*** are less understood because fewer people are aware of their importance and there are also greater challenges for chatbots to gain these two smarts.  

Next I will describe why it is important to power a chatbot with these two smarts. 

## Managing a conversation flow

Assume that a chatbot can understand a user's input perfectly. In such a case,  the chatbot still needs to decide how to best respond to the user's input and move a conversation forward gracefully.  Just like a person, a chatbot can carry on a conversation in many different directions depending on a user's input and the goals of a conversation. For example, if the goal of a conversation is to help users no matter what, a chatbot would respond to a user's request whenever such a request is raised during their chat. However, if the goal of a conversation is to [elicit information from a user](https://dl.acm.org/doi/10.1145/3381804), a chatbot may ask the user to hold on his/her questions until the interview is finished. 

Since it is very difficult to anticipate how a user would behave in a conversation, it is not possible to plan a chatbot's every move in advance. Moreover, many factors including human spontaneity will most likely prompt a user to digress from a planned conversation flow. 

Figure 2 shows an example where the user didn't follow the chatbot's asking ("ready to get started?"). Instead, he asked the chatbot to help. Similarly, in Figure 5, instead of replying to the chatbot with her name, the user asked the chatbot its name.  Figure 6 shows another example where a chatbot helps a user order a pizza. Before the chatbot finishes gathering all the info, the user interrupts the flow by asking a question. 

![The screenshot shows a dialog between a chatbot and a user where the chatbot takes a pizza order. The chatbot answers the user's questions during the ordering process to ensure the completion of task.]( "Figure 6. A chatbot handles user interruption while helping the user order a pizza.")

In all the examples above (Figure 2, Figures 5-6), the chatbots were able to handle user interruptions properly while moving the conversation forward--the invisible AI in these chatbots did the work naturally. In contrast, the chatbot shown on the left of Figure 4 was not able to handle a user's interruption ("what's yours"), which also hurt the task completion (i.e., in this case, the chatbot failed to get the user's name).  

Even if a chatbot is made for a seemly simple task, it needs the smart to ensure task completion. Recalling the person who told me that he did not need an AI chatbot, I asked him what he wants his chatbot to do. He said "*I just want a simple chatbot to gather some data from my study participants*". I then asked him whether he'd care about the quality of data gathered in the following scenario:

Chatbot: *How did you like our product?*

Participant: *I don't know*.

Instead of taking the participant's input, a smart (AI) chatbot would recognize the user's input and respond by encouraging the participant to give some input. Now what if the participant responded with "What aspects do you like to hear"? How should the chatbot manage the conversation? 

As you can imagine, user behavior is highly diverse and unpredictable, which can drive a conversation into numerous directions. To balance the delivery of a great user experience and fulfillment of conversation goals, a chatbot must have the smart to manage a conversation flow properly.  On the other hand, a chatbot without such smart will have a hard time to complete any tasks, let alone satisfy its users. 

## Reading between the lines

Although many chatbot or conversational AI platforms mention that their chatbots can personalize a user experience, few of them actually do so. For example, if a pizza-ordering chatbot asks a user to make a series of choices and then orders a pizza based on the choices, the conversation is not personalized because if another user who would make the same set of choices, the user will get the same kind of pizza.  

In contrast, if a user asks a chatbot to recommend a pizza to order, the chatbot makes a recommendation based on a user's likes and needs, that is a personalized experience. This is because if another user makes the exactly same request, she may get a totally different pizza based on her likes and needs! 

Numerous studies in [Psycholinguistics](https://en.wikipedia.org/wiki/Psycholinguistics) including [our own](https://dl.acm.org/doi/fullHtml/10.1145/3232077) (Section 4) have shown that a person's text communications reveal one's characteristics, such as motivations and preferences, a smart chatbot should be able to infer a user's characteristics based on the chat. The chatbot can then use the inferred insights to personalize each conversation. 

For example, a chatbot can interact with a gamer to infer his gaming preferences, a social gamer vs. an action-oriented gamer, and recommend suitable games. Similarly, a chatbot can chat with a reader to infer her reading preferences, cerebral vs. artistic,  and [recommend suitable books](https://www.messenger.com/t/109315067094969). Note that such recommendations are based on user characteristics, different from other behavior-based recommendation (e.g., [collaborative filtering](https://en.wikipedia.org/wiki/Collaborative_filtering) as seen on Amazon), which often requires large amounts of user behavior data. In contrast, characteristics-based recommendations can still be made even if a user has no demonstrated behavior. Assume that a user is looking for a game to play but has never bought a game before. Through a brief conversation, a chatbot infers that the user is very artistic and highly curious, it could recommend games that feature beautiful game worlds with intriguing plots.  

With the smart to know a user deeply, a chatbot can be truly personal to each user.

# How to Tell if a Chatbot has AI

Based on the four must-have smarts described above, it is easy for us to tell if a chatbot actually has any AI. We can do so by interacting with a chatbot and answering four questions. Here we skip the step of evaluating a chatbot's NLG smart because a chatbot will always produce an output and it is harder to know how such an output is generated (e.g., template-based or auto-synthesized).

## Can the chatbot understand your natural language expressions?

No matter whether you are evaluating a particular chatbot or a chatbot platform, I strongly encourage you to chat with the chatbot or a chatbot made on that platform (see [more on platform evaluation](https://juji.io/docs/why-ai-chatbots/#which-ai-chatbot-platform-to-use)). To detect if a chatbot can  understand natural language expressions, try chat with it using different expressions and see how it behaves. 

For example, if a chatbot asks you "What's your name?", try to answer it in different ways, e.g., "my name is Michelle",  "I go by Michelle", "Michelle is the name",  or "My name is not Mary but Michelle" to test its abilities to understand natural language expressions. If a chatbot does not give you a confirmation on its interpretation results, you should test it by asking a confirmation question, e.g.,  "What's my name" to confirm if the chatbot gets your name correctly.   

After several tries, you'll get a good idea as how smart a chatbot is in terms of understanding natural language expressions.

## Can the chatbot manage a conversation?

Assuming that a chatbot can understand your natural language expressions, the next step is to check whether it can manage a conversation properly. You can test this smart by asking a chatbot questions at **different points** of a conversation and observe how a chatbot handles your interruptions: 

* Does the chatbot ignore or answer your questions?   
* Does the chatbot resume the conversation flow after answering your question?
* Does the chatbot keep track of the conversation context (e.g., asking the chatbot "where are we")

The examples shown in Figure 2, Figure 5, and Figure 6 are good test cases to detect a chatbot's smart in dialog management. For really smart chabots, you could even test how a chatbot handles multi-level interruptions (Figure 7).

![This shows how a chatbot handles multiple, nested user interruptions. The user interrupted the chatbot's flow by asking the chatbot a question. While the chatbot is answering the user's question, the user interrupted the flow by asking another question.]( "Figure 7. An example showing that a chatbot handles multi-level user interruptions as indicated.")

## Can the chatbot be personal?

We suggest two ways to test whether a chatbot has the smart to personalize a conversation. One is to directly ask the chatbot "How much do you know about me?" and see how it responds (Figure 8). Second, if a chatbot makes recommendations or give advices, ask for a recommendation or advice. Then ask a friend of yours to do the same and see if you get the same results. 

![This screenshot shows a user asks a chatbot "how much do you know about me" and the chatbot responds with its understanding of the user. ]( "Figure 8. Asking a chatbot how much it knows about you. ")

In short, I have described the four types of smarts (AI) every chatbot should have and how to tell if a chatbot has such smarts.  Since it is non-trivial to create a chatbot with all the smarts, I will share how to power a chatbot with these smarts in my next blog. In the meantime, if you wish to test out the smarts of Juji chatbots, [chat with Juji on Facebook ](https://www.facebook.com/juji.io/)(press the "Send Message" blue button) or [sign up](https://juji.io/signup) to create your own and experience such smarts.