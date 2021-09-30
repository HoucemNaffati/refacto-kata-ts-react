import DomainFilter from './DomainFilter.component';
import {connect} from 'react-redux'
import {AppState} from '../../redux/store';
import {getClassifications, getCountries, getSubClassifications} from "../../redux/domains/selectors";

const mapStateToProps = (state: AppState) => ({
    countriesOptions: getCountries(state),
    classificationsOptions: getClassifications(state),
    subClassificationsOptions: getSubClassifications(state),
})

export default connect(mapStateToProps)(DomainFilter)
