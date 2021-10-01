import {AppState} from "../../redux/store";
import {getSubClassifications} from "../../redux/domains/selectors";
import {connect} from "react-redux";
import {DomainSelect} from "./DomainSelect";

const mapStateToProps = (state: AppState) => ({
    options: getSubClassifications(state),
})

export default connect(mapStateToProps)(DomainSelect)