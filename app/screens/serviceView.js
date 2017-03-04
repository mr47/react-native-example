/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Service from './../components/service';

class ServiceView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<Service {...this.props} />);
    }
}

const mapStateToProps = (state)=>({
    ...state.active
});

export default connect(mapStateToProps)(ServiceView);


