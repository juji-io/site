---
layout: blog/article.njk
featured: true
title: "How can Juji help you build a chatbot using GPT-4 rapidly with #NOCODE?"
date: 2023-05-07T05:46:54.543Z
author: Wenxi Chen
category: Guides
tags:
  - AI Chatbots
  - Chatbot Design Tip
  - ChatGPT
  - LLM
  - Juji Studio
image: https://juji.io/assets/uploads/juji-studio.png
credit: Juji, Inc.
---

# How quickly can I build my own chatbot powered by GPT-4 on Juji? What does it take to build one?

In my [previous blog](https://juji.io/blog/can-i-build-my-chatbot-with-gpt-4-how-hard-is-it/), I talked about what it takes to build a chatbot using GPT-4, including the engineering efforts required and a rough cost and time estimate. Although it is non-trivial to build a practical chatbot solution for real-world applications, with the right tools, one can build a custom chatbot solution quickly to take full advantage of the state-of-the-art large language models (LLMs) like GPT-4.

For the past several years, we at Juji have been building [Juji Studio](https://juji.io/no-code-ai-chatbot-builder/), an AI chatbot design tool that enables anyone to build their custom chatbots with #NOCODE. Now [with the integration of GPT-4](https://finance.yahoo.com/news/juji-launches-generative-ai-tool-130000308.html), Juji Studio can enable you to build your custom chatbot even faster and better.

In this blog, I will outline how you can use Juji to quickly build a custom chatbot in each of the five categories mentioned in my last blog. As seen below, you can build these custom chatbots powered by proprietary content and the capabilities of GPT-4 without writing any code or any IT resources.

# Type I: Chitchat Chatbots

Although chitchat chatbots are not typical business solutions, you can build them on Juji easily.

## Use GPT-4 to Generate Chatbot Messages

Since GPT-4 is integrated with Juji Studio, it can be used to interpret user input and answer user questions whenever appropriate. For example, you can use the basic Juji customer service template (see screenshot below) to create a chitchat chatbot that will let GPT-4 handle user input.

![Use basic customer service chatbot template on the Juji Platform](/assets/uploads/how-easy-image3.png "Use basic customer service chatbot template on the Juji Platform")

As shown in the example chat below, GPT-4 is used to interpret the user input (i.e., asking for a funny story) as well as produce the response.

<center><img src="/assets/uploads/image10.png" alt="Example of Juji chatbot using GPT-4 for message interpretation and response generation" title="Example of Juji chatbot using GPT-4 for message interpretation and response generation" width="60%"></center>

In case you don't wish to use GPT-4 to handle user input directly, you can turn it off as shown below.

![Place where you can turn off AI generated fallback messages](/assets/uploads/how-easy-image17.png "Place where you can turn off AI generated fallback messages")

## Deploy Your Chatbot

Once your chatbot is ready, you can quickly deploy it. Your deployed chatbot can be accessed via multiple ways, e.g., via a hyperlink in an email or a chat window installed on a website. Check out this short video to see all [three deployment options](https://youtu.be/blLSLhpjgOM).

![Juji chatbot deployment options](/assets/uploads/how-easy-image7.png "Juji chatbot deployment options")

In summary, you can take just 3 simple steps to create and deploy a chatbot on Juji without worrying about web hosting or calling the GPT-4 API.

* Select a chatbot template
* Preview the chatbot
* Deploy the chatbot

Additionally, Juji automatically tracks chatbot behavior (e.g., how many users it has engaged and how long of each engagement) and displays all the information on a dashboard. Below is an example chatbot dashboard.

![Example Juji chatbot behavior report dashboard](/assets/uploads/how-easy-image20.png "Example Juji chatbot behavior report dashboard")

# Type II: Custom Q&A Chatbots

As mentioned in my last blog, Question & Answering (Q&A) is one of the most popular chatbot uses. Juji supports a rapid creation of a custom Q&A chatbot that uses proprietary information. As shown below, the UIUC chatbot uses the proprietary information to answer a user question.

<center><img src="/assets/uploads/how-easy-image1.png" alt="UIUC Juji chatbot uses proprietary information to answer a user question" title="EUIUC Juji chatbot uses proprietary information to answer a user question" width="60%"></center>

## Inject Proprietary Data for Chatbot Q&A

In Juji Studio, you can teach your chatbot with proprietary data in multiple ways. One way is to directly enter a Q&A pair inside a GUI. The other way is to [specify all proprietary Q&As in a CSV file](https://juji.io/docs/juji-studio/customize-qa/#upload-qas-csv) and upload the CSV file (training data) into Juji (see below).

![Upload proprietary Q&As in a CSV file for Chatbot Q&As](/assets/uploads/how-easy-image23.png "Upload proprietary Q&As in a CSV file for Chatbot Q&As")

You can leverage GPT-4 explicitly to auto-generate alternate question expressions so the chatbot can have a wider coverage for diverse user question expressions. Or you can leave this to Juji, which automatically leverages GPT-4 to capture wider varieties of the given questions. Below is an example of using GPT-4 to generate various question expressions of the question "When will I receive my refund". Again, you still have full control on whether to use the generated questions.

![Use GPT-4 to generate question variations on the Juji Platform (part 1)](/assets/uploads/how-easy-image25.png "Use GPT-4 to generate question variations on the Juji Platform (part 1)")

![Use GPT-4 to generate question variations on the Juji Platform (part 2)](/assets/uploads/how-easy-image4.png "Use GPT-4 to generate question variations on the Juji Platform (part 2)")

Yet another way to leverage GPT-4 is to simply provide a web page URL or upload other materials to [generate Q&As using AI](https://youtu.be/ycrK4b4EOOo). Once the Q&A pairs are generated, you can validate the generated Q&As and customize them as you see fit. This way, you have made sure that your chatbot will respond to users with the correct information without suffering the hallucinations exhibited by GPT-4 like LLMs.

Since Juji will also host the Q&As for you, you don't need to worry about where to store the data and how to secure and maintain the data either, which again saves you great time and effort.

## Q&A Monitor, Report and Update

In a real-world chatbot solution, you'll also need to monitor and update the chatbot so its information is always up to date and its function is improved (e.g., able to answer user questions that it could not answer before). To help you monitor and update your chatbot easily, Juji [automatically monitors your chatbot behavior and displays it on a dashboard in real time](https://juji.io/blog/q-a-dashboard/). By viewing the dashboard, you can learn about your chatbot behavior and update it as needed.

For example, as shown below, you can view how many user questions are answered and how many are unanswered. You can also [view various user feedback](https://youtu.be/YwKKAABwsIM) expressing their thoughts of your chatbot responses. You can then answer the unanswered questions or address user feedback to improve your chatbot instantly without interrupting any existing conversations.

![Example Juji chatbot Q&A behavior report dashboard](/assets/uploads/how-easy-image8.png "Example Juji chatbot Q&A behavior report dashboard")

In short, creating a custom Q&A chatbot not only requires language capabilities (NLU+NLG), it also requires engineering efforts to handle the Q&A data, track Q&A status, and the abilities to improve your chatbot whenever needed. The good news is that Juji has already pre-built all such capabilities so you can just concentrate on teaching your chatbot the proprietary Q&A knowledge that it needs to function.

# Type III: Custom Interview Chatbots

With GPT-4, Juji enables you to create an interview chatbot easily and quickly. More importantly, Juji still gives you the full control to fine-tune the details of a generated interview chatbot to achieve your specific interview goals.

## AI-Generated Interview Chatbots

Just like in a human-driven interview, [interview questions may come in different shapes and forms](https://youtu.be/7aZB5154Qu0). Thanks to LLMs like GPT, Juji enables you to automatically generate a set of interview questions given an interview context (e.g., interviewing a police officer candidate, onboarding a new student, or gathering user opinions about a product). Below is a screenshot showing how one can specify the interview context.

![Example of generating interview chatbot using AI given specific interview context](/assets/uploads/how-easy-image15.png "Example of generating interview chatbot using AI given specific interview context")

Using the generated questions, Juji then auto-composes an interview chatbot, which is customizable.

## Fully Customizable Interview Flow

The interview flow, in this case, which is also the main chat flow, is fully customizable. The screenshot below shows the auto-generated interview flow of a chatbot that is intended to collect user input about iPhone.

<center><img src="/assets/uploads/how-easy-image5.png" alt="Example generated interview flow for collecting user opinion on iPhone" title="Example generated interview flow for collecting user opinion on iPhone" width="30%"></center>

In this flow, you can customize EVERY interview question. For example, you can specify how an interview question should be phrased, whether an interview question is mandatory or optional, or how an interview question should handle a specific type of user response (e.g., negative opinion vs. positive opinion about iPhone). You can also indicate what kind of user input is desired (e.g., it won't accept gibberish input or the user input must contain a minimal number of words). Below are screenshots showing the editable text bubble of a question and how the question could be configured.

![Example editable text bubble of a question](/assets/uploads/how-easy-image6.png "Example editable text bubble of a question")

![Example question configuration popup](/assets/uploads/how-easy-image21.png "Example question configuration popup")

Just like in a human-driven interview, interviewees may not always follow the interview flow. In that case, human interviewers must handle out-of-the-flow conversation. The good news is that Juji enables your chatbot to handle such "digressions" or "exceptions" automatically so you don't need to worry that the chatbot might be interrupted and fail at its task. The example conversation below shows how a chatbot handles a digression automatically and resumes the interview flow.

<center><img src="/assets/uploads/how-easy-image19.png" alt="Example of Juji chatbot handling a digression automatically" title="Example of Juji chatbot handling a digression automatically" width="70%"></center>

Also note how Ava changed its way of re-asking the same question the second time around. This is because Juji chatbots are powered to recognize a conversation context and always tries their best to make the conversation feel more natural so users are more willing to engage in such a conversation. Again, you don't need to worry about enabling such capabilities since Juji already handles them for you automatically.

## Reports and Analytics

To evaluate how well a chatbot has done its interview task, Juji also provides you with a real-time dashboard that contains interview results, such as how many have finished their interview and response analytics on both qualitative and quantitative questions. A csv of organized interview results can also be downloaded for external processing.

![Example Juji chatbot statistics dashboard](/assets/uploads/how-easy-image13.png "Example Juji chatbot statistics dashboard")

![Example Juji chatbot Audience analytics dashboard](/assets/uploads/how-easy-image10.png "Example Juji chatbot Audience analytics dashboard")

In short, creating a custom interview/conversational survey chatbot requires more than just having the chatbot ask user questions and respond to user answers. Such a chatbot must handle specific interview instructions including run-time user digressions. If you wish to create such a chatbot for real-world applications, check out this [short series of videos](https://youtu.be/k7gDp1uX3Jc), which will show you step-by-step how you can create a custom interview chatbot on your own with #NOCODE.

# Type IV: Custom, Two-way Conversational Chatbots

In many practical business situations, [a two-way conversational chatbot is perhaps most useful](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/). Such a chatbot not only can ask questions but also answer user questions. Next, I will show you how to create a two-way conversational chatbot easily on Juji.

## Define a Main Chat Flow and Q&A

To enable a chatbot that can support two-way conversations, you only need to define a main chat flow and a Q&A list. Here, the main chat flow as shown above defines a to-do list for your chatbot to carry out, while Q&A list enables your chatbot to answer user questions just like a custom Q&A chatbot. Juji handles the rest automatically, including the interleaving of the chatbot-driven to-dos and the user-driven Q&A. As shown below, one can define a main chat flow and Q&A on the Juji Platform graphical user interface.

![Example Juji chatbot design page for customize both chat flow and Q&A](/assets/uploads/how-easy-image18.png "Example Juji chatbot design page for customize both chat flow and Q&A")

## Support Multi-turn Q&As

Using the similar method outlined above, you can [define a mini chat flow](https://youtu.be/7YIaisZF_I4) for a chatbot to answer a user's question, which we call a multi-turn Q&A. Using multi-turn Q&As, when a user asks a complex question, the chatbot can break it down into multiple steps to address that question.

As shown below, when the chatbot (Alicia) answers the user's financial aid question, it invokes a flow by guiding the user to navigate through various financial aid options.

<center><img src="/assets/uploads/how-easy-image26.png" alt="Example multi-turn Q&A conversation by Juji chatbot Alicia" title="Example multi-turn Q&A conversation by Juji chatbot Alicia" width="60%"></center>

In a real-world situation, however, such a question-answering flow may be interrupted. For example, the user may change his/her train of thought and interrupt the current flow by asking "Could you help me find a program first", which is another multi-turn Q&A during which the chatbot will gather certain information from the user before suggesting one or more programs (see screenshot below).

<center><img src="/assets/uploads/how-easy-image29.png" alt="Example of nested multi-turn Q&A conversation by Juji chatbot Alicia" title="Example of nested multi-turn Q&A conversation by Juji chatbot Alicia" width="60%"></center>

This is known as an interleaving of multi-turn Q&A, where a multi-turn Q&A is interrupted by another multi-turn Q&A. The chatbot must be smart enough to understand which mini-workflow it is in, keep track of each flow, and automatically switch to the active flow (e.g., resuming the last incomplete flow) to ensure its completion. Managing the interleaving of arbitrary multi-turn Q&A could be very tricky and requires sophisticated algorithms given the highly diverse and complex conversation situations. The good news is that Juji's Active Listening dialog engine automatically supports arbitrary interleaving of multi-turn Q&A. So you just need to define a mini-workflow for each specific multi-turn Q&A without worrying about how to manage their potentially intertwined execution.

## Multimedia Messages

A lively conversation often contains multimedia messages. Juji enables you to easily create custom multimedia messages that contain [images](https://youtu.be/fdFiNoEmHAM) and [videos](https://youtu.be/iuY33FgbEvE), to be displayed individually or in a [carousel](https://youtu.be/X9vrcxIwLNU).

![Example video carousel in Juji chat](/assets/uploads/how-easy-image9.png "Example video carousel in Juji chat")

In summary, a chatbot that can engage users in a two-way conversation is often desired, especially in a business setting. Creating a two-way conversational chatbot is non-trivial as many factors must be considered (e.g., handling the interleaving of chatbot or user initiatives). Nonetheless, Juji has made the process of creating such a chatbot super simple, during which you just need to focus on defining the chatbot's content (e.g., the main to-do list) and let Juji handle the rest.

# Type V: Custom, Two-way conversational Chatbots with Third-Party Integration

## Third-Party Integration

In case you wish to integrate your chatbot with third-party systems, such as live agent chat or a CRM system, Juji supports [third-party API calls within a conversation](https://youtu.be/LNY2S3PbSAY). Additionally, Juji has built-in integration with several systems, such as Genesys live chat, Facebook Messenger, [Google Analytics, FullStory or similar analytics platforms](https://youtu.be/lwKNgssGz_U).

## Integrate with Live Agent Chat

<center><img src="/assets/uploads/how-easy-image24.png" alt="xample transition from Juji chatbot to human agent on Genesys" title="xample transition from Juji chatbot to human agent on Genesys" width="60%"></center>

To facilitate AI-human handoffs, Juji has a built-in Genesys integration. Once you input your Genesys account information (see below screenshot), Juji will take care of the rest.

![Juji built-in Genesys integration configuration](/assets/uploads/how-easy-image11.png "Juji built-in Genesys integration configuration")

If desired, you can also customize the transition (e.g., who can terminate the handoff and the transition messages).

# Personality Inferences

To personalize each user engagement, Juji chatbots are also powered by Juji's own unique [personality inferences](https://www.businesswire.com/news/home/20230124005074/en/Juji-Inc.-Powers-Auburn-Led-Five-University-Study-on-Validating-Personality-Scores-Inferred-by-an-AI-Chatbot). In other words, all Juji chatbots are able to analyze a user's conversation and infer their personality traits in real time. Below shows a user's Big 5 personality derived by the chatbot.

<center><img src="/assets/uploads/how-easy-image27.png" alt="Example Big 5 personality derived by Juji chatbot" title="Example Big 5 personality derived by Juji chatbot" width="80%"></center>

Within a conversation, the personality insights derived by Juji along with the conversation context can be fed to GPT-4 to generate truly personalized messages unique to each user based on their personality. Below shows different personalized messages that persuade someone to quit smoking per their Juji-derived personality.

<figure style="width:49%; display:inline-block"><img src="/assets/uploads/how-easy-image-left.png" alt="Generated chatbot message to persuade an action-oriented doer quit smoking" title="Generated chatbot message to persuade an action-oriented doer quit smoking"><figcaption style="font-size: 12px;text-align: center">generated chatbot message for an action-oriented doer</figcaption></figure><figure style="width:49%; display:inline-block"><img src="/assets/uploads/how-easy-image-right.png" alt="Generated chatbot message to persuade a creative and artistic person quit smoking" title="Generated chatbot message to persuade a creative and artistic person quit smoking"><figcaption style="font-size: 12px;text-align: center">generated chatbot message for a creative and artistic person</figcaption></figure>

As a chatbot owner, you can also view the derived personality report. You can even define a "custom" personality profile that might help you discover your ideal audience (e.g., prospective students who are an ideal match to your program or potential customers who are an ideal match to your service). Below is an example of a derived Big 5 Personality report.

![an example of a Juji derived Big 5 Personality report](/assets/uploads/how-easy-image16.png "an example of a Juji derived Big 5 Personality report")

# The Importance of NO CODE

While NO CODE enables anyone to build their own custom chatbots, its real power lies in empowering the content owner to fully own the chatbot. Without requiring the IT team to create or manage the chatbot, the domain experts, the [marketing specialist](https://juji.io/user-research-chatbot/), [enrollment manager](https://juji.io/education-chatbot/), [HR expert](https://juji.io/hr-chatbot/) alike, can now build, monitor and maintain the chatbot on their own. Much of cross-organizational obstacles, such as time coordinations and communications, can be avoided. The process of creating AI is truly democratized and decentralized.

# Start Building Your Chatbot Today

Using Juji Studio, building a chatbot empowered with GPT-4 is no longer a million dollar project. Now you can create a usable and useful chatbot in a matter of hours or days. Additionally, all Juji functions are also accessible through [Juji's API](https://juji.io/ai-chatbot-api/) in case you wish to embed your chatbot into your existing application (e.g., a mobile app). So why not [try it today](https://juji.io/)?

## Resources to Get You Started

1. [Sign up on Juji](http://juji.io/signup) then follow the sign up process.
2. Easy, no-coding [customization instructions.](https://youtu.be/5va3WNyB4LE)
3. Simple steps for [editing Q&A](https://juji.io/docs/design/#customize-qa-and-fallback)
4. [Step-by-step guide to handle customer Q&A](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/)
5. [Juji video tutorials on youtube](https://www.youtube.com/hellojuji)
6. [How to customize + upgrade Q&As](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/), including multi-step Q&As.
7. [Conversational AI design tips](https://juji.io/docs/chatbot-design-tips/)
8. [Why AI skills are important](https://readwrite.com/no-code-ai-beings-are-shaping-the-future-of-work/) to employees of the future workforce just like computer skills for today's workforce
