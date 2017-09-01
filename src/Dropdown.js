import React, { Component } from 'react';



class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened:false};
    }

    toogleState() {
        this.setState({ isOpened:!this.state.isOpened })
    }


    render() {
        console.log('isOpened', this.state.isOpened);
        let dropdownText;

        if(this.state.isOpened) {
            dropdownText = <div>This show dd</div>;
        }


        return (
            (
                <div onClick={this.toogleState.bind(this)}>
                    DD!
                    {dropdownText}
                </div>
            )
        )
    }

}


export default Dropdown;