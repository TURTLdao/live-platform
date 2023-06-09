import { Avatar, Box, Button, Card, CardActions, CardContent,
  Divider, Typography, IconButton, SvgIcon
} from '@mui/material';
  
import PropTypes from 'prop-types';
import DocumentDuplicateIcon from '@heroicons/react/24/solid/DocumentDuplicateIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
export const Profile = ({ token_profile_information }) => {
  
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
        background: 'radial-gradient(circle, rgba(42,97,44,1) 0%, rgba(45,45,45,1) 100%)',
        border: "2px solid #4CAF50"
      }}>

          <CardContent>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Avatar
                src={token_profile_information.avatar}
                sx={{
                  height: 80,
                  mb: 2,
                  width: 80
                }}
              />
    
              <Typography
                gutterBottom
                variant="h5"
                color="primary.main"
              >
                {token_profile_information.name}
              </Typography>
    
              <Typography
                color={'white'}
                variant="body2"
              >
                <b>Total Supply:</b> {token_profile_information.supply}
              </Typography>
    
              <Typography
                color={'white'}
                variant="body2"
              >
                <b>Ticker:</b> {token_profile_information.ticker}
              </Typography>
              </Box>
    
              <Divider sx={{ mb: 2, mt: 2}} />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
    
              <Typography
                color="primary.main"
                variant="body2"
              >
                <b>Policy ID:</b>
              </Typography>
              <Typography
                color={'white'}
                variant="body2"
              >
                {`${token_profile_information.policy_id.slice(0, 8)}...${token_profile_information.policy_id.slice(-8)}`}
                <IconButton onClick={() => navigator.clipboard.writeText(token_profile_information.policy_id)} sx={{ ml: 1 }}>
                <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                  <DocumentDuplicateIcon />
                </SvgIcon>
              </IconButton>
              </Typography>
    
              <Typography
                color="primary.main"
                variant="body2"
              >
                <b>Fingerprint:</b><br/>
              </Typography>
              <Typography
                color={'white'}
                variant="body2"
              >
                {`${token_profile_information.fingerprint.slice(0, 8)}...${token_profile_information.fingerprint.slice(-8)}`}
    
                <IconButton onClick={() => navigator.clipboard.writeText(token_profile_information.fingerprint)} sx={{ ml: 1 }}>
                  <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                    <DocumentDuplicateIcon />
                  </SvgIcon>
                </IconButton>
              </Typography>
    
              <Typography
                color="primary.main"
                variant="body2"
              >
                <b>Governance Wallet:</b><br/>
              </Typography>
              <Typography
                color={'white'}
                variant="body2"
              >
                {token_profile_information.governance_wallets[0]}
    
                <IconButton onClick={() => navigator.clipboard.writeText(token_profile_information.governance_wallets[1])} sx={{ ml: 1 }}>
                  <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                    <DocumentDuplicateIcon />
                  </SvgIcon>
                </IconButton>
              </Typography>
    
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              fullWidth
              variant="text"
              target='_blank'
              href={token_profile_information.cardano_scan}
            >
              Cardano Scan
            </Button>
          </CardActions>

      </Card>
    </ThemeProvider>
  );
};

Profile.prototypes = {
  sx: PropTypes.object,
  token_profile_information: PropTypes.string.isRequired,
};
