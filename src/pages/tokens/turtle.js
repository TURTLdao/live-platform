import Head from 'next/head';
import { Box, Card, CardContent, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import CustomizedTimeline from 'src/sections/launchpad/timeline/timeline';

import { Pie } from 'src/sections/launchpad/charts/distribution';
import { Profile } from 'src/sections/launchpad/profile/profile';
import { PriceCard } from 'src/sections/launchpad/market-cards/price';
import { AdaCompareCard } from 'src/sections/launchpad/market-cards/compare';

import TurtleInformation from 'src/tokens/turtle';
import { TurtleBio } from 'src/sections/launchpad/turtle/bio';
import { TurtleDAOfunds } from 'src/sections/launchpad/turtle-funds';

export default function Page() {
  const {
    future_events,
    current_events,
    past_events,
    coin_name,
    ticker,
    token_logo,
    marketcap_title,
    price_title,
    token_profile_information
  } = TurtleInformation(0);

  useEffect(() => {
    async function fetchData() {
      //
    }

    fetchData();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  return (
  <>
    <Head>
      <title>
        $TURTL | TurtleDAO
      </title>
    </Head>

    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          bgcolor: "#1d1d1d"
        }}
      >

      <Container maxWidth="100%" >

        <Grid
          container
          spacing={3}
        >
          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={0} imageLink={token_logo} cardTitle={price_title}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={0} cardTitle={marketcap_title}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={0} cardTitle={'$TURTL Volume'}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <AdaCompareCard sx={{ height: '100%', marginRight: '10px' }} tokenPrice={0} ticker={ticker} />
          </Grid>
        </Grid>


        <div>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2
            }}
          >
            <Grid 
              xs={12}
              md={6}
              lg={4}
            >
              <Profile sx={{ height: '100%', marginRight: '10px' }} token_profile_information={token_profile_information}/>
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={8}
            >
              <Pie
                chartSeries={[30, 5, 10, 15, 40]}
                labels={['Token Sale', 'Airdrops', 'Development', 'Liquidity', 'AAID']}
                sx={{ height: '100%', marginRight: '10px' }}
              />
            </Grid>
          </Grid>
        </div>
        
        <div>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2
            }}
          >
            <Grid
              xs={12}
              md={6}
              lg={4}
              
            >
            <TurtleBio sx={{ minWidth: "100%" }} />
            </Grid>

            <Grid
              xs={12}
              md={8}
              lg={8}
            >
              <CustomizedTimeline
                sx={{ minWidth: "100%" }}
                future_events={future_events}
                current_events={current_events}
                past_events={past_events}
                ticker={ticker}
                coinName={coin_name}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2
            }}
          >
            <Grid
              xs={12}
              md={8}
              lg={8}
            >
            <Card sx={{
              background: 'radial-gradient(circle, rgba(42,97,44,1) 0%, rgba(45,45,45,1) 100%)',
              border: "2px solid #4CAF50"
            }}>
              <CardContent>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="_TurtleDAO"
                  theme='dark'
                  options={{
                    height: 500,
                  }}
                />
              </CardContent>
            </Card>
            </Grid>

          </Grid>
        </div>
      </Container>
    </Box>
  </ThemeProvider>
</>);}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
