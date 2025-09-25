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
var _TokenSearchApiService_baseUrl;
import { AbstractTokenSearchApiService } from "./abstract-token-search-api-service.mjs";
export class TokenSearchApiService extends AbstractTokenSearchApiService {
    constructor(baseUrl) {
        super();
        _TokenSearchApiService_baseUrl.set(this, void 0);
        if (!baseUrl) {
            throw new Error('Portfolio API URL is not set');
        }
        __classPrivateFieldSet(this, _TokenSearchApiService_baseUrl, baseUrl, "f");
    }
    async searchTokens(tokenSearchParams) {
        const url = new URL('/tokens-search', __classPrivateFieldGet(this, _TokenSearchApiService_baseUrl, "f"));
        if (tokenSearchParams?.chains && tokenSearchParams.chains.length > 0) {
            url.searchParams.append('chains', tokenSearchParams.chains.join());
        }
        if (tokenSearchParams?.query) {
            url.searchParams.append('query', tokenSearchParams.query);
        }
        if (tokenSearchParams?.limit) {
            url.searchParams.append('limit', tokenSearchParams.limit);
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
    async searchSwappableTokens(swappableTokenSearchParams) {
        const url = new URL('/tokens-search/swappable', __classPrivateFieldGet(this, _TokenSearchApiService_baseUrl, "f"));
        url.searchParams.append('query', swappableTokenSearchParams.query);
        if (swappableTokenSearchParams?.limit) {
            url.searchParams.append('limit', swappableTokenSearchParams.limit);
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
_TokenSearchApiService_baseUrl = new WeakMap();
//# sourceMappingURL=token-search-api-service.mjs.map