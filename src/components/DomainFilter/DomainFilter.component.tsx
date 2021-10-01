import React from 'react';
import {DomainSelect} from "./DomainSelect";

interface State {
    selectedCountry: string,
    selectedClassification: string,
    selectedSubClassification: string
}

interface Props {
    countriesOptions: string[],
    classificationsOptions: string[],
    subClassificationsOptions: string[],
}

class DomainFilter extends React.Component<Props, State> {
    componentDidMount() {
        this.setState({ selectedCountry: "", selectedClassification: "", selectedSubClassification: ""})
    }

    render() {
        const {countriesOptions, classificationsOptions, subClassificationsOptions} = this.props;
        return (<>
            <DomainSelect data={countriesOptions}
                          name="countries"
                          onChange={e => this.setState({...this.state, selectedCountry: e.target.value})}
            />
            <DomainSelect data={classificationsOptions}
                          name="classifications"
                          onChange={e => this.setState({...this.state, selectedClassification: e.target.value})}
            />
            <DomainSelect data={subClassificationsOptions}
                          name="subClassifications"
                          onChange={e => this.setState({...this.state, selectedSubClassification: e.target.value})}
            />
            <p> STATE: {JSON.stringify(this.state)}</p>
        </>)
    }
}

export default DomainFilter
