import React from 'react';
import InfoComponent from './Infocomponent';
import PosterComponent from './Postercomponent';

class MovieComponent extends React.Component {
    render () {
        return(
            <div>
                <PosterComponent 
                    title={this.props.title} 
                    image={this.props.image}/>
                <InfoComponent 
                    title={this.props.title} 
                    director={this.props.director} 
                    cast={this.props.cast} />
            </div>
            
        );
    }
}


export default MovieComponent; 