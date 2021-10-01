import React from 'react';
import CountriesSelect from "../DomainSelect/CountriesSelect.container";
import ClassificationSelect from "../DomainSelect/ClassificationSelect.container";
import SubClassificationSelect from "../DomainSelect/SubClassificationSelect.container";

interface State {
    selectedCountry: string,
    selectedClassification: string,
    selectedSubClassification: string
}

type event = React.ChangeEvent<HTMLSelectElement>;

class DomainFilter extends React.Component<{}, State> {
    componentDidMount() {
        this.setState({selectedCountry: "", selectedClassification: "", selectedSubClassification: ""})
    }

    onCountryChange = (e: event) => this.setState({...this.state, selectedCountry: e.target.value});
    onClassificationChange = (e: event) => this.setState({...this.state, selectedClassification: e.target.value});
    onSubClassificationChange = (e: event) => this.setState({...this.state, selectedSubClassification: e.target.value});

    render() {
        return (<>
            <CountriesSelect name="countries" onChange={this.onCountryChange}/>
            <ClassificationSelect name="classifications" onChange={this.onClassificationChange}/>
            <SubClassificationSelect name="subClassifications" onChange={this.onSubClassificationChange}/>
            <p> STATE: {JSON.stringify(this.state)}</p>
        </>)
    }
}

export default DomainFilter
