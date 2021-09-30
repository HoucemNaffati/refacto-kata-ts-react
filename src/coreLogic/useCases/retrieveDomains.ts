import {DomainsState} from "../../redux/domains/types";

export function retrieveDomains(retrievedEncodedDomains: string[]): DomainsState {
    if (retrievedEncodedDomains.length === 0)
        return {
            countries: [],
            classifications: [],
            subClassifications: []
        }
    else
        return {
            countries: ["FR"],
            classifications: ["NK"],
            subClassifications: ["WOL"]
        }
}