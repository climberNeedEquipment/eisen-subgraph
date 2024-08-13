export const enum CHAINS {
  SCROLL = 534352,
  MODE = 34443,
  MANTLE = 5000,
}

export const enum PROTOCOLS {
  EISEN = 1,
}

export const SUBGRAPH_URLS = {
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
};

export const RPC_URLS = {
  [CHAINS.SCROLL]: "https://1rpc.io/scroll",
  [CHAINS.MODE]: "https://1rpc.io/mode",
  [CHAINS.MANTLE]: "https://1rpc.io/mantle",
};

export const NATIVE_ASSETS = {
  [CHAINS.SCROLL]: "ETH",
  [CHAINS.MODE]: "ETH",
  [CHAINS.MANTLE]: "MNT",
};
