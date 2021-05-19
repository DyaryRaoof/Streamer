import history from "../../history";
import Modal from "../Modal";
import { deleteStream, fetchStream } from "../../actions";
import { connect } from "react-redux";
import React from "react";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = (
    //you could use React.Fragment to prevent styling issues with the extra div outside
    //or <> </>
    <React.Fragment>
      <button
        onClick={() => this.props.deleteStream(this.props.match.params.id)}
        className="ui negative button"
      >
        Delete
      </button>
      <button onClick={() => history.push("/")} className="ui button">
        Cancel
      </button>
    </React.Fragment>
  );

  renderContent() {
    if (this.props.stream) {
      return `are you sure you want to delete this stream? ${this.props.stream.title}`;
    } else {
      return "Loading ...";
    }
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
