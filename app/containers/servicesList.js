/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import React, { Component } from 'react';
import { ListView, StyleSheet, TextInput, View } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from './../components/listItem';
import * as Actions from './../actions/';
import Separator from './../components/separator';

class ServicesList extends Component {
    constructor(props){
        super(props);
        this.updateSearchFilter = (text) => {
            this.props.setSearchFilter(text);
        };
    }
    renderRow(item){
        return (
            <ListItem {...this.props} item={item} />
        );
    }
    renderSeparator(sectionID, rowID){
        return (
            <Separator key={`${sectionID}-${rowID}`} />
        );
    }
    componentDidMount(){
        this.props.loadServices();
    }
    render(){
        let { updateSearchFilter, renderSeparator } = this;
        return (
            <View style={styles.container}>
                <View style={styles.searchHolder}>
                    <TextInput onChangeText={updateSearchFilter} placeholder={'Search Services'} placeholderTextColor={'#3d4246'} style={styles.search}/>
                </View>
                <ListView dataSource={this.props.dataSource} renderRow={(rowData) => this.renderRow(rowData)} renderSeparator={renderSeparator} />
            </View>
        );
    }
}
const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});

const filterFn = (state)=> {
    return function(item){
        return state.services.searchText.length > 0 ? item.name.toLowerCase().indexOf(state.services.searchText.toLowerCase()) >= 0 : true
    }
};

const mapStateToProps = (state) => {
    // can we done in another way but only one place where we are using filters so ...
    let items = state.services.items.filter(filterFn(state));
    return {
        ...state,
        dataSource: dataSource.cloneWithRows(items)
    };
};

const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators(Actions, dispatch)
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor: '#1c1d21',
        flex: 1
    },
    search: {
        height: 38,
        borderWidth: 0,
        backgroundColor: '#292c31',
        color: '#616569',
        padding: 8,
        margin: 10
    },
    searchHolder: {
        backgroundColor: '#121214'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);

