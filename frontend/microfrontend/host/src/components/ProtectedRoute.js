import {useLocation, Navigate} from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props  }) => {
  const location = useLocation();
  const loggedIn = !!window.GlobalStore.getStore('User');
  if (!loggedIn) {
    return <Navigate to='./auth/signin' state={{from: location}} />
  }

  return Component;
}

export default ProtectedRoute;