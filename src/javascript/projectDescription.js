import musifeelPreview from '../assets/projects/musifeel.png'
import tumbleBotAppPreview from '../assets/projects/tumblebotapp.png'
import tumbleBotPreview from '../assets/projects/tumblebot.png'
import eelanaduPreview from '../assets/projects/eelanadu.png'

const projectDescription = {
  'eelanadu': {
    name: 'Eelanadu',
    desc: 'Official website for Eelanadu, a newspaper publishing company based in Sri Lanka.',
    img: eelanaduPreview,
    web: 'https://eelanadu.net/',
    tech: ['React', 'Firebase', 'React-PDF']
  },
  'musifeel': {
    name: 'Musifeel',
    desc: `A mood based Spotify playlist generator that uses facial and emotion recognition to identify users' moods and use their Spotify listening history to render tracks appropriate to their moods.`,
    img: musifeelPreview,
    git: 'https://github.com/Pierre-Charles/musifeel',
    web: 'https://musifeel.com/',
    tech: ['React', 'face-api.js', 'Spotify Web API']
  },
  'tumblebot-app': {
    name: 'TumbleBot Web App',
    desc: 'User interface made to monitor tumble dryer usage in a house and keep track of when the dryer was last used, who used it and how often housemates use it.',
    img: tumbleBotAppPreview,
    git: 'https://github.com/Pierre-Charles/TumbleBotApp',
    web: 'https://tumblebot.netlify.app/',
    tech: ['React', 'Chart,js', 'Lottie', 'Firebase']
  },
  'tumblebot': {
    name: 'TumbleBot',
    desc: `IoT smart home device that monitors a tumble dryer's status. Multiple components were used like an ESP32, light dependent resistor (LDR), vibration sensor (SW420) and a RFID scanner (MFRC522).`,
    img: tumbleBotPreview,
    git: 'https://github.com/Pierre-Charles/TumbleBotApp',
    tech: ['C++', 'Firebase', 'IFTTT', 'Alexa']
  }
}

export default projectDescription