import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
const Test = () => {
    const [messages, setMessages] = useState([
        {
            message: 'Salut cava ! Je suis un modèle AI  ',
            sender: 'chatGPT',
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing'
        }

        //update our messages state
        setMessages([...messages, newMessage])
        //Process message to chatGPT

    }
    return (
        <div>
            <h1 className='fs-1 text-danger text-center'>Test</h1>
            <div style={{ height: '400px' }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList>
                            {messages.map((message, index) => (
                                <Message key={index} model={message} />
                            ))}
                        </MessageList>
                        <MessageInput placeholder='nouveau message ' onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
};

export default Test;