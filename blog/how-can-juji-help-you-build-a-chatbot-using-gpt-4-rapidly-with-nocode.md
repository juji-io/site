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

You can leverage GPT-4 explicitly to auto-generate alternate question expressions so the chatbot can have a wider coverage for diverse user question expressions. Or you can leave this to Juji, which automatically leverage GPT-4 to capture wider varieties of the given questions. Below is an example of using GPT-4 to generate various question expressions of the question "When will I receive my refund". Again, you still have full control on whether to use the generated questions.

![Use GPT-4 to generate question variations on the Juji Platform (part 1)](/assets/uploads/how-easy-image25.png "Use GPT-4 to generate question variations on the Juji Platform (part 1)")

![Use GPT-4 to generate question variations on the Juji Platform (part 2)](/assets/uploads/how-easy-image4.png "Use GPT-4 to generate question variations on the Juji Platform (part 2)")