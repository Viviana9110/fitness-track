import { AtSignIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"


const Login = () => {

  const [state, setState] = useState('login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()
  const {login, signup, user} = useAppContext()

  /*useEffect(() => {
    if(user){
      navigate('/')
    }
  },[user, navigate])*/

  return (
   <>
   <main className="login-page-container">
      <form className="login-form">
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
          Sign In
        </h2>
        <p className="mt-2 text-sm text-gray-500/90 dark:text-gray-400">
          Please enter email and password to access.
        </p>

        <div className="mt-4">
          <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Username</label>
          <div className="relative mt-2">
            <AtSignIcon className="absolute left-4 top-3 text-gray-400 size-4.5"/>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} className="login-input" type="text" placeholder="Enter a Username" required />
          </div>
        </div>

        <div className="mt-4">
          <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Email</label>
          <div className="relative mt-2">
            <MailIcon className="absolute left-4 top-3 text-gray-400 size-4.5"/>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className="login-input" type="email" placeholder="Enter your Email" required />
          </div>
        </div>

      <div className="mt-4">
          <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Password</label>
          <div className="relative mt-2">
            <LockIcon className="absolute left-4 top-3 text-gray-400 size-4.5"/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className="login-input pr-10" placeholder="Please enter your password" required type={showPassword ? 'text' : 'password'} />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword((p) => !p)}>
            {showPassword ? <EyeOffIcon size={16}/> : <EyeOffIcon size={16}/>}
            </button>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className="login-button">
          {isSubmitting ? "Signing in..." : state === "login" ? 'Login' : 'Sign up'}
        </button>
        {state === 'login'
        ? (
          <p className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">Don't have an account? <button
          onClick={() => setState('sign-up')}
          className="ml-1 cursor-pointer text-green-600 hover:underline">Sign up</button></p>
        )
        :
        (
          <p className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">Already Have an account? <button
          onClick={() => setState('login')}
          className="ml-1 cursor-pointer text-green-600 hover:underline">Login</button></p>
        )}

      </form>

    </main>
    </>
  )
}

export default Login