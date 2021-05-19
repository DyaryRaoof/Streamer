import React from "react";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <StreamForm
          onFormSubmit={this.onFormSubmit}
          submitButtonName="Create"
        />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
