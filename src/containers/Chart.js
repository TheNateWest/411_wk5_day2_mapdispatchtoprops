import { connect } from 'react-redux'
import Chart from '../components/Chart'

const mapStateToProps = (state) => {
    console.log(state.cars, 'redux chart')
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Chart)
