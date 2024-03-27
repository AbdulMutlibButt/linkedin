import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import  {Home, SupervisorAccount}  from '@mui/icons-material';
import {BusinessCenter}  from '@mui/icons-material';
import  {NotificationAdd}  from '@mui/icons-material';
import { Message } from '@mui/icons-material';
const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' alt='' />
                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>
            <div className='header__right'>
            <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Message} title="Messaging"/>
                <HeaderOption Icon={NotificationAdd} title="Notification"/>
                <HeaderOption avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"title="me" />
            </div>
        </div>
    )
}

export default Header