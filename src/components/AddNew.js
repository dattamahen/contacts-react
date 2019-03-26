import React from 'react';

class AddNew extends React.Component{
    render(){
        return (
            <form>
                <br/>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br/>
            <label>
                Last Name:
                <input type="text" name="lastName" />
            </label>
            <br/>
            <label>
               Phone:
                <input type="text" name="Phone" />
            </label>
            <br/>
            <label>
               Email:
                <input type="text" name="email" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
            </form>
        )
    }
} 

export default AddNew;