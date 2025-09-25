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
var _TokenSearchDiscoveryController_tokenSearchService, _TokenSearchDiscoveryController_tokenDiscoveryService;
import { BaseController } from "@metamask/base-controller";
// === GENERAL ===
const controllerName = 'TokenSearchDiscoveryController';
const tokenSearchDiscoveryControllerMetadata = {
    recentSearches: { persist: true, anonymous: false },
    lastSearchTimestamp: { persist: true, anonymous: false },
};
/**
 * Constructs the default {@link TokenSearchDiscoveryController} state. This allows
 * consumers to provide a partial state object when initializing the controller
 * and also helps in constructing complete state objects for this controller in
 * tests.
 *
 * @returns The default {@link TokenSearchDiscoveryController} state.
 */
export function getDefaultTokenSearchDiscoveryControllerState() {
    return {
        recentSearches: [],
        lastSearchTimestamp: null,
    };
}
/**
 * The TokenSearchDiscoveryController manages the retrieval of token search results and token discovery.
 * It fetches token search results and discovery data from the Portfolio API.
 */
export class TokenSearchDiscoveryController extends BaseController {
    constructor({ tokenSearchService, tokenDiscoveryService, state = {}, messenger, }) {
        super({
            name: controllerName,
            metadata: tokenSearchDiscoveryControllerMetadata,
            messenger,
            state: { ...getDefaultTokenSearchDiscoveryControllerState(), ...state },
        });
        _TokenSearchDiscoveryController_tokenSearchService.set(this, void 0);
        _TokenSearchDiscoveryController_tokenDiscoveryService.set(this, void 0);
        __classPrivateFieldSet(this, _TokenSearchDiscoveryController_tokenSearchService, tokenSearchService, "f");
        __classPrivateFieldSet(this, _TokenSearchDiscoveryController_tokenDiscoveryService, tokenDiscoveryService, "f");
    }
    async searchTokens(tokenSearchParams) {
        const results = await __classPrivateFieldGet(this, _TokenSearchDiscoveryController_tokenSearchService, "f").searchTokens(tokenSearchParams);
        this.update((state) => {
            state.recentSearches = results;
            state.lastSearchTimestamp = Date.now();
        });
        return results;
    }
    async searchSwappableTokens(swappableTokenSearchParams) {
        const results = await __classPrivateFieldGet(this, _TokenSearchDiscoveryController_tokenSearchService, "f").searchSwappableTokens(swappableTokenSearchParams);
        this.update((state) => {
            state.recentSearches = results;
            state.lastSearchTimestamp = Date.now();
        });
        return results;
    }
    async getTrendingTokens(params) {
        return __classPrivateFieldGet(this, _TokenSearchDiscoveryController_tokenDiscoveryService, "f").getTrendingTokensByChains(params);
    }
    async getTopGainers(params) {
        return __classPrivateFieldGet(this, _TokenSearchDiscoveryController_tokenDiscoveryService, "f").getTopGainersByChains(params);
    }
    async getTopLosers(params) {
        return __classPrivateFieldGet(this, _TokenSearchDiscoveryController_tokenDiscoveryService, "f").getTopLosersByChains(params);
    }
    async getBlueChipTokens(params) {
        return __classPrivateFieldGet(this, _TokenSearchDiscoveryController_tokenDiscoveryService, "f").getBlueChipTokensByChains(params);
    }
}
_TokenSearchDiscoveryController_tokenSearchService = new WeakMap(), _TokenSearchDiscoveryController_tokenDiscoveryService = new WeakMap();
//# sourceMappingURL=token-search-discovery-controller.mjs.map