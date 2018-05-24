import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



export default props => {
return (
    <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              My Career Choice
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
    )
}