import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMessagePropsT ={
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsT ) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    alt={"Ava"}
                    //
                />
                <div className={s.block}></div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <div>{props.message.user.name}</div>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <div>{props.message.message.text}</div>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <div>{props.message.message.time}</div>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
