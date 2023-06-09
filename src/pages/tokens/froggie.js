import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Container, Divider, Unstable_Grid2 as Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import FroggieInformation from 'src/tokens/froggie';
import { FroggiePriceChart } from 'src/sections/launchpad/charts/froggie-price';
import { FroggieNFTs } from 'src/sections/launchpad/showcase/froggie-nfts';

import { AdaCompareCard } from 'src/sections/launchpad/market-cards/compare';
import { PriceCard } from 'src/sections/launchpad/market-cards/price';
import { TokenEvents } from 'src/sections/launchpad/events';
import { Pie } from 'src/sections/launchpad/charts/distribution';
import { Bio } from 'src/sections/launchpad/profile/bio';
import { Profile } from 'src/sections/launchpad/profile/profile';
import { BuyVerified } from 'src/sections/launchpad/buy/buy-verified';

import { getLastPrice } from 'src/api/fetch-calls';
import { StatusBanner } from 'src/sections/launchpad/status-banner';

export default function Page({  }) {

  // https://analyticsv2.muesliswap.com/price?policy-id=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenname=FROGGIE&interval=hourly

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const baseId = '79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945_lovelace';

  const [haveData, setHaveData] = useState(false);
  const [haveError, setHaveError] = useState(false);
  const [froggiePrice, setFroggiePrice] = useState(0);
  const [froggieVolume, setFroggieVolume] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { price, volume } = await getLastPrice(baseId);
        if (price > 0)
        {
          setHaveData(true);
          setFroggiePrice(price);
          setFroggieVolume(volume);
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
    formatted_volume,
    formatted_price,
    marketcap_title,
    price_title,
    verfied_buy_information,
    token_bio_information,
    token_profile_information
  } = FroggieInformation(froggiePrice, froggieVolume);

  return (
  <>
    <Head>
      <title>
        $FROGGIE | TurtleDAO Platform
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
              <StatusBanner sx={{ height: '100%', marginRight: '10px' }} haveData={haveData} error={haveError} coinName={'Froggie'} />
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
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={formatted_volume} cardTitle={'$FROGGIE Volume'}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <AdaCompareCard sx={{ height: '100%', marginRight: '10px' }} tokenPrice={formatted_price} ticker={ticker} />
          </Grid>
          
        </Grid>

        <div>
          <Grid
            container
            spacing={3}
            sx={{ mt: 2 }}
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
                chartSeries={[38.18, 10.89, 20.72, 10.89, 19.32]}
                labels={['LP', 'Airdrops', 'OTC', 'Distribution', 'Development']}
                sx={{ height: '100%', marginRight: '10px' }}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid
            container
            spacing={3}
            sx={{ mt: 2 }}
          >
            <Grid
              xs={12}
              md={6}
              lg={4}
              
            >
              <ThemeProvider theme={theme}>
                <Card sx={{
                  background: 'radial-gradient(circle, rgba(42,97,44,1) 0%, rgba(45,45,45,1) 100%)',
                  border: "2px solid #4CAF50"
                }}>
                  <CardContent>
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="Froggieo_"
                      theme='dark'
                      options={{
                        height: 600,
                      }}
                    />
                  </CardContent>
                </Card>
              </ThemeProvider>

              { /* dunno why but this stops it being attached the previous component*/ }
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <FroggieNFTs sx={{ height: '100%', marginRight: '10px' }} />
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <Bio sx={{ minWidth: "100%" }} token_bio_information={token_bio_information} />

              { /* dunno why but this stops it being attached the previous component*/ }
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <BuyVerified sx={{ minWidth: "100%" }} verfied_buy_information={verfied_buy_information} />
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
