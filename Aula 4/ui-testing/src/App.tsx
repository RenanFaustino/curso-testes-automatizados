/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';

const App = () => {
  interface Skill {
    skill: string;
    developers: string;
    technologies: string;
    roles: string;
  }
  
  const [skill, setSkill] = useState<string>();
  const [developers, setDevelopers] = useState<string>();
  const [technologies, setTechnologies] = useState<string>();
  const [roles, setRoles] = useState<string>();
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  function loadSkill() {
    fetch('http://localhost:3333/skills')
        .then(response => response.json())
      .then(data => {
        setSkillsData(data);
      });
  }

  const onAddSkill = async () => {
    const response = await fetch('http://localhost:3333/skills', {
      body: JSON.stringify({
        skill,
        developers,
        technologies,
        roles
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.ok) {
      loadSkill();
    }
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
      <div>
        <div>
          <div>Skill Name</div>
          <div>Developers</div>
          <div>Technologies</div>
          <div>Roles</div>
        </div>
        {skillsData.map((item, index) => (
        <div key={index}>
          <div>{item.skill}</div>
          <div>{item.developers}</div>
          <div>{item.technologies}</div>
          <div>{item.roles}</div>
        </div>
        ))}
      </div>
    </div>
    );
}

export default App;
