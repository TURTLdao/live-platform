import { Avatar, Badge, Box, Button, Card, CardActions, CardContent, CardHeader,
  IconButton, Divider, Stack, SvgIcon, Typography
} from '@mui/material';

import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BellIcon from '@heroicons/react/24/solid/BellIcon';

import { useEffect, useState } from 'react';
  
export const StatusBanner = ({ haveData, error, coinName }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const [visible, setVisible] = useState(true);

  const handleIconClick = () => {
    setVisible(false);
  };

  if (!visible) {
    return null; // Return null to hide/remove the component
  }

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        background: 'radial-gradient(circle, rgba(42,97,44,1) 0%, rgba(45,45,45,1) 100%)',
        border: "2px solid #4CAF50",
        maxHeight: 150
      }}>
        <CardContent>
          { // haveData can take a moment to be read/found/fetched, so unless we get an error
            // triggered from a failed fetch, we signal that difference like so:
            haveData ? (
              <Typography color="primary.main" variant="h6" align="center" sx={{}}>
                {coinName} data has been fetched from our verified sources...
                <IconButton 
                  sx={{ mr: 3 }}
                  onClick={handleIconClick}
                >
                  <SvgIcon fontSize="small">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="primary.main" class="bi bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </SvgIcon>
                </IconButton>
              </Typography>
            ) : (
              <div>
                {error ? (
                  <Typography color="red" variant="h6" align="center" sx={{}}>
                    Error: Failed to fetch data. Try refreshing, API briefly hit a limit.
                  </Typography>
                ) : (
                  <Typography color="white" variant="h6" align="center" sx={{}}>
                    Attempting to fetch data...
                  </Typography>
                )}
              </div>
          )}
          </CardContent>
      
        </Card>
      </ThemeProvider>
    );
  };
  
  StatusBanner.prototypes = {
    sx: PropTypes.object,
    haveData: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    coinName: PropTypes.object.isRequired
  };
  