import { items } from './data';
import { useState } from 'react';


const filterNames1 = (value) => {
  if (!value){
      return items
  }
   return items.filter((item) => item.name.includes(value));
};


const FilterMethod = () => {
    const [name, setName] = useState('');

  const filterNames=filterNames1(name);

 const updateFiltredNames = (e) => {
      setName(e.target.value);
 }


  return (
      <>

    <div>
      <input
        type="text"
         placeholder="Search"
        onChange={updateFiltredNames}
      />
    </div>
    <div>
        <ul>
            {filterNames.map((name1) => (
                <li key={name1.id}>{name1.name}</li>
            ))}
        </ul>
    </div>
      </>
  );
};

export default FilterMethod;
