import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Container, Divider, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BuyVerified } from 'src/sections/launchpad/buy/buy-verified';

import { AdaCompareCard } from 'src/sections/launchpad/market-cards/compare';
import { PriceCard } from 'src/sections/launchpad/market-cards/price';
import { TokenEvents } from 'src/sections/launchpad/events';
import { Pie } from 'src/sections/launchpad/charts/distribution';
import { Bio } from 'src/sections/launchpad/profile/bio';
import { Profile } from 'src/sections/launchpad/profile/profile';

import { getLastPrice } from 'src/api/fetch-calls';
import { StatusBanner } from 'src/sections/launchpad/status-banner';

import CatskyInformation from 'src/tokens/catsky';

export default function Page({ }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const baseId = '9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921434154534b59_lovelace';

  const [haveData, setHaveData] = useState(false);
  const [haveError, setHaveError] = useState(false);
  const [catskyPrice, setCatskyPrice] = useState(0);
  const [catskyVolume, setCatskyVolume] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { price, volume } = await getLastPrice(baseId);
        if (price > 0)
        {
          setHaveData(true);
          setCatskyPrice(price);
          setCatskyVolume(volume);
        }
      } catch (error) {
        console.error('Error:', error);
        setHaveData(false);
        setHaveError(true);
      }
    };

    fetchData();
  }, []);

  const {
    future_events,
    current_events,
    past_events,
    coin_name,
    ticker,
    token_logo,
    formatted_marketcap,
    formatted_price,
    formatted_volume,
    marketcap_title,
    price_title,
    verfied_buy_information,
    token_bio_information,
    token_profile_information
  } = CatskyInformation(catskyPrice, catskyVolume);

  return (
  <>
    <Head>
      <title>
        $CATSKY | TurtleDAO Platform
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
      <Container maxWidth="xl" >
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
              md={12}
              lg={12}
            >
              <StatusBanner sx={{ height: '100%', marginRight: '10px' }} haveData={haveData} error={haveError} coinName={'Catsky'} />
            </Grid>
          </Grid>
        </div>

        <Grid
          container
          spacing={3}
        >
          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={formatted_price} imageLink={token_logo} cardTitle={price_title}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={formatted_marketcap} cardTitle={marketcap_title}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={formatted_volume} cardTitle={'$CATSKY Volume'}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <AdaCompareCard sx={{ height: '100%', marginRight: '10px' }} tokenPrice={formatted_price} ticker={ticker} />
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
              lg={4}
            >
              <Bio sx={{ minWidth: "100%" }} token_bio_information={token_bio_information} />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <BuyVerified sx={{ minWidth: "100%" }} verfied_buy_information={verfied_buy_information} />
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
                    screenName="Catskycrypto"
                    theme='dark'
                    options={{
                      height: 700,
                    }}
                  />
                </CardContent>
              </Card>

            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <TokenEvents
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

      </Container>
    </Box></ThemeProvider>
  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
