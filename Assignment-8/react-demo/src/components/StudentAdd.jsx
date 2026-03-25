import { useRef } from "react";
function StudentAdd({ addStudent }){
    let nameRef = useRef(null);
    let rollRef = useRef(null);
    let cgpaRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        let roll = rollRef.current.value;
        let name = nameRef.current.value;
        let cgpa = cgpaRef.current.value;

        let newStudent = {
            roll: roll,
            name: name,
            cgpa : cgpa
        }

        addStudent(newStudent)

        rollRef.current.value = "";
        nameRef.current.value = "";
        cgpaRef.current.value = "";

    }

    return(
        <div className="my-3">
            <h1 className="text-center">Add Student</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="row g-2">
                    <div className="col-md-3">
                        <input ref={rollRef} type="text" className="form-control" placeholder="Roll" />
                    </div>
                    <div className="col-md-3">
                        <input ref={nameRef} type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-3">
                        <input ref={cgpaRef} type="text" className="form-control" placeholder="CGPA" />
                    </div>
                    <div className="col-md-3">
                        <input  type="submit" className="form-control btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default StudentAdd;