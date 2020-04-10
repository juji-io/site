---
layout: blog/article.njk
featured: true
title: This Is How We Revamped the UI in Less Than a Month
date: 2020-03-08T07:33:36.210Z
author: Huahai Yang
category: Engineering
tags:
  - Software Architecture
  - Single Page Application
  - Clojure
  - EditScript
image: /assets/uploads/michal-parzuchowski-gennfqfvw48-unsplash.jpg
credit: Photo by Michał Parzuchowski on Unsplash
---
We all know that user interface (UI) development is an iterative process. It is important that we can iterate quickly based on user feedbacks. At Juji, we have been constantly searching for solutions that enable faster iterations for our Juji Studio product. Around the end of last year, we did a major revamp of Juji Studio UI. By all accounts, this change made a huge difference in term of usability of Juji Studio. More importantly, we can now iterate much faster than ever possible before. What's more, we did the wholesale changes in less than one month! Here is how we did it.

One of the main innovations that we came up with is a new way to handle client-server communication for a single page application (SPA). For some background, we have long adopted GraphQL as the API language, with which the server side and the Web client speak to each other. GraphQL has been a good choice, as it is fairly flexible and there are a slew of tools to make it convenient to use. As our product grew in features, we started to feel that changes became harder to make, and iterations slowed down to a crawl. 

Juji Studio interfaces with many different stateful systems to enable DIY AI chatbot creation. For example, it needs to work with our chatbot DSL generator to generate the code from the UI, communicate with the chatbot runtime system in order to enable preview of the chatbots, talk to deep learning compute service to get recommended topics, handle long running analytical jobs by using a Kafka cluster, and additionally talk to various databases systems to query and transact information. All these backend work need to be surfaced to the UI in various ways to give user a smooth experience. Not surprisingly, our GraphQL schema file alone grew to be over 2K lines of Clojure EDN code. For a language famous for its conciseness, this is a huge amount of code just for describing the API schema.

We started to question: do we really need this many API calls? Is there a way to cut the number down? By stepping back and looking at what we were doing, we came up with a novel solution. What we were doing is the standard way of building API, viewing the client-server communication as retrieval and manipulation of remote resources. Even with GraphQL, we are still thinking in the REST way, or the CRUD way.  For any resource, one would need at least four API calls,  one to create it, one to query it, one to update it, and one to delete it. However, unlike many CRUD applications that only need a database backend, the GraphQL API of Juji Studio cannot be automatically generated from a database schema because the diverse systems that it involves, so we wrote many repetitive APIs for various different things.  

The worst part is not the number of repetitive APIs, but the scatterness of business logic.