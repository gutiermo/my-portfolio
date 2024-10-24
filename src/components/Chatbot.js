import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#00B2B2',
        headerFontColor: '#fff',
        headerFontSize: '20px',
        botBubbleColor: '#00B2B2',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    const steps = [
        {
            id: '1',
            message: 'Hello! How can I assist you today?',
            trigger: '2',
        },
        {
            id: '2',
            options: [
                { value: 'about', label: 'Who are you?', trigger: '3' },
                { value: 'projects', label: 'What are your projects?', trigger: '5' },
                { value: 'skills', label: 'What are your skills?', trigger: '7' },
                { value: 'contact', label: 'How can I contact you?', trigger: '9' },
                { value: 'bye', label: 'Goodbye', trigger: '10' },
            ],
        },
        {
            id: '3',
            message: 'I am Moises Francisco Gutierrez Morel, a passionate IT student specializing in web development and programming.',
            trigger: '4',
        },
        {
            id: '4',
            options: [
                { value: 'back', label: 'Go back', trigger: '2' },
                { value: 'bye', label: 'Goodbye', trigger: '10' },
            ],
        },
        {
            id: '5',
            message: 'My recent projects include a personal portfolio website, a Tic Tac Toe game with a Dragon Ball theme, and a Checkers game. Would you like to know more about a specific project?',
            trigger: '6',
        },
        {
            id: '6',
            options: [
                { value: 'portfolio', label: 'Portfolio Website', trigger: '11' },
                { value: 'tictactoe', label: 'Tic Tac Toe Game', trigger: '12' },
                { value: 'checkers', label: 'Checkers Game', trigger: '13' },
                { value: 'back', label: 'Go back', trigger: '2' },
            ],
        },
        {
            id: '11',
            message: 'You can view my portfolio website [here](https://your-portfolio-link.com).',
            trigger: '4',
        },
        {
            id: '12',
            message: 'Check out my Tic Tac Toe game [here](https://obi2.kean.edu/~gutiermo@kean.edu/game1.html).',
            trigger: '4',
        },
        {
            id: '13',
            message: 'You can play my Checkers game [here](https://obi2.kean.edu/~gutiermo@kean.edu/game4.html).',
            trigger: '4',
        },
        {
            id: '7',
            message: 'I am skilled in HTML, CSS, JavaScript, React, and Node.js. I also have experience with web development frameworks like Bootstrap.',
            trigger: '4',
        },
        {
            id: '9',
            message: 'You can contact me through LinkedIn, GitHub, or via email at gutiermo@kean.edu.',
            trigger: '4',
        },
        {
            id: '10',
            message: 'Goodbye! Have a great day!',
            end: true,
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
        </ThemeProvider>
    );
};

export default Chatbot;
