---
layout: blog/article.njk
featured: false
title: Comparing Clojure Diff Libraries
date: 2020-07-11T23:43:37.484Z
author: Huahai Yang
category: Engineering
tags:
  - Clojure
  - Benchmark
image: /assets/uploads/kolleen-gladden-ij5_qcbpivy-unsplash.jpg
credit: Photo by Kolleen  Gladden on Unsplash
---
In my [Clojure/north 2020](https://youtu.be/n-avEZHEHg8) talk on "diffing-based software architecture patterns", I mentioned that Juji is using [Editscript](https://github.com/juji-io/editscript) to diff Clojure data structures. During the Q&A session of the talk, someone brought up another Clojure diff library, called [deep-diff2](https://github.com/lambdaisland/deep-diff2), which I was unaware of. Then on Youtube, a comment asking the difference between Editscript and deep-diff2 appeared again. This prompted me to do an investigation on Clojure data diff libraries. Given how the Clojure community places such an emphasis on data oriented programming, a comparison of data diff alternatives appears to be of interest.

My Google search with "Clojure diff" brought up these options: [clojure.data/diff](https://clojuredocs.org/clojure.data/diff), [differ](https://github.com/Skinney/differ), and aforementioned deep-diff2. Curiously, Editscript does not even show up on Google, despite the fact that it has the most number of github stars among all the options. Anyway, I would like to do a comparison among these options. Before going into the details of the differences, how about doing a benchmark first?

## Benchmark

All these library implements a `diff` function, so we can measure how long it takes for them to diff the same pair of data structures. We will also compare the sizes of the resulting diffs.

### Data Set

I happen to have a data set copied from a [JSON diff benchmark](https://github.com/justsml/json-diff-performance), which seems to include data models of a Javascript drawing program. I simply converted the JSON files into Clojure EDN format. There are four files, [data1](https://github.com/juji-io/editscript/blob/master/resources/drawing1.edn), [data2](https://github.com/juji-io/editscript/blob/master/resources/drawing2.edn), [data3](https://github.com/juji-io/editscript/blob/master/resources/drawing3.edn), and [data4](https://github.com/juji-io/editscript/blob/master/resources/drawing4.edn), with each being a variation of another. After serialized into bytes with [nippy](https://github.com/ptaoussanis/nippy), the sizes of the data are 1004, 1004, 1016 and 555 bytes, respectively.

The shape of the data has a bit of challenge for diff algorithms. The top level is a vector of nested maps. It is necessary to maintain the order of the vector elements, at the same time, the algorithms need to dig into each pair of nested maps to find the differences. However, the nesting is not deep.

### Test Environment

Since these alternatives are all Clojure libraries, I created a project to simply pull the latest versions of them from [clojars](https://clojars.org) and let them loose on the data set. The code is [here](https://github.com/juji-io/editscript/blob/master/bench/bench.clj). The timing benchmark uses [criterium](https://github.com/hugoduncan/criterium/) `quick-bench` function. 

The test ran in a Clojure REPL on a Ubuntu Linux 5.4.0-58-generic server with Intel(R) Core(TM) i7-6850K CPU @ 3.60GHz, and JVM is OpenJDK 64-Bit Server VM AdoptOpenJDK (build 15.0.1+9, mixed mode, sharing)

### Results

![Clojure diff libraries benchmark time chart](/assets/uploads/diff-time-bench.png "Diff time")

![Clojure diff libraries benchmark time chart](/assets/uploads/diff-size-bench.png "Diff size")

As you can see, the time for the libraries to run diff algorithm on the dataset varies greatly.  The same is true for the resulting diff sizes. 

To choose a library, we need to look at each library to see if it fits one's use cases. In addition to the performance data, we also need to look at the output format of each library.

## Analyses

Let's look at each option individually first, then do a summary.

### clojure.data/diff

This is a built-in function of Clojure. The doc string says:

> Recursively compares a and b, returning a tuple of
> [things-only-in-a things-only-in-b things-in-both]

Obviously, this simple walking-through of two data structures is not meant to uncover the minimal differences between them. The resulting diff will always be larger than the original size of the data. The diff size chart above shows just that. Here's what the result looks like:

```clojure
(pp/pprint (clj/diff data1 data2))
;;==>
[[nil nil {:fill "#ffff00"}]
 [nil nil {:fill "#0000ff"}]
 [{:y 27,
   :r 0,
   :color "#000000",
   :fill "#CCCCCC",
   :width 100,
   :type "rect",
   :cap "round",
   :borderWidth 1,
   :style "Solid",
   :x 50,
   :height 100}
  {:y 30,
   :family "sans-serif",
   :color "#0000FF",
   :fill {:r 256, :g 0, :b 0, :a 0.5},
   :width 10,
   :type "textBlock",
   :cap "round",
   :borderWidth 1,
   :size "24px",
   :style "Solid",
   :pad 3,
   :weight "bold",
   :x 20,
   :height 25.200000000000003,
   :text "DojoX Drawing Rocks"}
  {:rx 150,
   :color "#0000FF",
   :type "ellipse",
   :cap "round",
   :borderWidth 1,
   :style "Solid",
   :cx 150,
   :cy 185,
   :ry 100}
  {:color "#000000",
   :fill "#CCCCCC",
   :y1 20,
   :type "arrow",
   :cap "round",
   :borderWidth 3,
   :style "Solid",
   :label "My Arrow",
   :x1 40,
   :y2 120.00000000000003,
   :x2 -133.20508075688772}
  {:y 26,
   :family "sans-serif",
   :color "#000000",
   :fill "#CCCCCC",
   :width 200,
   :type "text",
   :cap "round",
   :borderWidth 1,
   :size "18px",
   :style "Solid",
   :pad 3,
   :weight "normal",
   :x 30,
   :height 25.200000000000003,
   :text "This is just text"}
  {:color "#000000",
   :style "Solid",
   :cap "round",
   :fill "#CCCCCC",
   :borderWidth 1,
   :points
   [{:x 70, :y 20}
    {:x 65, :y 15}
    {:x 75, :y 15}
    {:t "Z", :x 70, :y 20}
    {:t "M", :x 70, :y 40}
    {:x 68, :y 12}
    {:x 72, :y 12}],
   :type "path"}]]

```

In term of speed, this function is not the best. When diff is small, it is in the middle of the pack. When the diff is large, it can be the second slowest, only beating the optimizing A* algorithm of Editscript, but that algorithm is doing much more than simply walking two trees.

This function does produce a lot of information about the changes. There may be cases when these are useful. For example, you can ignore "things-in-both". "things-only-in-b" tells you the new things added, and "things-only-in-a" tells you what are deleted. However, if both are not empty, it would be hard to figure out what exactly happened. 

There is no corresponding `patch` function for `diff`, so you cannot really use this to preserve and restore data.

### lambdaisland/deep-diff2

This library seems to enjoy a lot of attention. Here's the tag line: 

> Recursively compare Clojure or ClojureScript data structures, and produce a colorized diff of the result.

So it seems to gear towards visualizing the data diff for human consumption. Here's what the results look like:

```clojure
(deep/pretty-print (deep/diff data1 data2))
;; ==>
[{:borderWidth 1,
  :cap "round",
  :color "#000000",
  :fill "#CCCCCC",
  :height 100,
  :r 0,
  :style "Solid",
  :type "rect",
  :width 100,
  :x 50,
  :y 27}
 {:borderWidth 1,
  :cap "round",
  :color "#0000FF",
  :family "sans-serif",
  :fill {:a 0.5, :b 0, :g 0, :r 256},
  :height 25.200000000000003,
  :pad 3,
  :size "24px",
  :style "Solid",
  :text "DojoX Drawing Rocks",
  :type "textBlock",
  :weight[0m "bold",
  :width 10,
  :x 20,
  :y 30}
 {:borderWidth 1,
  :cap "round",
  :color "#0000FF",
  :cx 150,
  :cy 185,
  :fill -"#ffff00" +"#0000ff",
  :rx 150,
  :ry 100,
  :style "Solid",
  :type "ellipse"}
 {:borderWidth 3,
  :cap "round",
  :color "#000000",
  :fill "#CCCCCC",
  :label "My Arrow",
  :style "Solid",
  :type "arrow",
  :x1 40,
  :x2 -133.20508075688772,
  :y1 20,
  :y2 120.00000000000003}
 {:borderWidth [36m1,
  :cap "round",
  :color "#000000",
  :family "sans-serif",
  :fill "#CCCCCC",
  :height 25.200000000000003,
  :pad 3,
  :size "18px",
  :style "Solid",
  :text "This is just text",
  :type "text",
  :weight "normal",
  :width 200,
  :x 30,
  :y 26}
 {:borderWidth 1,
  :cap "round",
  :color "#000000",
  :fill "#CCCCCC",
  :points [{:x 70, :y 20}
           {:x 65, :y 15}
           {:x 75, :y 15}
           {:t "Z", :x 70, :y 20}
           {:t "M", :x 70, :y 40}
           {:x 68, :y 12}
           {:x 72, :y 12}],
  :style "Solid",
  :type
```
Sorry that this page does not do justice for the colorized output. But the thing to notice is the change `:fill -"#ffff00" +"#0000ff"`. 

So basically this library displays the data, then highlights the changes in color. Of course, the result size will be larger than the original data. When changes are significant, the size could be be more than doubled, as shown in the chart.

Speed-wise, this library is also only consistently faster than the optimizing A* algorithm. It sometimes beats clojure.data/diff when the diffs are large.  This is remarkable, because what it does is a lot more than simply walking the trees. 

Its credits section cites:

> This library builds upon clj-diff, which implements a diffing algorithm for sequences, and clj-arrangements, which makes disparate types sortable." 

I am familiar with the algorithm [1] used in [clj-diff](https://github.com/brentonashworth/clj-diff). It is an O(np) algorithm for diffing strings, where p is the number of deletes. The way it works is by maintaining a moving window of approximate size p along the diagonal of the editing matrix (think data a as the row, data b as the column), so it avoids searching the whole matrix. This algorithm is also implemented (with slightly better performance) in both versions of Editscript's two algorithms, to handle the special cases when we know simple sequences are being compared. 

Clojure data structures are trees, not simple sequences of elementary values. The above algorithm assumes that each edit operation has the same cost, which is false for tree editing. Adding a large sub-tree costs a lot more than adding a single value by putting a lot more things in the resulting diff, for example. Another problem with that algorithm, is that it does not have replacement operator, having only add and delete operators. In any case, if optimal diff is desired, a proper tree diff algorithm is necessary. 

However, general tree diff is expensive. The optimal time complexity is proved to be O(n^3) [2]. Fortunately, Clojure immutable data structure diff does not need or want general tree diff, where everything can move around. We actually want to preserve our beloved immutable data structures. This is how Editscript's A* algorithm can achieve optimality with less than O(n^2) time complexity: our definition of optimality disallows certain operations, such as splitting or merging nodes.

### Editscript (A* algorithm)

This is the default algorithm of Editscript library. The reason I made this choice is because the optimal diff is likely the true diff. The library is intended as a part of the data transport for communicating software components [(see my talk)](https://youtu.be/n-avEZHEHg8), where the content of diffs may control application logic. As such, they'd better be reflecting the true changes.

As mentioned, our structure preserving requirement makes our diff problem simpler than a general tree diff problem. We can now compare things layer by layer. Consequently, the time complexity goes down to O(n^2). On top of that, we implement A* search algorithm to obtain some further speed up. Basically, our A* algorithm uses a simple heuristic to avoid searching the whole edit matrix on each layer. This simple heuristic is actually inspired by the sequence diff algorithm mentioned above, i.e. it's about the number of deletes. However, in order to ensure optimality, our heuristic is currently rather conservative, so we may have left some potential savings on the table. 

For now, I am fine with the performance. The benchmark shows that although it is the slowest, as expected, but in the big scheme of things, the cost is only a few milliseconds, something a lot of applications can bear. 

Here is what the diff produced looks like:

```clojure
(editscript/diff data1 data2)
;;==>
[[[2 :fill] :r "#0000ff"]]
```
That's it? 

Yeah, that's it. That's the true change.  The user apparently changed the fill color of the third shape.

### Editscript (Quick algorithm)

This simple change happens to be also detected by the quick algorithm. 

```clojure
(editscript/diff data1 data2 {:algo :quick})
;;==>
[[[2 :fill] :r "#0000ff"]]
```
The benchmark shows that it is the fastest algorithm most of the time, only occasionally slightly behind the library that we will discuss in the next section.

This algorithm mostly does a one-pass walking-through of two trees, and notes any differences found. As mentioned, when we see a sequence, however, we activate the sequence diff algorithm mentioned above to gain a little bit of optimality. So at least in this case, this quick algorithm does not produce catastrophically large diffs. The kind of mistakes this kind of naive one-pass walking-through algorithms make, is that it would often delete a whole subtree, then add its slight variation back. Such edits are unlikely to be the true changes.    

Editscript produces something does look like a script. The corresponding `patch` function takes the script and runs it to restore the data. The patching process takes almost no time, so the benchmark is omitted here.

The only other library that does `patch`, is differ.

### Differ

By the numbers of the benchmark, this library looks amazing. It is almost as fast as the quick algorithm of Editscript, and its diff size is almost the same as the A* algorithm of Editscript! So we can have our cake and eat it too?

Sadly, there's no miracle in algorithms. It happened to be lucked out in this particular dataset, where the forbidden changes of this library did not happen: 

* Sequence items cannot change places
* Set items cannot change themselves

So if one throws arbitrary data at it, differ will fall. The benchmark file contains code to demonstrate it failing all the property based tests, where the property checked is `(= b (patch a (diff a b)))`. So unless you know your data do not involve the above changes, you probably want to use something else.

## Summary

The Clojure community seems to care about data diff, so we have a few options. Based on what I have seen, if you are in the market to use a diff library, here are my recommendations: 

* If you want to look at the diffs and do not care if the diffs are always the smallest possible, deep-diff2 is great. 

* If you need to use the content of diffs in application logic, or you want to store the smallest possible diffs, and the necessary computing time is acceptable for you, use the default A* algorithm of Editscript. 

* If your data changes are too frequent or data is too big to accept the time cost of computing optimal diffs, and you do not care if the diffs may be sometimes not the smallest possible, the quick algorithm of Editscript may work for you. 

* I do not recommend clojure.data/diff, nor differ.

Regardless, test the libraries on your own data sets first. 

[1] Wu, S. et al., 1990, An O(NP) Sequence Comparison Algorithm, Information Processing Letters, 35:6, p317-23.

[2] Demaine, E. et al. An Optimal Decomposition Algorithm for Tree Edit Distance. ACM Transactions on Algorithms, 6(1), 2009.
