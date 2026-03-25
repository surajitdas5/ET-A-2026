import { useState } from "react";
import StudentAdd from "../components/StudentAdd";
import StudentDisplay from "../components/StudentDisplay";

function SMS(){

    let [ students, setStudents ] = useState([])


    function addStudent(newStudent){
        setStudents([...students, newStudent])
    }

    function deleteStudent(roll){
        let stds = students.filter( s => s.roll != roll)
        setStudents(stds)
    }

    return(
        <div className="container my-5">
            <StudentAdd addStudent={addStudent} />
            <StudentDisplay students={students} deleteStudent={deleteStudent} />
        </div>
    )
}

export default SMS;