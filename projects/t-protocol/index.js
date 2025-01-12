const { sumTokensExport } = require("../helper/unwrapLPs");

const USDC_TOKEN_CONTRACT = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const TREASURY_CONTRACT = "0xa01D9bc8343016C7DDD39852e49890a8361B2884";
const STBT = '0x530824DA86689C9C17CdC2871Ff29B058345b44a'

module.exports = {
  methodology: "counts value of assets in the Treasury",
  start: 1677913260,
  ethereum: {
    tvl: sumTokensExport({ owner: TREASURY_CONTRACT, tokens: [USDC_TOKEN_CONTRACT, STBT] }),
  },
};
