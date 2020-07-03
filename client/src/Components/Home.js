import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  handleInputAction,
  fetchWishAction,
  handleSubmitAction,
  handleDeleteAction,
} from '../myaction/Action';

class Home extends Component {
  state = {
    text: '',
    mywishes: [{ _id: 1, wish: 'loading' }],
  };

  handleDelete(id) {}

  componentDidMount() {
    this.props.fetchwish();
  }

  handleSubmit(e) {}
  render() {
    const list = this.props.mywishes.map((item) => {
      return (
        <a
          className="collection-item"
          key={item._id}
          onClick={() => this.props.handleDelete(item._id)}
        >
          {item.wish}
        </a>
      );
    });
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input
            type="text"
            name="item"
            value={this.props.text}
            placeholder="enter text"
            onChange={(e) => this.props.handleInput(e.target.value)}
          />
          <button className="waves-effect waves-light btn" type="submit">
            Add
          </button>
        </form>

        <div className="collection">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
    mywishes: state.mywishes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (input) => {
      dispatch(handleInputAction(input));
    },
    fetchwish: () => {
      dispatch(fetchWishAction());
    },
    handleSubmit: (e) => {
      dispatch(handleSubmitAction(e));
    },
    handleDelete: (id) => {
      dispatch(handleDeleteAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
