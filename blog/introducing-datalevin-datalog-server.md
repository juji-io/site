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
With the release of version 0.5.0, Datalevin gains the new mode of networked server, with corresponding client.

Embedded Clojure library.

Native command line, Babashka pods, server and client are all in the same native binary. Run on Linux, MacOS and Windows.



Our server mode is a unique hybrid mode, not a pure server/client architecture, nor a pure peer mode.

Only storage access is remote. Much of high level transaction and query processing are done locally.