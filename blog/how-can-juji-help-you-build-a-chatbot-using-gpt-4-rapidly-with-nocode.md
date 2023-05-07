---
layout: blog/article.njk
featured: true
title: "How can Juji help you build a chatbot using GPT-4 rapidly with #NOCODE?"
date: 2023-05-07T05:46:54.543Z
author: Wenxi Chen
category: Guides
image: /assets/uploads/juji-studio.png
---
# How quickly can I build my own chatbot powered by GPT-4 on Juji? What does it take to build one?

In my [previous blog](https://juji.io/blog/can-i-build-my-chatbot-with-gpt-4-how-hard-is-it/), I talked about what it takes to build a chatbot using GPT-4, including the engineering efforts required and a rough cost and time estimate. Although it is non-trivial to build a practical chatbot solution for real-world applications, with the right tools, one can build a custom chatbot solution quickly to take full advantage of the state-of-the-art large language models (LLMs) like GPT-4.

For the past several years, we at Juji have been building [Juji Studio](https://juji.io/no-code-ai-chatbot-builder/), an AI chatbot design tool that enables anyone to build their custom chatbots with #NOCODE. Now [with the integration of GPT-4](https://finance.yahoo.com/news/juji-launches-generative-ai-tool-130000308.html), Juji Studio can enable you to build your custom chatbot even faster and better.

In this blog, I will outline how you can use Juji to quickly build a custom chatbot in each of the five categories mentioned in my last blog. As seen below, you can build these custom chatbots powered by proprietary content and the capabilities of GPT-4 without writing any code or any IT resources.

# Type I: Chitchat Chatbots

Although chitchat chatbots are not typical business solutions, you can build them on Juji easily.

## Use GPT-4 to Generate Chatbot Messages

Since GPT-4 is integrated with Juji Studio, it can be used to interpret user input and answer user questions whenever appropriate. For example, you can use the basic Juji customer service template (see screenshot below) to create a chitchat chatbot that will let GPT-4 handle user input.

![Use basic customer service chatbot template on the Juji Platform](/assets/uploads/how-easy-image3.png "Use basic customer service chatbot template on the Juji Platform")

As shown in the example chat below, GPT-4 is used to interpret the user input (i.e., asking for a funny story) as well as produce the response.

![Example of Juji chatbot using GPT-4 for message interpretation and response generation](/assets/uploads/how-easy-image2.png "Example of Juji chatbot using GPT-4 for message interpretation and response generation")

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

![UIUC Juji chatbot uses proprietary information to answer a user question](/assets/uploads/how-easy-image1.png "UIUC Juji chatbot uses proprietary information to answer a user question")

## Inject Proprietary Data for Chatbot Q&A

In Juji Studio, you can teach your chatbot with proprietary data in multiple ways. One way is to directly enter a Q&A pair inside a GUI. The other way is to [specify all proprietary Q&As in a CSV file](https://juji.io/docs/juji-studio/customize-qa/#upload-qas-csv) and upload the CSV file (training data)  into Juji (see below).

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

![Example generated interview flow for collecting user opinion on iPhone](/assets/uploads/how-easy-image5.png "Example generated interview flow for collecting user opinion on iPhone")

In this flow, you can customize EVERY interview question. For example, you can specify how an interview question should be phrased, whether an interview question is mandatory or optional, or how an interview question should handle a specific type of user response (e.g., negative opinion vs. positive opinion about iPhone). You can also indicate what kind of user input is desired (e.g., it won't accept gibberish input or the user input must contain a minimal number of words). Below are screenshots showing the editable text bubble of a question and how the question could be configured.