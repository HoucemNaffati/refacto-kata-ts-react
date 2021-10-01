import {DomainsState} from "../../redux/domains/types";

export function retrieveDomains(retrievedEncodedDomains: string[]): DomainsState {
    const countries = retrievedEncodedDomains.map(domain => domain.split('_')[0]);
    const classifications = retrievedEncodedDomains.map(domain => domain.split('_')[1].split('-')[0]);
    const subClassifications = retrievedEncodedDomains.map(domain => domain.split('_')[1].split('-')[1]);
    return {countries, classifications, subClassifications}
}