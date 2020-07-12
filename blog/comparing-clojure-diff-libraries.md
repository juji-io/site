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
In my [Clojure/north 2020](https://youtu.be/n-avEZHEHg8) talk on "diffing-based software architecture patterns", I mentioned that Juji is using [Editscript](https://github.com/juji-io/editscript) to diff Clojure data structures. During the Q&A session of the talk, someone brought up another Clojure diff library, called [deep-diff2](https://github.com/lambdaisland/deep-diff2), which I was unaware of. Then on Youtube, someone else left a comment asking the difference between Editscript and deep-diff2 again. This prompted me to do an investigation on Clojure data diff libraries. Given how the Clojure community places such an emphasis on data oriented programming, a comparison of the data diffing alternatives appears to be of interest.

My Google search with "Clojure diff" brought up these options: [clojure.data/diff](https://clojuredocs.org/clojure.data/diff), [differ](https://github.com/Skinney/differ), and aformentioned deep-diff2. Curiously, Editscript does not even show up on Google, despite the fact that it has the most number of github stars among all the options. Anyway, I would like to do a comparison among these options. Before going into the details of the differences, how about doing a benchmark first?

## Benchmark

All these library implements a `diff` function, so we can measure how long it takes for them to diff the same pair of data structures. We will also compare the size of the resulting diffs.

### Data Set

I happen to have a data set copied from a [JSON diff benchmark](https://github.com/justsml/json-diff-performance), which seems to be the data models of a Javascript drawing program. I simply converted the JSON files into Clojure EDN format. There are four files, [data1](https://github.com/juji-io/editscript/blob/master/resources/drawing1.edn), [data2](https://github.com/juji-io/editscript/blob/master/resources/drawing2.edn), [data3](https://github.com/juji-io/editscript/blob/master/resources/drawing3.edn), and [data4](https://github.com/juji-io/editscript/blob/master/resources/drawing4.edn), with each a variation of another. When serialized into bytes with [nippy](https://github.com/ptaoussanis/nippy), the sizes of the data are 1004, 1004, 1016 and 555 bytes, respectively.

The shape of the data should be challenging for diff algorithms. The top level is a vector of nested maps. It is necessary to maintain the order of the vector elements, at the same time, the algorithms need to dig into each pair of nested maps to find the differences. 

### Environment

Since these alternatives are all Clojure libraries, I created a project to simply pull the latest versions from clojars and run them on the data set. The code is [here](https://github.com/juji-io/editscript/blob/master/bench/bench.clj). The timing benchmark uses [criterium](https://github.com/hugoduncan/criterium/) `quick-bench` function. 

The test ran in a Clojure REPL on my laptop, an old 2014 2.8 GHz Core i5 16GB MacBook Pro, with this software environment:

> x86_64 Mac OS X 10.15.5 4 cpu(s)
> OpenJDK 64-Bit Server VM 25.222-b10
> Runtime arguments: -Dfile.encoding=UTF-8 -XX:-OmitStackTraceInFastThrow -XX:+TieredCompilation -XX:TieredStopAtLevel=1 -Dclojure.compile.path=/Users/huahaiy/workspace/editscript/bench/target/classes -Dbench.version=0.1.0 -Dclojure.debug=false

### Results

![Clojure diff libraries benchmark time chart](/assets/uploads/diff-time-bench.png "Diff time")

![Clojure diff libraries benchmark time chart](/assets/uploads/diff-size-bench.png "Diff size")

As you can see, the time for the libraries to run diff algorithm on the dataset varies greatly.  The same is true for the resulting diff sizes. 

To choose a library, we need to look at each libraries to see if it fits one's use cases. In addition to the performance data, we also need to look at the output format of each library.

## Analysis

Let's look at each option individually first, then do a summary.

### clojure.data/diff

This is a built-in function of Clojure. The doc string says

> Recursively compares a and b, returning a tuple of
> \[things-only-in-a things-only-in-b things-in-both]

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

In term of speed, this function is not the best. When diff is small, it is in the middle of the pack. When the diff is large, it is the second slowest, only beating the optimizing A* algorithm of Editscript, but that algorithm is doing much much more than simply walking two trees.

This function does produce a lot of information about the changes. There may be cases when these are useful. For example, you can ignore "things-in-both". "things-only-in-b" tells you the new things added, and "things-only-in-a" tells you what is being deleted. However, if both are not empty, it would be hard to figure out what exactly happened. 

Finally, there is no corresponding \`patch\` function for \`diff\`, so you cannot really use this to preserve and restore data.