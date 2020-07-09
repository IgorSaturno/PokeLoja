import React, { Component } from 'react';
import styled from 'styled-components';



export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark fixed-top">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                        PokeLoja
                    </a>
                    
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    
                </nav>
            </div>
        )
    }
}
