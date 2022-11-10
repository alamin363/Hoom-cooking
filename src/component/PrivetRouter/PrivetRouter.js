import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { contextProvider } from '../Context/AuthContext';

const PrivetRouter = ({children}) => {
  const {user, loader} = useContext(contextProvider)
  const location = useLocation()
  if (loader) {
    return <Spinner aria-label="Default status example" />
  }
  if (!user?.uid) {
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivetRouter;