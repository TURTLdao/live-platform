
export const getDaoWatchlistItems = (market_data) => {
  const dao_table_items = [
    {
      id: 0,
      name: 'Turtle Token',
      ticker: '$TURTL',
      coin_logo: '/token-images/turtl.png',
      price: market_data.turtle_market.price,
      marketcap: market_data.turtle_market.marketcap,
      volume: market_data.turtle_market.volume,
      to_ada: market_data.turtle_market.to_ada,
      dao_support_link: '/tokens/turtle',
      twitter_link: 'https://twitter.com/_TurtleDAO',
      discord_link: 'https://discord.gg/FNQ2BXpqkM',
      buy_link: '',
    },
    {
      id: 1,
      name: 'Froggie Koin',
      ticker: '$FROGGIE',
      coin_logo: '/token-images/froggie.png',
      price: market_data.froggie_market.price,
      marketcap: market_data.froggie_market.marketcap,
      volume: market_data.froggie_market.volume,
      to_ada: market_data.froggie_market.to_ada,
      dao_support_link: '/tokens/froggie',
      twitter_link: 'https://twitter.com/Froggieo_',
      discord_link: 'https://discord.gg/bBMjY3SvBr',
      buy_link: 'https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenNameB=46524f47474945',
    },
    {
      id: 2,
      name: 'AdaKonda Coin',
      ticker: '$KONDA',
      coin_logo: '/token-images/konda.png',
      price: market_data.konda_market.price,
      marketcap: market_data.konda_market.marketcap,
      volume: market_data.konda_market.volume,
      to_ada: market_data.konda_market.to_ada,
      dao_support_link: '/tokens/konda',
      twitter_link: 'https://twitter.com/AdaKondaCoin',
      discord_link: 'https://discord.gg/ZnVZbmVMzr',
      buy_link: 'https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=501dd5d2fbab6af0a26b1421076ff3afc4d5a34d6b3f9694571116ea&tokenNameB=4b4f4e4441',
    },
    {
      id: 3,
      name: 'Catsky Token',
      ticker: '$CATSKY',
      coin_logo: '/token-images/catsky.png',
      price: market_data.catsky_market.price,
      marketcap: market_data.catsky_market.marketcap,
      volume: market_data.catsky_market.volume,
      to_ada: market_data.catsky_market.to_ada,
      dao_support_link: '/tokens/catsky',
      twitter_link: 'https://twitter.com/Catskycrypto',
      discord_link: 'https://discord.gg/mqNHWb7hbX',
      buy_link: 'https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921&tokenNameB=434154534b59',
    },
  ];

  return dao_table_items;
};

