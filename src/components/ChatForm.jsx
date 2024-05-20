import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
const ChatForm = () => {
    const [messages, setMessages] = useState([
        
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

export default ChatForm;