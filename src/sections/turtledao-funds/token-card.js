import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const TokenCard = ({ token_amount, sx, imageLink, cardTitle, ticker }) => {

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
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="primary.main"
              variant="overline"
            >
              {cardTitle}
            </Typography>
            <Typography variant="h5"
              color="white"
            >
              {token_amount} {ticker}
            </Typography>
          </Stack>
          {imageLink ? (
            <Avatar
              sx={{
                backgroundColor: '#fff',
                height: 56,
                width: 56
              }}
              src={imageLink}
            />
          ) : null}
        </Stack>

      </CardContent>
    </Card></ThemeProvider>
  );
};

TokenCard.prototypes = {
  sx: PropTypes.object,
  token_amount: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
};
