---
id: 197
title: Monitoring SOA Critical Success Factors
date: 2013-01-28T14:58:34+00:00
author: Mehmet Akyuz
layout: post
guid: /2013/01/28/soa-success-factors/
permalink: /2013/01/28/soa-success-factors/
tags:
  - soa
  - soa critical success factors
  - soa governance
  - soa success
  - soa success factors
---
<img alt="Screen Shot 2013-10-06 at 7.58.45 PM" src="/images/insights/Screen-Shot-2013-10-06-at-7.58.45-PM.png" width="558" height="406" />

Apart from tracking dependencies between SOA elements and managing the service life cycle, one of the indispensable tasks of SOA Governance is to control and manage SOA success. Successful implementation of a service architecture can be measured via certain indicators, also known as the [Critical Success Factors](http://en.wikipedia.org/wiki/Critical_success_factor) (CSF). Every SOA adoption initiative should incorporate a step, ideally right before the architecture blueprinting phase, where unique success factors regarding the adoption are defined. This step should also outline the tools and techniques to be used in monitoring the success factors and together they should form the CSF Specification. CSF Specification could also be refined and improved throughout the adoption process to conform with common Enterprise Architecture(EA) practices.

Below, you can see a list of generic SOA CSF, with hints on how they can be monitored with SOA Governance:  

  * **Alignment with Business**  
    For a SOA implementation to deliver the business benefits and expected ROI, it has to provide business services aligned with business processes. This alignment can be monitored with design-time policies and service classifications based on business process frameworks. E.g. a Telco company can use [TM Forum Business Process Framework](http://www.tmforum.org/BusinessProcessFramework/1647/home.html) (eTOM) to classify its business services (A business service classified under the category of &#8220;eTOM > Operations > Resource Management and Operations > Resource Provisioning&#8221;).
  * **Re-usability & Conformance to Architecture Blueprint**  
    High re-usability of services is critical in achieving SOA success. To increase re-usability of services while keeping the complexity of SOA at minimum, architecture blueprints should define service design principles, technology standards, common business and technology terminology, canonical information models, reference architecture and so on. Monitoring conformance to these architectural artefacts can be attained with the help of design-time policies along with associations of services to architectural artefacts in the SOA Governance Registry and Repository. E.g. A design-time policy where a service is reviewed and approved by an Enterprise Architect.
  * **Business Agility**  
    Enabling business agility is one of the key success factors for SOA. Business agility can be achieved with shorter development cycles, shorter change management cycles, and lower development and integration costs and also with right service design. To monitor development cycles and costs, SOA Governance Registry and Repository can be enriched with new asset types and attributes. E.g. a Project asset with attributes, project start date, project finish date, project cost, number of re-used services, number of new services etc.
  * **Sustainable Service Architecture**  
    SOA implementation is not a one-time project but an ongoing process constantly aiming to achieve better business agility with lower IT costs. To sustain successful service architecture, it is essential to keep an updated record of design and implementation artefacts. SOA Registry and Repository can provide a central repository for storing artefacts, and design-time policies can ensure the timeliness of the repository. E.g. a design-time policy which only allows a service to go into test if right documentation is in place and stored in the repository.
  * **Readiness for Production**  
    Services should be ready to handle the production load. Production conditions such as average number of requests, peak usage hours, average message size, minimum response time, required availability should be specified in Service Contract artefacts and these contracts should be attached to Services. To monitor the readiness for production, a design time policy which compares service test results against the conditions in the service contract can be used. This policy can also be supported by an approval workflow.