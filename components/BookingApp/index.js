import React from "react";
import styles from './style.module.scss';

const BookingApp = () => {
    return (
        <div className={styles.bookingApp}>
            <div className={styles.appWrapper}>
                <TitleBar/>
                <Chat/>
            </div>
        </div>
    );
};

const TitleBar = () => {
    return (
        <div className={styles.titleBar}>
            <button className={styles.backButton}
                    aria-label={'back'}
            />
            <div className={styles.userContainer}>
                <img className={styles.avatar}
                     src={'/img/avatar.jpg'}
                     alt={''}
                />
                <div className={styles.userInfoContainer}>
                    <div className={styles.username}>
                        Samuel Green
                    </div>
                    <div className={styles.status}>
                        Available to Walk
                    </div>
                </div>
            </div>
            <button className={styles.moreButton}
                    aria-label={'more'}
            >
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
            </button>
        </div>
    );
};

const Chat = () => {
    return (
        <div className={styles.chat}>
            <ul className={styles.chatList}>
                <li style={{
                    '--delay': '1.5s',
                    '--direction': 'left',
                }}>
                    <div className={styles.otherChatBubble}>
                        That sounds great. I’d be happy to discuss more.
                    </div>
                </li>
                <li style={{
                    '--delay': '3s',
                    '--direction': 'left',
                }}>
                    <div className={styles.otherChatBubble}>
                        Could you send over some pictures of your dog, please?
                    </div>
                </li>

                <li></li>

                <li className={styles.me}
                    style={{
                        '--delay': '4.5s',
                        '--direction': 'right',
                    }}
                >
                    <div className={styles.imageContainer}>
                        <img className={styles.image}
                             src={'/img/dog-image-1.jpg'}
                             alt={'dog-image-1.jpg'}
                        />
                        <img className={styles.image}
                             src={'/img/dog-image-2.jpg'}
                             alt={'dog-image-2.jpg'}
                        />
                        <img className={styles.image}
                             src={'/img/dog-image-3.jpg'}
                             alt={'dog-image-3.jpg'}
                        />
                    </div>
                </li>
                <li className={styles.me}
                    style={{
                        '--delay': '5.5s',
                        '--direction': 'right',
                    }}
                >
                    <div className={styles.meChatBubble}>
                        Here are a few pictures. She’s a happy girl!
                    </div>
                </li>
                <li className={styles.me}
                    style={{
                        '--delay': '7s',
                        '--direction': 'right',
                    }}
                >
                    <div className={styles.meChatBubble}>
                        Can you make it?
                    </div>
                </li>

                <li></li>

                <li className={styles.otherChatBubble}
                    style={{
                        '--delay': '8.5s',
                        '--direction': 'left',
                    }}
                >
                    She looks so happy! The time we discussed works. How long shall I take her out for?
                </li>

                <li style={{
                    '--delay': '9.5s',
                    '--direction': 'left',
                }}>
                    <button className={styles.actionButton}>
                        <span className={styles.activity}>
                            30 minute walk
                        </span>
                        <span className={styles.price}>
                            $29
                        </span>
                    </button>
                </li>
                <li style={{
                    '--delay': '9.5s',
                    '--direction': 'left',
                }}>
                    <button className={styles.actionButton}>
                        <span className={styles.activity}>
                            1 hour walk
                        </span>
                        <span className={styles.price}>
                            $49
                        </span>
                    </button>
                </li>
            </ul>
            <Input />
        </div>
    );
};

const Input = () => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.placeholder}>
                Type a message...
            </div>
            <button className={styles.sendButton}
                    aria-label={'send'}
            >

            </button>
        </div>
    );
};

export default BookingApp;
