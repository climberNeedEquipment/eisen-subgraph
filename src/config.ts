// Enum definition with correct type for `const` and initialization
export enum CHAINS {
  SCROLL = 534352,
  MODE = 34443,
  MANTLE = 5000,
  LINEA = 59144,
  BLAST = 81457,
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
      url: "https://api.goldsky.com/api/public/project_clwacwnf0qmq701yza5d82yf3/subgraphs/eisen-mantle/1.0.0/gn",
    },
  },
  [CHAINS.LINEA]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clwacwnf0qmq701yza5d82yf3/subgraphs/eisen-linea/1.0.0/gn",
    },
  },
  [CHAINS.BLAST]: {
    [PROTOCOLS.EISEN]: {
      url: "https://api.goldsky.com/api/public/project_clwacwnf0qmq701yza5d82yf3/subgraphs/eisen-blast/1.0.0/gn",
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
};
