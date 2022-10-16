import React from 'react'
import { useState } from 'react'

import './register.css'
import { stem } from '../assets/stem.js'
import { general } from '../assets/general.js'

const Register = () => {

    let obj = {
        members: [],
        modules: []
    }


    // Submission
    const [inputs, setInputs] = useState({name: 'Alpha College'});
    const [inputsT, setInputsT] = useState({notes: 'test'});
    const [checkedState, setCheckedState] = useState(
        new Array(general.length).fill(false)
      );
    const [checkedStateS, setCheckedStateS] = useState(
        new Array(stem.length).fill(false)
      );
    const [part0, setpart0] = useState({name: 'test0', email: 'test0@x.com', number: 'test0', institution: 'test0'});
    const [part1, setpart1] = useState({name: 'test1', email: 'test1@x.com', number: 'test1', institution: 'test1'});
    const [part2, setpart2] = useState({name: 'test2', email: 'test2@x.com', number: 'test2', institution: 'test2'});
    const [part3, setpart3] = useState({name: 'test3', email: 'test3@x.com', number: 'test3', institution: 'test3'});
    const [part4, setpart4] = useState({});


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    const handleTChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputsT(values => ({...values, [name]: value}))
    }
    const handleChange1 = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setpart0(values => ({...values, [name]: value}))
    }
    const handleChange2 = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setpart1(values => ({...values, [name]: value}))
    }
    const handleChange3 = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setpart2(values => ({...values, [name]: value}))
    }
    const handleChange4 = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setpart3(values => ({...values, [name]: value}))
    }
    const handleChange5 = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setpart4(values => ({...values, [name]: value}))
    }
    const handleOnChangeG = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);  
    };
    const handleOnChangeS = (position) => {
        const updatedCheckedStateS = checkedStateS.map((item, index) =>
          index === position ? !item : item
        );
        
        setCheckedStateS(updatedCheckedStateS);  
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        obj['members'].push(part0, part1, part2, part3, part4)
        for (let i = 0; i < checkedState.length; i++) {
            if (checkedState[i]) {
              obj['modules'].push(general[i])
            }
        }
        for (let i = 0; i < checkedStateS.length; i++) {
            if (checkedStateS[i]) {
              obj['modules'].push(stem[i])
            }
        }
        console.log(obj)

        setpart0({})
        setpart1({})
        setpart2({})
        setpart3({})
        setpart4({})
        // setCheckedStateG({})
        // setCheckedStateS({})
    }

    // Elements
    // const first = document.querySelector('.first')
    // const second = document.querySelector('.second')

    // Functions
    // const next = () => {
    //     first.classList.remove('active')
    //     second.classList.add('active')
    // }
    // const prev = () => {.
    //     second.classList.remove('active')
    //     first.classList.add('active')
    // }

    // Members
    const [member, setmember] = useState(4)

  return (
    <div>
        {/* <form method="post" action="./query.php"> */}
        <form onSubmit={handleSubmit}>

            {/* First Page */}
            <div className="first card active">
                    <h1 className='text-3xl'>Team Info</h1>
                    <label>Team Name
                    <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} required /></label><br />
                    <div className="">Modules<br />
                    <h3>Select Module</h3>
                        <ul className="modules-list">
                            {general.map(({ module }, index) => {
                            return (
                                <li key={index}>
                                <div className="modules-list-item">
                                    <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkboxs-${index}`}
                                        name={module}
                                        value={module}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChangeG(index)}
                                        />
                                    <label htmlFor={`custom-checkboxs-${index}`}>{module}</label>
                                    </div>
                                </div>
                                </li>
                            );
                            })}
                            </ul>
                        <h3>Select STEM Module</h3>
                        <ul className="modules-list">
                            {stem.map(({ module }, index) => {
                            return (
                                <li key={index}>
                                <div className="modules-list-item">
                                    <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={module}
                                        value={module}
                                        checked={checkedStateS[index]}
                                        onChange={() => handleOnChangeS(index)}
                                        />
                                    <label htmlFor={`custom-checkbox-${index}`}>{module}</label>
                                    </div>
                                </div>
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                    <div className="">
                        <label htmlFor="ambassador">Brand Ambassador</label>
                        <select name="ba" id="ambassador" value={inputs.ba || ""} onChange={handleChange}>
                            <option value="choose" selected>Choose</option>
                            <option value="X">X</option>
                            <option value="Y">Y</option>
                            <option value="Z">Z</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div className="note">note
                        <textarea name="notes" id="" cols="12" rows="3" value={inputsT.notes || ""} onChange={handleTChange}></textarea>
                    </div>
                    {/* <button onClick={next}>Next</button> */}
            </div>

            {/* Second Page */}
            <div className="second card active">
                <h1 className='text-3xl'>Participant Info</h1>
                <div className="">
                    <h2 className='font-bold text-xl'>Partcipant 1 Info</h2>
                    <label>Participant 1 - Head Delegate Name
                    <input type="text" name="name" value={part0.name || ""} onChange={handleChange1} id="name1" required /></label><br />
                    <label>Participant 1 - Head Delegate Email
                    <input type="email" name="email" value={part0.email || ""} onChange={handleChange1} required /></label><br />
                    <label>Participant 1 - Head Deligate Number
                    <input type="text" name="number" value={part0.number || ""} onChange={handleChange1} id="number1" required placeholder="03xx-xxxxxxx" /></label><br />
                    <label>Participant 1 - Head Delegate Institution
                    <input type="text" name="institution" value={part0.institution || ""} onChange={handleChange1} id="institution1" required /></label>
                    <div className="">
                        Fee Structure
                        <select name="fee1" id="ambassador" value={part0.fee1 || ""} onChange={handleChange1}>
                        <option value="social" selected>Social</option>
                        <option value="nosocial">No Social</option>
                        </select>
                    </div>
                </div>
                <div className="">
                    <h2 className='font-bold text-xl'>Partcipant 2 Info</h2>
                    <label>Participant 2 Name
                    <input type="text" name="name" value={part1.name || ""} onChange={handleChange2} required /></label><br />
                    <label>Participant 2 Email
                    <input type="email" name="email" value={part1.email || ""} onChange={handleChange2} required /></label><br />
                    <label>Participant 2 Number
                    <input type="text" name="number" value={part1.number || ""} onChange={handleChange2} required placeholder="03xx-xxxxxxx" /></label><br />
                    <label>Participant 2 Institution
                    <input type="text" name="institution" value={part1.institution || ""} onChange={handleChange2} required /></label>
                    <div className="">
                        Fee Structure
                        <select name="fee" id="ambassador" value={part1.fee || ""} onChange={handleChange2}>
                        <option value="social" selected>Social</option>
                        <option value="nosocial">No Social</option>
                        </select>
                    </div>
                </div>
                <div className="">
                    <h2 className='font-bold text-xl'>Partcipant 3 Info</h2>
                    <label>Participant 3 Name
                    <input type="text" name="name" value={part2.name || ""} onChange={handleChange3} id="name1" required /></label><br />
                    <label>Participant 3 Email
                    <input type="email" name="email" value={part2.email || ""} onChange={handleChange3} required /></label><br />
                    <label htmlFor="number">Participant 3 Number
                    <input type="text" name="number" value={part2.number || ""} onChange={handleChange3} id="number1" required placeholder="03xx-xxxxxxx" /></label><br />
                    <label>Participant 3 Institution
                    <input type="text" name="institution" value={part2.institution || ""} onChange={handleChange3} id="institution" required /></label>
                    <div className="">
                        Fee Structure
                        <select name="fee3" id="ambassador" value={part2.fee || ""} onChange={handleChange3}>
                        <option value="social" selected>Social</option>
                        <option value="nosocial">No Social</option>
                        </select>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-bold text-xl'>Partcipant 4 Info</h2>
                    <label>Participant 4 Name
                    <input type="text" name="name" value={part3.name || ""} onChange={handleChange4} required /></label><br />
                    <label>Participant 4 Email
                    <input type="email" name="email" value={part3.email || ""} onChange={handleChange4} required /></label><br />
                    <label>Participant 4 Number
                    <input type="text" name="number" value={part3.number || ""} onChange={handleChange4} placeholder="03xx-xxxxxxx" required /></label><br />
                    <label>Participant 4 Institution
                    <input type="text" name="institution" value={part3.institution || ""} onChange={handleChange4} required /></label>
                    <div className="">
                        Fee Structure
                        <select name="fee" id="ambassador" value={part3.fee || ""} onChange={handleChange4}>
                        <option value="social">Social</option>
                        <option value="nosocial">No Social</option>
                        </select>
                    </div>
                </div><hr />
                <div className={`${ member === 4 ? 'hidden' : 'block'}`}>
                    <h2 className='font-bold text-xl'>Partcipant 5 Info</h2>
                    <label>Participant 5 Name
                    <input type="text" name="name" value={part4.name || ""} onChange={handleChange5} /></label><br />
                    <label>Participant 5 Email
                    <input type="email" name="email" value={part4.email || ""} onChange={handleChange5} /></label><br />
                    <label>Participant 5 Number
                    <input type="text" name="number" value={part4.number || ""} onChange={handleChange5} placeholder="03xx-xxxxxxx" /></label><br />
                    <label>Participant 5 Institution
                    <input type="text" name="institution" value={part4.institution || ""} onChange={handleChange5} /></label>
                    <div className="">
                        Fee Structure
                        <select name="fee" id="ambassador" value={part4.fee || ""} onChange={handleChange5}>
                        <option value="social">Social</option>
                        <option value="nosocial">No Social</option>
                        </select>
                    </div>
                </div><hr />
                <div className="flex">
                    <button className={`${member === 4 ? 'block' : 'hidden'}`} onClick={() => setmember(member+1)}>Add Member</button>
                    <button className={`${member === 4 ? 'hidden' : 'block'}`} onClick={() => setmember(member-1)}>Remove Member</button>
                </div>
              
                
                <div>
                    {/* <button onClick={prev}>Previous</button> */}
                    <button type="submit">Submit</button>
                </div>
            </div>
            

        </form>
    </div>
  )
}

export default Register