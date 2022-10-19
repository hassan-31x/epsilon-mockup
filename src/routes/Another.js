import React from 'react'
import { useState } from 'react'
import $ from "jquery";

const Another = () => {
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

    const [final, setfinal] = useState({})

        var arr = [];

        const handle = () => {

            for (let i = 0; i < 5; i++) {
                arr[i] = {
                name: "New Member" + i,
                email: "Testing" + i,
                number: "Testing" + i,
                institution: "Testing" + i,
                social: true,
                }
            }
            $.post("http://epsilon.move.pk/query.php",
                {
                    query: "register",
                    members: arr,
                    name: "test",
                    bar: 1,
                    notes: "test",
                    modules: [0,1],
                }, function(data, status){
                    console.log(JSON.parse(data));
                    console.log(data);
                }
            );

            // $.ajax({
            //     type: "POST",
            //     url: "http://epsilon.move.pk/query.php",
            //     data: arr,
            //     name: "test",
            //     query: "register",
            //     bar: 1,
            //     notes: "test",
            //     modules: [0,1],
            // });
            // $.post("http://epsilon.move.pk/query.php", { query: "bar" }, function (data) { console.log(JSON.parse(data)); });
            // $.post("http://epsilon.move.pk/query.php", { query: "modules" }, function (data) { console.log(JSON.parse(data)); });
            console.log(arr)
        }
            
  return (
    <div>
         Hello World
         <button onClick={handle}>Click</button>
    </div>
  )
}

export default Another