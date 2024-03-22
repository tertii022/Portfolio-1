import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/profile.png" />

        <Title title="Kanyapat Lamphoopuang (Ancia)">
          <h3>ตำแหน่ง : UX/UI</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("1994/07/01").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66877543002
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202012@ssru.ac.th</p>
          <p>www.s64122202012@ssru.ac.th</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p></p>
        </Title>

        <Title title="Work Experience">
          <p>Accountant At JKP of Technology company Limited, I am responsible for document preparation and coordinating with the production department.




</p>
        </Title>

        <Title title="Skills">
          <p>Adobe Premiere Pro </p>
          <p>Adobe Illustrator </p>
          <p>Adobe Lightroom </p>
          <p>Autodesk Inventor</p>
          <p>Adobe XD</p>
          <p>Figma</p>
        </Title>
      </div>
    </main>
  )
}

export default App

