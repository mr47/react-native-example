/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ListItem from './../components/listItem';
import * as Actions from './../actions/'

class ServicesList extends Component {
    constructor(props){
        super(props);
    }
    renderRow(item){
        return (
            <ListItem {...this.props} item={item} />
        );
    }
    render(){
        return (
            <ListView style={styles.container} dataSource={this.props.dataSource} renderRow={(rowData) => this.renderRow(rowData)} />
        );
    }
}
const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state)=>({
    ...state,
    dataSource: dataSource.cloneWithRows(state.services)
});

const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators(Actions, dispatch)
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor: '#1c1d21'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);

