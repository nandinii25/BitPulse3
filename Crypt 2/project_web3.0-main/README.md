# BitPulse

## Setup and Run
Download or clone this repository in your machine and run
1st step:
``` npm install ```

2nd step:
``` npm run dev```

## Prerequisites
### Node.js: 
Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It's built on the Chrome V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Node.js is commonly used for building server-side applications, APIs, and command-line tools. It enables developers to use JavaScript for both frontend and backend development, which can lead to more consistent and efficient codebases.

### In the context of our DApp:

#### Why Node.js is Required: 

Node.js is used to run the development server for your DApp, allowing you to serve your frontend interface, interact with Ethereum smart contracts, and manage other aspects of your application's functionality.

#### Package Management: 
Node.js comes with the Node Package Manager (NPM), which is a package manager used to install, manage, and share reusable JavaScript code. You use NPM to install the necessary libraries and packages for your project, such as React, Web3.js, and Hardhat.

### Hardhat: 
Hardhat is a development environment for Ethereum that provides tools for compiling, deploying, testing, and interacting with smart contracts.

### In the context of our DApp:

#### Smart Contract Deployment: 
Hardhat is used to compile and deploy the Transactions smart contract to the Ethereum network. The deploy.js script uses Hardhat to initiate the deployment process.

#### Testing: 
Hardhat can be used to write and run tests for your smart contracts, ensuring that they function correctly and securely. In your sample code, you have a test script named sampletest.js that uses Chai to write tests for the Greeter smart contract.

#### Local Development: 
During development, you can use the local development network provided by Hardhat to test your DApp's interactions with the smart contract without incurring real Ethereum transaction costs.

Both Node.js and Hardhat play crucial roles in the development of Ethereum-based applications like the Krypt DApp. Node.js provides the runtime environment, while Hardhat offers tools and capabilities specifically tailored for Ethereum smart contract development.


## Deploy Smart Contract
### 1. Navigate to the Contracts Directory 
Use your command-line interface (CLI) to change the current directory to the location where your transactions.sol file is located. This can be achieved using the cd command.The CLI commands would look something like this:
``` cd path/to/your/project/contracts ```

Replace path/to/your/project with the actual path to your project's root directory. Once you're in the correct directory, you'll be ready to work with the transactions.sol file, which contains the Solidity code for your smart contract.

### Edit the transactions.sol file: 
In this step, you're encouraged to edit the transactions.sol file. This file contains the Solidity code for your smart contract, which defines the behavior and logic of the contract. You might need to customize the contract's parameters, add additional functions, or modify existing ones based on your project's requirements.

To edit the file, you can use a text editor or an integrated development environment (IDE) that supports Solidity. Common text editors for Solidity development include Visual Studio Code with the Solidity extension, Remix IDE, and others.

Remember that any changes you make to the Solidity code will affect how the smart contract behaves when deployed and interacted with.

### Deploy the smart contract using Hardhat: 
This step involves using the Hardhat development environment to deploy your smart contract to the Ethereum blockchain. Here's a more detailed breakdown of the process:

#### npx: 
The npx command is used to run CLI tools that are not globally installed on your system. It's part of the Node.js ecosystem and ensures that the required tool is executed from the correct context.

#### hardhat: 
This is the CLI command for using the Hardhat development environment. By running npx hardhat, you're invoking Hardhat's commands to perform various tasks related to Ethereum development.

#### run scripts/deploy.js: 
This part specifies that you want to execute the deploy.js script located in the scripts directory of your project. The script contains the logic for deploying the smart contract to the Ethereum network.

#### The Deploy Script: 
The deploy.js script is responsible for interacting with Hardhat's APIs to compile and deploy the smart contract. Inside this script, you'll find code that connects to an Ethereum network, compiles the contract, and deploys it. It also displays information about the deployed contract, such as its address.

When you run the npx hardhat run scripts/deploy.js command, it initiates the deployment process according to the instructions provided in the deploy.js script. After successful execution, the smart contract will be deployed to the Ethereum network, and you'll receive information about its address and other relevant details.

Remember to customize the deployment script as needed to match your specific smart contract's requirements and the Ethereum network you want to deploy to.

