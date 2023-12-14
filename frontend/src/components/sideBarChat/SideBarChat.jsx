import { Avatar } from "@mui/material";
import "../../css/SideBarChat.css";

export default function SideBarChat() {
    return(
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>last Message</p>
                <h2>Room Name</h2>
                <p>last Message</p>
                <h2>Room Name</h2>
                <p>last Message</p>
            </div>
        </div>
    )
};
