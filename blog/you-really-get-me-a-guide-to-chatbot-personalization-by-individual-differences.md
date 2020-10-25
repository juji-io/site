---
layout: blog/article.njk
featured: true
title: "Reading Between the Lines: A Guide to Chatbot Personalization based on
  User Individual Differences"
date: 2020-10-19T20:30:38.135Z
author: Michelle Zhou
category: Guides
tags:
  - chatbot personalization
  - personality
image: /assets/uploads/sylvie-charron-mpeoacxussg-unsplash.jpg
credit: "Image by Sylvie Charron: https://unsplash.com/@syl_charron66"
---
As indicated by [this post](https://www.forbes.com/sites/blakemorgan/2020/02/18/50-stats-showing-the-power-of-personalization/#ca4ef6c2a942), 84% consumers want to be treated as a unique individual not just a number, while 95% of companies saw 3X ROI from their personalization efforts. Now with the rise of [conversational commerce](https://www.shopify.com/encyclopedia/conversational-commerce#:~:text=Conversational%20commerce%20is%20a%20term,WhatsApp%2C%20Talk%2C%20and%20WeChat.), chatbots become a natural and private channel for brands to engage with users and offer personalized services in one-on-one conversations. In such a conversation, a chatbot can naturally elicit users' needs and wants and then provide personalized help or guidance based on the gathered information. 

However, most chatbot personalization has been done based on users' explicit information, such as user past activities (e.g., purchasing history) and user explicit preferences (e.g., "I want a car under $5000"). While such information can help personalize a chatbot's interaction with a user, it is often inadequate in many circumstances. 

# Chatbot Personalization Examples

Consider the following examples in a wide variety of domains, from e-commerce to healthcare. As shown below, a chatbot must know a user's unique characteristics beyond his/her past activities or explicit preferences to serve the user as a unique individual.  

## Personalized Product Recommendation

Sam is a new customer to a restaurant and has never ordered anything from the restaurant before. Although Sam explicitly expressed that he prefers fish to red meat, there is still a wide range of selections. What kind of dishes should the restaurant's chatbot recommend to a new customer like Sam? However, if a chatbot knows that Sam is family-oriented and enjoys down-to-earth food, it can suggest the homestyle, fish set menu to Sam and his family. 

![A chatbot recommends a fish banquet to a family-oriented customer who likes fish and down-to-earth food](/assets/uploads/screen-shot-2020-10-24-at-8.35.22-pm.png)

Luna just got her driver's license and wants to buy her first car. Since Luna has never owned a car before, she could provide only a price constraint, e.g., under $15,000. With a number of cars that meet the price constraint, what kind of cars a chatbot on a website like [carmax](https://www.carmax.com/cars) should recommend to Luna ? If the chatbot knows that Luna has keen artistic interests and loves stylish things, it would recommend a stylish car like Mini Cooper or VW Beetle. 



## Personalized Nudging for Healthcare

Emma uses a wellness mobile app for anger management. Emma is supposed to interact with the app, document her emotional states, and practice anger management on a daily basis. How should the app's chatbot encourage Emma to stay on course when Emma wants to quit? If the chatbot knows that Emma is ambitious and values self-empowerment, it can encourage Emma to stick to the program for the benefits that she cares about. 

![A personal wellness chatbot encourages a user to continue wellness exercise](/assets/uploads/screen-shot-2020-10-24-at-9.02.28-pm.png)

Amy has diabetes but loves sweets. How should a chatbot that serves as her personal wellness assistant can help persuade Amy to reduce her sweets intake? If the chatbot knows that Amy is intellectually curious and open to new experience, the chatbot may suggest that Amy solves a puzzle whenever she craves sweets. 

![A personal wellness chatbot persuades a user who craves candy bars to reduce the intake](/assets/uploads/screen-shot-2020-10-24-at-8.51.12-pm.png)

## Personalized Career Advice

Phil is a senior in college. To prepare for his upcoming job interviews, Phil practices interviews with [an interview chatbot](https://dl.acm.org/doi/10.1145/3232077). What kind of advices the chatbot should give Phil and help him succeed in his job interviews? Knowing that Phil is thoughtful and cautious but often unwilling to state his opinions, the chatbot can encourage Phil to be bolder and more decisive when expressing his thoughts during an interview.



# Challenges in Learning Individual Differences

![Individual differences characterizes each person from three broad aspects: what you like to do, what you are good at, and how you handle life's challenges.](/assets/uploads/screen-shot-2020-10-24-at-7.58.55-pm.png)

All the examples above show that a chatbot would be able to offer personalized suggestions and advices if it knows the [individual differences](https://en.wikipedia.org/wiki/Personality_and_Individual_Differences)--the unique characteristics--of its users. Broadly speaking, individual differences are a set of characteristics that define a person as a unique individual. These characteristics describe a person from three broad aspects. First, they describe what a person likes to do, including the person's passions and interests. Second, they describe what a person is good at, such as the person's talents and skills. Third, they describe how a person deals with life's challenges, such as handling emotional and social challenges. 

Now comes the question: ***how could a chatbot learn each user's individual differences***? Traditionally, psychologists learn individual differences by asking people to take item-based surveys, such as [a personality test](https://www.personalityassessor.com/ipip300/). In such a survey or test, people score themselves on a set of items. A chatbot can certainly use the same approach to learn its users' individual differences by asking each user to take an item-based test. 

However, such an approach has several drawbacks. First, it may be awkward to ask a user to take a test (e.g., "Welcome to Walmart, would you like to take a personality test?"). Second, users may not be always truthful in such a test due to social desirability biases especially in high-stakes situations (see [testers cheat on the item-based self assessment](https://uh.edu/~ttian/Fan_JAP.pdf)). Third, the items in a test are usually come up by Psychologists in a lab, and may be out of context for some users. For example, if a person has never watched ballet, the test item asking him/her how much s/he likes ballet is out of context. Fourth, it is difficult to assess the results objectively based on self scoring. For example,  on the item "I love ballet", one person's self-score of 5 might mean a different degree of love than that of another person. Additionally, people's [individual differences do change over time](https://www.dropbox.com/s/t9yym3mw7hc34fn/Caspi%20%26%20Roberts%202001.pdf?dl=0), it would be burdensome and impractical to ask users to take tests repeatedly and track their changes. 

To overcome these challenges, computational approaches have been proposed. One popular approach is to ask a group of users to take an item-based survey and then collect the users' behavior data (e.g., communication text). Regression models are then used to examine which features of user behavior (e.g., words or word categories) could be used to predict survey scores. Such approaches have been used to [predict user Big 5 personality scores, values, and needs](https://dl.acm.org/doi/10.1145/2556288.2557398). However, this approach is expensive and still relies on item-based survey results to come up with computational models.

# Reading Between the Lines

In the search of more efficient and objective approaches to measuring individual differences, Juji has invented [a new model ](https://dl.acm.org/doi/10.1145/3232077)that combines big data analytics with [Item Response Theory](https://en.wikipedia.org/wiki/Item_response_theory) (also known as latent trait theory) to automatically infer individual differences from user behavior. Currently, Juji uses this approach to infer [Big 5 personality scores](https://en.wikipedia.org/wiki/Big_Five_personality_traits), including all the 35 dimensions, from text. Specifically, with this model a chatbot can interact with users in a natural way ***without*** asking them to take a Big 5 personality test. It analyzes a user's conversation text on the fly to infer the user's individual differences. The chatbot can then use the insights to personalize each conversation as shown by the examples above. Because a user is likely to interact with such a chatbot continuously (e.g., asking the chatbot questions), the chatbot can automatically learn the changes in the user's individual differences in a natural way and use such information to better help the user (e.g., offering suitable career development advice). 

Juji currently focuses on inferring the Big 5 personality traits as its base model, because numerous research studies show that these traits characterize the fundamental individual differences in people and they can influence people's real-world behavior and [predict important life outcomes](https://experts.illinois.edu/en/publications/the-power-of-personality-the-comparative-validity-of-personality-). On top of these basic traits, Juji infers context-specific user characteristics, e.g., one's [reader DNA](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2964424/), which can then be used to help users find products or services that match with their innate needs. For example, a chatbot would recommend self-enhancement or business books to cerebral readers, while recommend art-related books to aesthetic readers. 

## Reliability

To assess the quality of the trait inference results, it is important to measure the [reliability](https://en.wikipedia.org/wiki/Reliability_(statistics)) of the method. Reliability is to assess how stable the inferred scores are under consistent conditions. For example, if given a set of 100 randomly sampled words produced by a person, how do the inferred trait scores differ for each set of words? The image below shows the computed [Cronbach's alpha](https://en.wikipedia.org/wiki/Cronbach%27s_alpha) for the inferred scores of the six facets under the Extroversion dimension in the Big 5 personality model. 

![Reliability of inferred "Extroversion" dimension in Big 5 Personality Model]()

The above graph shows that the model produced an acceptable reliability (> 0.8) for all the facets except for ***Cheerfulness***, if the number of words used in the inference was over 1000.  This means that the inference of those facets is reliable if it uses more than 1000 words. 

## Validity

In addition to reliability, another important measure is [validity](https://en.wikipedia.org/wiki/Validity_(statistics)), which assesses whether the inferred trait scores correspond to real-world user behavior (e.g., predicting a user's behavior or preference). Since measuring validity is often context sensitive, experiments or studies need to be carried out in a particular context. For example, [Xiao et al.](https://dl.acm.org/doi/10.1145/3301275.3302264) show that personality trait scores inferred by a Juji chatbot can predict team performance. 

# Personalize Conversations by Individual Differences

To help chatbot designers easily personalize each conversation experience, Juji provides a set of functions and "message cards", which allow a designer to personalize chatbot messages for each inferred user persona. 

## How to Personalize Chatbot Messages

One easy way on Juji to personalize chatbot messages by individual differences is to customize a pre-made "message card". Currently Juji provides two pre-made message cards: one allowing a chatbot designer to customize chatbot messages to match inferred shopper personas, while the other allowing a chatbot designer to customize chatbot messages to match a set of base personas. 

As shown in the screenshot below, a chatbot designer can personalize an e-commerce chatbot's messages by different shopper personas. In a live conversation, a chatbot will send a custom message to a user based on the user's shopper persona inferred during the conversation. To ensure accuracy, currently a chatbot would not send out a custom message if it does not have enough information (e.g., few words) to infer a user's shopper persona. 

![personalize conversation messages to different shoppers based on shopper persona]()

Likewise, a designer can personalize a healthcare chatbot's messages to different users based on their base personas. Again, such a chatbot just needs to carry on a natural conversation with a user, such as asking users how they are doing, and use such a conversation to infer the user's individual differences and then send custom messages based on the inference results (e.g., sending a custom message to one who is thoughtful and cautious versus someone who is warm-hearted and caring).   

![personalize conversation messages to different users in a healthcare application based on their brand persona]()

In addition to using pre-made message cards as shown above, one can use system functions as preconditions to personalize chatbot messages by individual differences. For example, if you wish that a chatbot sends a message only to someone who is caring and warm-hearted (is-helper), you can then insert this function as a precondition of a chatbot message so the message will be sent to only users who possess such characteristics. See below the screenshot

## When to Personalize Chatbot Messages

The next question is when a chatbot designer should personalize chatbot messages by individual differences? 

### Help Cold Start

One effective use of personalization by individual differences is to help [cold start](https://en.wikipedia.org/wiki/Cold_start_(computing)), such as onboarding a new user or introducing a new product. In such situations, a chatbot often does not have other sources of information to personalize its messages. For example, a chatbot does not have the past activities of a new user or it does not have user purchasing history or reviews of a new product.  

For a new user, using Juji's approach a chatbot can chat with a new user by asking the typical onboarding questions. In addition to gathering the basic onboarding information, this chatbot can also infer the user's individual differences from the conversation and now can make recommendations without the user past activities. 

For a new product, a chatbot can describe the value of product that matches the individual differences of users even though the users have not experienced the product yet. For example, users who desire safety love safe, high-quality products, while users who are highly curious and open to new experiences would enjoy innovative products. 

### Help Longitudinal Engagement

Knowing users' individual differences also helps a chatbot engage with users longitudinally. For example, a chatbot serving as a personal wellness assistant will need to engage with a user on a daily basis. Knowing the likes and dislikes of the user, the chatbot could keep the user stay engaged as well as better persuade the user to fulfill the required tasks, such as adhere to a particular care treatment. Not only will such a chatbot improve user engagement, but it will also improve care outcomes.     

# Make Responsible Chatbots

With great power comes great responsibility. Now that a chatbot can deeply understand its users,  how can we ensure the responsibility of such a chatbot? For example, if a chatbot detects a shopper's impulsive buying behavior, how can we make sure that the chatbot does not indulge the shopper to buy more? Similarly, if a chatbot detects a gamer's addiction to violent games, how can we make sure that the chatbot does not encourage the gamer to become more addicted? In my next blog, I will talk more about how to make responsible chatbots that can help people but not harm them. 

# Further Readings

* Here is [a tutorial video](https://juji.io/docs/tutorial/#send-personalized-messages-by-user-personas) showing how to personalize chatbot messages based on inferred individual differences with no coding.
* Here is a more [in-depth talk ](https://www.youtube.com/watch?v=V5xBqcMqT2o)given at the [RecSys 2020](https://recsys.acm.org/recsys20/) on this topic.
* If you haven't done so, [sign up](https://juji.io/signup) on Juji to create your own chatbot and personalize its messages based on Juji inferred individual differences.