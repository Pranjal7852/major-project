# Land Registry Application using Ethereum Blockchain

<h2 align="center">Home Page</h2>
<p align="center">
  <img src="https://github.com/arajshow/major-project/blob/dev/src/images/readME-images/home-page.jpeg?raw=true" alt="Home Page" />
</p>

## Other Pages

| Registration Page | User Profile |
| --- | --- |
| <p align="center"><img src="https://github.com/arajshow/major-project/blob/dev/src/images/readME-images/registration-page.jpeg?raw=true" alt="Registration Page"/></p> | <p align="center"><img src="https://github.com/arajshow/major-project/blob/dev/src/images/readME-images/profile-section.jpeg?raw=true" alt="User Profile" /></p> |

| Ganache Dashboard Showing Land Contracts | User Wallet |
| --- | --- |
| <p align="center"><img src="https://github.com/arajshow/major-project/blob/dev/src/images/readME-images/Ganache-dashboard.jpeg?raw=true" alt="Ganache Dashboard" /></p> | <p align="center"><img src="https://github.com/arajshow/major-project/blob/dev/src/images/readME-images/user-wallet.jpeg?raw=true" alt="User Wallet" /></p> |


## Abstract

In the present time, when the cases of fraud documents and con activities are rapidly increasing because of the lengthy and difficult documentation procedure of this conventional technique, the traditional land registration system fails to deliver the sense of security and confidence to its users i.e. the Public. To overcome this chain of fraudry, there was a need for a secure, easy to use yet feasible technology to be brought into use. This is when Blockchain Technology, the maester of new generation internet based services comes into play.

Blockchain technology is a technique that uses a principle of distributing the transactions that are recorded over it into a wide network of computers. This technology makes it possible for the information to be prevented from being manipulated, corrupted and altered. The use of blockchain technology to build a decentralised, trustworthy, and transparent land registration system is the solution put out to address these problems. Land record security and accuracy can be improved by using the blockchain paradigm, which provides an immutable, decentralised public ledger. Eliminating intermediaries allows the blockchain land registry platform to expedite property ownership certification, lower fees, and shorten the land registration process. 

This report revolves around the main goal to investigate how blockchain technology may be used for land registration. Specifically, it will look at how blockchain technology might be used to maintain land ownership records, stop fraud, and make ownership transfers easier by using smart contracts and cryptographic methods. The security, transparency, and efficiency issues that traditional land registration systems confront will become the reason for updating in the system with the blockchain technology as its implementation might help with these issues by offering a transparent and safe land registration system.


## Technologies Used

- ReactJS
- NodeJS
- MongoDB
- Solidity
- IPFS

## Prerequisites

#### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs.

#### Install Ganache
Refer to https://www.trufflesuite.com/ganache to install Ganache.

#### Install Truffle
Install truffle npm package globally. Use the following command to install truffle
`$ npm install -g truffle`

#### Install Metamask Chrome Extension
Refer to https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en to download the extension.

#### Make an account on MongoDB Altas
https://www.mongodb.com/cloud/atlas

#### Create an account on Vonage (Previously Nexmo)
https://dashboard.nexmo.com/sign-up

## Getting Started
To set up the project, go along with the following steps:-
- Clone the repository. <br/>
`$ git clone https://github.com/1209simran/Land-Registry-Application.git`
- Go to the directory with the repository. <br/>
`$ cd folder_name`
- Run **npm install** (or **yarn install** if you use yarn) to download the npm packages. <br/>
`$ npm install`
- Open Ganache.
- Run **truffle compile** to compile the truffle project. <br/>
`$ truffle compile`
- Run **truffle migrate** to deploy the contracts. <br/>
`$ truffle migrate`
- Run **npm start** to start the project. <br/>
`$ npm start`
- Open another terminal and navigate to the **Server** folder. <br/>
`$ cd Server`
- Run **npm install** (or **yarn install** if you use yarn) to download the npm packages. <br/>
`$ npm install`
- Navigate to the **backend** folder then to the **Config** folder. <br/>
`$ cd backend/Config`
- Change the credentials of **db_config.js** .
- Run the server using this command:- <br/>
`$ npm start`
- Open another terminal and execute the following command to add the government registrar detail to the database. <br/>
`$ curl -X POST http://localhost:3001/register_govt`
- Credentials for government login:- <br/>
Username:- Delhi Government <br/>
Password:- Delhi
- You're all done. Enjoy!

## Workflow
#### Registration of users and property
- Visit http://localhost:3000/signup to register on the platform. On clicking the submit button, user will be redirected to the login page.
- To login, user must provide their private key.
- To register the property, choose **Register Land** tab from the dashboard and fill all the details related to the property and owner.  After submitting the form user's application is then verified by the government authority.

#### Validation from government authority
- In this step, government authority audits the user's land details and has the right to approve or decline their application.
- During the time of Registration of land, users have to upload the legal documents of land so that the government and the buyer can verify it. If rejected, the user has to submit a new application, and it cannot be available for other users to buy. And if it gets accepted, then the owner of the land has the option to make their land available to sell.
- There is an amazing feature, as and when Government accepts or rejects the request, a notification will be sent to the user through mail and SMS. NEXMO API and Nodemailer API are used to for sending notifications. Through this user can get the status of their application on their phone and mail and do not have to check the account again and again.

#### Transaction between both the parties
This step has several stages involved. There is no intermediary in between, and there is no need for any central authority to verify the transaction process. The owner of land can sell the land as a whole means there is no partial transaction. Following are the steps required:-
- **Making the land available**
Once the Government is approving it, the landowner has the option to make their land available to other users.
- **Sending request to the landowner to purchase**
When the land is available to buy, the buyer moves toward their dashboard, and in the available properties section, they search for the property and send a request to the landowner to buy it.
- **Viewing the request**
Land proprietor views the buyer's requests and after communicating with them, plans whether to allow them to buy the land or not. They have the option to accept or decline the request.
- **Processing the request**
Once the landowner views the requester address and if it founds to be the right one, then the seller accepts the request.
- **Buying the property**
Once the request is approved, the buyer can now buy the property. If approved, then the amount of the property gets deducted from the buyer's account, and the amount is transferred to the land owner's account. They can check their wallet by viewing their profile. After a successful transaction, ownership of the previous landowner from the asset's list will be removed.



The whole process is conducted in the form of the smart contract, which ensures that the process is immutable, secured and digitized. No one in between can tamper the data, and authenticity is maintained throughout the process. There is no human error involved. Paperwork will be reduced, and most importantly, everything will become transparent. Chances of fraud cases will get reduced. The public ledger can be used in case there is any doubt regarding the land ownership claim. The documents are digitally signed, which leads to the transfer of land title upon payment in cryptocurrency.

## Contributors


- [<img src="https://avatars.githubusercontent.com/Pranjal7852" width="50" style="border-radius:50%">](https://github.com/Pranjal7852) [@Pranjal7852](https://github.com/Pranjal7852)
- [<img src="https://avatars.githubusercontent.com/arajshow" width="50" style="border-radius:50%">](https://github.com/arajshow) [@arajshow](https://github.com/arajshow)
- Garv Agarwal
- Yash Mittal



