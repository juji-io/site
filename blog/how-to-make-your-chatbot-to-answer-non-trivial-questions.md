---
layout: blog/article.njk
featured: true
title: How to teach your chatbot to answer complex user questions
date: 2020-05-11T01:07:45.510Z
author: Wenxi Chen
category: Guides
tags:
  - Juji Studio
  - Question Answering
  - Chatbot Design Tip
  - Use Cases
image: /assets/uploads/questions-answers-signage-208494.jpg
credit: Pixabay
---
If you are creating a chatbot to automate customer support and handle customer questions, you could do so easily on Juji by [preparing a question-answer (Q&A) list and uploading the list to enable free-text Q&A](https://juji.io/docs/design/#handle-free-text-qas) instantly.

While the majority of customer questions can be handled in such a way, there are  cases that a chatbot needs to obtain additional information from users before producing a satisfactory answer. Assume that a user asks "Where is the nearest branch?" and your business has multiple branches. A good AI chatbot should first ask where the user is located and then respond with the location of the nearest branch.

- - -

I will now show you how this can be easily done using the Q&A Board in Juji Studio.

![Click on extended reply button to initiate your Q&A flow](/assets/uploads/screen-shot-2020-05-12-at-11.19.35-pm.png "Click on the extended reply button to create a flow to handle the question")

In addition to providing a simple answer to a user's free-text question, I can use Juji to add an ***extended*** or ***multi-step*** answer to a user question.  As shown above, just click on the extended reply button in the answer column. It will open up a panel for me to create a new chat flow as the answer.

As shown below, the flow editor works just like the [main chat flow editor](https://docs.juji.io/design/#customize-main-chat-flow) in Juji Studio, where I can [create custom topics](https://juji.io/docs/design/#edit-a-topic) or reuse already created topics in the main chat flow.

![Creating a topic to handle the question](/assets/uploads/screen-shot-2020-05-12-at-11.39.03-pm.png "Creating a topic to handle the question")

Using the example I mentioned above, I first create a topic that asks which city a user lives. Then, I customize the chatbot actions to respond with different locations nearest to the users based on their answers. Once I am done with the flow, I go back to the Q&A Board to submit the changes.

- - -

It's that simple. Let's see the effects.

![The chatbot first checks the user's location, then provides the nearest branch's location](/assets/uploads/screen-shot-2020-05-12-at-11.50.17-pm.png "The chatbot first checks the user's location, then provides the nearest branch's location")

![Another example of the chatbot providing the nearest branch's location with respect to the user's location](/assets/uploads/screen-shot-2020-05-12-at-11.51.09-pm.png "Another example of the chatbot providing the nearest branch's location with respect to the user's location")

As shown in the screenshot above, not only can such an AI chatbot provide the nearest branch's location according to a user's response, but it can also remember and resume the original conversation flow after it finishes the Q&A flow. In fact, Juji chatbots ***automatically*** handle such a side Q&A flow anytime during a conversation and gracefully resume to their original task flow (e.g., the workflow of making a reservation).

Such an extended Q&A flow is very powerful and can be used in many applications and domains. Below I share several more use cases.

### Healthcare

In patient engagement, as shown below, a patient is requesting to see a doctor.  A healthcare chatbot can ask the patient about his/her symptoms before giving a proper response.

![An extended Q&A flow between a user and a healthcare chatbot](/assets/uploads/healthcare-chatbot-extended-q-a.png "An extended Q&A flow between a user and a healthcare chatbot")

### Office Administration: Making a Booking

Assume that a chatbot is helping a customer book a table at a restaurant. As shown below, during the booking flow, a customer interrupts the flow with a question about the use of a coupon, as shown below. To respond properly, the chatbot activates a Q&A flow before returning to the table reservation flow.

![An extended Q&A flow between a user and a chatbot in the middle of restaurant reservation](/assets/uploads/screen-shot-2020-05-15-at-2.26.45-pm.png "An extended Q&A flow between a user and a chatbot in the middle of restaurant reservation")

![Continued from the above: an extended Q&A flow in the middle of restaurant reservation](/assets/uploads/screen-shot-2020-05-15-at-2.27.24-pm.png "Continued from the above: an extended Q&A flow in the middle of restaurant reservation")

As you can imagine, such a Q&A flow can be used in many similar chatbot tasks, such as booking a travel reservation,  booking an appointment with a car salesperson, booking a house tour with a real-estate agent, or even booking a webinar event.

### E-Commerce

Similarly,  in e-commerce, when a user asks for a product recommendation, a smart retail chatbot asks the user his/her preferences before making a suggestion.

![An online book store chatbot use the extended Q&A flow to make book recommendation](/assets/uploads/screen-shot-2020-05-15-at-3.35.51-pm.png "An online book store chatbot use the extended Q&A flow to make book recommendation")

- - -

To help chatbot designers and developers build the best AI chatbots, Juji has made the handling of complex user questions super easy. One just needs to define a multi-step Q&A flow,  similar to defining a main chat flow. A Q&A flow also functions like the main chat flow, supporting all the powerful functions, such as [detecting user sentiment](https://youtu.be/HwrGulGsTUk) and [](https://youtu.be/lNv0Ud8V2Co)[personalizing messages](https://youtu.be/lNv0Ud8V2Co) based on user characteristics.  The only difference is that a multi-step Q&A flow can be activated ***anytime*** during a conversation to provide users with ***just-in-time*** help.

If you want to see more of such powerful Q&A response in action, check out this [YouTube video](https://youtu.be/6kzST4vO_KU). The Q&A Board also provides real-time notifications, see [how you can continue to evolve your powerful chatbot](https://juji.io/blog/q-a-dashboard/).
