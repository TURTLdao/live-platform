import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid,
  IconButton, Divider, Stack, SvgIcon, Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { PriceCard } from './market-cards/price';

export const TurtleDAOfunds = ({  }) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        backgroundColor: '#2d2d2d',
        border: "2px solid #4CAF50"
      }}>
      <CardHeader
        sx={{ color: 'primary.main' }}
        title={"About "}
        action={(
          <div>
          </div>
        )}
      />
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
              
            }}
          >
            
          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>

        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

TurtleDAOfunds.prototypes = {
  sx: PropTypes.object,
};
