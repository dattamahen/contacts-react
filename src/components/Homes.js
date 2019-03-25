import React from 'react';
import './css/Home.css';

class Homes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "error" : null,
            "isLoaded" : false,
            "items" : []
        }
    }
    componentDidMount(){
        fetch("https://api.myjson.com/bins/nwldi")
            .then(res=>res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items:result
                });
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            })
    }
    render(){
        const {error,isLoaded,items}=this.state;
        if(error){
            return <div>Failed to fetch the contacts list...!</div>
        }else if(!isLoaded){
            return <div>Loading...!</div>
        }else{
            return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                </thead>
                <tbody> 
                       {items.map(item=>(
                           <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.contact}</td>
                                <td>{item.email}</td>
                           </tr>
                       ))}  
                </tbody>
            </table>    
            )
        }
        
    }
}

export default Homes;