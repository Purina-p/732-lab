import './App.css'
import { useState } from 'react'
import {AboutmeBox} from './AboutmeBox'

function App() {

  const [aboutmearray, setaboutmearray] = useState([]);

  // 可能出现的句子
  const detail = [
    "I have a cute cat, named chestnut.",
    "I love watch films,especially cartoon.",
    "I enjoy listen to music when I walking.",
    "I a fan of chocalate favor, however I don't like eat chocolate.",
    "You can add my facebook or connect me with email."
  ];

  function addAboutMe() {

    const newSentences = {
      id: aboutmearray.length + 1,
      line: detail[Math.floor(Math.random() * detail.length)]
      // 从上面选择随机一个句子，因为他们有特定的id，来随机的出现句子
    }

    setaboutmearray([...aboutmearray, ...newSentences]);
  }


  return (

    <div>
      <h1>About me</h1>
      <div>
        <p>My name is Purina, I'm 22 years old.</p>
        <button onClick={addAboutMe}>Learn more about me</button>
        <AboutmeBox aboutmearray={aboutmearray}/>
      </div>

      <h1>My light bulb</h1>
      <div>

      </div>

      <h1>My todos</h1>
      <div>

      </div>

    </div>
  )
}

export default App
