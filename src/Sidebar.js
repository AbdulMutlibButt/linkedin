import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://wallpapercave.com/wp/SEckhP8.jpg" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Mutlib Butt</h2>
        <h4>Mutlibbutt209@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,343</p>

        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar