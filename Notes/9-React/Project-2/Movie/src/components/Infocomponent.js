import React from 'react';

class InfoComponent extends React.Component {
    render() {
        return(
            <div>
                <h2 className='header'>{this.props.title}</h2>
                <p>Director: {this.props.director}</p>
                <p>Cast: {this.props.cast.join(', ')}</p>
            </div>
        );
    }
}
export default InfoComponent; 