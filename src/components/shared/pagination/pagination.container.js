import React from 'react';
import PaginationView from './pagination.presentation';
class PaginationContainer extends React.Component {
    
    render() {
        return (
            <PaginationView
                getPrevPageView={this.props.getPrevPageView}     
                getNextPageView={this.props.getNextPageView}
                disablePrev={this.props.disablePrev}
                disableNext={this.props.disableNext}
            />
        );
    }    
}

export default PaginationContainer;