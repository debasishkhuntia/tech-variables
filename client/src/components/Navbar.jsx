import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <header className='navbar bg-dark py-3'>
        <div className='container-fluid'>
          <div className='row w-100 px-3'>
            <div className='nav pe-0 d-flex justify-content-between align-items-center'>
              <Link to='/' className='logo'>
                Board of Doctors
              </Link>
              <Link to='/' className='login'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className='menubar py-3'>
        <div className='container'>
          <div className='row'>
            <select
              className='dropdown'
              onChange={props.handleDepartmentChange}
            >
              <option value=''>Department</option>
              <option value='neurology'>Neurology</option>
              <option value='pulmonology'>Pulmonology</option>
            </select>
            <select className='dropdown' onChange={props.handleAvailableChange}>
              <option value=''>Availability</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <select className='dropdown' onChange={props.handleCityChange}>
              <option value=''>Select City</option>
              <option value='bhubaneswar'>Bhubaneswar</option>
              <option value='cuttack'>Cuttack</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div class='dropdown'>
  <button
    class='btn btn-secondary dropdown-toggle'
    type='button'
    id='dropdownMenuButton'
    data-toggle='dropdown'
    aria-haspopup='true'
    aria-expanded='false'
  >
    Dropdown button
  </button>
  <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
    <a class='dropdown-item' href='#'>
      Action
    </a>
    <a class='dropdown-item' href='#'>
      Another action
    </a>
    <a class='dropdown-item' href='#'>
      Something else here
    </a>
  </div>
</div>; */
}
