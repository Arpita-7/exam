
import React, { Component } from "react";
import Data from "../Data/myData.json";

class Table extends Component {

    constructor() {
        super();

        this.state = {
            search: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {


        return (
            <div className="container">
                <div>
                    <input type="text" placeholder="Enter item to be searched" onChange={(e) => this.searchSpace(e)} />
                </div>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Block</th>
                            <th scope="col">Cluster</th>
                            <th scope="col">Schoolid</th>
                            <th scope="col">Schoolname</th>
                            <th scope="col">Category</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Medium_of_inst</th>
                            <th scope="col">Address</th>
                            <th scope="col">Area</th>
                            <th scope="col">Pincode</th>
                            <th scope="col">Landmark</th>
                        </tr>
                         </thead>

                    {
                        Data.filter((data) => {
                            console.log("myData", Data)
                            if (this.state.search == null)
                                return data
                            else if (data.schoolname.toString().toLowerCase().includes(this.state.search.toLowerCase()) || data.block.toString().toLowerCase().includes(this.state.search.toLowerCase())) {
                                return data
                            }
                        }).map(data => {
                            return (

                                <tbody>
                                    <tr>
                                        <td>
                                            <p>{data.block}</p>
                                        </td>
                                        <td>
                                            <p>{data.cluster}</p>
                                        </td>
                                        <td>
                                            <p>{data.schoolid}</p>
                                        </td>
                                        <td>
                                            <p>{data.schoolname}</p>
                                        </td>
                                        <td>
                                            <p>{data.category}</p>
                                        </td>
                                        <td>
                                            <p>{data.gender}</p>
                                        </td>
                                        <td>
                                            <p>{data.medium_of_inst}</p>
                                        </td>
                                        <td>
                                            <p>{data.address}</p>
                                        </td>
                                        <td>
                                            <p>{data.area}</p>
                                        </td>
                                        <td>
                                            <p>{data.pincode}</p>
                                        </td>
                                        <td>
                                            <p>{data.landmark}</p>
                                        </td>
                                    </tr>
                                </tbody>
                          
                            );
                        })
                    }
                </table>



            </div>
        );
    }
}

export default Table;
