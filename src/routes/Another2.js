import React from 'react'
import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { stem } from '../assets/stem.js'
import { general } from '../assets/general.js'
import { all } from '../assets/all.js'

const Another2 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [indexes, setIndexes] = useState([0, 1, 2, 3]);
    const [mindexes, setMindexes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    // const [checkedState, setCheckedState] = useState(
    //     new Array(general.length).fill(false)
    //   );
    // const [checkedStateS, setCheckedStateS] = useState(
    //     new Array(stem.length).fill(false)
    //   );

    // const handleOnChangeG = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //       index === position ? !item : item
    //     );
    
    //     setCheckedState(updatedCheckedState);  
    // };
    // const handleOnChangeS = (position) => {
    //     const updatedCheckedStateS = checkedStateS.map((item, index) =>
    //       index === position ? !item : item
    //     );
        
    //     setCheckedStateS(updatedCheckedStateS);  
    // };

    // for (let i = 0; i < checkedState.length; i++) {
    //     if (checkedState[i]) {
    //       obj['modules'].push(general[i].id)
    //     }
    // }
    // for (let i = 0; i < checkedStateS.length; i++) {
    //     if (checkedStateS[i]) {
    //       obj['modules'].push(stem[i].id)
    //     }
    // }

    const onSubmit = (data) => {
        console.log(data)
    }

    console.log(errors)
    console.log('errors')
    errors.members ? console.log(errors.members[0].name.message) : console.log('no error')


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
            Team Name
            <input
            type="text"
            name=''
            {...register('name', {
              required: 'This is a required field',
              maxLength: {
                value: 15,
                message: 'It can only contain 15 letters maximum'
              }
            })} />
        </label><br />
        <p className='text-red-900 bg-yellow-200'>{errors.name?.message}</p>

  {/* ----------------------------------------------- */}
        {/* <div className="">Modules<br />
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
         </div> */}


         <div>
          <div className="">Modules<br />
              <h3>Select Module</h3>
              <ul className="modules-list">
              {all.map(({ module }, index) => {
                  return (
                      <li key={index}>
                          <div className="modules-list-item">
                              <div className="left-section">
                                  <input
                                  type="checkbox"
                                  id={`custom-checkboxs-${index}`}
                                  name='module'
                                  value={module}
                                  {...register(`modules.${index}.id`)}
                                  />
                                  <label htmlFor={`custom-checkboxs-${index}`}>{module}</label>
                              </div>
                          </div>
                      </li>
                  );
              })}
              </ul>
          </div>
         </div>
    {/* -------------------------------------------- */}



        {indexes.map(index => {
        const fieldName = `members[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <h2 className='font-bold text-xl'>Participant {index+1} Info</h2>
            <label>
              Participant {index+1} Name:
              <input
                type="text"
                name={`${fieldName}.name`}
                {...register(`members.${index}.name`, {
                  required: 'This field is required'
                })}
              /><br />
            </label>
            {/* <p className='text-red-800 bg-yellow-200'>{Object.hasOwn(errors, 'members') ? errors.members[index]?.name.message: ''}</p> */}
            <p>{Object.hasOwn(errors, 'members') ? errors.members[index].email?.message: ''}</p>

            <label>
            Participant {index+1} Email:
              <input
                type="email"
                name={`${fieldName}.email`}
                {...register(`members.${index}.email`, {
                  required: 'This field is required'
                })}
              /><br />
            </label>
            {/* <p className='text-red-800 bg-yellow-200'>{Object.hasOwn(errors, 'members') ? errors.members[index].email?.message: ''}</p> */}

            <label>
            Participant {index+1} Phone:
              <input
                type="text"
                name={`${fieldName}.phone`}
                {...register(`members.${index}.phone`)}
              /><br />
            </label>

            <label>
            Participant {index+1} Institution:
              <input
                type="text"
                name={`${fieldName}.institution`}
                {...register(`members.${index}.institution`)}
              /><br />
            </label>

            <div className="">
                Fee Structure
                <select name={`${fieldName}.social`} {...register(`members.${index}.social`)}>
                <option value="true">Social</option>
                <option value="false">No Social</option>
                </select>
            </div>
          </fieldset>
        );
      })}

      <input type="submit" />
      </form>
    </div>
  )
}

export default Another2
