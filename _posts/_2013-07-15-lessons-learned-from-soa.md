---
id: 226
title: Implementing Disruptive Technologies: 8 Lessons Learned from SOA
date: 2013-07-15T17:27:35+00:00
author: Mehmet Akyuz
layout: post
guid: /2013/07/15/lessons-learned-from-soa/
permalink: /2013/07/15/lessons-learned-from-soa/
tags:
  - big data
  - cloud
  - corporate governance
  - digital forces
  - disruptive technologies
  - gartner
  - governance
  - lessons learned
  - mobile
  - nexus of forces
  - soa
  - soa governance
  - social
format: gallery
---
It is true that SOA has lost a lot of its steam now and the craze of SOA has been overtaken by the charms of new disruptive digital forces namely cloud, big data, social business and mobility. As with every emerging technology climbing up to the peak of the hype cycle, those digital forces are fully loaded with promises and expectations but it is only a matter of time that they will crash into the harsh wall of reality. This story is not new, and has also shown itself in the &#8220;SOA is the savior&#8221; era. The goal of this blog is to remember that story once again and come up with a list of lessons learned, which might hopefully guide architects and implementers of the new digital forces.

<div align="center">
  <a title="At a station" href="http://www.flickr.com/photos/28481088@N00/2198193461/" target="_blank"><img title="At a station" alt="At a station" src="https://i1.wp.com/farm3.staticflickr.com/2065/2198193461_176a367901.jpg?w=660" data-recalc-dims="1" /></a><br /> <small> <a title="tanakawho" href="http://www.flickr.com/photos/28481088@N00/2198193461/" target="_blank">tanakawho</a> via <a title="Compfight" href="http://www.compfight.com/">Compfight</a></small>
