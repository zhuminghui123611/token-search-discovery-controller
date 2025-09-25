var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TokenDiscoveryApiService_baseUrl;
import { AbstractTokenDiscoveryApiService } from "./abstract-token-discovery-api-service.mjs";
export class TokenDiscoveryApiService extends AbstractTokenDiscoveryApiService {
    constructor(baseUrl) {
        super();
        _TokenDiscoveryApiService_baseUrl.set(this, void 0);
        if (!baseUrl) {
            throw new Error('Portfolio API URL is not set');
        }
        __classPrivateFieldSet(this, _TokenDiscoveryApiService_baseUrl, baseUrl, "f");
    }
    async getTrendingTokensByChains(trendingTokensParams) {
        const url = new URL('/tokens-search/trending', __classPrivateFieldGet(this, _TokenDiscoveryApiService_baseUrl, "f"));
        if (trendingTokensParams?.chains &&
            trendingTokensParams.chains.length > 0) {
            url.searchParams.append('chains', trendingTokensParams.chains.join());
        }
        if (trendingTokensParams?.limit) {
            url.searchParams.append('limit', trendingTokensParams.limit);
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Portfolio API request failed with status: ${response.status}`);
        }
        return response.json();
    }
    async getTopLosersByChains(topLosersParams) {
        const url = new URL('/tokens-search/top-losers', __classPrivateFieldGet(this, _TokenDiscoveryApiService_baseUrl, "f"));
        if (topLosersParams?.chains && topLosersParams.chains.length > 0) {
            url.searchParams.append('chains', topLosersParams.chains.join());
        }
        if (topLosersParams?.limit) {
            url.searchParams.append('limit', topLosersParams.limit);
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Portfolio API request failed with status: ${response.status}`);
        }
        return response.json();
    }
    async getTopGainersByChains(topGainersParams) {
        const url = new URL('/tokens-search/top-gainers', __classPrivateFieldGet(this, _TokenDiscoveryApiService_baseUrl, "f"));
        if (topGainersParams?.chains && topGainersParams.chains.length > 0) {
            url.searchParams.append('chains', topGainersParams.chains.join());
        }
        if (topGainersParams?.limit) {
            url.searchParams.append('limit', topGainersParams.limit);
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Portfolio API request failed with status: ${response.status}`);
        }
        return response.json();
    }
    async getBlueChipTokensByChains(blueChipParams) {
        const url = new URL('/tokens-search/blue-chip', __classPrivateFieldGet(this, _TokenDiscoveryApiService_baseUrl, "f"));
        if (blueChipParams?.chains && blueChipParams.chains.length > 0) {
            url.searchParams.append('chains', blueChipParams.chains.join());
        }
        if (blueChipParams?.limit) {
            url.searchParams.append('limit', blueChipParams.limit);
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Portfolio API request failed with status: ${response.status}`);
        }
        return response.json();
    }
}
_TokenDiscoveryApiService_baseUrl = new WeakMap();
//# sourceMappingURL=token-discovery-api-service.mjs.map