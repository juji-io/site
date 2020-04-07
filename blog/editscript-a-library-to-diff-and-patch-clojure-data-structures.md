---
layout: blog/article.njk
status: published
featured: true
title: 'EditScript: a Library to Diff and Patch Clojure Data Structures'
date: 2019-09-29T20:37:00.000Z
author: Huahai Yang
category: Engineering
tags:
  - Clojure
  - Juji Studio
---
At Juji, we need to take snapshots of our AI agents' states and later restore them. Such a use case requires a good diffing library for nested Clojure data structures to avoid overwhelming our storage systems. I have not found such a library in Clojure ecosystem, so I implemented my own. Hopefully this little library could be of some use to further enhance the Clojure's unique strength of[Data-Oriented Programming](https://livebook.manning.com/#!/book/the-joy-of-clojure-second-edition/chapter-14/1).
