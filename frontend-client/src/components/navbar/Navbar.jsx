import React from 'react'
import './navbar.scss'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { ChatBubbleOutlineSharp, LanguageSharp, NotificationsNoneSharp} from '@mui/icons-material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import  Woman  from '../../assets/images/woman.jpg';
const Navbar = () => {
return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search...."/>
                <SearchSharpIcon className="icon"/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageSharp className="icon"/>
                    <span>EN</span>
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsNoneSharp className="icon"/>
                    <div className="counter">
                        1
                    </div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineSharp className="icon"/>
                    <div className="counter">
                        2
                    </div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <img src={Woman} alt="" className="avatar"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar