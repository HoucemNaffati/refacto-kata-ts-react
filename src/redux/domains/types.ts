export const RECEIVE_DOMAINS = 'app/domains/RECEIVE_DOMAINS'

export interface DomainsState{
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

export interface ReceiveDomainsAction {
  type: typeof RECEIVE_DOMAINS,
  domains: string[],
}

export type DomainsAction = ReceiveDomainsAction