## Run the DApp
### Navigate to the src directory: 
When you're instructed to "Navigate to the src directory," it means you need to use your command-line interface (CLI) to change the current directory to the location where your frontend code is located. This typically includes HTML, CSS, JavaScript, and other assets related to your DApp's user interface.

The command to navigate to the src directory would look like this:
cd path/to/your/project/src
Replace path/to/your/project with the actual path to your project's root directory. Once you're in the src directory, you'll be ready to work with your DApp's frontend code.

### Edit the main.jsx file: 
In this step, you're encouraged to edit the main.jsx file. This file likely contains the main JavaScript code for your DApp's frontend user interface, including React components and other UI-related logic.

You might want to modify this file to customize the appearance, behavior, or functionality of your DApp. You could add new components, adjust styling, implement user interactions, or connect to your smart contract using libraries like Web3.js or Ethers.js.

Editing the main.jsx file allows you to shape your DApp according to your preferences and requirements.

### Start a local development server: 
By executing the npm start command, you initiate a local development server that hosts your DApp. This server serves your frontend code to your web browser, allowing you to interact with your DApp in a controlled environment.

Starting the local development server also triggers processes like compiling React components, bundling JavaScript files, and updating your browser in real-time as you make changes to your code. This makes the development and testing process smoother and more efficient.

### Open the DApp in your web browser: 
After starting the local development server, you can access your DApp by typing http://localhost:3000 into your web browser's address bar. This URL points to the local server that is hosting your DApp.

When you hit Enter, your browser will load and display your DApp's user interface. This allows you to see how your DApp looks and behaves in a web browser, just like how users would interact with it online.

As you make changes to the main.jsx file or other related files, the local development server will automatically update the browser, reflecting your changes in real-time. This immediate feedback helps you iterate and refine your DApp's design and functionality.

By following these steps, you can effectively run and test your DApp's frontend on your local machine. It's important to customize the main.jsx file according to your DApp's requirements and ensure that the local development server is running as you work on your project.

## Technologies Used
### Solidity: 
Solidity is a high-level programming language designed specifically for writing smart contracts on the Ethereum blockchain. It's statically typed and supports inheritance, libraries, complex user-defined types, and more. Solidity code defines the rules and behavior of your smart contract. Smart contracts written in Solidity are compiled into bytecode that can be executed on the Ethereum Virtual Machine (EVM).

In the context of the Krypt DApp:

Usage: The transactions.sol file contains Solidity code that defines the Transactions smart contract. It specifies the functions, data structures, and events that control how transactions are executed and recorded on the Ethereum blockchain.

### Hardhat: 
Hardhat is a powerful development environment for Ethereum smart contract development. It provides tools and utilities to streamline various aspects of the development lifecycle, such as contract compilation, deployment, testing, and scripting.

In the context of the Krypt DApp:

Role: Hardhat is used to compile the Solidity code, deploy the smart contract to the Ethereum blockchain, and write tests to ensure the correctness of the contract's behavior.

### React: 
React is a JavaScript library for building user interfaces. It's particularly well-suited for creating dynamic and interactive web applications. React introduces the concept of reusable components that encapsulate UI elements and their behavior.

In the context of the Krypt DApp:

Frontend: React is used to build the frontend of the DApp. It allows you to create a modular and organized user interface. Components can be reused, and React's state management enables efficient updates to the UI as data changes.

### Web3.js: 
Web3.js is a JavaScript library that provides an interface for interacting with the Ethereum blockchain. It enables communication between your DApp's frontend and the Ethereum network, allowing you to read data from and send transactions to the blockchain.

In the context of the Krypt DApp:

Blockchain Interaction: Web3.js is used to connect the React frontend to the Ethereum blockchain. It facilitates functions like fetching data from the Transactions smart contract, sending transactions, and listening for events emitted by the contract.

### Chai: 
Chai is an assertion library for writing tests in JavaScript. It provides various styles of assertions, allowing you to express expected behavior and outcomes in a human-readable manner.

In the context of the Krypt DApp:

Testing: Chai is used to write tests that validate the behavior of the smart contract. Test cases using Chai ensure that the smart contract's functions perform as expected and that the emitted events are accurate.

### Ethers.js: 
Ethers.js is another JavaScript library for interacting with the Ethereum blockchain. It offers a clean and simple API for working with Ethereum accounts, transactions, contracts, and more.

