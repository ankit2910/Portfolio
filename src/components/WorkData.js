import proj1 from '../images/ExpTra.png';
import proj2 from '../images/ChatApp.jpeg';
import proj3 from '../images/CrowdFunding.jpeg';

const projectCardData = [
    {
        imgsrc: proj3,
        title: "CrowdFunding Platform",
        text: "Developed a seamlessly connected blockchain using Solidity and metamask pairing, while integrated a user‐friendly interface with Vite and Tailwind CSS. Successfully deployed secure smart contracts on the Ethereum blockchain using ThirdWeb for transparent fundraising and fund distribution.",
        view: "https://64c2417a52554300b1c43cbc--superlative-kataifi-47c6d2.netlify.app/"
    },
    {
        imgsrc: proj2,
        title: "Chatting Web App",
        text: "User can have one to one or group chat. Implemented NodeJS, React, Express and Socket.io for real time communication to achieve bi-directional flow of messages between client and server and stores user details in encrypted format in Mongo DB Database.",
        view: "https://chit-chat-gjue.onrender.com/"
    },
    {
        imgsrc: proj1,
        title: "Expense Tracker",
        text: "It will keep track of income and expense and display transactions items in the DOM. It shows balance, expense and income total and can also add new transactions which reflects in total. We can add or remove items and save to local storage.",
        view: "https://github.com/ankit2910/Expense-Tracker"
    },
    
];

export default projectCardData;