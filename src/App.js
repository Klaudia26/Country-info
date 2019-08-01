import React, { Component } from 'react';
import Form from './Form';
import ErrorMsg from './ErrorMsg';
import CountryInfo from './CountryInfo';

class App extends Component {
    state = {
        country: "",
        error: "",
        countries: [],
    }
    handleChange = (e) => {
        this.setState({
            country: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const country = this.state.country;
        fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(res => this.setState({
                countries: res,
                error: "",
            }))
            .catch(error => this.setState({
                countries: [],
                error: error.message
            }))
    }
    render() {
        return (
            <>
                <h1>Countries || Information</h1>
                <Form
                    inputValue={this.state.country}
                    inputChange={this.handleChange}
                    formSubmit={this.handleSubmit}
                />
                {this.state.error && <ErrorMsg message={this.state.error} />}
                <CountryInfo countries={this.state.countries} />
            </>
        )
    }
}

export default App;
