import { useState } from 'preact/hooks';

function Chat() {
    const [showChat, setShowChat] = useState(true);
    return (
        <div>
            {showChat && <iframe
                src="https://vimeo.com/event/3239457/chat/"
                frameBorder="0"
                style="width:100%;height:100%;opacity:70%;filter:invert(1);"
            >
            </iframe>}
        </div>
    )
}

export default Chat