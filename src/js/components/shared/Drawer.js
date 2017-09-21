import React, { Component } from "react";
import { Drawer as ToolboxDrawer } from 'react-toolbox/lib/drawer';
import { Button } from 'react-toolbox/lib/button';

export default class Drawer extends Component {
    constructor() {
        super();
        this.state = { active: false };
    }

    handleToggle = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        return (
            <div>
                <Button label='Show Drawer' raised accent onClick={this.handleToggle} />
                <ToolboxDrawer active={this.state.active} onOverlayClick={this.handleToggle}>
                <h5>This is your Drawer.</h5>
                <p>You can embed any content you want, for example a Menu.</p>
                </ToolboxDrawer>
            </div>
        );
    }
}