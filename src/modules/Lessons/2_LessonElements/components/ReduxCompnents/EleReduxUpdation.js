import {connect} from 'react-redux';
import React from 'react';
import updateTime from './Action/timeActions';


class Footer extends React.Component{

    componentDidMount() {
        this.timeUpdate();
    }

    timeUpdate = () => {
        setTimeout(this.timeUpdate, '60000');
        this.props.updateTime();
    }

    render () {
        let time = this.props.time;

        return (
            <div>{time}</div>
        );
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {updateTime})(Footer);