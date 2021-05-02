import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {StyledToolbar} from "./styled";


import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";


export default function Header() {
  const history = useHistory();

  return (
    <div>
      <AppBar position="static">
        
        <StyledToolbar>
          <h1></h1>
          <Typography variant="h6">
            LabEddit
          </Typography>
          <Button onClick={() => goToLoginPage(history) } color="inherit">Logout</Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}
