import {AppState} from "../../redux/store";
import {getClassifications} from "../../redux/domains/selectors";
import {connect} from "react-redux";
import {DomainSelect} from "./DomainSelect";

const mapStateToProps = (state: AppState) => ({
    options: getClassifications(state),
})

export default connect(mapStateToProps)(DomainSelect)