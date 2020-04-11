---
layout: blog/article.njk
featured: true
title: This Is How We Revamped the UI in Less Than a Month
date: 2020-04-08T06:33:36.210Z
author: Huahai Yang
category: Engineering
tags:
  - Software Architecture
  - Single Page Application
  - Juji Studio
  - Clojure
  - EditScript
image: /assets/uploads/michal-parzuchowski-gennfqfvw48-unsplash.jpg
credit: Photo by Michał Parzuchowski on Unsplash
---
We all know that user interface (UI) development is an iterative process. It is important that we can iterate quickly based on user feedbacks. At Juji, we have been constantly searching for solutions that enable faster iterations for our Juji Studio product. Around the end of last year, we did a major revamp of Juji Studio UI. By all accounts, this change made a huge difference in term of usability of Juji Studio. More importantly, we can now iterate much faster than previously possible. What's more, we did the wholesale changes in less than one month! Here is how we did it.

One of the main innovations that we came up with is a new way to handle the client-server communication for a single page application (SPA). Instead of sending resource oriented API calls, the client sends the diffs of its data model back to the server, and server applies the diffs to its own copy of the data model for persistence.

For some background, we have long adopted GraphQL as the API language, with which the server side and the Web client speak to each other. GraphQL has been a good choice, as it is fairly flexible and there are a slew of tools to make it convenient to use. As our product grew in features, we started to feel that changes became harder to make, and iterations slowed down to a crawl. 

Juji Studio interfaces with many different stateful systems to enable DIY AI chatbot creation. For example, it needs to work with our chatbot DSL generator to generate the code from the UI, communicate with the chatbot runtime system in order to enable preview of the chatbots, talk to deep learning compute services to get recommended topics, handle long running analytical jobs by using a Kafka cluster, and additionally talk to various databases systems to query and transact information. All these backend work need to be surfaced to the UI in various ways to give user a smooth experience. Not surprisingly, our GraphQL schema file alone grew to be over 2K lines of Clojure EDN code. For a language famous for its conciseness, this is a huge amount of code just for describing the API schema.

We started to question: did we really need this many API calls? Was there a way to cut the number down? Stepped back and examined what we were doing, we decided that this was not sustainable. What we were doing is the standard way of building APIs: viewing the client-server communication as retrieval and manipulation of remote resources. Even with GraphQL, we are still thinking in the REST way, or the CRUD way.  For any resource, one would need at least four API calls,  one to create it, one to query it, one to update it, and one to delete it. However, unlike many CRUD applications that only need a database backend, the GraphQL API of Juji Studio cannot be automatically generated from a database schema because of the diverse systems that it interacts with, so we wrote many repetitive APIs for various different things.  

The worst part was not the number of repetitive APIs, but the scatteredness of business logic. To change anything, we needed to update the database schema, update the backend code, update the API schema, update the service side of the API, then update the client side of the API, and finally, we got to write UI code for the change that a user would actually see. This is a very long chain of events, and things could break down anywhere. Particularly, as it was often the case, these different links of the chain were handled by different developers. With the added communication overhead, it was a miracle that we could get anything changed at all! 

In retrospect, the standard resource-centric view of software architecture does not really play well with the concept of SPA , where the bulk of the business logic expects to happen in the rich client. In actuality, the server side mostly serves as the persistence layer of the said business logic, and should not be concerned with its details. For our use case of DIY AI chatbot creation, most of the complexity are concentrated in the user interfaces. Forcing a client-server functionality split only serves to increase incidental complexity.  

With this clarity, it is now natural to arrive at what we are doing right now: 

1. The Web client works on a data model in the form of an EDN document, and does whatever manipulations of the document necessary to serve the user. 
2. Periodically, the client sends to the server a diff between its current state of the document with its previous state.
3. The server knows nothing about what the client did, it just blindly apply the diff to its own copy of the document, persist the new document, and sends the document SHA back to the client.
4. The client compares the incoming SHA with its own to know that its state has been successfully persisted; or it will send the whole document back to overwrite the server document.

With this scheme, to change the functionality of the UI, all that is necessary is for the stake-holders to have a discussion with the frontend developers and the UX designer. Backend developer involvement is not necessary. Faster UI iteration is easily achieved. As to the APIs? Many of the original API calls are now removed, replaced by the three generic fetch-doc, send-diff, and overwrite-doc calls, which the frontend developers do not touch once they are written. 

Because the frontend developers had complete control of the data model and did not need to be concerned with the server side, they could quickly revamp the entire UI of Juji Studio. It took less than a month to go from the design conception to the end of implementation. And the resulting product is nothing short of stunning. 

Obviously, I have glossed over many implementation details of this data diff driven architecture. For example, issues about data validation, dealing with errors, dealing with multiple browser tabs and multiple browsers, and so on, are too numerous for the space of an article. The gist of this post, however, is to introduce this idea of data diff oriented software architecture, and to outline its benefits of increasing modularity and decoupling, and thereby decreasing the friction for change and the time to market.  
