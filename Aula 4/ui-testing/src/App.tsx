/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useEffect, useState } from 'react';
interface Skill {
  skill: string;
  developers: string;
  technologies: string;
  roles: string;
}

const App = () => {
  
  const [skill, setSkill] = useState<string>();
  const [developers, setDevelopers] = useState<string>();
  const [technologies, setTechnologies] = useState<string>();
  const [roles, setRoles] = useState<string>();
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    loadSkill()
  }, [])

  function loadSkill() {
    fetch('http://localhost:3333/skills')
        .then(response => response.json())
      .then(data => {
        setSkillsData(data);
      });
  }

  const onAddSkill = async (event: React.SyntheticEvent<HTMLButtonElement>) => {

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

      <div className='container'>
        <div className="form">
          <div className='grid'>
            <label htmlFor="skill">Skill Name</label>
            <label htmlFor="developers">Developers</label>
            <label htmlFor="technologies">Technologies</label>
            <label htmlFor="roles">Roles</label>
          </div>

          <div className='grid'>
            <input id="skill" className='input1' onChange={(e) => setSkill(e.target.value)} />
            <input id="developers" className='input1' onChange={(e) => setDevelopers(e.target.value)} />
            <input id="technologies" className='input1' onChange={(e) => setTechnologies(e.target.value)} />
            <input id="roles" className='input1' onChange={(e) => setRoles(e.target.value)} />
            <button type="submit" id="add-button" onClick={onAddSkill} className="button1">Add Skill</button>
          </div>
          
        </div>

        {skillsData.map((item, index) => (
          <div className='grid data' key={index}>
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
