import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import {useDataLayerValue} from "./DataLayer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
function Header() {
  const [{user}, dispatch]= useDataLayerValue();
  return (
    <div className='header' >
        
        <div className='header_left'>
        <SearchIcon/>
        <input
        placeholder='Search For Articst, Songs, Album'
        type='text'/>

        </div>
            <div className='header_right'>
                <Avatar src={user?.images[0]?.url} alt= 'user' />
                <h4>{user?.display_name}</h4>
                
                </div>


    </div>
  )
}

export default Header