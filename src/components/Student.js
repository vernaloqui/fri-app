import {  useEffect , useState} from 'react';
import axios from 'axios';

function Student() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [students, setStudents] = useState([]);
    //useEffect (function, param - dependency)
    useEffect(()=>{
        const url = 'http://localhost/sat1126/db.php'; //link to db
        axios.get(url).then((response)=>{
            setStudents(response.data);
            console.log(students);
           
        })
    },[])

    const submitBtn = function(){
        let getData = new FormData();
        getData.append('fname', fname);  //key-value pairs like session storage
        getData.append('lname', lname); 
        getData.append('age', age); 
        getData.append('function', 'insert');
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/sat1126/db.php', //db link
            data: getData, //data to be transferred
            config: 'Content-Type="multipart/form-data"'
        }).then(function(response){
            const url = 'http://localhost/sat1126/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            })
        }).catch(function(error){
            alert("error!");
        });
    }

    const deleteStudent = function(e){
        // alert(e.currentTarget.id);
        let getData = new FormData();
        getData.append('student_id', e.currentTarget.id);
        getData.append('function', 'delete'); //delete
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/sat1126/db.php', //db link
            data: getData, //data to be transferred
            config: 'Content-Type="multipart/form-data"'
        }).then(function(response){
            const url = 'http://localhost/sat1126/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            })
        }).catch(function(error){
            console.log(error);
            alert("mali!")
        });
    }

    const updateBtn = function(e){
        // alert (e.currentTarget.title);
        let getData = new FormData();
        getData.append('student_id', e.currentTarget.title);
        getData.append('fname', document.getElementById('fname'+e.currentTarget.title).value); //update
        getData.append('lname', document.getElementById('lname'+e.currentTarget.title).value);
        getData.append('age', document.getElementById('age'+e.currentTarget.title).value);
        getData.append('function', 'update');
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/sat1126/db.php', //db link
            data: getData, //data to be transferred
            config: 'Content-Type="multipart/form-data"'
        }).then(function(response){
            alert ("successfully updated");
            // const url = 'http://localhost/sat1126/db.php';
            // axios.get(url).then((response) => {
            //     setStudents(response.data);
            //     console.log(students);
            // })
        }).catch(function(error){
            console.log(error);
            alert("mali!")
        });
    }


    return(
        <div>
            <h1>Student's List</h1>
            <form>
                <input type="text" name="fname" value={fname} onChange = {(e) => setFname(e.target.value)}/>
                <input type="text" name="lname" value={lname} onChange = {(e) => setLname(e.target.value)}/>
                <input type="number" name="age" value={age} onChange = {(e) => setAge(e.target.value)}/>
                <input type="submit" onClick = {submitBtn}/>
               
            </form>
            <table>
                <thead>
                    <tr>
                        <th> First Name</th>
                        <th> Last Name</th>
                        <th> Age</th>
                    </tr>
                </thead>
                  <tbody>
                {students.map((val) =>{
                    return(
                    <tr key={val.student_id}>
                        <td><input type="text" defaultValue={val.firstname} id={'fname'+val.student_id}/></td>
                        <td><input defaultValue={val.lastname} id={'lname'+val.student_id}/></td>
                        <td><input type="number" defaultValue={val.age} id={'age'+val.student_id}/></td>
                        <td><button id={val.student_id} onClick={deleteStudent}>Delete</button></td>                                  
                        <td><button title={val.student_id} onClick={updateBtn}>Update</button></td>

                    </tr>
                    )
                })}
                    
                </tbody>  

            </table>
        </div>
    )
}

export default Student;