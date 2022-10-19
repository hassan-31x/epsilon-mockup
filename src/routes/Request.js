import React from 'react'
import { useEffect } from 'react';

const Request = () => {

    const newData = {
        id:"3",
        members: [
          {
            name: "test0",
            email: "test0@x.com",
            number: "test0",
            institution: "test0",
            social: "true"
          },
          {
            name: "test1",
            email: "test1@x.com",
            number: "test1",
            institution: "test1",
            social: "true"
          },
          {
            name: "test2",
            email: "test2@x.com",
            number: "test2",
            institution: "test2",
            social: "false"
          },
          {
            name: "test3",
            email: "test3@x.com",
            number: "test3",
            institution: "test3",
            social: "true"
          }
        ],
        modules: [
          "6"
        ],
        name: "Alpha College",
        notes: "test",
        query: "bar",
        bar: "1"
      }



    // useEffect(() => {

    //     fetch('http://localhost:8000/forms')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //     })
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault()

        // fetch('http://epsilon.move.pk/query.php', {
        fetch('http://localhost:8000/forms', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData)
        }).then(() => {
            console.log('new added')
        })
    }

  return (
    <div>Request
        <button onClick={handleSubmit}>Hello World</button>
    </div>
  )
}

export default Request