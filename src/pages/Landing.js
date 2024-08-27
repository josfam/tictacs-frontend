import React from 'react';
import '../styles/base.css';
import '../fonts/NotoSans-VariableFont.ttf'

function Landing() {
    window.onload = function() {
        const doc = document;
        const signupBtn = doc.getElementById('signupbtn');
        const loginBtn = doc.getElementById('loginbtn');
      
        signupBtn.addEventListener('click', () => {
          window.location.href = '/signup';
        });
      
        loginBtn.addEventListener('click', () => {
          window.location.href = '/login';
        })
      };
  return (
    <div>
        <main>
        <h1>✖️ TicTacs 🟢</h1>
        <section class="game-info">
            <h2>How to play</h2>
            <p>On the 3 x 3 grid, place either an X or an O, depending on which
                of these is your player's symbol, by clicking an empty spot on the
                board.
                The game alternates between your move, and that of your opponent.
                Whoever places three of their player's symbol in a row, column, or
                diagonal wins!
            </p>
        </section>
        <div id="landing-btns">
            <button class="btn-cta-primary" id="signupbtn">Sign up</button>
            <button class="btn-cta-primary" id="loginbtn">Login</button>
        </div>
    </main>
    </div>
  )
}

export default Landing