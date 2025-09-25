import type { ControllerGetStateAction, ControllerStateChangeEvent, RestrictedMessenger } from "@metamask/base-controller";
import { BaseController } from "@metamask/base-controller";
import type { AbstractTokenDiscoveryApiService } from "./token-discovery-api-service/abstract-token-discovery-api-service.cjs";
import type { AbstractTokenSearchApiService } from "./token-search-api-service/abstract-token-search-api-service.cjs";
import type { TokenSearchParams, TokenSearchResponseItem, MoralisTokenResponseItem, TrendingTokensParams, TopGainersParams, TopLosersParams, BlueChipParams, SwappableTokenSearchParams } from "./types.cjs";
declare const controllerName = "TokenSearchDiscoveryController";
export type TokenSearchDiscoveryControllerState = {
    recentSearches: TokenSearchResponseItem[];
    lastSearchTimestamp: number | null;
};
/**
 * The action which can be used to retrieve the state of the
 * {@link TokenSearchDiscoveryController}.
 */
export type TokenSearchDiscoveryControllerGetStateAction = ControllerGetStateAction<typeof controllerName, TokenSearchDiscoveryControllerState>;
/**
 * All actions that {@link TokenSearchDiscoveryController} registers, to be
 * called externally.
 */
export type TokenSearchDiscoveryControllerActions = TokenSearchDiscoveryControllerGetStateAction;
/**
 * All actions that {@link TokenSearchDiscoveryController} calls internally.
 */
type AllowedActions = never;
/**
 * The event that {@link TokenSearchDiscoveryController} publishes when updating
 * state.
 */
export type TokenSearchDiscoveryControllerStateChangeEvent = ControllerStateChangeEvent<typeof controllerName, TokenSearchDiscoveryControllerState>;
/**
 * All events that {@link TokenSearchDiscoveryController} publishes, to be
 * subscribed to externally.
 */
export type TokenSearchDiscoveryControllerEvents = TokenSearchDiscoveryControllerStateChangeEvent;
/**
 * All events that {@link TokenSearchDiscoveryController} subscribes to internally.
 */
type AllowedEvents = never;
/**
 * The messenger which is restricted to actions and events accessed by
 * {@link TokenSearchDiscoveryController}.
 */
export type TokenSearchDiscoveryControllerMessenger = RestrictedMessenger<typeof controllerName, TokenSearchDiscoveryControllerActions | AllowedActions, TokenSearchDiscoveryControllerEvents | AllowedEvents, AllowedActions['type'], AllowedEvents['type']>;
/**
 * Constructs the default {@link TokenSearchDiscoveryController} state. This allows
 * consumers to provide a partial state object when initializing the controller
 * and also helps in constructing complete state objects for this controller in
 * tests.
 *
 * @returns The default {@link TokenSearchDiscoveryController} state.
 */
export declare function getDefaultTokenSearchDiscoveryControllerState(): TokenSearchDiscoveryControllerState;
/**
 * The TokenSearchDiscoveryController manages the retrieval of token search results and token discovery.
 * It fetches token search results and discovery data from the Portfolio API.
 */
export declare class TokenSearchDiscoveryController extends BaseController<typeof controllerName, TokenSearchDiscoveryControllerState, TokenSearchDiscoveryControllerMessenger> {
    #private;
    constructor({ tokenSearchService, tokenDiscoveryService, state, messenger, }: {
        tokenSearchService: AbstractTokenSearchApiService;
        tokenDiscoveryService: AbstractTokenDiscoveryApiService;
        state?: Partial<TokenSearchDiscoveryControllerState>;
        messenger: TokenSearchDiscoveryControllerMessenger;
    });
    searchTokens(tokenSearchParams: TokenSearchParams): Promise<TokenSearchResponseItem[]>;
    searchSwappableTokens(swappableTokenSearchParams: SwappableTokenSearchParams): Promise<TokenSearchResponseItem[]>;
    getTrendingTokens(params: TrendingTokensParams): Promise<MoralisTokenResponseItem[]>;
    getTopGainers(params: TopGainersParams): Promise<MoralisTokenResponseItem[]>;
    getTopLosers(params: TopLosersParams): Promise<MoralisTokenResponseItem[]>;
    getBlueChipTokens(params: BlueChipParams): Promise<MoralisTokenResponseItem[]>;
}
export {};
//# sourceMappingURL=token-search-discovery-controller.d.cts.map