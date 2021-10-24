import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  const handleAvailableChange = (e) => {
    const filteredArr = doctors.filter((doc) => {
      if (e.target.value === '') return doctors;
      else return doc.available === e.target.value;
    });
    setFilteredArr(filteredArr);
  };

  const handleCityChange = (e) => {
    const filteredArr = doctors.filter((doc) => {
      if (e.target.value === '') return doctors;
      else return doc.city === e.target.value;
    });
    setFilteredArr(filteredArr);
  };

  const handleDepartmentChange = (e) => {
    const filteredDept = doctors.filter((doc) => {
      if (e.target.value === '') return doctors;
      else return doc?.department.includes(e.target.value);
    });
    setFilteredArr(filteredDept);
  };

  useEffect(() => {
    fetch('http://localhost:4000/api/doctors')
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data?.doctors);
        setFilteredArr(data?.doctors);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(filteredArr);

  return (
    <div className='App'>
      <Navbar
        handleCityChange={handleCityChange}
        handleDepartmentChange={handleDepartmentChange}
        handleAvailableChange={handleAvailableChange}
      />
      <section>
        <div className='container py-4'>
          <div className='row'>
            {filteredArr &&
              filteredArr.length &&
              filteredArr.map((doctor) => (
                <div key={doctor.id} className='col-md-4 col-12 py-2'>
                  <Card info={doctor} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
