import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Container } from './styles';

function SwipeButtons() {
  return (
    <Container className="swipeButtons">
      
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      
    </Container>
  );
}

export default SwipeButtons;