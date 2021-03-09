import React from 'react';
import { render } from 'react-dom';


class HideText extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                textDisplay: false,
            }
        }

        /* Toggle button */
        ToggleButton(){
            this.setState ((currentState) => ({
                    textDisplay: currentState.textDisplay,
            }));
        }
        
    render(){
        return(
            <div>
                <button onClick={() => this.ToggleButton()}>
                Toggle
                </button>
                {!this.state.textDisplay && this.props.text}
            </div>
        )
    }
}

export default HideText;