---
layout: blog/article.njk
featured: false
title: "An Introduction to Datalevin: An Open Source Contribution by Juji"
date: 2021-09-01T05:03:08.397Z
author: Huahai Yang
category: Engineering
tags:
  - Open Source
  - Clojure
image: /assets/uploads/christina-wocintechchat-com-glrqywjguey-unsplash.jpg
credit: 'Photo by <a
  href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christina
  @ wocintechchat.com</a> on <a
  href="https://unsplash.com/s/photos/server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>   '
---
Juji, an AI-driven conversational technologies company, has made an open-source
contribution to the world with
[Datalevin](https://github.com/juji-io/datalevin), a versatile, lightweight, and
fast embedded database engine. In addition to being powered by the Datalog query
language, it also acts as a Clojure native Key-Value (KV) store. This transactional database solution is agile and dynamic, suitable for handling complex data structures.

## Motivation
With the demand for more sophisticated capabilities in conversational AI, there
is a need for a Natural Language Processing interface to data. SQL has too many
special cases, hence limiting, and XML can be verbose, leaving Datalog as the
best target query language. Realizing the importance of granular data access patterns
in triple stores led to the development of Datalevin. Datalevin is being utilized by Juji in production for state persistence and full-text search functionalities.

## Datalevin Basics
Datalevin's core is a Clojure library, running on Java Virtual Machine (JVM) in
an embedded mode. It also have a native command line tool that uses GraalVM native image
technology. With various software environments supported, it is capable of running on Linux, MacOS, and Windows. Several features include:

* Support as both KV store and Datalog store
* Single database file
* Sandboxed interpreter for user-defined functions

Datalevin prides itself on being efficient. With the artifact size of only 120KB, it minimizes the dependency footprint, but punches well above its weight in terms of functionality.

## Server and Client

With the release of version 0.5.0, the networked server mode was introduced
along with the corresponding Clojure client. This major update ensures that
Datalevin can transparently work with both local and remote stores, maintaining
the same API across both platforms. The server/client mode has these features:

* Event-driven server architecture that supports a large volume of concurrent connections
* Extensible wire protocol which currently supports nippy and transit encoding
* Built-in role-based access control for state-of-the-art security
* Built-in connection pool

## Full Text Search Capability

Version 0.7.0 saw the addition of full text search functionality to Datalevin.
Combining a database with a search engine allows for a more seamless and
powerful search across the whole database, thus eliminating the need for incorporating standalone search engines that make the system heavier or redundant. Also, it avoids unnecessary write amplification by storing a reference to the original content instead of duplicating text in the search engine.

### The Edge: T-Wand Algorithm and More

The Datalevin search engine is developed using the T-Wand algorithm, which
allows it to [outperform](https://github.com/juji-io/datalevin/tree/master/search-bench) dominant competitors like Apache Lucene. With the help
of this novel algorithm, Datalevin can perform efficient document analysis for the given query, even in situations that demand a high level of complexity.

## Conclusion

In conclusion, Datalevin clearly demonstrates that a versatile transactional
database does not need a large number of dependencies and a bloated code base to deliver the best performance. Experience Datalevin today for flexible Datalog query and good performance, brought to you by the innovators at Juji, Inc.
