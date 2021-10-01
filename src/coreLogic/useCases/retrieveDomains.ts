import {DomainsState} from "../../redux/domains/types";

export function retrieveDomains(retrievedEncodedDomains: string[]): DomainsState {
    return {
        countries: extractCountries(),
        classifications: extractClassifications(),
        subClassifications: extractSubClassifications()
    }

    function removeDuplicates(array: string[]) {
        return [...new Set(array)]
    }

    function extractCountries() {
        return removeDuplicates(retrievedEncodedDomains.map(domain => domain.split('_')[0]));
    }

    function extractClassifications() {
        return removeDuplicates(retrievedEncodedDomains.map(domain => domain.split('_')[1].split('-')[0]));
    }

    function extractSubClassifications() {
        return removeDuplicates(retrievedEncodedDomains.map(domain => domain.split('_')[1].split('-')[1]));
    }
}