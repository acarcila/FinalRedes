import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['var1', 'var2'],
            tableData: []
        }

        this.renderTableHeader = this.renderTableHeader.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
    }

    render() {
        return (
            <div>
                <h1>home</h1>
                <form action="/">
                    <input type="submit" value="Login" />
                    <table id='students'>
                        <tbody>
                            {this.renderTableHeader()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

    componentDidMount() {

        console.log("a", this.state.tableData);
    }

    renderTableHeader() {
        return <tr><th>var1</th><th>var2</th></tr>
    }

    renderTableData() {
        axios.get('http://localhost:8080/mongo/usuarios').then((response) => {
            console.log(response.data);
            var array = response.data;
            var arregloFinal = [];
            var i = 0;
            array.forEach(element => {
                arregloFinal[i] = [element.var1, element.var2];
                i += 1;
            });

            this.setState(previousState => (
                { tableData: arregloFinal }
            ));

        })
            .catch(function (error) {
                console.log(error);
            });
        return this.state.tableData.map((element) => {
            return (
                <tr>
                    <td>{element[0]}</td>
                    <td>{element[1]}</td>
                </tr>
            )
        })
    }
}

export default Home;