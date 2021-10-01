import {DomainsState} from "../../redux/domains/types";

export function retrieveDomains(receivedEncodedDomains: string[]): DomainsState {
    validateDate();
    return {
        countries: extractCountries(),
        classifications: extractClassifications(),
        subClassifications: extractSubClassifications()
    }

    function validateDate() {
        receivedEncodedDomains.map(domain=>{
            if(invalidDomainEncoding(domain))
                throw Error('bad domain format')
        })
        function invalidDomainEncoding(domain: string) {
            return domain.length !== 9 || domain[2] !== '_' || domain[5] !== '-';
        }
    }

    function removeDuplicates(array: string[]) {
        return Array.from(new Set(array));
    }

    function extractCountries() {
        return removeDuplicates(receivedEncodedDomains.map(domain => domain.split('_')[0]));
    }

    function extractClassifications() {
        return removeDuplicates(receivedEncodedDomains.map(domain => domain.split('_')[1].split('-')[0]));
    }

    function extractSubClassifications() {
        return removeDuplicates(receivedEncodedDomains.map(domain => domain.split('_')[1].split('-')[1]));
    }
}