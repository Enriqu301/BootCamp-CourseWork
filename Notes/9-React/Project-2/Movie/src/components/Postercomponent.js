import React from 'react';

class PosterComponent extends React.Component {
    render() {
        return(
            <div className='poster-container'>
                <img 
                src={this.props.image} 
                alt={this.props.title} 
                className="poster-image"/>
            </div>
        );
    }
}
export default PosterComponent; 