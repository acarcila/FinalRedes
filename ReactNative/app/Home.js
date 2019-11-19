import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['var1', 'var2'],
      tableData: []
    }
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={this.state.tableHead} />
          <Rows data={this.state.tableData} />
        </Table>
      </View>
    );
  }

  componentDidMount() {
    axios.get('http://192.168.1.22:8080/mongo/usuarios').then((response) => {
      var array = response.data;
      var arregloFinal = [];
      var i = 0;
      array.forEach(element => {
        arregloFinal[i] = [element.var1, element.var2];
        i += 1;
      });
      console.log(arregloFinal);

      this.setState(previousState => (
        { tableData: arregloFinal }
      ));

    })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});