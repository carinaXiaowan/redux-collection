import { connect } from 'react-redux'
import Repeat from '../component/Repeat'

const mapStateToProps = state => ({
    numTimes: state.numTimes
})

export default connect(
  mapStateToProps
)(Repeat)