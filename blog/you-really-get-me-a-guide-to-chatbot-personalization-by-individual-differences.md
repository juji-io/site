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

However, most personalization has been done in a "shallow" way by using explicit information collected from users, such as user past activities (e.g., purchasing history), and user explicit preferences (e.g., "I want a car under $5000"). While such information can help personalize a chatbot's interaction with a user, it is often inadequate in many circumstances. 

# Chatbot Personalization Examples

Consider the following real-world examples.

## Personalized Product Recommendation

Sam is a new customer to a restaurant and has never ordered anything from the restaurant before. Although Sam explicitly expressed that he prefers fish to red meat, there is still a wide range of selection. What kind of dishes should the restaurant's chatbot recommend to a new customer like Sam? Knowing that Sam is family oriented and enjoys down-to-earth food, the chatbot suggests the homestyle, fish set menu for an entire family. 

Luna just got her driver's license and wants to buy her first car. Since Luna has never owned a car before, she can provide only a price constraint, e.g., under $15,000. With a number of cars that meet the price constraint, what kind of cars a chatbot on a website like [carmax](https://www.carmax.com/cars) should recommend to Luna ? If the chatbot knows that Luna has keen artistic interests, it would recommend a used but stylish Mini Cooper or VW Beetle. 

## Personalized Nudging for Healthcare 

Emma uses a wellness app for anger management. Emma is supposed to interact with the app and document her emotional states on a daily basis. How should the app's chatbot encourage Emma to stay on course when Emma wants to quit? Knowing that Emma is ambitious and values self-empowerment, the chatbot can encourage Emma to stick to the program for the benefits that she cares about. 

 Amy has diabetes but loves sweets. How should a chatbot that serves as her personal wellness assistant can help persuade Amy to reduce sweets intake? Knowing that Amy is intellectually curious and open to new experience, the chatbot may suggest that Amy solves a puzzle whenever she craves sweets. 

## Personalized Career Advice

