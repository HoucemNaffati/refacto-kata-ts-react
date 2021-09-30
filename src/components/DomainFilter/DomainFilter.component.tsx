import React from 'react';

interface State {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
}

interface Props {
    countriesOptions: string[],
    classificationsOptions: string[],
    subClassificationsOptions: string[],
}

class DomainFilter extends React.Component<Props, State> {
    componentDidMount() {
        const {countriesOptions, classificationsOptions, subClassificationsOptions} = this.props
        this.state = {
            countries: [],
            classifications: [],
            subClassifications: []
        }


    }

    render() {
        const {countries, classifications, subClassifications} = this.state || {
            countries: [],
            classifications: [],
            subClassifications: []
        };

        return (<>
            <select name="countries" multiple>
                {countries.map(country => (
                    <option value={country} key={country}>{country}</option>
                ))}
            </select>
            <select name="classifications" multiple>
                {classifications.map(classification => (
                    <option value={classification} key={classification}>{classification}</option>
                ))}
            </select>
            <select name="subClassifications" multiple>
                {subClassifications.map(subClassification => (
                    <option value={subClassification} key={subClassification}>{subClassification}</option>
                ))}
            </select>
        </>)
    }
}

export default DomainFilter
