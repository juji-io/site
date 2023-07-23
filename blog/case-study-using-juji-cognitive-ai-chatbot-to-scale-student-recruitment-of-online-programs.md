---
layout: blog/article.njk
featured: true
title: "Case Study: Juji Cognitive AI Chatbot Helping Grow Student Recruitment
  of Online Programs"
date: 2022-02-11T21:17:08.841Z
author: Michelle Zhou
category: Study
tags:
  - Education
  - Student Recruitment
image: /assets/uploads/avel-chuklanov-dumfltmeabq-unsplash.jpg
credit: image by https://unsplash.com/@chuklanov
---
[The Gies College of Business](https://giesbusiness.illinois.edu/) at University of Illinois is a leader in [shaping the business education landscape and democratizing business education](https://poetsandquants.com/2022/01/17/10-business-schools-to-watch-in-2022/10/) with a top-ranked, highly successful online MBA program, [the iMBA program](https://onlinemba.illinois.edu/). The program was launched in 2016 starting with 116 students and has grown rapidly now with over 4600 students. The program has earned a 97% student satisfaction rating, a retention rate of 95%, and the graduates seeing pay raise by 21% on average.

# **The Challenge**

Just like any fast-growing enterprises, one of the main challenges for the iMBA program is to scale its operations to help increasingly more students, both prospective and enrolled students, with limited resources. In particular, the program's limited number of recruitment staff members had to repeatedly answer tens of thousands of questions from prospective students as well as advise them about the program offerings, admission criteria, and the application process. Moreover, there was not an effective way to understand the interests or needs of prospective students, for example, whether they are interested in a degree program or getting a course certificate.

# **The Solution**

To address the challenges mentioned above, Professor Brooke Elliott, the Associate Dean of the College, who oversees the school's online programs, decided to enlist the help of Artificial Intelligence (AI) to augment her team. Professor Elliott stated:

“*We have a handful of recruitment staff members who need to answer tens of thousands of questions from prospective students in addition to their other responsibilities such as advising students. A chatbot solution could help us automate certain operations so we can meet increasing student demands while keeping our staff happy*."

She wished to explore how AI could automate repetitive work to scale out their fast-growing online programs, satisfying increasing student demands while making staff members happier at the same time.

After watching a quick Juji demo that showed how easy and fast one could set up and maintain a chatbot with no code and no IT resources required, Elliott decided to give Juji a try as she acknowledged:

“*this seems easy and our recruitment staff can definitely handle this on their own*”.

The Assistant Director of the Admissions and Recruitment team, Myranda Crist, led the team in designing and implementing a chatbot, called Alma, which sits on the program's main web page and performs three tasks:

1. Answer prospective students' questions about the iMBA program;
2. Elicit prospective students' information, such as their email and program interest, for follow-up engagements; and
3. Inform prospective students the key information about the program.

The implementation included two parts, defining the main workflow of Alma as well as teaching Alma how to answer frequently asked student questions.  Designing the main workflow of Alma was rather straightforward: the team used [Juji Studio](https://juji.io/no-coding-ai-chatbot-builder/), a no-coding AI chatbot design tool, to [build the main chat flow](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/) of Alma based on a template called AI Program Assistant, which already includes a set of conversation topics related to the three tasks mentioned above and a set of program related FAQs.

As shown in the screenshots below, for example, the first conversation topic (T0) after the welcome message (Welcome) is to invite a prospective student to ask questions and the second topic (T1) is to ask the student if s/he wishes to subscribe to an email list to receive periodical program updates or reminders (e.g., upcoming application deadline).

![](/assets/uploads/picture1.png)

The screenshot above shows that after sending a welcome message, the AI assistant will invite a website visitor to ask questions (T0). This message also includes a function (help-message-faq) that will automatically generate help messages to inform a visitor what the AI knows. The screenshot below shows what this message looks like in a chat.

![](/assets/uploads/picture2.png)

If a visitor (prospective student) has done questioning, the AI assistant will ask the visitor whether s/he would like to receive periodical email notifications about the program. As shown in the screenshot below, T1 is the action to ask a student whether s/he would opt-in for email subscription.

![](/assets/uploads/picture3.png)



To teach Alma to answer prospective students' questions about the program, the team used the Q&A CSV template coming with the AI Program Assistant and prepared [a spreadsheet containing frequently asked questions and answers](https://juji.io/docs/design/), in a format similar to the one shown below.  The spreadsheet was saved to a CSV file format and uploaded into Alma. The screenshot below shows a template of such questions and answers.

![](/assets/uploads/picture4.png)

As shown above, this is a Q&A template that can be downloaded, filled in, and then uploaded to customize an AI assistant with specific program information.

Alma was designed to enable prospective students to obtain answers to their free-text questions instantly instead of searching through the program website/FAQ list to find answers. As shown in the screenshot below, a visitor can ask free-text questions and obtain direct answers to their questions.

![](/assets/uploads/screen-shot-2022-02-11-at-2.25.46-pm.png)

Although Alma could automatically match diverse incoming question expressions (e.g., "*What do you know about the online program*") with what the staff has taught it (e.g., "*Tell me about your program*"), Alma was not perfect especially when she was just launched. In the early days of Alma after it was launched, Myranda and her team checked Alma on a near daily basis, reviewing the questions that Alma was unable to answer and adding to Alma’s knowledge base instantly – without interrupting any ongoing conversations with prospective students. Their Q&A list has grown rapidly as [unanswered user questions were quickly captured and managed](https://juji.io/blog/q-a-dashboard/) by the team after Alma went live.

![](/assets/uploads/picture6.png)

Above screenshot is a Q&A board that a chatbot supervisor can check to see what questions a chatbot has missed and can update the chatbot with a proper answer instantly without interrupting any ongoing conversations.

After Alma was deployed, the team also connected Alma with the Google Analytics used to monitor the program website traffic so the team could learn how Alma's interactions with site visitors would impact their website behavior, for example, how many of those who chatted with Alma went on submitting an application.

![](/assets/uploads/picture7.png)

This screenshot shows how to connect Google Analytics with a deployed AI chatbot to track how user chatbot behavior is related to other website behavior.

The team also used Juji Studio "Reports" dashboard similar to the one shown below to view user chat status and improve Alma as needed.

![](/assets/uploads/picture8.png)

![](/assets/uploads/picture9.png)



# **The Outcome**

Alma has interacted with thousands of visitors on the [Gies iMBA program website](https://onlinemba.illinois.edu/) and answered tens of thousands of visitor questions about the online program. From the data gathered, Alma provides several key values.

## **Improved "conversion rate" by 72%**

The key goals for the program website are to inform prospective students about the program, help them find needed information to make a decision, and encourage them to apply for the program. The Google Analytics data of the program website showed that 11.9% of visitors (prospective students) who interacted with Alma the chatbot applied for the program, while only 6.9% of the visitors who didn't chat with Alma applied for the program. This data implies that 72% increase if visitors (prospective students) had chatted with Alma.

## **Automated 99.5%** **question answering**

Combining Myranda and team's teaching and Alma's continuous learning capabilities, Alma now answers over 99.5% website visitor's questions 24x7x365, covering a wide range of topics about the program, such as admission requirements, tuition and fees, and alumni network information.  This relieves much human effort, which could be directed to more important tasks (e.g., content creation and student advising).

Myranda, the leader of the Alma supervising team, mentioned:

"*We love Alma. It’s created another way for prospects to connect with us and receive quick answers. Alma has helped inform us of areas in our process that may not be as clear as we would like, and we’ve been able to address that. Another added benefit is that our current students also utilize Alma for answers, something we did not expect!*"

Alison Hodina, Alma's direct supervisor, also commented:

"*Updating Alma is as simple as responding to an email. I love the ease of Q&A board and how easy it is to teach Alma to answer missed questions, including those with varied question expressions*".

# **Summary**

This case study describes the creation and application of [a cognitive AI assistant](https://juji.io/) in the form of a chatbot that can [multi-task](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/) to help grow student recruitment: informing prospective students about the program, automating student free-text inquiries, and eliciting prospective student information.

Adopting an AI chatbot is similar to having a human assistant, a responsible human supervisor should always check in on the chatbot from time to time, identifying mistakes it has made and teaching it new knowledge, especially right after its initial launch, to get the best value of the AI.  As the AI chatbot has grown, supervisions could be reduced accordingly (e.g., from daily check to weekly check).

Moreover, cognitive AI chatbots are still a novelty and many people are unaware of their power or have had bad experiences with chatbots that can hardly perform any meaningful tasks. All these perceptions or experiences would deter people from engaging with a powerful, cognitive AI assistant like Alma. We thus strongly encourage organizations who adopt a cognitive AI chatbot to inform their website visitors explicitly what their chatbot can help with and encourage their visitors to engage with the chatbot, which not only will help improve visitor satisfaction but also offload the often unpleasant, repetitive work from human staff members.

## **Additional Resources**

* [](https://juji.io/blog/a-step-to-step-guide-how-to-make-a-multi-purpose-chatbot-no-coding-required/)[A quick video](https://youtu.be/5va3WNyB4LE) summarizes the two key steps to create a chatbot like Alma for student recruitment.
* [How to power a customer service chatbot that is versatile and robust](https://juji.io/blog/a-step-to-step-guide-to-customer-service-chatbots-with-nlp-no-coding-required/)
* [A recorded webinar](https://us06web.zoom.us/rec/share/qxaOBNsg6yOSmAVJjca-kZf9Qu3qKwoZrnRy5u2F6EXrqnefohSB8QBswCakfBCq.VCHVa4ghhkixPmov) on how to create an AI chatbot to greet and guide website visitors (Passcode: 9%Z#K!Z1 to view the recording).
