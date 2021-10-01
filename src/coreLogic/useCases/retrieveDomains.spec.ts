import createStore, {AppState} from "../../redux/store";
import {Store} from "redux";
import {receiveDomains} from "../../redux/domains/actions";
import {getClassifications, getCountries, getSubClassifications} from "../../redux/domains/selectors";

describe("testing retrieveDomains usecase", () => {
        let store: Store<AppState>;
        let initialState: AppState;
        let domainsData: string[];

        beforeEach(() => {
            store = createStore();
            initialState = store.getState();
            domainsData = [];
        });

        describe("when no domain received", (() => {
            it("retrieves noting when receiving empty data", () => {
                store.dispatch(store.dispatch(receiveDomains(domainsData)))
                verifyRetrieveDomains({
                    domains: {
                        countries: [],
                        classifications: [],
                        subClassifications: []
                    }
                });
            });
        }));

        describe("happy path", (() => {
            it("retrieves all domains' attributes when receiving a single value", () => {
                domainsData = ["FR_NK-WOL"];
                store.dispatch(store.dispatch(receiveDomains(domainsData)))
                verifyRetrieveDomains({
                    domains: {
                        countries: ["FR"],
                        classifications: ["NK"],
                        subClassifications: ["WOL"]
                    }
                });
            })

            it("retrieves all domains' attributes when receiving two values without duplicates", () => {
                domainsData = ["FR_NK-WOL", "US_OK-WOK"];
                store.dispatch(store.dispatch(receiveDomains(domainsData)))
                verifyRetrieveDomains({
                    domains: {
                        countries: ["FR", "US"],
                        classifications: ["NK", "OK"],
                        subClassifications: ["WOL", "WOK"]
                    }
                });
            })

            it("retrieves all domains' attributes when receiving two values and includes duplicates", () => {
                domainsData = ["FR_NK-WOL", "US_OK-WOK", 'FR_OK-NPP',];
                store.dispatch(store.dispatch(receiveDomains(domainsData)))
                verifyRetrieveDomains({
                    domains: {
                        countries: ["FR", "US"],
                        classifications: ["NK", "OK"],
                        subClassifications: ["WOL", "WOK", "NPP"]
                    }
                });
            })
        }))

        describe("failure path", (() => {
            it("retrieves nothing when receiving a unique value with bad format", () => {
                domainsData = ["FR-NK_WOL"];
                store.dispatch(store.dispatch(receiveDomains(domainsData)))
                verifyRetrieveDomains({
                    domains: {
                        countries: [],
                        classifications: [],
                        subClassifications: []
                    }
                });
            })
        }));

        function verifyRetrieveDomains(expectedState: AppState) {
            const actual: AppState = {
                domains: {
                    countries: getCountries(store.getState()),
                    classifications: getClassifications(store.getState()),
                    subClassifications: getSubClassifications(store.getState())
                }
            };
            expect(actual).toEqual({...initialState, ...expectedState});
        }

    }
)