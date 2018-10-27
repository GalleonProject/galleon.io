---
permalink: /docs/en/vision
key: vision
title: A Mechanism Design Approach for A Decentralized Review Platform
excerpt: >
  Galleon, a decentralized review platform, aims to increase accuracy of the information on the Internet by blockchain technology and token incentive mechanism.
aside:
  toc: true
---

###### ACCURACY OF INFORMATION

Nowadays we have huge amount information on the Internet such as blog, news, Q&A website, SNS and so on. But do you think that information is really accurate? We know many cases that information was fraud or mistaken.

Galleon, a decentralized review platform, aims to increase accuracy of the information on the Internet powered by blockchain technology and token incentive mechanism. The idea is very simple. You can get Galleon token when you post issue and reviewers judge that as being accurate. Then, we get fact, accuracy-secured information, as a result of the review. Doing review is not easy work and there is no doubt that accuracy is value. A financial value of the token comes from this added value. So, Galleon token works as monetary incentive.

Galleon can make some of information on the Internet more accurate. This opens new era of information sharing on the Internet.

## Philosophy
###### MAKE THE WORLD FAIR PLACE

Public, permissionless blockchains are dependent for their security and reliability on their mechanism design. We believe Cryptoeconomics technology can make the world fair place.

On the Internet, we cannot confirm the reliability of almost all information. We think that there are many areas where needs accurate information on the Internet. The decentralized review process could be one of the ways to assure reliability. People have contributed for free so far on the Internet, but people should be able to receive rewards for intellectual contribution on the future.

We believe a mechanism design approach can achive this as sustainable platform while producing value of trust continuously.

## Goals

Galleon provides a community based venue for proposing and discussing new decentralized review plaftorm features.
Each proposal will be discussed in its own repository within the GitHub account. Membership of the group is open to everybody.

## Scope of Work

The Community Group will accept and discuss any proposal for a decentralized review platform feature that would be used from a browser or similar user agent.
The Community Group will also develop and maintain SmartContracts and SDK for 3rd party developers.

## Architecture
###### HOW TO INTEGRATE

![Galleon Platform and Applications]({{ site.url }}/assets/images/docs/platform_and_applications.png)

Galleon Platform is built as SmartContracts on the public blockchain Ethereum and provides SDK for 3rd party developers. By using the SDK, Developer can easily connect their site with our SmartContracts.

#### At a high-level, the operations provided by the Kernel Contracts are:

* **A consensus algorithm for finalize review process.**

* **A mechanism for evaluating player's contribution score.** The platform can secure the accuracy of any kinds of information by putting review scores based on byzantine fault tolerant review mechanism which is explained in following section, and that is most innovative point of Galleon.

* **A mechanism for reputation score.** Creators who continuously generate correct contents and reviewers who repeatedly do correct review can get high incentives. The others cannot get such high incentives. By this design will be able to refresh by itself and only correct contents are remained on this platform because only good creators and reviewers will be there. This contributes reducing attacks and  sustainability.

* **A mechanism for matching issue and reviewer.**

* **A mechanism for minting token.**

* **A method for assuring tamper proof and traceability of information.**

* **A method for transfering rewards.**
