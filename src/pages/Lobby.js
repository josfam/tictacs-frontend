import React, { useEffect } from 'react';
import io from 'socket.io-client';

function Lobby() {
  useEffect(() => {
    const doc = document;
    const logoutBtn = doc.getElementById('logoutbtn');
    const socket = io();

    logoutBtn.addEventListener('click', async () => {
      const response = await fetch('/api/v1/auth/logout', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const info = await response.json();
      if (response.ok) {
        socket.emit('logout');
        alert(info.message);
        window.location.href = '/';
      } else {
        alert(info.message);
      }
    });

    socket.on('get-your-name', (username) => {
      const pageHeading = doc.querySelector('.page-heading');
      const originalText = pageHeading.textContent;
      if (!originalText.includes(username)) {
        pageHeading.textContent = `${originalText} (${username})`;
      }
    });

    const playersOnlineList = doc.getElementById('players-online');

    const getPlayerRowInLobby = (username, buttonText) => {
      const newPlayerItem = doc.createElement('li');
      newPlayerItem.classList.add('flex', 'justify-between', 'items-center', 'py-2');

      const usernameDiv = doc.createElement('div');
      usernameDiv.classList.add('text-lg', 'font-semibold');
      usernameDiv.textContent = username;
      newPlayerItem.appendChild(usernameDiv);

      const listButton = doc.createElement('button');
      listButton.classList.add('bg-blue-500', 'text-white', 'py-1', 'px-4', 'rounded', 'hover:bg-blue-700');
      listButton.id = username;
      listButton.textContent = buttonText;
      newPlayerItem.appendChild(listButton);
      return newPlayerItem;
    };

    const removePlayerFromLobby = (username) => {
      const playerLists = playersOnlineList.getElementsByClassName('player-row');
      for (const listItem of playerLists) {
        const usernameDiv = listItem.querySelector('.username');
        if (usernameDiv.textContent === username) {
          usernameDiv.parentNode.parentNode.removeChild(listItem);
        }
      }
    };

    socket.on('get-players-online', (players) => {
      playersOnlineList.textContent = '';
      players.forEach((username) => {
        const newPlayerRow = getPlayerRowInLobby(username, 'Challenge');
        playersOnlineList.appendChild(newPlayerRow);
      });
    });

    socket.on('player-joined', (player) => {
      const newPlayerItem = getPlayerRowInLobby(player.username, 'Challenge');
      playersOnlineList.appendChild(newPlayerItem);
    });

    socket.on('player-left', (username) => {
      removePlayerFromLobby(username);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <main>
        <h1 class="page-heading">Lobby</h1>
        <section id="live-lobby">
            <ul id="players-online"></ul>
        </section>
    </main>
    <footer class="logout-footer">
        <button id="logoutbtn" class="btn-cta-primary">Logout</button>
    </footer>
    </div>
  );
}

export default Lobby;