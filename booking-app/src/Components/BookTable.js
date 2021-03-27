import React from 'react';

import GroupOfButtons from '../Components/GroupOfButtons';

const BookTable = () => {
  return(
    <table align="center" className="bookings">
      <thead>
        <tr>
          <th>id</th>
          <th>Person Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Person 1</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Person 2</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Person 3</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BookTable;