import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Container,
    IconButton, Divider, Stack, SvgIcon, Typography
  } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const TurtleBio = () => {
    
      const handleClick = () => {
    
      };

      const handleCopyButtonClick  = () => {
    
      };
    
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
      <CardHeader
        sx={{ color: 'primary.main' }}
        title="About Turtle Token"
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
          <Stack
            alignItems="flex-start"
            direction="column"
            justifyContent="space-between"
            spacing={2}
            mb={2}
          >
            <Typography
              color="white"
              variant="caption"
            >
              <i>You're lying to yourself if you say you don't like turtles.</i>
            </Typography>

            <Typography
              color="white"
              variant="body2"
            >
              Inspiring trust in TurtleDAO verified projects. 
                Step into a future where transparency and accountability reign supreme, propelling you towards success and unyielding confidence.
            </Typography>
            </Stack> 
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              mb: 2
            }}
          >
  
            <Typography
              color="primary.main"
              variant="body2"
              sx={{
                mt: 2
              }}
            >
              <b>Regular Auditing</b>
            </Typography>
            <Typography
              color={'white'}
              variant="body2"
            >
              While most organizations typically conduct a single audit, our dedication lies in consistently monitoring and ensuring the continued compliance and positive conduct of our verified projects.
            </Typography>
  
            <Typography
              color="primary.main"
              variant="body2"
              sx={{
                mt: 2
              }}
            >
              <b>Funding New Projects</b><br/>
            </Typography>
            <Typography
              color={'white'}
              variant="body2"
            >
              In addition to project verification, we pledge our commitment to supporting their financial stability and future growth by assisting in fundraising for liquidity and development purposes.
            </Typography>
  
            <Typography
              color="primary.main"
              variant="body2"
              sx={{
                mt: 2
              }}
            >
              <b>Community Driven</b><br/>
            </Typography>
            <Typography
              color={'white'}
              variant="body2"
            >
              TurtleDAO prioritizes the well-being of the community, valuing their input and ensuring their voices are heard in every decision we make.
            </Typography>
  
            <Typography
              color="primary.main"
              variant="body2"
              sx={{
                mt: 2
              }}
            >
              <b>Open-Source</b><br/>
            </Typography>
            <Typography
              color={'white'}
              variant="body2"
            >
              TurtleDAO embraces a commitment to openness and transparency. Our unwavering dedication is reflected in our open-source approach, making every line of code and resource readily accessible under a GitHub license.
            </Typography>
  
          </Box>

              <img src='https://github.com/TURTLdao/TURTL-images/blob/main/1.png?raw=true'
                style={{
                  height: 200,
                  mb: 2,
                  width: 200
                }}
              />
          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>
            <Button
              fullWidth
              variant="contained"
              href="https://turtledao.vercel.app/"
              target="_blank"
              sx={{ color: 'white' }}
            >
              TurtleDAO Website
            </Button>
        </CardActions>
      </Card></ThemeProvider>
    );
    };
    
    