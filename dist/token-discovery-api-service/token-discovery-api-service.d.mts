import { AbstractTokenDiscoveryApiService } from "./abstract-token-discovery-api-service.mjs";
import type { MoralisTokenResponseItem, TopGainersParams, TopLosersParams, TrendingTokensParams, BlueChipParams } from "../types.mjs";
export declare class TokenDiscoveryApiService extends AbstractTokenDiscoveryApiService {
    #private;
    constructor(baseUrl: string);
    getTrendingTokensByChains(trendingTokensParams?: TrendingTokensParams): Promise<MoralisTokenResponseItem[]>;
    getTopLosersByChains(topLosersParams?: TopLosersParams): Promise<MoralisTokenResponseItem[]>;
    getTopGainersByChains(topGainersParams?: TopGainersParams): Promise<MoralisTokenResponseItem[]>;
    getBlueChipTokensByChains(blueChipParams?: BlueChipParams): Promise<MoralisTokenResponseItem[]>;
}
//# sourceMappingURL=token-discovery-api-service.d.mts.map