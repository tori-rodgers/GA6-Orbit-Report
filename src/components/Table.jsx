import classes from './styling.css';

const Table = ({ sat }) => {
  let buttonFilter = sat.map((sat, id) =>
    <tr key={id}>
      <td>{sat.name}</td>
      <td>{sat.type}</td>
      <td>{sat.launchDate}</td>
      <td>{sat.operational === true ? "Active" : "Inactive"}</td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {buttonFilter}
      </tbody>
   </table>
  );
};

export default Table;