import React, { Component } from 'react';

export default class BookResults extends Component {
   
   render() {
      const results = this.props.books.map(book => <li>
        {book.volumeInfo.title}
      </li>);
      return(
         <div>
            <ul>
               {results}
            </ul>
         </div>
      );
   }
}

