import {DomainsAction, DomainsState, RECEIVE_DOMAINS} from './types'
import {retrieveDomains} from "../../coreLogic/useCases/retrieveDomains";

const initialState: DomainsState = {countries: [], classifications: [], subClassifications: []};

export function domainsReducer(
    state = initialState,
    action: DomainsAction
): DomainsState {
    switch (action.type) {
        case RECEIVE_DOMAINS:
            const newState = retrieveDomains(action.domains);
            return {
                ...state,
                countries: newState.countries,
                classifications: newState.classifications,
                subClassifications: newState.subClassifications
            }
        default:
            return state
    }
}

export default domainsReducer
