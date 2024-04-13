import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const isLoggedInUser = () => {
    const isLoginUser = localStorage.getItem('loginInfo');
    return isLoginUser !== null;
  }
  return (
    isLoggedInUser() ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes