---
layout: blog/article.njk
featured: true
title: "Reading Between the Lines: A Guide to Chatbot Personalization by
  Individual Differences"
date: 2020-10-19T20:30:38.135Z
author: Michelle Zhou
category: Guides
tags:
  - chatbot personalization
  - personality
image: /assets/uploads/sylvie-charron-mpeoacxussg-unsplash.jpg
credit: "Image by Sylvie Charron: https://unsplash.com/@syl_charron66"
---
As indicated by the numbers in [this post](https://www.forbes.com/sites/blakemorgan/2020/02/18/50-stats-showing-the-power-of-personalization/#ca4ef6c2a942), 84% consumers want to be treated as a unique individual not just a number, while 95% of companies saw 3X ROI from their personalization efforts. Now with the rise of [conversational commerce](https://www.shopify.com/encyclopedia/conversational-commerce#:~:text=Conversational%20commerce%20is%20a%20term,WhatsApp%2C%20Talk%2C%20and%20WeChat.), chatbots seem serve as a perfect channel for personalization due to the one-on-one, private nature of conversations. In a conversation, a chatbot can naturally elicit users' needs and wants and then provide personalized help or guidance based on the gathered information. 

However, most personalization has been done in a "shallow" way by using explicit information collected from users, such as user past activities (e.g., purchasing history), and user explicit preferences (e.g., "I want a car under $5000"). While such information can help personalize a chatbot's interaction with a user, it is often inadequate in many circumstances. Consider the following real-world examples.

Sam is a new customer to a restaurant and has never ordered anything from the restaurant before. Although Sam explicitly expressed that he prefers fish to red meat, there is still a wide range of selection. What kind of dishes should the restaurant's chatbot recommend to a new customer like Sam? Knowing that Sam is family oriented and enjoys down-to-earth food, the chatbot suggests the homestyle, fish set menu for an entire family. 

Emma uses a wellness app for anger management. Emma is supposed to interact with the app and document her emotional states on a daily basis. How should the app's chatbot encourage Emma to stay on course when Emma wants to quit? Knowing that Emma is ambitious and values self-empowerment, the chatbot can encourage Emma to stick to the program for the benefits that she cares about. 

Luna just got her driver's license and wants to buy her first car. Since Luna has never owned a car before, she can provide only a price constraint, e.g., under $15,000. With a number of cars that meet the price constraint, what kind of cars a chatbot on a website like [carmax](https://www.carmax.com/cars) should recommend to Luna ? If the chatbot knows that Luna has keen artistic interests, it would recommend a used but stylish Mini Cooper or VW Beetle.  

Phil is a senior in college. To prepare for his upcoming job interviews, Phil practices interviews with [an interview chatbot](https://dl.acm.org/doi/10.1145/3232077). What kind of advices the chatbot should give Phil and help him succeed in his job interviews? Knowing that Phil is thoughtful and cautious but often unwilling to state his opinions, the chatbot can encourage Phil to be bolder and more decisive when expressing his thoughts during an interview.

Amy has diabetes but loves sweets. How should a chatbot that serves as her personal wellness assistant can help persuade Amy to reduce sweets intake? Knowing that Amy is intellectually curious and open to new experience, the chatbot may suggest that Amy solves a puzzle whenever she craves sweets. 

All the examples above show that a chatbot would be able to offer suitable suggestions and advices if it knows the [individual differences](https://en.wikipedia.org/wiki/Personality_and_Individual_Differences)--the unique characteristics--of its users. Broadly speaking, individual differences are a set of characteristics that define a person as a unique individual. These characteristics describe a person from three broad aspects. First, they describe what a person likes to do, including the person's passions and interests. Second, they describe what a person is good at, such as the person's talents and skills. Third, they describe how a person deals with life's challenges, such as handling emotional and social challenges. 

Naturally, an immediate question is how a chatbot could learn its users' individual differences. Traditionally, psychologists learn about individual differences by asking people to take item-based surveys, such as [a personality test](https://www.personalityassessor.com/ipip300/). In such a survey or test, people self evaluate themselves on a set of scales. However, such a method has several drawbacks. First, the items in a test are usually written by scientists in a lab,  they may not always be suitable for people to evaluate themselves in practical situations. For example, if a person has never watched ballet, asking him/her how much s/he likes ballet is out of context. Second, people may use different scales to evaluate themselves subjectively. For example,  on the same item "love of ballet", one person's scale of 5 might mean a different degree of love than that of another person. Third, [testers may cheat on the item-based self assessment ](https://uh.edu/~ttian/Fan_JAP.pdf)due to social biases.    

To overcome these challenges, computational approaches have been proposed. One popular approach is to ask a group of users to take an item-based survey and then collect the users' behavior (e.g., communication text). Regression methods are then used to examine which features of user behavior (e.g., words or word categories) could be used to predict survey scores. Such approaches have been used to [predict user Big 5 personality scores, values, and needs](https://dl.acm.org/doi/10.1145/2556288.2557398). However, this approach is still subject to the drawbacks of the traditional approach as it relies on the item-based surveys.