import React, {Component} from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class DirectMessasges extends Component {
    state = {
        users: [],
    };


    render() {
        const { users } = this.state;

        return (
            <Menu.Menu className="menu">
                <Menu.Item>
                    <span>
                        <Icon name="mail"/> DIRECT MESSAGES
                    </span>{' '}
                    ({ users.length })
                </Menu.Item>
                {/* Users to send direct messages */}
            </Menu.Menu>
        );
    }
}

export default DirectMessasges;
