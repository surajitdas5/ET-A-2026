function StudentDisplay({ students, deleteStudent }){
    return(
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>CGPA</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map( s => (
                        <tr key={s.roll}>
                            <td>{s.roll}</td>
                            <td>{s.name}</td>
                            <td>{s.cgpa}</td>
                            <td>
                                <button 
                                className="btn btn-sm btn-outline-danger"
                                onClick={()=>deleteStudent(s.roll)}
                                >❌</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default StudentDisplay;