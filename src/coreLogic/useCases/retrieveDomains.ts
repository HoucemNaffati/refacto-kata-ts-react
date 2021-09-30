import {DomainsState} from "../../redux/domains/types";

export function retrieveDomains(retrievedEncodedDomains: string[]): DomainsState {
    return {
        classifications: [],
        countries: [],
        subClassifications:[]
    }
}