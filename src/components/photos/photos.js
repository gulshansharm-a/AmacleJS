import './photos.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Photos = () => {
  const navigate = useNavigate()
  const scrollLeft = () => {
    document.querySelector('.tcardcontainer').scrollBy({
      left: -250, // Adjust according to your card width
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    document.querySelector('.tcardcontainer').scrollBy({
      left: 250, // Adjust according to your card width
      behavior: 'smooth',
    });
  };
  const Logout = () => {
    localStorage.removeItem('email');
    navigate('/');
  }

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div id='mainDiv'>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <button onClick={Logout} >Logout</button>
        </ul>
      </nav>
      <div id='upperbody'>
      <div id='bodyOFImages' >
      <div className='innercontent' >
        
      </div>
      <div className='innercontent' >
        
        </div>
        <div className='innercontent' >
        
        </div>
        <div className='innercontent' >
        
        </div>
        <div className='innercontent' >
        
        </div>
        <div className='innercontent' >
        
        </div>
    </div>
      </div>

    </div>
  );
};

export default  Photos ;

