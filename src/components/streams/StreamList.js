import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEdit = ({ userId, id }) => {
    if (this.props.currentUserId === userId) {
      return (
        <div className="right floated item">
          <Link to={`/streams/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/streams/delete/${id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderStreams = () => {
    return this.props.streams.map((stream) => {
      if (stream) {
        return (
          <div className="item" key={stream.id}>
            {this.renderEdit(stream)}
            <i className="large middle aligned icon camera" />

            <Link to={`/streams/${stream.id}`} className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </Link>
          </div>
        );
      }

      return null;
    });
  };

  renderCreateStram() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="ui basic green button">
          Create Stream
        </Link>
      );
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        <div style={{ textAlign: "right" }}>{this.renderCreateStram()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
