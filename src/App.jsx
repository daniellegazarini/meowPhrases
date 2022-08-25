import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchApi } from './redux/actions';

export class App extends Component {

  render() {
    const { isLoading, catFacts, getPhrase } = this.props;
    return (
      <div>
        <h1> Pensamentos de gatinhos </h1>
        {
          isLoading && <p>Loading... miau </p>
        }
        {
          !isLoading && <p> { catFacts } </p>
        }
        <button onClick={ () => getPhrase() }>Meow</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.getPhrase.isLoading,
  catFacts: state.getPhrase.phrase.data,
})

const mapDispatchToProps = (dispatch) => ({
  getPhrase: () => dispatch(fetchApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);