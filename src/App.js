import React, { Component } from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import BookResults from './BookResults/BookResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [] 
    }
  }

  onUpdate(data) {
    this.setState({
      books: data,
    })
  }

  render() {
    return (
      <main>
        <Header />
        <SearchBar 
          books = {this.state.books} 
          onUpdate = {(data) => this.onUpdate(data)} />
        <BookResults books = {this.state.books} />
      </main>
    );
  }  
}

export default App;
