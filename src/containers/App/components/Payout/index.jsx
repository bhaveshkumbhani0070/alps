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
            <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                    <div className="content-body">
                        <div className="row mb-0">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="card">
                                    <span>Payout section</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
};

export default (withRouter(Payout));