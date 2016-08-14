import React from 'react';
import MTextField from 'material-ui/TextField';

class TextField extends React.Component {
    render() {
        return ( <MTextField
                hintText="Enter your name"
                errorText="This field is required"
                floatingLabelText="Name"
                floatingLabelFixed={true}
            />);
    }
}


export default TextField;