const networkConfig = {
  5: {
    name: "Goerli",
    nameUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  137: {
    name: "Polygon",
    nameUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
};
const developmentChains = ["hardhat", "localhost"];
const DECIMALS = "8";
const INITIAL_ANSWAR = "200000000000";
module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWAR,
};
