/**
 * Created by dmitrypoddubniy on 05.03.17.
 */
/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceAdd from './../components/serviceAdd';
import * as Actions from './../actions/';
import { bindActionCreators } from 'redux';

class ServiceAddView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<ServiceAdd {...this.props} />);
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(Actions, dispatch)
});
const mapStateToProps = (state) => (state);
export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddView);


