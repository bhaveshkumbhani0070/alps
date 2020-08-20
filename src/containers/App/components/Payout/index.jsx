import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Payout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
        // const {  } = this.state;
        // const {  } = this.props;
        return (
            <div>
                <span>Payout section</span>
            </div>
            )
    }
};

export default (withRouter(Payout));