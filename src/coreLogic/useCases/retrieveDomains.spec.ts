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
            verifyRetrieveDomains();
        })
    }))

    function verifyRetrieveDomains() {
        const actual: AppState = {
            domains: {
                countries: getCountries(store.getState()),
                classifications: getClassifications(store.getState()),
                subClassifications: getSubClassifications(store.getState())
            }
        };
        expect(actual).toEqual(initialState);
    }

})