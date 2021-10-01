import React from "react";

interface Props {
    data: string[],
    name: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export class DomainSelect extends React.Component<Props, {}> {
    render() {
        return <select name={this.props.name} multiple onChange={this.props.onChange}>
            {this.props.data && this.props.data.map(country => (
                <option value={country} key={country}>{country}</option>
            ))}
        </select>;
    }
}