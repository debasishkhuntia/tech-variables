const Card = ({ info }) => {
  return (
    <>
      <div className='panel rounded px-4 py-3'>
        <div className='d-flex'>
          <div className='image'>
            <img src={`image/${info?.image}`} alt='' />
          </div>
          <div className='right w-100 px-4'>
            <h3>{info?.name}</h3>
            <p>{info?.experience} years experience</p>
            <p className='text-uppercase dept'>{info?.position}</p>
            <div className='d-flex justify-content-between'>
              <div className='dept'>
                {info?.department &&
                  info?.department.map((dept, indx) => (
                    <p key={indx}>{dept}</p>
                  ))}
              </div>
              <h5>
                <strong>₹{info?.fee}</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className='bottom mt-2 d-flex justify-content-between align-items-center w-100'>
          <p>
            Next availibility <br /> at {info?.time}
          </p>
          <div
            onClick={() =>
              alert(
                `Doctor is ${
                  info?.available === 'yes' ? 'available' : 'not available'
                }`
              )
            }
          >
            Schedule now
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
