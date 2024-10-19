import React from 'react';

const DynamicTable = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  // Extract column names from the keys of the first object in the array
  const columns = Object.keys(data[0]);

  return (
    <table border="1">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Sample data to test the table
const data = [
  { name: 'pragnesh', age: 21, city: 'Gondal' },
  { name: 'yaksh', age: 21, city: 'Gondal' },
  { name: 'Asthaa', age: 20, city: 'Bhavnagar' },
  {name:'Charchilseth',age:20,city:'Gondalstate'}
];

const App = () => {
  return (
    <div>
      <h1>Dynamic Table</h1>
      <DynamicTable data={data} />
    </div>
  );
};

export default App;
