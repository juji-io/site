---
layout: blog/article.njk
featured: true
title: Where is the Artificial Intelligence (AI)? Detecting the Invisible AI
  that Makes a Chatbot Smart
date: 2020-07-06T18:52:02.003Z
author: Michelle Zhou
category: Guides
tags:
  - chatbot ai
  - ai
  - chatbot
image: /assets/uploads/robot.gif
credit: adopted from https://giphy.com/
---
A while back, I wrote a blog on ["Chatbot Tsunami"](https://juji.io/blog/chatbot-tsunami-the-good-bad/), mentioning that our world is now inundated with chatbots, including both "[good ones](https://www.newvoicesnasem.org/post/using-artificial-intelligence-to-combat-misinformation-about-covid-19)" that can help us fulfill our requests and "bad ones" that can hardly understand users or achieve anything.

Since Juji aims at powering "good" chatbots with the smarts needed to help users, I had assumed two things:

* Everyone would know what these smarts are; and
* Everyone could tell whether a chatbot has such or any smarts.

Until recently, I realized that my two assumptions were wrong. 

A few weeks ago, I was demoing our [conversational AI (AI chatbot) platform](https://juji.io/juji-platform/) in a customer meeting. In this meeting, I showed how to build a chatbot as a personal healthcare assistant that can check in on a user daily. As shown in Figure 1, the chatbot (Clara) greets the user (Jane) and asks how Jane is feeling. Jane responds to Clara's greeting in natural language and the conversation continues. 

![A chat between a chatbot and a user where a chatbot asks how the user is feeling.](/assets/uploads/fig1.png "Figure 1. A screenshot showing a Juji chatbot as a personal healthcare assistant to greet a user daily.")

Figure 2 shows another conversation between Clara, the chatbot, and a different user (Joe). Clara starts with the same greeting. However, Joe does not respond to Clara's greeting. Instead he asked Clara to help find a doctor. To help Joe, Clara starts to gather some basic information from Joe. Before Clara finishes gathering the info, she was interrupted again by Joe because Joe has a question about his insurance.  

![The screenshot showing a user interrupts a chat flow by making a request to see a doctor. The chatbot responds to the user's request by started taking information from the user to fulfill the request.](/assets/uploads/fig2-a.png)

![The screenshot shows the user interrupts the chat flow again by asking an additional question while the chatbot is gathering information to fulfill the user's request.](/assets/uploads/fig2-b.png "Figure 2. A screenshot showing how the uji chatbot handles a user's multiple interruptions during a dialog and remembers the conversation context.")

It took me just 3 minutes to create the chatbot Clara. I then spent a few minutes to show Clara in action (Figures 1-2). 

Because everything worked flawlessly, I was thinking to myself they ought to be impressed by the smarts of our chatbot. However, there was a dead silence after my demo. I then asked "Do you have any questions about the demo?". One person then asked: "I got it. But where is the AI in this?" 

Coincidently (or not so), in a separate meeting after this demo, another potential customer told me that "I tried Juji. While it is very easy to create a chatbot, I'm not sure where the AI is."  

I was certainly taken aback by the question and comment. In addition, I felt quite disappointed at myself that I failed to highlight the hallmark of a Juji chatbot --  the chatbot smarts (AI).

The question and the comment then reminded me of some earlier comments I received. Some folks who read our [documentation](https://juji.io/docs/) on the topic of "[why AI chatbots](https://juji.io/docs/why-ai-chatbots/)"  told me "by reading your documentation, it seems I don't need an AI chatbot." I didn't think too much then, and simply thought that they just need a "dumb bot" for simple tasks. Why bother to build a smart one? 

Now I realized that all these comments are in fact related -- not everyone is aware of the smarts needed by a chatbot (why AI), let alone telling whether a chatbot has any smarts (AI) in it. 

I feel compelled to use this blog to highlight the types of smarts (AI) that every chatbot should have and why. At the end of this blog, I will also share some quick tips on how to tell if a chatbot has any of such smarts (AI).   

# What is Artificial Intelligence (Definition of AI)

Before I outline the type of AI a chatbot should have, I briefly mention my definition of AI because it is directly related to the definition of AI chabot.  

Although the [definition of AI on wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence) can provide more comprehensive information, my definition is pragmatic and short: *AI is any human skills that we intend to teach a machine to have*. 

# Four Smarts (AI) Every Good Chatbot Should Have

Since the purpose of a chatbot is to automate human interactions and help a user as if the user is interacting with a person, a good chatbot should have some  essential human communication skills to carry on an effective conversation. 

![A diagram shows four core human skills a chatbot should have: natural language understanding (NLU), dialog management, natural language generation (NLG), and personal insights modeling.](/assets/uploads/screen-shot-2020-07-09-at-2.45.55-pm.png "Four smarts (AI) that every chatbot should have.  Here assumes that a chatbot only interacts with a human user via text messages. ")

Let's imagine that a chatbot would behave like a person in a conversation. As outlined in the diagram above,  such a chatbot should have four core **human skills** (smarts):

1. **[Natural Language Understanding ](https://en.wikipedia.org/wiki/Natural-language_understanding)(NLU)**. A true conversation is the exchanges of natural language expressions. This smart refers to a chatbot's abilities to interpret a user's natural language expressions and understand the user's intent(s). 
2. **[Dialog Management](https://en.wikipedia.org/wiki/Dialog_manager)**. Once a chatbot understands the intent of a user, it needs to decide **what to do --** how to best respond to the user and move the conversation forward***.*** For example, it may decide to answer a user's question in the middle of the flow (Figure 2) or to ignore the question (Figure 3). Because a user often does not follow a pre-defined chat flow, this smart often refers to a chatbot's abilities to manage user interruptions or digressions, keep track of a conversation context, and ensure the completion of a dialog (task). 
3. **[Natural Language Generation](https://en.wikipedia.org/wiki/Natural-language_generation) (NLG)**. After a chatbot decides what to do, the chatbot then composes its response to the user. This smart refers to a chatbot's abilities to compose natural language responses in context. For example, a chatbot may compose different expressions to communicate the same content to different users. 
4. **[Reading between the Lines to Understand Users Deeply](https://en.wikipedia.org/wiki/Psycholinguistics) (Personal Insights Inference)**. A good human conversationalist not only can grasp the intent of a conversation partner, but can also read between the lines to infer the partner's true needs and wants, as well as the partner's characteristics (e.g., cautious vs. easy going). If a chatbot can obtain such insights about its users, it can then [personalize a conversation with each user](https://dl.acm.org/doi/fullHtml/10.1145/3232077).  For example, [a chatbot can recommend different books](https://www.messenger.com/t/109315067094969) to different users based on their conversations. 

![A chat between a Juji chatbot as an interviewer and a job candidate. The Juji chatbot decided to ignore a job candidate's question during an interview and asked the candidate to ask her question later.](/assets/uploads/fig3.png "Figure 3. Screenshot showing that a Juji chatbot as an interviewer decided to ignore a user's question during an interview")

The nature of a conversation is to exchange information and ideas expressed in natural language. Thus, understanding natural language expressions (NLU) is a basic smart that a chatbot should have.  Although most chatbots have very limited NLU smart (Figure 4), there is much progress made on NLU especially with the recent advances in machine learning. 

![It shows two chatbots that don't understand a user's natural language input. The chatbot on the left asks "What's your name?". The user replied "My name is chatbot". And the chatbot thought the user's name is "My name is chatbot". On the right, the chatbot asks "What's your name?", the user responds "What's yours?". The chatbot thanked the user and moved on (and perhaps thought the user's name is "What's yours". ](/assets/uploads/screen-shot-2020-07-08-at-5.32.26-pm.png "Figure 4. Two chatbots ask for a user's name and both fail to understand the user's input")

For example, Juji chatbots are able to [understand highly diverse and complex natural language expressions](https://dl.acm.org/doi/abs/10.1145/3313831.3376131) using the [hybrid pattern-based and data-driven machine learning methods](https://www.youtube.com/watch?v=phA4bMjKvCY&t=5s).  In contrast to the two chatbots shown in Figure 4, Figure 5 shows a Juji chatbot that is able to grasp a user's input correctly.

![A screenshot showing that a chatbot asks a user's name and the user doesn't answer, instead asking back "What's yours?" The chatbot handled the user question and resumed the chat flow to catch the user's name eventually. ](/assets/uploads/fig5.png "Figure 5. A Juji chatbot asks for a user's name and correctly interprets the user's input.")

Similar to NLU, natural language generation (NLG) is another must-have chatbot smart because a chatbot must produce responses in a chat. NLG has also made great advances as summarized by Professor Kathy McKeown in her recent [ACL 2020 keynote](https://acl2020.org/program/keynotes/). 

On the other hand, another two smarts ***dialog management*** and ***reading between the lines*** are less understood because fewer people are aware of their importance and there are also greater challenges for chatbots to gain these two smarts.  

Next I will describe why it is important to power a chatbot with these two smarts. 

## Managing a conversation flow

Assume that a chatbot can understand a user's input perfectly. In such a case,  the chatbot still needs to decide how to best respond to the user's input and move a conversation forward gracefully.  Just like a person, a chatbot can carry on a conversation in many different directions depending on a user's input and the goals of a conversation. For example, if the goal of a conversation is to help users no matter what, a chatbot would act so. Figure 2 shows that Clara the chatbot switches the context twice to help user Joe and then picks up the flow to move a conversation forward. However, if the goal of a conversation is to [elicit information from a user](https://dl.acm.org/doi/10.1145/3381804), a chatbot may ask the user to hold on his/her questions until the interview is finished (Figure 3). 

Since it is very difficult to anticipate how a user would behave in a conversation, it is not possible to plan a chatbot's every move in advance. Moreover, many factors including human spontaneity will most likely prompt a user to digress from a planned conversation flow. 

Figure 2 shows Joe's two digressions from a flow. Figure 5 shows another user digression: instead of replying to the chatbot with a name, the user asked the chatbot its name.  Figure 6 shows yet another example where a pizza-ordering chatbot gets interrupted by the user's question about a coupon. 

![The screenshot showing a chatbot helps a user order a pizza. It starts by asking the user the size of the pizza to order.](/assets/uploads/fig6-1.png)

![The conversation continues to ask the user to select toppings. But the user didn't do as asked. Instead the user asked the chatbot to check a coupon.](/assets/uploads/fig6-2.png)

![ The chat continues to ensure  the completion of task.](/assets/uploads/fig6-3.png "Figure 6. A chatbot handles user interruption while helping the user order a pizza.")

In all the examples above (Figure 2, Figures 5-6), it is important for a chatbot to handle user interruptions properly while moving the conversation forward. In all these examples, there is AI working behind the scene to drive the chatbots to manage the chat flow changes. In fact,  a chatbot needs to make a decision at every step, e.g., deciding to answer a question or continue the current flow. Humans are super smart and can make such decisions in a split second, while a chatbot must be taught with such smart. 

What would happen if a chatbot does not have such smart?  The chatbot shown on the left of Figure 4 is not able to handle a user's interruption ("what's yours"). This inability also hinders the task completion (i.e., in this case, the chatbot failed to get the user's name).  

No matter how simple a task is, a chatbot often needs such smart to ensure task completion. Let's say we want a simple chatbot to gather product feedback from our users. If we care about the quality of data gathered, we would be concerned with the following chat: 

Chatbot: *How did you like our product?*

Participant: *I don't know*.

Instead of taking the participant's input, a good (AI) chatbot would have the smart to recognize the inadequate input and respond by encouraging the participant to give more meaningful input. Along the same line, what if the participant responded with one of the following expressions:

* What aspects do you like to hear? 
* I haven't used the product long enough to have an opinion
* Why do you want to know?

*How should the chatbot manage the conversation?* 

As you can imagine, such "exceptional answers" could be many since user behavior is highly diverse and unpredictable, which can drive a conversation into numerous directions. To balance the delivery of a great user experience and fulfillment of conversation goals, a chatbot must have the smart to manage a conversation flow properly.  On the other hand, a chatbot without such smart will have a hard time to complete any tasks, let alone satisfy its users. 

## Reading between the lines

Although many chatbot or conversational AI platforms mention that their chatbots can personalize a user experience, few of them actually do so. For example, if a pizza-ordering chatbot asks a user to make a series of choices and then orders a pizza based on the choices made, the conversation is not personalized because if another user who would make the same set of choices, the user will get the same pizza.  

In contrast, if a user asks a chatbot to recommend a pizza to order, the chatbot makes a recommendation based on a user's likes and needs, that is a personalized experience. This is because if another user makes the *exactly same* request, she may get a totally different pizza based on her likes and needs.

Numerous studies in [Psycholinguistics](https://en.wikipedia.org/wiki/Psycholinguistics) including [our own](https://dl.acm.org/doi/fullHtml/10.1145/3232077) (Section 4) have shown that a person's text communications reveal one's characteristics, such as motivations and preferences. A smart chatbot should be able to infer a user's characteristics from the chat, and then use the inferred insights to personalize each conversation. 

For example, a chatbot can interact with a gamer to infer his gaming preferences, a social gamer vs. an action-oriented gamer, and recommend suitable games. Similarly, a chatbot can chat with a reader to infer her reading preferences, cerebral vs. artistic,  and then [recommend suitable books](https://www.messenger.com/t/109315067094969). Note that such recommendations are based on user characteristics, different from traditional behavior-based recommendation (e.g., [collaborative filtering](https://en.wikipedia.org/wiki/Collaborative_filtering) as seen on Amazon), which often requires large amounts of user behavior data. In contrast, characteristics-based recommendations can be made even if a user has no demonstrated behavior. Assume that a user is looking for a game to play but has never bought a game before. Through a brief conversation, a chatbot infers that the user is very artistic and highly curious. It could then recommend games that feature beautiful game worlds with intriguing plots.  

In short, this smart enables a chatbot to know a user deeply and become truly personal to each user. This short [Youtube video](https://juji.io/docs/tutorial/#send-personalized-messages-by-user-personas) shows how to personalize chat messages based on a user's characteristics. 

# How to Tell if a Chatbot has AI

Based on the four must-have chatbot smarts described above, it is easy to detect if a chatbot has any AI. We can do so by interacting with a chatbot and answering four questions. 

## Can the chatbot understand your natural language expressions?

No matter whether you are evaluating a particular chatbot or a chatbot platform, I strongly encourage you to chat with the chatbot or a chatbot made on that platform (see [more on platform evaluation](https://juji.io/docs/why-ai-chatbots/#which-ai-chatbot-platform-to-use)). 

**Test on varied expressions**. To detect if a chatbot can  understand natural language expressions, try chat with it using different expressions and see how it behaves. 

For example, if a chatbot asks you "What's your name?", try to answer it in different ways:

\* *my name is Michelle*

\* *I go by Michelle*

\* *Michelle is the name*

\* *My name is not Mary but Michelle* 

This is to test its abilities to understand natural language expressions because your chatbot users will sure come up with many different expressions. 

**Ask a confirmation question.** If a chatbot does not confirm its interpretation results, you also should test it by asking a confirmation, e.g.,  "What's my name" to confirm if the chatbot gets your name correctly. 

**Embed keywords into expressions with opposite meanings**. To test whether a chatbot does only keyword matches instead of semantic interpretation, you can also try to input expressions containing the same keywords but with completely different meanings to see if you'd still get the same response. For example, if a chatbot asks "How healthy are you?" try  "I'm not healthy" and "I'm very healthy" to see what chatbot responses you'd receive.  

After several tries, you'll get a good idea as how smart a chatbot is in terms of understanding natural language expressions.

## Can the chatbot manage a conversation?

Assuming that a chatbot can understand your natural language expressions, the next step is to check whether it can manage a conversation properly. You can test this smart by asking a chatbot questions at **different points** of a conversation and observe how a chatbot handles your interruptions: 

* Does the chatbot ignore or answer your questions?   
* Does the chatbot resume the conversation flow after answering your question?
* Does the chatbot keep track of the conversation context (e.g., asking the chatbot "where are we")

The examples shown in Figure 2, Figure 5, and Figure 6 are good test cases to detect a chatbot's smart in dialog management. For the best chabots, you could even test how a chatbot handles multi-level interruptions as shown in Figure 2.

## Can the chatbot be personal?

We suggest two ways to test whether a chatbot has the smart to personalize a conversation. One is to directly ask the chatbot "How much do you know about me?" and see how it responds (Figure 7). Second, if a chatbot makes recommendations or give advices, ask for a recommendation or advice. Then ask a friend of yours to do the same and see if you get the same results. 

![This screenshot shows a user asks a chatbot "how much do you know about me" and the chatbot responds with its understanding of the user. ](/assets/uploads/fig7.png "Figure 7. Asking a chatbot how much it knows about you. ")

In short, I have described the four types of smarts (AI) every chatbot should have and how to detect if a chatbot has such smarts.  Since it is non-trivial to power a chatbot with all the smarts, I will share how to do so in my next blog. 

In the meantime, if you wish to test out the smarts of Juji chatbots, [chat with them](https://juji.io/gallery/) or [sign up](https://juji.io/signup) to create your own and experience such smarts.