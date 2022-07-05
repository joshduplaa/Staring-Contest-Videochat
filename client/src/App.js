import React from 'react';
/*Typography API gives prestyled components, like bootstrap
AppBar displays information and actions relating to current screen */
import { Typography, AppBar } from '@mui/material';

import VideoPlayer from './components/VideoPlayer'; 
import Options from './components/Options'; 
import Notifications from './components/Notifications'; 

const App = () => {
  return (
    <div>
        <h1>Hello</h1>
        <AppBar position="static" color="inherit">
            <Typography variant="h2" alight="center">Video Chat</Typography>
        </AppBar>
        {/* VideoPlayer component */}
        <VideoPlayer />
        
        {/* Options => (includes) Notifications(notification ping) */}
        <Options>
            <Notifications />
        </Options>
    </div>
  )
}

export default App;