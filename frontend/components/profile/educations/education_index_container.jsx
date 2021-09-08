import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EducationIndex from './education_index'

const mapSTP = ({ session: { currentUser } }) => ({
    currentUser
});
  
const mapDTP = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))
});
  
export default withRouter(connect(mapSTP, mapDTP)(EducationIndex));