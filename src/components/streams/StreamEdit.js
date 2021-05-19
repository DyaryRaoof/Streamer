import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onFormSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    const stream = this.props.stream;
    if (stream) {
      return (
        <StreamForm
          onFormSubmit={this.onFormSubmit}
          submitButtonName="Update"
          initialValues={{
            title: stream.title,
            description: stream.description,
          }}
        />
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchStream,
  editStream,
})(StreamEdit);