export const getExtWatchlistItems = (market_data) => {
  const all_table_items = [
    {
      id: 0,
      name: 'iUSD',
      ticker: '$iUSD',
      coin_logo: '/token-images/iusd.png',
      price: market_data.iusd_market.price,
      marketcap: market_data.iusd_market.marketcap,
      volume: market_data.iusd_market.volume,
      to_ada: market_data.iusd_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/Indigo_protocol',
      discord_link: 'https://discord.gg/YUbduZezdP',
      buy_link: '',
    },
    {
      id: 1,
      name: 'SnekCoin',
      ticker: '$SNEK',
      coin_logo: '/token-images/snek.png',
      price: market_data.snek_market.price,
      marketcap: market_data.snek_market.marketcap,
      volume: market_data.snek_market.volume,
      to_ada: market_data.snek_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 2,
      name: 'World Mobile Token',
      ticker: '$WMT',
      coin_logo: '/token-images/wmt.png',
      price: market_data.wmt_market.price,
      marketcap: market_data.wmt_market.marketcap,
      volume: market_data.wmt_market.volume,
      to_ada: market_data.wmt_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/wmtoken',
      discord_link: 'https://discord.gg/worldmobile',
      buy_link: '',
    },
    {
      id: 3,
      name: 'Meld',
      ticker: '$MELD',
      coin_logo: '/token-images/meld.png',
      price: market_data.meld_market.price,
      marketcap: market_data.meld_market.marketcap,
      volume: market_data.meld_market.volume,
      to_ada: market_data.meld_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/MELD_Defi',
      discord_link: 'https://discord.gg/caDXKq75ys',
      buy_link: '',
    },
    {
      id: 4,
      name: 'Minswap Token',
      ticker: '$MIN',
      coin_logo: '/token-images/min.png',
      price: market_data.min_market.price,
      marketcap: market_data.min_market.marketcap,
      volume: market_data.min_market.volume,
      to_ada: market_data.min_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/MinswapDEX',
      discord_link: 'https://discord.gg/minswap',
      buy_link: '',
    },
    {
      id: 5,
      name: 'AADA',
      ticker: '$AADA',
      coin_logo: '/token-images/aada.png',
      price: market_data.aada_market.price,
      marketcap: market_data.aada_market.marketcap,
      volume: market_data.aada_market.volume,
      to_ada: market_data.aada_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/AadaFinance',
      discord_link: 'https://discord.com/invite/zZPHeH78BE',
      buy_link: '',
    },
    {
      id: 6,
      name: 'SingularityNET',
      ticker: '$AGIX',
      coin_logo: '/token-images/aigx.png',
      price: market_data.agix_market.price,
      marketcap: market_data.agix_market.marketcap,
      volume: market_data.agix_market.volume,
      to_ada: market_data.agix_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 7,
      name: 'HOSKY Token',
      ticker: '$HOSKY',
      coin_logo: 'https://pbs.twimg.com/profile_images/1601027808611942401/T4nLVQit_400x400.jpg',
      price: market_data.hosky_market.price,
      marketcap: market_data.hosky_market.marketcap,
      volume: market_data.hosky_market.volume,
      to_ada: market_data.hosky_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 8,
      name: 'Sundae',
      ticker: '$SUNDAE',
      coin_logo: '/token-images/sundae.png',
      price: market_data.sundae_market.price,
      marketcap: market_data.sundae_market.marketcap,
      volume: market_data.sundae_market.volume,
      to_ada: market_data.sundae_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 9,
      name: 'Milk',
      ticker: '$MILK',
      coin_logo: '/token-images/milk.png',
      price: market_data.milk_market.price,
      marketcap: market_data.milk_market.marketcap,
      volume: market_data.milk_market.volume,
      to_ada: market_data.milk_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 10,
      name: 'Cornucopias Token',
      ticker: '$COPI',
      coin_logo: '/token-images/copi.png',
      price: market_data.copi_market.price,
      marketcap: market_data.copi_market.marketcap,
      volume: market_data.copi_market.volume,
      to_ada: market_data.copi_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 11,
      name: 'Indigo DAO Token',
      ticker: '$INDY',
      coin_logo: '/token-images/indy.png',
      price: market_data.indy_market.price,
      marketcap: market_data.indy_market.marketcap,
      volume: market_data.indy_market.volume,
      to_ada: market_data.indy_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 12,
      name: 'SOCIETY',
      ticker: '$SOCIETY',
      coin_logo: '/token-images/society.png',
      price: market_data.society_market.price,
      marketcap: market_data.society_market.marketcap,
      volume: market_data.society_market.volume,
      to_ada: market_data.society_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 13,
      name: 'Shen USD',
      ticker: '$SHEN',
      coin_logo: '/token-images/shen.png',
      price: market_data.shen_market.price,
      marketcap: market_data.shen_market.marketcap,
      volume: market_data.shen_market.volume,
      to_ada: market_data.shen_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 14,
      name: 'NEWM Token',
      ticker: '$NEWM',
      coin_logo: '/token-images/newm.png',
      price: market_data.newm_market.price,
      marketcap: market_data.newm_market.marketcap,
      volume: market_data.newm_market.volume,
      to_ada: market_data.newm_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 15,
      name: 'Liqwid DAO Token',
      ticker: '$LQ',
      coin_logo: '/token-images/lq.png',
      price: market_data.lq_market.price,
      marketcap: market_data.lq_market.marketcap,
      volume: market_data.lq_market.volume,
      to_ada: market_data.lq_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 16,
      name: 'anetaBTC',
      ticker: '$cNETA',
      coin_logo: '/token-images/cneta.png',
      price: market_data.cneta_market.price,
      marketcap: market_data.cneta_market.marketcap,
      volume: market_data.cneta_market.volume,
      to_ada: market_data.cneta_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 17,
      name: 'Bankercoin',
      ticker: '$BANK',
      coin_logo: '/token-images/bank.png',
      price: market_data.bank_market.price,
      marketcap: market_data.bank_market.marketcap,
      volume: market_data.bank_market.volume,
      to_ada: market_data.bank_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 18,
      name: 'Genius Yield Token',
      ticker: '$GENS',
      coin_logo: '/token-images/gens.png',
      price: market_data.gens_market.price,
      marketcap: market_data.gens_market.marketcap,
      volume: market_data.gens_market.volume,
      to_ada: market_data.gens_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 19,
      name: 'VyFinance',
      ticker: '$VYFI',
      coin_logo: '/token-images/vyfi.png',
      price: market_data.vyfi_market.price,
      marketcap: market_data.vyfi_market.marketcap,
      volume: market_data.vyfi_market.volume,
      to_ada: market_data.vyfi_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
  ];

  return all_table_items;
};