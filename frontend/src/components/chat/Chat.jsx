import { Avatar, IconButton } from "@mui/material";
import "../../css/Chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
export default function Chat() {
    return(
        <div className="chat">
            <div className="chat__header">
                    <Avatar/>
                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
        
            <div className='chat__body'>
                <p className='chat__message'>
                <span className='chat__name'>Nabendu</span>
                This is a message
                <span className='chat__timestamp'>
                    { new Date().toUTCString() }
                </span>
                </p>
                <p className='chat__message chat__receiver'>
                <span className='chat__name'>Parag</span>
                This is a message back
                <span className='chat__timestamp'>
                    { new Date().toUTCString() }
                </span>
                </p>
                <p className='chat__message'>
                <span className='chat__name'>Nabendu</span>
                This is a message again
                <span className='chat__timestamp'>
                    { new Date().toUTCString() }
                </span>
                </p>
            </div>

            <div className='chat__footer'></div>
        </div>
    )
};