Phil is a senior in college. To prepare for his upcoming job interviews, Phil practices interviews with [an interview chatbot](https://dl.acm.org/doi/10.1145/3232077). What kind of advices the chatbot should give Phil and help him succeed in his job interviews? Knowing that Phil is thoughtful and cautious but often unwilling to state his opinions, the chatbot can encourage Phil to be bolder and more decisive when expressing his thoughts during an interview.

# Challenges in Learning Individual Differences

All the examples above show that a chatbot would be able to offer personalized suggestions and advices if it knows the [individual differences](https://en.wikipedia.org/wiki/Personality_and_Individual_Differences)--the unique characteristics--of its users. Broadly speaking, individual differences are a set of characteristics that define a person as a unique individual. These characteristics describe a person from three broad aspects. First, they describe what a person likes to do, including the person's passions and interests. Second, they describe what a person is good at, such as the person's talents and skills. Third, they describe how a person deals with life's challenges, such as handling emotional and social challenges. 

Now comes the question: ***how a chatbot could learn each user's individual differences***? Traditionally, psychologists learn individual differences by asking people to take item-based surveys, such as [a personality test](https://www.personalityassessor.com/ipip300/). In such a survey or test, people self evaluate themselves on a set of scales. A chatbot can certainly use this traditional approach to learn its users' individual differences by asking each user to take a personality or needs test. 

However, such an approach has several drawbacks. First, it may be quite awkward to ask a user to take a personality test while the user just started interacting with a brand. Second, users may not be always truthful in a test due to social desirability biases especially in high-stakes situations (see [testers cheat on the item-based self assessment](https://uh.edu/~ttian/Fan_JAP.pdf)). Third, the items in a test are usually come up by Psychologists in a lab, and such items may be context insensitive for users to evaluate themselves. For example, if a person has never watched ballet, the test item asking him/her how much s/he likes ballet is out of context. Fourth, it is difficult to assess the results objectively based on self-reported subjective scores. For example,  on the same item "I love ballet", one person's score of 5 might mean a different degree of love than that of another person. 

To overcome these challenges, computational approaches have been proposed. One popular approach is to ask a group of users to take an item-based survey and then collect the users' behavior (e.g., communication text). Regression methods are then used to examine which features of user behavior (e.g., words or word categories) could be used to predict survey scores. Such approaches have been used to [predict user Big 5 personality scores, values, and needs](https://dl.acm.org/doi/10.1145/2556288.2557398). However, this approach is expensive and still relies on the item-based survey results to come up with computational models.

# Reading Between the Lines

In the search of more efficient and objective computational approaches, Juji has invented [a new model ](https://dl.acm.org/doi/10.1145/3232077)that combines big data analytics with [Item Response Theory](https://en.wikipedia.org/wiki/Item_response_theory) to infer individual differences from user behavior. Juji now uses this approach to infer [Big 5 personality scores](https://en.wikipedia.org/wiki/Big_Five_personality_traits) from text on 35 dimensions without a personality test. With this model, a chatbot can analyze a user's conversation text on the fly to infer the user's individual differences, and then use the insights to personalize each conversation as shown by the examples above.

Juji currently focuses on inferring the Big 5 personality traits as its base model, because numerous research studies show that these traits characterize individual differences and can [predict important life outcomes](https://experts.illinois.edu/en/publications/the-power-of-personality-the-comparative-validity-of-personality-). On top of these basic traits, Juji infers context-specific human characteristics, e.g., one's [reader DNA](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2964424/), which can then be used to help users find products or services that match with their innate needs. For example, a chatbot would recommend self-enhancement or business books to cerebral readers, while recommend art-related books to aesthetic readers. 

## Reliability

To assess the quality of the trait inference results, it is important to measure the [reliability](https://en.wikipedia.org/wiki/Reliability_(statistics)) of the method. Reliability is to assess how stable the inferred scores are under consistent conditions. For example, if given a set of 100 randomly sampled words produced by a person, how do the inferred trait scores differ for each set of words? The image below shows the computed [Cronbach's alpha](https://en.wikipedia.org/wiki/Cronbach%27s_alpha) for the inferred scores of the six facets under the Extroversion dimension in the Big 5 personality model. 

![Reliability of inferred "Extroversion" dimension in Big 5 Personality Model]()

The above graph shows that the model produced an acceptable reliability (> 0.8) for all the facets except for ***Cheerfulness***, if the number of words used in the inference was over 1000.  This means that the inference of those facets is reliable if it uses more than 1000 words. 

## Validity

In addition to reliability, another important measure is [validity](https://en.wikipedia.org/wiki/Validity_(statistics)), which assesses whether the inferred trait scores correspond to real-world user behavior (e.g., predicting a user's behavior or preference). Since measuring validity is often context sensitive, experiments or studies need to be carried out in a particular context. For example, [Xiao et al.](https://dl.acm.org/doi/10.1145/3301275.3302264) show that personality trait scores inferred by a Juji chatbot can predict team performance. 

# Personalize Conversations by Individual Differences with No Coding

To help chatbot designers easily personalize each conversation experience, Juji provides a set of functions and "message cards", which allow a designer to personalize chatbot messages for each persona. As shown in the screenshot below, a designer can personalize an e-commerce chatbot's messages to different shoppers based on their shopper DNA. 

![personalize conversation messages to different shoppers based on shopper persona]()

Likewise, a designer can personalize a healthcare chatbot's messages to different users based on their brand persona. 

![personalize conversation messages to different users in a healthcare application based on their brand persona]()

# Make Responsible Chatbots

With great power comes great responsibility. Now that a chatbot can deeply understand its users,  how can we ensure the responsibility of such a chatbot? For example, if a chatbot detects a shopper's impulsive buying behavior, how can we make sure that the chatbot does not indulge the shopper to buy more? Similarly, if a chatbot detects a gamer's addiction to violent games, how can we make sure that the chatbot does not encourage the gamer to become more addicted? We sincerely hope that organizations will adhere to ethical guidelines and develop responsible chatbots that can truly help their users instead of harm them.

# Further Readings

* Here is [a tutorial video](https://juji.io/docs/tutorial/#send-personalized-messages-by-user-personas) showing how to personalize chatbot messages based on inferred individual differences with no coding.
* Here is a more [in-depth talk ](https://www.youtube.com/watch?v=V5xBqcMqT2o)given at the [RecSys 2020](https://recsys.acm.org/recsys20/) on this topic.
* If you haven't done so, [sign up](https://juji.io/signup) on Juji to create your own chatbot and personalize its messages based on Juji inferred individual differences.