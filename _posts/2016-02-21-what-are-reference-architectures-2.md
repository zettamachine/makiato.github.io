---
layout: post
title: So, What is a Reference Architecture?
author: Mehmet Akyuz
categories:
- enterprise architecture
tags:
- digital transformation
- digital thinking
- enterprise architecture
- design thinking
headshot: "/images/blog/reference.architecture.jpg"

---
This is not a blog post about an emerging technology or a hot off the press IT trend, but just some notes about one of the pillars of every successful architecture work: Reference Architectures. This one explains what reference architectures are and why and how they are used in solution architectures.

<!--more-->

## Overview

Reference Architectures are template architecture blueprints for solution designing. They can also come into your way under different names, such as:

* Reference Architecture Framework
* Industry Reference Framework
* Industry Model
* Reference Model
* Capability Model

Reference Architectures provide pre-designed architecture elements which can be further customized into a desired solution. They can be created internally by a governing body within the organisation. They are also offered by non-profit standards organizations and also by commercial solutions providers. Vendors provide reference architectures in order to support their product portfolio, and to encourage customers by guiding them on the proper usage of the offered solutions.

## Types of Reference Architectures

Reference Architectures come in different scopes and contexts:

* **Industry Focused:** This type of Reference Architectures provide a reference model for an industry. E.g. [BIAN](http://bian.org/) for the Banking industry, [TM Forum Frameworx](https://www.tmforum.org/TMForumFrameworx/1911/home.html) for the Telco industry.
* **Business Domain Focused:** This type of Reference Architectures provide a reference model for a particular business domain. E.g. [SCOR](http://supply-chain.org/scor) for Supply Chain Management.
* **Architecture Type Focused:** This type of Reference Architectures provide a reference model for solution realization. E.g. [OASIS SOA Reference Model](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=soa-rm).
* **Generic:** This type of Reference Architectures provide reference models to be used across different industries. E.g. [APQC Process Classification Framework](http://www.apqc.org/process-classification-framework).

## Components of a Reference Architecture

Reference Architectures usually come as a set of linked architecture diagrams. Commonly the diagrams are supported with documents, images, posters and best practice whitepapers. Some models also provide XML schemas of the models which then can be imported into modeling and/or development tools.

Some reference architectures focus only on a particular aspect of a solution while others provide an end-to-end view. For instance, [ACORD](https://www.acord.org/standards/Framework/Pages/default.aspx) is a data architecture model for the insurance industry while [IAA](http://www-01.ibm.com/support/knowledgecenter/SSCNZQ_7.0.0/com.ibm.ws.icp.insp_cfep1.doc/ins/pc/p_cdev/concept/ci/indstds/c_iaa.html?lang=en) is an insurance industry focused model providing Business, Application, Information and Integration architectures. Below is a list of common components of a reference architecture

| Architecture Type | Description | Common Modeling Standards |
| --- | --- | --- |
| Business Architecture | These architectures mainly focus on the business processes. They depict a hierarchical view of the processes in a particular business area. Some also provide additional models for business terms, organizational structures, organizational skills etc. | BPMN, UML Activity Diagrams, Organization Charts |
| Information and Data Architecture | These architectures provide a hierarchical model of the information and data elements. They are also known as Common Information Models or Canonical Data/Information Model. | UML Class Diagrams, Entity Relationship Diagrams |
| Application Architecture | These architectures describe the functions and/or capabilities required from the applications to support business. | UML Component Diagrams. |
| Integration Architecture | Mostly aligned with the Information Architecture, these architectures describe interfaces to exchange information among systems. | WSDL, XML Schemas |

## Benefits – Why Use a Reference Architecture?

Below table lists the benefits of using a reference architecture with examples.

| Task | Example |
| --- | --- |
| Solution Design | You are creating a price management application for the retail industry, and you need to design a data model for your application. You can start with the ARTS Operational Data Model > Price Management reference architecture as a template saving you loads of time and potentially saves you from interminable architectural discussions as it’s an industry standard model. |
| Project Scoping and Roadmapping | Your Telco client thinks their resource and asset management processes are inefficient. Every time they need to change a step in the process or add a new asset type to their portfolio, it takes them a significant amount of effort to implement the change. You are asked to implement an agile resource management operation for the client. You can use TM Forum Business Process Framework (a.k.a. eTOM) to understand the processes and their relationship within that particular business area. You can decide which processes to embark on and which processes to leave out of the scope. Hierarchical structure of the eTOM would also help you with right granulation of automated processes and process services. |
| Ensuring Interoperability | For an insurance client, you are asked to integrate SAP with the new claims management system. Each system has its own data meta-model and you also know there will be new systems coming in to the integration. You decide that you will need a canonical data model to be used on the integration platform. You can use ACORD Information Model or OAGIS to build your canonical data model. |
| Governance | Your client in the electric utilities industry has a governance body (E.g. ICC) responsible for managing SOA transformation and they have difficulties in managing service granularity, service classification and discovery, alignment to business context etc. You are asked to advise your client on the best practices on aforementioned topics. Your client can use APQC > Electric Utilies Process Classification Framework to classify their business services. Also they can use IEC 61970 Canonical Information Model to design service data objects ensuring alignment to business context. |

***

Photo by **Pixabay** from [**Pexels**](https://www.pexels.com/photo/architect-architecture-artist-blur-268362/)