import { useState } from 'react'
import './App.css'

const restaurants = [
  'RAM Demo Restaurant',
  'RAM Downtown',
  'RAM Riverside',
]

function App() {
  const [restaurant, setRestaurant] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [authorized, setAuthorized] = useState(false)

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!restaurant || !login.trim() || !password) {
      setError('Заполните все поля для входа')
      return
    }

    setLoading(true)

    setTimeout(() => {
      if (login === 'admin' && password === 'ram2026') {
        setAuthorized(true)
      } else {
        setError('Неверный логин или пароль')
      }

      setLoading(false)
    }, 700)
  }

  if (authorized) {
    return (
      <main className="app-shell">
        <section className="success-screen">
          <div className="logo-mark">R</div>
          <div className="brand-name">RAM</div>
          <div className="brand-subtitle">RESTAURANT SYSTEMS</div>

          <div className="success-icon">✓</div>

          <h1>Добро пожаловать в систему</h1>
          <p>Ваш аккаунт успешно авторизован.</p>
          <p className="selected-restaurant">{restaurant}</p>

          <button
            className="primary-button"
            onClick={() => setAuthorized(false)}
          >
            Выйти из системы
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <section className="login-card">

        <header className="top-header">
          <span>RAM MINI APP</span>
          <span className="header-indicator">SYSTEM ACCESS</span>
        </header>

        <div className="brand-block">
          <div className="logo-mark">R</div>

          <h1 className="brand-name">RAM</h1>
          <p className="brand-subtitle">RESTAURANT SYSTEMS</p>
        </div>

        <div className="welcome-block">
          <h2>Добро пожаловать</h2>
          <p>Введите свои данные для входа</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">

          <div className="form-group">
            <label htmlFor="restaurant">Ресторан</label>

            <div className="input-wrapper">
              <select
                id="restaurant"
                value={restaurant}
                onChange={(event) => setRestaurant(event.target.value)}
              >
                <option value="">Выберите ресторан</option>
                {restaurants.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span className="select-arrow">⌄</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="login">Логин</label>

            <input
              id="login"
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>

            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Введите пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              >
                {showPassword ? '◉' : '◎'}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading ? 'Выполняется вход...' : 'Войти в систему'}
            {!loading && <span>→</span>}
          </button>

        </form>

        <div className="demo-hint">
          DEMO ACCESS: admin / ram2026
        </div>

        <footer className="login-footer">
          RAM RESTAURANT SYSTEMS
          <span>SECURE WORKSPACE</span>
        </footer>

      </section>
    </main>
  )
}

export default App
