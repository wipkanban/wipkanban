import React from 'react';

export default function (ComposedComponent) {
    return class ButtonDropDownContainer extends React.Component {
        constructor() {
            super();
            this.state = {
                open: false,
                dropdownClass: 'dropdown-menu dropdown-menu-right'
            };
        }

        toggleDropDown(event) {

            event.preventDefault();

            this.setState({
                open: !this.state.open,
                dropdownClass: this.state.open
                    ? 'dropdown-menu dropdown-menu-right'
                    : 'dropdown-menu dropdown-menu-right show'
            })

        }

        render() {
            return (<ComposedComponent
                dropdownClass={this.state.dropdownClass}
                toggleDropDown={this
                .toggleDropDown
                .bind(this)}
                {...this.props}/>)
        }
    }
}
