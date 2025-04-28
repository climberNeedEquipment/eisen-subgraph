// Enum definition with correct type for `const` and initialization
export enum CHAINS {
  SCROLL = 534352,
  MODE = 34443,
  MANTLE = 5000,
  LINEA = 59144,
  BLAST = 81457,
  TAIKO = 167000,
  CORE = 1116,
  BASE = 8453,
  ZIRCUIT = 48900,
  BERA = 80094,
  SONEIUM = 1868,
  ROOTSTOCK = 30,
  BSC = 56,
  ARBITRUM = 42161,
}

export enum PROTOCOLS {
  EISEN = 1,
}

// Correct typing for SUBGRAPH_URLS
export const SUBGRAPH_URLS: {
  [key in CHAINS]: { [key in PROTOCOLS]: { url: string } };
} = {
  [CHAINS.SCROLL]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clwacwnf0qmq701yza5d82yf3/subgraphs/eisen-scroll/1.0.0/gn",
    },
  },
  [CHAINS.MODE]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clwacwnf0qmq701yza5d82yf3/subgraphs/eisen-mode/1.0.0/gn",
    },
  },
  [CHAINS.MANTLE]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clzsr5mz1d13n01os5q4qar6v/subgraphs/eisen-mantle/1.0.0/gn",
    },
  },
  [CHAINS.LINEA]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clzsr5mz1d13n01os5q4qar6v/subgraphs/eisen-linea/1.0.0/gn",
    },
  },
  [CHAINS.BLAST]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clzsr5mz1d13n01os5q4qar6v/subgraphs/eisen-blast/1.0.0/gn",
    },
  },
  [CHAINS.TAIKO]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cm20c6gxf9a9y0107bthk8060/subgraphs/eisen-taiko/1.0.0/gn",
    },
  },
  [CHAINS.CORE]: {
    [PROTOCOLS.EISEN]: {
      url: "https://thegraph.coredao.org/subgraphs/name/eisen-core",
    },
  },
  [CHAINS.BASE]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cm4a7o3u1kwjq01y9c5it8g47/subgraphs/eisen-base/1.0.0/gn",
    },
  },
  [CHAINS.ZIRCUIT]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cm4a7o3u1kwjq01y9c5it8g47/subgraphs/eisen-zircuit/1.0.0/gn",
    },
  },
  [CHAINS.BERA]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cm20c6gxf9a9y0107bthk8060/subgraphs/eisen-bera/1.0.0/gn",
    },
  },
  [CHAINS.SONEIUM]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cm20c6gxf9a9y0107bthk8060/subgraphs/eisen-soneium/1.0.0/gn",
    },
  },
  [CHAINS.ROOTSTOCK]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cm4a7o3u1kwjq01y9c5it8g47/subgraphs/eisen-rootstock/1.0.0/gn",
    },
  },
  [CHAINS.BSC]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cma18yu4fn8vf01rc2ip76s59/subgraphs/eisen-bsc/1.0.0/gn",
    },
  },
  [CHAINS.ARBITRUM]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_cma18yu4fn8vf01rc2ip76s59/subgraphs/eisen-arbitrum/1.0.0/gn",
    },
  },
};

// Correct typing for RPC_URLS
export const RPC_URLS: {
  [key in CHAINS]: string;
} = {
  [CHAINS.SCROLL]: "https://1rpc.io/scroll",
  [CHAINS.MODE]: "https://1rpc.io/mode",
  [CHAINS.MANTLE]: "https://1rpc.io/mantle",
  [CHAINS.LINEA]: "https://rpc.linea.build",
  [CHAINS.BLAST]: "https://rpc.blast.io",
  [CHAINS.TAIKO]: "https://rpc.taiko.xyz",
  [CHAINS.CORE]: "https://1rpc.io/core",
  [CHAINS.BASE]: "https://base-rpc.publicnode.com",
  [CHAINS.ZIRCUIT]: "https://rpc.ziruit.io",
  [CHAINS.BERA]: "https://rpc.berachain.com",
  [CHAINS.SONEIUM]: "https://rpc.soneium.org",
  [CHAINS.ROOTSTOCK]: "https://rootstock-mainnet.public.blastapi.io",
  [CHAINS.BSC]: "https://bsc-dataseed1.defibit.io",
  [CHAINS.ARBITRUM]: "https://arbitrum.meowrpc.com",
};

// Correct typing for NATIVE_ASSETS
export const NATIVE_ASSETS: {
  [key in CHAINS]: string;
} = {
  [CHAINS.SCROLL]: "ETH",
  [CHAINS.MODE]: "ETH",
  [CHAINS.MANTLE]: "MNT",
  [CHAINS.LINEA]: "ETH",
  [CHAINS.BLAST]: "ETH",
  [CHAINS.TAIKO]: "ETH",
  [CHAINS.CORE]: "CORE",
  [CHAINS.BASE]: "ETH",
  [CHAINS.ZIRCUIT]: "ETH",
  [CHAINS.BERA]: "BERA",
  [CHAINS.SONEIUM]: "ETH",
  [CHAINS.ROOTSTOCK]: "RBTC",
  [CHAINS.BSC]: "BNB",
  [CHAINS.ARBITRUM]: "ETH",
};
