import React from 'react';
import '../styles/base.css';

function Signup() {
    window.onload = function() {
        const doc = document;
        const form = doc.getElementById('signup');
        
        form.addEventListener('submit', async(e) => {
          e.preventDefault();
          const username = doc.getElementById('username').value;
          const password = doc.getElementById('password').value;
      
          if (!username || !password){
            alert('Username or password missing');
            return;
          }
      
          const response = await fetch('api/v1/auth/signup', {
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
        <h1 class="page-heading">Sign up</h1>
        <form id="signup" method="post">
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
            <button class="btn-cta-primary">Sign up</button>
        </form>
    </main>
    </div>
  )
}

export default Signup