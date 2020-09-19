## Metallica Soundboard Android Application

<h2>Installation instructions</h2>

```
git clone https://github.com/ronin010/metallica-soundboard.git
cd metallica-soundboard
npm install
npm run android

```

<h2>Make sure you have npm, NodeJS and the expo-cli installed: </h2>

<p>Linux / Mac OS</p>

```
sudo apt install npm nodejs -y
sudo npm install -g expo-cli

```

<p>Windows: </p>

```
https://nodejs.org/en/download/
npm install -g expo-cli

```

<h2>Technology used: </h2>

 * React native
 * Paper UI
 * Expo AV (audio player)
 * FontAwesome Icons

<h2>Problems Face and Solutions: </h2>

 <h4>Problem : Cannot dynamically require files</h4>
 <h4>Solution : Created an external data structure where files are required there</h4>

<h2>Todo</h2>

 * Build screens for the other members
 * Add animations for when files are loading
 * add animation for when audio starts playing