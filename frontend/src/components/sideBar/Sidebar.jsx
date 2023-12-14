import "../../css/Sidebar.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import SideBarChat from "../sideBarChat/SideBarChat";

export default function Sidebar() {
    return(
        <div className="Sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <IconButton>
                    <DonutLarge />
                </IconButton>

                <IconButton>
                    <Chat />
                </IconButton>

                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
            <div className='sidebar__search'>
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search your message"/>
                </div>
            </div>

            <div className='sidebar__chats'>

            </div>
            <SideBarChat/>
        </div>
    )
};
