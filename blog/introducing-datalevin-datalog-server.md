---
layout: blog/article.njk
featured: false
title: Introducing Datalevin Datalog Server
date: 2021-09-01T05:03:08.397Z
author: Huahai Yang
category: Engineering
image: /assets/uploads/christina-wocintechchat-com-glrqywjguey-unsplash.jpg
credit: 'Photo by <a
  href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christina
  @ wocintechchat.com</a> on <a
  href="https://unsplash.com/s/photos/server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>   '
---
With the release of version 0.5.0, Datalevin gains the new mode of networked server, bundled with the corresponding Clojure client.

What is Datalevin. Versatile transactional database. Clojure native KV store and Datalog store.

Core is a Clojure library, embedded mode, running on JVM.

Native command line, Babashka pods, server and client are all in the same native binary. Run on Linux, MacOS and Windows.

Hybrid of client/server and peer architecture

Our server mode is a unique hybrid mode, not a pure server/client architecture, nor a pure peer mode.

Only storage access is remote. Much of high level transaction and query processing are done locally. All high level facilities, e.g. transactable entities, work as before.

Built-in role based access control (RBAC). State of art security.

User defined functions run in sandboxed interpreter. Work locally as well as remotely.

Event driven server architecture support large number of concurrent connections. Fully utilize server resources.

Simple to use client library with a built-in connection pool. Transparently work with both local or remote stores, having exactly the same API.

Extensible wire protocol. Currently support both nippy (smaller payload) and transit (potential for client in other languages) encoding.



