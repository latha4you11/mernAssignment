import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({obj}) => {
  return (
    <tr>
      <td>{obj.patientName}</td>
      <td>{obj.age}</td>
      <td>{obj.place}</td>
      <td><Link to={`/edit/${obj._id}`} className="btn btn-primary">Edit</Link></td>
    </tr>
  );
}

export default TableRow;