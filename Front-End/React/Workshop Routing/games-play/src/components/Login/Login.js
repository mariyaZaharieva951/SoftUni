import { Link } from 'react-router-dom'
import * as authService from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'
import { useContext } from 'react'


const Login = () => {
  const { userLogin } = useContext(AuthContext)

  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target)
    const {email,password} = Object.fromEntries(formData);

    authService.login(email,password)
      .then(authData => {
        userLogin(authData) //запазваме юзъра в контекста
        
        navigate('/');
      })
      .catch(() => {
        alert('The login is not successful!');
      })
    
  }

    return (
<section id="login-page" className="auth">
    <form id="login" onSubmit={onSubmit}>
      <div className="container">
        <div className="brand-logo" />
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sokka@gmail.com"
        />
        <label htmlFor="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" className="btn submit" defaultValue="Login" />
        <p className="field">
          <span>
            If you don't have profile click <Link to="/register">here</Link>
          </span>
        </p>
      </div>
    </form>
</section>
    )
}

export default Login;