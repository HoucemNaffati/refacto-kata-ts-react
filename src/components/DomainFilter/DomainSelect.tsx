import React from "react";

interface Props {
    options: string[],
    name: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export class DomainSelect extends React.Component<Props, {}> {
    render() {
        return <select name={this.props.name} multiple onChange={this.props.onChange}>
            {this.props.options && this.props.options.map(country => (
                <option value={country} key={country}>{country}</option>
            ))}
        </select>;
    }
}