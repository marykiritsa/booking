import React from 'react';

import getAllBooks, { name } from '../api/books';
import GroupOfButtons from '../Components/GroupOfButtons';

class BookTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getAllBooks().then((data) => {
      this.setState({
        books: data,
      });
  })

  
}
 renderBook(book) {
  return(
    <tr key={book.id}>
      <td>{book.id + 1}</td>
      <td><strong>{book.number + "; "}</strong>
      {book.day + " -> " + book.place}</td>
      <td><GroupOfButtons /></td>
    </tr>  
  )
}

  render(){
    return(
      <table align="center" className="orders"> 
      <thead>
        <tr>
          <th>id</th>
          <th>Books</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.books.map(this.renderBook)}
      </tbody>
    </table>
    )
  }
}

export default BookTable;