import {AppState} from '../store'

export function getCountries(state: AppState): string[] {
    return state.domains.countries
}

export function getClassifications(state: AppState): string[] {
    return state.domains.classifications
}

export function getSubClassifications(state: AppState): string[] {
    return state.domains.subClassifications
}