</div>

  
Below is some background information for the lessons learned. If you are impatient, [click here to jump to the list of lessons learned.](#lessons-learned)

## A Short SOA Story

Undoubtedly the idea of exposing business and technical capabilities as Lego blocks (services) and creating super-innovative business applications just by assembling those blocks was a great idea. All the complexity and burden brought to the stage by the silos of applications, heterogeneous technologies and systems was hidden behind a services layer, and the business was given a sleek control panel of shiny buttons, indicators and switches. Of course it didn&#8217;t take long for service architects and implementers to see that the complexity hasn&#8217;t gone anywhere, it was just swept under the carpet for a while. A typical SOA ecosystem consists of too many moving parts where each of those parts has a different life cycle. There are obviously services and then applications and processes relying on services, systems, legacy applications, data resources providing input to services and so on. Architects have realized that creating a successful SOA is only possible with a carefully designed and managed service life cycle where life cycles of other elements are also taken into consideration. That entailed policies for creating and changing services, tools for managing service information and life cycle and harmonization of organizational units involved in the service life cycle. The combination of all of these processes &#8211; or policies, tools and organizational structure are named as SOA Governance and the culprit for the so-far failed SOA initiatives are claimed as &#8220;[The Lack of Governance](http://www.servicetechmag.com/I33/1009-1)&#8221;

## The Lack of Governance

Governance can be defined in many different ways. It can also be defined in different levels, such as corporate governance, architecture governance and IT governance. In its core, governance is about portraying a big picture of the desired state of something &#8211; corporate, architecture etc., and creating an awareness across the organization towards that big picture and also providing the mechanisms to get to and/or keep close to that desired state. In the simplest terms, it averts you from getting lost in the process. It tells where to go, and also guides you on how to get there. In SOA level, SOA governance helps you answer to questions such as below:

> &#8211; What are my services, what they are doing? Who are responsible for and who are consuming my services?  
> &#8211; Are my service architecture conforms with my reference SOA architecture, service principles and architecture frameworks?  
> &#8211; Are my services aligned with organization&#8217;s process and data architectures? Is my SOA aligned with business?  
> &#8211; Are my services ready for production? Can they provide the required SLA levels?  
> &#8211; How am I measuring the success of my SOA?

In the digital forces age, governance should be answering to below example questions

### Cloud Governance

> &#8211; What are the interfaces provided by the cloud applications to integrate my other on-premise and cloud applications? Do they conform to my security policies?  
> &#8211; Am I breaching any regulations when I migrate some data to cloud?  
> &#8211; What are the dependencies of my processes to cloud resources? Am I locked-in to cloud resources or are they switchable?  
> &#8211; Who are using cloud resources, who are the responsible owners and are we using those resources efficiently?  
> &#8211; What happens when an ad hoc cloud application (E.g. online survey, Campaign-Management-as-a-Service) is no longer used? Where the information goes?

### Big Data Governance

> &#8211; Is my organization aware calling it &#8220;Big Data&#8221; doesn&#8217;t save us from the liabilities of Data Governance at all?  
> &#8211; What are the dependencies between my Map-Reduce tasks and the structured/unstructured data resources?

### Mobile and Social Governance

> &#8211; What are the risks of opening organization&#8217;s functions to mobile and social? How can they be eliminated?  
> &#8211; Am I conforming to regulations?  
> &#8211; Which version of my APIs my mobile and 3rd party apps are using?  
> &#8211; Am I controlling my social presence correctly? Am I keeping records of my social media activities?  
> &#8211; Are my mobile and social innovation processes agile and fast enough?

<div align="center">
  <a title="At a station" href="http://www.flickr.com/photos/28481088@N00/2198983086/" target="_blank"><img title="At a station" alt="At a station" src="https://i0.wp.com/farm3.staticflickr.com/2271/2198983086_399499ac75.jpg?w=660" data-recalc-dims="1" /></a><br /> <small> <a title="tanakawho" href="http://www.flickr.com/photos/28481088@N00/2198983086/" target="_blank">tanakawho</a> via <a title="Compfight" href="http://www.compfight.com/">Compfight</a></small>
</div>

## Governance? Ain&#8217;t Nobody Got Time For That

So far we have seen that governance is almost synonym to successful implementation, especially in achieving complex goals. Still, one can see governance is not appreciated enough and mostly overlooked even by the passionate architects. Why governance is like a carbohydrate diet that everyone thinks it is necessary but often avoided?

  * Governance in itself is not creating any **short-term visible, immediate value**. It is not integrating system A to system B, it is not automating a business work-flow, it is not managing data transactions, etc. In plain, it takes a while to notice that it is not there.
  * For most people, it is an **ambiguous**, unamiable word. It is not &#8220;management&#8221;, it is not &#8220;administration&#8221;. **It can be nothing and it can be everything**. It is that unidentified vegetable in your exotic meal which you tend to leave it for later.
  * **Governance slows things down (period)**. Governance is like traffic lights. It helps you to travel safely but requires you to stop every now and then &#8211; and look around then take decisions.
  * Governance should be bound up to a bigger picture, to an ultimate goal. Each stakeholder should have a clear understanding of what organization is trying to achieve and should take the necessary actions and show the extra care to get close to the desired state. That mostly means extra effort and more responsibility.

## SOA as the Foundation

Before listing the lessons learned from SOA, and discuss how these lessons can lead to successful implementation of new digital forces, it&#8217;s worth noting that SOA still plays an essential role in laying a the groundwork for these new disruptive technologies. [Gartner&#8217;s VP and analyst Yefim Natis says](http://gtnr.it/13pi3Do), the first step in creating Nexus-ready Architectures is having a solid SOA backbone. Indeed, new technologies do not ease the problems of application silos, business and IT alignment and business agility, in fact they are adding new dimensions to them. This situation adds a premium value to the lessons learned from SOA as they will, for the most part, have a direct affect on the implementation quality.

<div align="center">
  <a href="https://i0.wp.com/soa-tr.com/wp-content/uploads/2013/07/Clipboard01.jpg"><img class="aligncenter size-full wp-image-250" alt="Nexus-ready Architecture Principles" src="https://i0.wp.com/soa-tr.com/wp-content/uploads/2013/07/Clipboard01.jpg?resize=622%2C397" width="622" height="397" data-recalc-dims="1" /></a><br /> <small>Nexus-ready Architecture Principles by Yefim Natis</small>
</div>

<a name="lessons-learned"></a>

## Lesson Learned

Finally, below is the list of lessons learned from successful and failed SOA initiatives. You can see that each lesson is somewhat connected to others.

#### 1. Always have a bigger plan &#8211; what is your strategy?

Embedding new technologies and approaches into the organization is mostly a lengthy, bumpy process. Organizations generally go through a set of programs, each is a combination of projects, to implement such technologies. It is quite common that such programs and projects are interrupted, put on hold or even canceled as business and organization&#8217;s priorities change. In order to maintain maximum efficiency in such uncertain times, it is crucial to have a long-term strategy on new technologies which will guide implementers when they encounter a disruption. I.e. the goal should not only be around delivering a project and creating some certain outputs, there should also be a strategic goal where implementers should try to get close.

#### 2. Top-level management commitment

Top level management mostly gets involved in the implementation process during the budgeting phase. They approve the budget and get back to their other duties until the next steering community meeting. Management should understand that embedding a disruptive technology into the organization is a strategic move. They should look at from a broader scale, be pro-active in guiding and governing the implementations to maximize the value to the organization, and to control the fitness of the solutions to organization&#8217;s long-term, strategic goals. They should define a disruptive technologies road map for the organization and actively claim the ownership of the road-map by showing necessary commitment and support.

#### 3. Communicate, communicate, communicate

Each stakeholder in implementation should have a clear understanding of what the organization is trying to achieve and what rules and policies they need to abide by in order to attain that goal. As a part of that, they should also have a complete notion on why those rules and policies are necessary. Similarly, rule and policy makers should be open to feedbacks from the field and amend rules and policies when required. This is only possible with functional communication throughout the team. Use posters, easy-to-understand guidelines and collaboration tools to communicate the goals, rules and policies. Make it clear to the team which communication channels they can use, and whom they can contact when they notice a discrepancy in the process.

#### 4. Deliver in small cycles, learn along the way

No matter how carefully you design an architecture, it will still be away from perfect. Besides, requirements and conditions that led your architecture might change in time and parts of your architecture might become obsolete. You might also recognize that your internal delivery processes are not effective enough or there might be things in the initial design which can be improved or there might be other changes within the organization some-way affecting your implementation. You should avoid long-term (> 6 months) delivery phases when you can and place review and amendment stages in between the delivery phases. You should make observing and learning an integrated task of the delivery, and provide means to gather feedbacks and metrics from the field to be used in the review stages.

#### 5. Create an organizational knowledge base

People come and go, sometimes along with the precious knowledge and experience. In today&#8217;s business, a very common practice is to use temps and off-shore teams in implementation. This method helps organizations to prevent making long-term investments into shorter term requirements, but also brings the risk of loosing the intellectual property created during the implementation. Organizations who want to protect their organizational memory should create knowledge base systems and provide means to enable and ease the contribution to the knowledge base. Suitably feeding the knowledge base should be a side-project in every implementation no matter if it is delivered by full-time employees or temps or off-shore development teams.

#### 6. It is a process, not a project, Own it

It takes a long-time for organizations to internalize new technologies, especially disruptive ones such as the cloud, and discover what they can do with it. Every implementation project along the way is a part of this change process. Organizations tend to miss this point and focus only on the outcomes of particular projects. This leads to disconnected milestones along the organization&#8217;s technology life cycle, which eventually reduces the total value.

#### 7. Put governance first

All above mentioned lessons point to a solid, end-to-end governance throughout the implementation which is an extension to a larger corporate governance. One common pitfall in SOA implementations is the propensity to leave governance for later. Architects and program/project managers think they will need SOA governance when they will actually have services. In fact, SOA governance is more than just a service registry, it is the combination of things which ensures the correct, most efficient and future-adaptive delivery of the services. Similarly, before commencing any significant implementation of disruptive technologies &#8211; e.g. starting a big data project, you got to make certain you have put a functional governance in place. You need to make sure you have clearly defined

> &#8211; A reference architecture visualizing the desired state  
> &#8211; Links between the long-term strategy goals and the implementation  
> &#8211; Functional and non-functional requirements  
> &#8211; Design and implementation principles  
> &#8211; Implementation rules and policies, change policies  
> &#8211; Roles and responsibilities  
> &#8211; Feedback and metrics gathering mechanisms  
> &#8211; etc.

### 8. Govern your governance

As we made it clear that governance is the key to any successful implementation, only a self-optimizing governance can provide the most efficient implementation. One of the traps in governance processes is applying the wrong level of governance. If organizations apply to much governance, implementers move towards to workarounds and bypass governance policies. If organizations apply too less governance, they loose the track of the implementation. There are also other aspects of governance which might also be improved. As they should do with their implementation processes, organizations should also keep an eye on their governance processes and make necessary amendments to achieve the most effective and fastest delivery.