import { AbstractTokenSearchApiService } from "./abstract-token-search-api-service.cjs";
import type { SwappableTokenSearchParams, TokenSearchParams, TokenSearchResponseItem } from "../types.cjs";
export declare class TokenSearchApiService extends AbstractTokenSearchApiService {
    #private;
    constructor(baseUrl: string);
    searchTokens(tokenSearchParams?: TokenSearchParams): Promise<TokenSearchResponseItem[]>;
    searchSwappableTokens(swappableTokenSearchParams: SwappableTokenSearchParams): Promise<TokenSearchResponseItem[]>;
}
//# sourceMappingURL=token-search-api-service.d.cts.map