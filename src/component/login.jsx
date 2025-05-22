import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    const success = onLogin(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="absolute z-40 w-full h-full flex justify-center bg-black opacity-90">
      <div className="mt-52 text-center space-y-6 w-96 h-96 bg-gray-600 rounded-lg">
        <h1 className="text-2xl mt-5 font-semibold text-lime-100">Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              className="w-4/5 h-12 p-3 border rounded-lg outline-none border-gray-900"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              className="w-4/5 h-12 p-3 border rounded-lg outline-none border-gray-900"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-24 h-10 font-semibold rounded-lg bg-green-500 hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;