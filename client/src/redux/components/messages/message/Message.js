import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

function Message({message: {user, text}, name}) {
    // let isSentByCurrentUser = false

    const trimName = name.trim().toLowerCase()

    return (
            user === trimName ? (
                <div className="messageContainer">
                    <p className="sentText">{trimName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            ) : (
                <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
            )
    )
}

export default Message