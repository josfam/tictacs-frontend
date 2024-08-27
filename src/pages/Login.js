import React from 'react';
import '../styles/base.css';

function Login() {
    window.onload = function() {
        const doc = document;
        const form = doc.getElementById('login');
        
        form.addEventListener('submit', async(e) => {
          e.preventDefault();
          const username = doc.getElementById('username').value;
          const password = doc.getElementById('password').value;
      
          if (!username || !password){
            alert('Username or password missing');
            return;
          }
      
          const response = await fetch('api/v1/auth/login', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
          const info = await response.json();
      
          if (response.ok)
          {
            alert(info.message);
          } else {
            alert(info.message);
          }
        });
      }
    
      return (
        <div>
            <main>
            <h1 class="page-heading">Login</h1>
            <form id="login" method="post">
                <ul>
                    <li>
                        <label for="username">username</label>
                        <input type="text" id="username" name="username" required/>
                    </li>
                    <li>
                        <label for="password">password</label>
                        <input type="password" id="password" name="password" required/>
                    </li>
                </ul>
                <button class="btn-cta-primary">Login</button>
            </form>
        </main>
        </div>
      );
}

export default Login