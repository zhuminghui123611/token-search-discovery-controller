import { AbstractTokenSearchApiService } from "./abstract-token-search-api-service.mjs";
import type { SwappableTokenSearchParams, TokenSearchParams, TokenSearchResponseItem } from "../types.mjs";
export declare class TokenSearchApiService extends AbstractTokenSearchApiService {
    #private;
    constructor(baseUrl: string);
    searchTokens(tokenSearchParams?: TokenSearchParams): Promise<TokenSearchResponseItem[]>;
    searchSwappableTokens(swappableTokenSearchParams: SwappableTokenSearchParams): Promise<TokenSearchResponseItem[]>;
}
//# sourceMappingURL=token-search-api-service.d.mts.map