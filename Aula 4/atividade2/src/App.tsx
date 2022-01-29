/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
interface Skill {
  skillName: string;
  developers: string[];
  profile: {
    technologies: string[];
    roles: string[];
  }
}

const App = () => {
  const { promiseInProgress: isLoading } = usePromiseTracker();
  
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [skill, setSkill] = useState<string>("");
  const [dev, setDev] = useState<string>("");
  const [tech, setTech] = useState<string>("");
  const [role, setRole] = useState<string>("");

  function loadSkill() {
    trackPromise(
      fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
          .then(response => response.json())
        .then(data => {
          setSkillsData(data);
        }
      )
    )
  }

  function checkButtonDisabled() {
    if(([skill, dev, tech, role]).includes("")) {
      return true
    }
    return false
  }

  const onAddSkill = async (event: React.SyntheticEvent<HTMLButtonElement>) => {
    console.log("oi")
    loadSkill();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Developers App
        </h1>
      </header>

      <table className='container'>
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Developers</th>
            <th>Technologies</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          <tr className='grid input'>
            <td><input id="skill" className='input1' value={skill} onChange={(e) => setSkill(e.target.value)} /></td>
            <td><input id="developers" className='input1' value={dev} onChange={(e) => setDev(e.target.value)} /></td>
            <td><input id="technologies" className='input1' value={tech} onChange={(e) => setTech(e.target.value)} /></td>
            <td><input id="roles" className='input1' value={role} onChange={(e) => setRole(e.target.value)} /></td>
            <td><button type="submit" id="add-button" disabled={checkButtonDisabled()} onClick={onAddSkill} className="button1">Add Skill</button></td>
          </tr>

        {isLoading 
          ? <p>Loading...</p>
          : skillsData.map((item, index) => (
          <tr className='grid data' key={index}>
            <td>{item.skillName}</td>
            <td>{item.developers.map((developer: string) => <span>{developer}</span>)}</td>
            <td>{item.profile.technologies.map((technology: string) => <span>{technology}</span>)}</td>
            <td>{item.profile.roles.map((role: string) => <span>{role}</span>)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
