import React, { Component } from 'react';

export default class SearchBar extends Component {
   handleSubmit(e) {
      e.preventDefault();
      const url = 'https://www.googleapis.com/books/v1/volumes?q=computer-science&key=AIzaSyBQK0gQdXO5jfZThhCFND45UGDVfwYCLl4';
      const options = {
         method: 'GET',
         headers: {
            "Content-Type": "application/json",
         }
      }
      fetch(url, options)
         .then(res => res.json())
         .then(data => {
            this.props.onUpdate(data.items)
            
      })
   }
   render() {
      return(
         <div>
            <form className='search-form' id='search-form' onSubmit={e => this.handleSubmit(e)}>
               <div id='search-box'>
                  <label htmlFor='search-input'>Search: </label>
                  <input type='text' id='search-input' placeholder='Search for a title, author, or theme'/>
                  <button type='submit' id='search-button'>Search</button>
               </div>
               <div id='filter-options'>
                  <label htmlFor='print-type-filter'>Print Type: </label>
                  <select id='print-type-filter'>
                     <option value='e-book'>eBook</option>
                     <option value='hardcover'>Hardcover</option>
                     <option value='paperback'>Paperback</option>
                  </select>
                  <label htmlFor='book-type-filter'>Book Type: </label>
                  <select id='book-type-filter'>
                     <option value='fiction'>Fiction</option>
                     <option value='non-fiction'>Non-fiction</option>
                     <option value='biography'>Biography</option>
                     <option value='educational'>Educational</option>
                  </select>
               </div>
            </form>
         </div>
      )
   }
}