In the context of the Krypt DApp:

Alternative to Web3.js: Ethers.js serves a similar purpose to Web3.js, providing an alternative library for connecting the DApp frontend to the Ethereum blockchain. It can be used to perform actions like sending transactions and querying smart contract data.

### HTML/CSS: 
HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures the content on a webpage using elements like headings, paragraphs, links, and more.

CSS (Cascading Style Sheets) is used to control the presentation and layout of HTML elements. It defines the styling, colors, fonts, and spacing of elements on a webpage.

In the context of the Krypt DApp:

Web Page Structure: HTML is used to structure the content of the DApp's web pages, defining elements like headers, text, and forms.
Styling: CSS is used to style these HTML elements, determining how they look and are positioned on the page.
These technologies collectively enable you to create a functional and user-friendly decentralized application. They cover the full spectrum of smart contract development, frontend design, interaction with the blockchain, and testing to ensure the reliability of your application.

## Design Choices
### Smart Contract Structure: 
Smart Contract Structure refers to the way the Transactions smart contract is organized to achieve its intended functionality. In the Krypt DApp, the smart contract is designed to facilitate transactions between users. Here's a more detailed explanation:

#### Transaction Data: 
The smart contract maintains a structured data format for each transaction. This includes the sender's and receiver's Ethereum addresses, the transaction amount, a message associated with the transaction, a timestamp indicating when the transaction occurred, and a keyword associated with the transaction.

#### Struct: 
The use of a TransferStruct struct in the smart contract allows all these data points to be organized and stored together for each transaction.

#### Transaction Count: 
The smart contract keeps track of the total number of transactions that have occurred. This count can be used to provide insights into the usage and activity of the DApp.

This structured approach to storing transaction data makes it efficient to retrieve and manage information about transactions on the Ethereum blockchain.

### Event Emission: 
Event Emission involves emitting an event from the smart contract whenever a significant action occurs. In the Krypt DApp's Transactions smart contract, a Transfer event is emitted whenever a new transaction is added. Here's why event emission is important:

#### Real-time Notifications: 
Emitting a Transfer event allows the frontend of the DApp to be notified in real time whenever a new transaction is executed. This means that users of the DApp can see updates without needing to manually refresh the page.

#### Decoupled Communication: 
Events enable decoupled communication between the smart contract and the frontend. The smart contract emits an event, and the frontend listens for these events. This separation of concerns allows for a more modular and scalable architecture.

#### Historical Data: 
Events can also be used to maintain a historical record of significant actions. In the case of the Transfer event, it provides a way to track and record the details of each transaction over time.

### Frontend Interface: 
Frontend Interface refers to the user interface (UI) that users interact with when using the DApp. In the Krypt DApp, the frontend is built using React to provide a user-friendly and dynamic experience. Here's more about the frontend design:

#### User Interaction: 
The frontend allows users to initiate transactions. Users can specify the receiver's address, the amount to be sent, a message, and a keyword for the transaction.

#### Transaction History: 
The frontend also provides a way for users to view all past transactions. This gives users visibility into the transactions they have made, enhancing transparency.

#### Total Transaction Count: 
Displaying the total count of transactions on the frontend gives users an overview of the DApp's usage and activity.

React's component-based structure makes it easier to manage various parts of the UI, and its state management capabilities ensure that the interface remains responsive and up-to-date with the latest transaction data.

### Testing: 
Testing is a critical aspect of software development to ensure that code behaves as expected and to catch potential bugs before they impact users. In the Krypt DApp, both the smart contract and the frontend are tested using Chai and Hardhat's testing tools. Here's why testing is essential:

#### Smart Contract Verification: 
Testing the smart contract using Chai helps verify that the functions defined in the contract work as intended. This includes validating that transactions are executed correctly and that events are emitted accurately.

#### Frontend Behavior: 
Testing the frontend ensures that user interactions trigger the expected behavior. For instance, testing can verify that submitting a transaction form updates the transaction history as expected.

#### Preventing Bugs: 
Comprehensive testing reduces the risk of releasing code with critical bugs or vulnerabilities. It improves the reliability of the DApp and the user experience.

By using Chai and Hardhat's testing capabilities, the development team can automate the verification of the smart contract's behavior and the frontend's interactions, leading to a more robust and reliable application.