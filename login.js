const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages =[];
  if (username.value === '' || username.value == null) {
    messages.push('Name is required')
    let alert = document.createElement('li');
    errorElement.appendChild(alert)
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
    let alert = document.createElement('li');
    errorElement.appendChild(alert)
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
    let alert = document.createElement('li');
    errorElement.appendChild(alert)
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.textContent = messages.join(', ')
  }
})