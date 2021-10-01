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

class DomainSelect extends React.Component<{ data: string[], name: string }, { selected: string }> {
    render() {
        return <select name={this.props.name} multiple>
            {this.props.data && this.props.data.map(country => (
                <option value={country} key={country}>{country}</option>
            ))}
        </select>;
    }
}

class DomainFilter extends React.Component<Props, State> {

    render() {
        const {countriesOptions, classificationsOptions, subClassificationsOptions} = this.props;
        return (<>
            <DomainSelect data={countriesOptions} name="countries"/>
            <DomainSelect data={classificationsOptions} name="classifications"/>
            <DomainSelect data={subClassificationsOptions} name="subClassifications"/>
        </>)
    }
}

export default DomainFilter
