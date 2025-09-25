import { AbstractTokenDiscoveryApiService } from "./abstract-token-discovery-api-service.cjs";
import type { MoralisTokenResponseItem, TopGainersParams, TopLosersParams, TrendingTokensParams, BlueChipParams } from "../types.cjs";
export declare class TokenDiscoveryApiService extends AbstractTokenDiscoveryApiService {
    #private;
    constructor(baseUrl: string);
    getTrendingTokensByChains(trendingTokensParams?: TrendingTokensParams): Promise<MoralisTokenResponseItem[]>;
    getTopLosersByChains(topLosersParams?: TopLosersParams): Promise<MoralisTokenResponseItem[]>;
    getTopGainersByChains(topGainersParams?: TopGainersParams): Promise<MoralisTokenResponseItem[]>;
    getBlueChipTokensByChains(blueChipParams?: BlueChipParams): Promise<MoralisTokenResponseItem[]>;
}
//# sourceMappingURL=token-discovery-api-service.d.cts.map