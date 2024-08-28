import satData from './satData.jsx';
import classes from './styling.css';

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div>
      {orbitTypes.map((sat, id) => {
          return(
            <button onClick={() => filterByType(sat)} key={id}>
              {sat} Orbit
              </button>
              );
            })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;