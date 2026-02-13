use('cse-a');

// db.createCollection('student')

// db.collectionName.insert<One/Many>
// db.student.insertOne({
//     name: "shayam sharma",
//     roll: 124,
//     mobile: 7894561236
// })

// db.student.insertMany([
//     {
//         roll: 3,
//         name: "john",
//         mobile: 7841236589
//     },
//     {
//         roll: 4,
//         name: "jane",
//         mobile: [
//             789456123,
//             7894561236
//         ]
//     }

// ])

// select => find
// db.student.find()

// db.empInfo.insertMany([
//     {
//         "eid": "E101",
//         "name": "John Doe",
//         "salary": 60000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E102",
//         "name": "Jane Smith",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E103",
//         "name": "Amit Patel",
//         "salary": 55000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E104",
//         "name": "Priya Sharma",
//         "salary": 80000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E105",
//         "name": "Raj Singh",
//         "salary": 75000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E106",
//         "name": "Kavita Gupta",
//         "salary": 60000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E107",
//         "name": "Sandeep Verma",
//         "salary": 90000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E108",
//         "name": "Ananya Das",
//         "salary": 65000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E109",
//         "name": "Rahul Kapoor",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E110",
//         "name": "Pooja Khanna",
//         "salary": 80000,
//         "dept": "SDE"
//     }
// ])


// db.empInfo.find()

// chaining functions
// sort()
// db.empInfo.find().sort({salary: 1})
// db.empInfo.find().sort({salary: -1})
// db.empInfo.find().sort({dept: 1, salary: -1})

// limit
// db.empInfo.find().limit(3)
// db.empInfo.find().sort({salary: -1}).limit(1)

// skip
// db.empInfo.find().skip(3)
// db.empInfo.find().skip(3).limit(3)

// db.empInfo.findOne()


// Query => where
// find({query},{project})

// db.empInfo.find({}, {name: 1})
// db.empInfo.find({}, {_id: 0, name: 1})
// db.empInfo.find({}, {_id: 0, name: 1, salary: 1})
// db.empInfo.find({}, {_id: 0})


// db.empInfo.find({dept: "HR"})
// db.empInfo.find({name: "John Doe"})
// db.empInfo.find({name: "john doe"}) // no data
// db.empInfo.find({name: "John"}) // no data

// serach
// db.empInfo.find({name: /John/})
// db.empInfo.find({name: /john/i})
// db.empInfo.find({name: /^A/})
// db.empInfo.find({name: /a$/})


// Operators
// relational operator
// find({"<field_name>": {$<operator>: <value>}})
// db.empInfo.find({salary: {$gt: 65000}})
// db.empInfo.find({salary: {$gte: 65000}})
// db.empInfo.find({dept: {$ne: "SDE"}})
// db.empInfo.find({dept: {$in: ["HR", "MGR"]}})
// db.empInfo.find({name: "John Doe"})
// db.empInfo.find({name: {$eq: "John Doe"}})

// logical operator
// find({"$<opertor>": [{exp1}, {exp2}, ...]})
// db.empInfo.find({$and: [{dept: "HR"}, {salary: {$gt: 65000}}]})
// db.empInfo.find({$and: [{dept: {$eq: "HR"}}, {salary: {$gt: 65000}}]})
// db.empInfo.find({$and: [{dept: {$eq: "SDE"}}, {salary: {$eq: 90000}}]})
// db.empInfo.find({$and: [{dept: "SDE"}, {salary: 90000}]})
// db.empInfo.find({dept: "SDE", salary: 90000})// implicit and

// db.empInfo.find({$or: [{dept: "HR"},{dept: "MGR"}]})

// update
// $set
// update<One/Many>({query}, {$set: {k1: v1, k2: v2}})
// db.empInfo.updateOne({eid: "E101"}, {$set: {name: "xyz"}})
// db.empInfo.updateOne({eid: "E101"}, {$set: {name: "John Doe", salary: 85000}})
// db.empInfo.updateMany({dept: "HR"}, {$set: {dept: "Human Resurce"}})

