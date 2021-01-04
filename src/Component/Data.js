import React, { Component } from 'react'
import "./Data.css"
import axios from "axios"



class Data extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                this.setState({ posts: response.data })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { posts } = this.state
        return (
            <div className="data">
                {
                    posts.map(post => <div key={post.id}>{post.body}

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 sm-4 mt-3">
                                    <div className="card">
                                        <div  style={{backgroundColor: "lightblue",display:"flex"}} className="card-horizontal">
                                            <div className="img-square-wrapper">
                                                <img className="photo" src={post.flag} alt="Flag image" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title"><b>capital : </b>{post.capital}</h4>
                                                <p className="card-text"><b>Population : </b>{post.population}</p>
                                                <p className="card-text"><b>Demonym : </b>{post.demonym}</p>
                                                <p className="card-text"><b>Region : </b>{post.region}</p>
                                                <p className="card-text"><b>CallingCodes : </b>{post.callingCodes}</p>
                                                <p className="card-text"><b>Alpha2Code : </b>{post.alpha2Code}</p>    
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <h1 className="text-muted">{post.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Data;
