/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';

const App = () => {

  const [skill, setSkill] = useState<string>();
  const [developers, setDevelopers] = useState<string>();
  const [technologies, setTechnologies] = useState<string>();
  const [roles, setRoles] = useState<string>();
  // const [skillsData, setSkillsData] = useState([{
  //   "skillName": "",
  //   "developers": [],
  //   "profile": {
  //     "technologies": [],
  //     "roles": []
  //   }
  // }]);

  // let listSkills = skillsData.map((skill, index) =>
  //     <ul key={index}>
  //       <li>Skill Name: {skill.skillName}</li>
  //       <li>Developers:
  //         <ul>
  //         <li>{skill.developers[0]}</li>
  //         <li>{skill.developers[1]}</li>
  //         </ul>
  //       </li>
  //       <li>Technologies:
  //         <ul>
  //         <li>{skill.profile.technologies[0]}</li>
  //         <li>{skill.profile.technologies[1]}</li>
  //         </ul>
  //       </li>
  //     </ul>);

  // let name = <><h3>{skillData.skillName}</h3>
  //   <ul>
  //   <li>Skill Name: {skillData.skillName}</li>
  //   <li>Developers:
  //     <ul>
  //       <li>{skillData.developers[0]}</li>
  //       <li>{skillData.developers[1]}</li>
  //     </ul>
  //   </li>
  //   <li>Technologies:
  //     <ul>
  //       <li>{skillData.profile.technologies[0]}</li>
  //       <li>{skillData.profile.technologies[1]}</li>
  //     </ul>
  //   </li>
  // </ul></>;
  
  // function loadSkill() {
  //   setShowSkill(true);
  //   setShowSkills(false);
  //   fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill')
  //       .then(response => response.json())
  //     .then(data => {
  //       setSkillData(data[0]);
  //       });
  // }
  // function loadSkills() {
  //   setShowSkill(false);
  //   setShowSkills(true);
  //   fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
  //       .then(response => response.json())
  //     .then(data => {
  //       setSkillsData(data);
  //       });
  // }

  function onAddSkill() {
    const payload = {
      skill,
      developers,
      technologies,
      roles
    }

    console.log(payload)
  }

  return (
      <div className="App">
        <header className="App-header">
          <h1>
            Developers App
          </h1>
        </header>

      <label htmlFor="skill">Skill Name</label>
      <input id="skill" className='input1' onChange={(e) => setSkill(e.target.value)} />

      <label htmlFor="developers">Developers</label>
      <input id="developers" className='input1' onChange={(e) => setDevelopers(e.target.value)} />

      <label htmlFor="technologies">Technologies</label>
      <input id="technologies" className='input1' onChange={(e) => setTechnologies(e.target.value)} />

      <label htmlFor="roles">Roles</label>
      <input id="roles" className='input1' onChange={(e) => setRoles(e.target.value)} />
      
      <a id="add-button" className="button1" onClick={onAddSkill}>Add Skill</a>
    </div>
    );
}

export default App;
