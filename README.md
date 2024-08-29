# tictacs

A multiplayer tic-tac-toe game. This is our project submission for the qualifying round of the ALX SE Face Off competition(2024)

---

Note: The entire project setup also has a backend setup.
\
⚠️ **Set up the backend first!!** ⚠️
\
Find those instructions [here](https://github.com/josfam/tictacs-backend?tab=readme-ov-file)

---

## How to run the project locally in a unix environment (front-end setup)

### 1. Clone this repository and cd into it

```sh
git clone https://github.com/josfam/tictacs-frontend && cd tictacs-frontend
```

### 2. Install node

```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install nodejs -y
```

### 3. Install project dependencies

```sh
npm install
```

### 4. Start your react app

```sh
npm run start
```

If you get a request to start this app on another port, say yes
(Because, you obviously [set up the backend first](https://github.com/josfam/tictacs-backend?tab=readme-ov-file). Right?)

```sh
? Something is already running on port 3000. Probably:
...
Would you like to run the app on another port instead? › (Y/n)
```

### 5. Visit the webpage that was just opened by the previous command

---

\
To build the application for a production environment, run

```sh
npm run build
```
