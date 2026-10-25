import React, { Component } from "react";
class MyFriendDetailsComp extends Component {
    render() {
        const {name,contact,gender,address}=this.props;
        return (
            <div>
                <h2>Name:{name} Contact:{contact} Gender:{gender} Address:{address}</h2>

            </div>
        )
    }
}

export default MyFriendDetailsComp;