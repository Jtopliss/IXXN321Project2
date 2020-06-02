import React, { Component } from 'react'
import "../css/TableBooking.css";
export default class TableBooking extends Component {
    constructor(props) {
    super(props);
    this.state = {name:''};
    this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    
    render() {
        return (
            <>
            <form>
                <div class="TableBooking">
                <h5>Jareds Restaurant</h5>
                <h2>Table Reservation</h2>
                <br></br>
                <label>
                    Name:
                    <input type="text" value={this.state.name}
                    onChange={this.handleNameChange} />
                    Age:
                    <input type="text" value={this.state.age}
                    onChange={this.handleAgeChange} />
                     Phone Number:
                    <input type="text" value={this.state.phonenumber}
                    onChange={this.handlePhoneNumberChange} />
                     Number of People:
                    <input type="text" value={this.state.numberofpeople}
                    onChange={this.handleNumberofpeopleChange} />
                    <br></br>
                    <br></br>
                    Date:
                    <input type="date" value={this.state.date}
                    onChange={this.handleDateChange} />
                    Time:
                    <input type="time" value={this.state.time}
                    onChange={this.handleTimeChange} />
                </label>
                <br></br>
                <br></br>
                <input type="Submit" value="Submit" />
                </div>
            </form>
            </>
        )
    }
}