// db.empInfo.find()

// aggregation pipeline
// aggregate([
//     {
//         stage-1
//     }, 
//     {
//         stage-2
//     },
//     ...
// ])

// avg salary of every dept
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           averageSalary: {
//             $avg: "$salary"
//           }
//         }
//     }
// ])
// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: null,
//           averageSalary: {
//             $avg: "$salary"
//           }
//         }
//     }
// ])

// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           averageSalary: {
//             $avg: "$salary"
//           }
//         }
//     },
//     {
//         $sort: {
//           averageSalary: -1
//         }
//     },
//     {
//         $limit: 1
//     }
// ])

// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: {
//             $sum: 1
//           }
//         }
//     }
// ])

// db.empInfo.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: {
//             $sum: 1
//           }
//         }
//     },
//     {
//         $match: {
//           empCount: {$gt: 5}
//         }
//     }
// ])

// db.contactInfo.insertMany([
//     {
//         "eid": "E101",
//         "mobile": "9876543210",
//         "email": "john.doe@example.com",
//         "address": {
//             "city": "Mumbai",
//             "state": "Maharashtra",
//             "zip": 400001
//         }
//     },
//     {
//         "eid": "E102",
//         "mobile": "9876543211",
//         "email": "jane.smith@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "zip": 110001
//         }
//     },
//     {
//         "eid": "E103",
//         "mobile": "9876543212",
//         "email": "amit.patel@example.com",
//         "address": {
//             "city": "Ahmedabad",
//             "state": "Gujarat",
//             "zip": 380001
//         }
//     },
//     {
//         "eid": "E104",
//         "mobile": "9876543213",
//         "email": "priya.sharma@example.com",
//         "address": {
//             "city": "Chandigarh",
//             "state": "Punjab",
//             "zip": 160001
//         }
//     },
//     {
//         "eid": "E105",
//         "mobile": "9876543214",
//         "email": "raj.singh@example.com",
//         "address": {
//             "city": "Jaipur",
//             "state": "Rajasthan",
//             "zip": 302001
//         }
//     },
//     {
//         "eid": "E106",
//         "mobile": "9876543215",
//         "email": "kavita.gupta@example.com",
//         "address": {
//             "city": "Kolkata",
//             "state": "West Bengal",
//             "zip": 700001
//         }
//     },
//     {
//         "eid": "E107",
//         "mobile": "9876543216",
//         "email": "sandeep.verma@example.com",
//         "address": {
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "zip": 560001
//         }
//     },
//     {
//         "eid": "E108",
//         "mobile": "9876543217",
//         "email": "ananya.das@example.com",
//         "address": {
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "zip": 500001
//         }
//     },
//     {
//         "eid": "E109",
//         "mobile": "9876543218",
//         "email": "rahul.kapoor@example.com",
//         "address": {
//             "city": "Chennai",
//             "state": "Tamil Nadu",
//             "zip": 600001
//         }
//     },
//     {
//         "eid": "E110",
//         "mobile": "9876543219",
//         "email": "pooja.khanna@example.com",
//         "address": {
//             "city": "Pune",
//             "state": "Maharashtra",
//             "zip": 411001
//         }
//     }
// ])
// db.contactInfo.find()

// join
// db.empInfo.aggregate([
//     {
//         $lookup: {
//           from: "contactInfo",
//           localField: "eid",
//           foreignField: "eid",
//           as: "cInfo"
//         }
//     }
// ])
db.empInfo.aggregate([
    {
        $lookup: {
          from: "contactInfo",
          localField: "eid",
          foreignField: "eid",
          as: "cInfo"
        }
    },
    {
        $project: {
            _id: 0,
            name: 1,
            dept: 1,
            salary: 1,
            "cInfo.mobile" : 1,
            "cInfo.email" : 1,
            "cInfo.address.city" : 1
        }
    },
    {
        $match: {
        //   "cInfo.address.city": "Delhi"
          "cInfo.address.city": {$in: ["Delhi", "Chennai"]}
        }
    }
])