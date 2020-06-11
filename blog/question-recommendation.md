---
layout: blog/article.njk
featured: true
title: "Question Recommendation "
date: 2020-05-28T06:34:46.200Z
author: Wenxi Chen
category: Guides
tags:
  - Juji Studio
image: /assets/uploads/local-file-not-found-295x300.png
---
In an ideal world, the AI chatbot you build would answer all user questions. However, that's not the case right now. No matter how smart your AI chatbot is, there will always be some questions it does not know how to answer. In general, there are three reasons why a chatbot cannot answer a question: 

1. the creator has not provided enough information to answer this question;
2. the user has not given enough information for the chatbot to answer his/her question;
3. the chatbot fails to understand the question. 

If it is the first reason, there's pretty much nothing the chatbot can do. On the other hand, the second case can be resolved if the chatbot's creator anticipated this potential complication and add a mini flow to handle it. In Juji Studio, this can be easily done by [adding an multi-turn reply to the question in Q&A Board](https://juji.io/blog/how-to-make-your-chatbot-to-answer-non-trivial-questions/). 

How about the third case? Traditionally there's nothing chatbot can do if it does not understand the question. Fortunately, it's no longer the case. At Juji, we introduced a question recommendation mechanism to help dealing with this situation specifically.

Say you add a question "Where do I log in?" Juji Chatbot would then use a machine learning model to expand the question so the Chatbot not only recognizes the exact question but also its innumerous variations (e.g., "where can I log in?") in chat. However, if the user asks "where do I sign up?", the machine learning model realizes it is likely not covered in the Q&A provided by the designer. In this case, a good AI chatbot would acknowledge the answer is not provided by its creator and may also suggests other ways for the user to look for the information (e.g., email the support). 

![](/assets/uploads/screen-shot-2020-06-07-at-12.29.49-pm.png)

Juji Chatbot goes one step further by suggesting user to check answers of closely related questions, because we recognize that even though the answer might not be directly provided, some answers to other questions may contain information to help the user. From the user's point of view, it will not cost him/her much to read some extrac potentially related information (especially when they are given the choice to select what they would like to read). On the other hand, it would save the business some time if the user's questions is resolved by those extra information. So this is really an win-win solution.

So how does this get achieved? Given the Chatbot already possesses some Q&As the creator has provided, Juji builds another machine learning model that compares the existing Q&As and the question user asks. The model then suggests questions that are closely related to the user, the user can then select the one that s/he is interested or None of above.

![](/assets/uploads/screen-shot-2020-06-07-at-12.40.39-pm.png)

![](/assets/uploads/screen-shot-2020-06-07-at-12.41.49-pm.png)