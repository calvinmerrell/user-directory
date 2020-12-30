import React, { Component } from "react"
import Data from "./Data"

export default class EmployeeContainer extends Component {
    

    render() {
        return (
            <div className="employee-container" Pageturn Data={Data}>
                <p id="counter">{this.props.index+1}/{Data.length}</p>
                <h1 className="name">{Data[this.props.index].name.first} {Data[this.props.index].name.last}</h1>
                <br/>
                <h2> From: {Data[this.props.index].country}</h2>
                <h2>Job Title: {Data[this.props.index].title}</h2>
                <h2>Employer: {Data[this.props.index].employer}</h2>
                <br/>
                <h2>Favorite Movie: </h2>
                <ol className="movieList">
                    <li>{Data[this.props.index].favoriteMovies[0]}</li>
                    <li>{Data[this.props.index].favoriteMovies[1]}</li>
                    <li>{Data[this.props.index].favoriteMovies[2]}</li>
                </ol>
                
            </div>
        )
    }
}
            


