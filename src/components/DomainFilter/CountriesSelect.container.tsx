import {AppState} from "../../redux/store";
import {getCountries} from "../../redux/domains/selectors";
import {connect} from "react-redux";
import {DomainSelect} from "./DomainSelect";

const mapStateToProps = (state: AppState) => ({
    options: getCountries(state),
})

export default connect(mapStateToProps)(DomainSelect)