import { connect } from 'react-redux'
import Home from '../components/Home';
import { AddToCART } from './../services/actions/action';

const mapStateToProps = state => ({
    // AddToCARTHandler: data => dispatch(AddToCART(data))
})
const mapDispatchToProps = dispatch => ({
    AddToCARTHandler: data => dispatch(AddToCART(data))
})
// export default Home;
export default connect(mapDispatchToProps, mapStateToProps)(Home); 
