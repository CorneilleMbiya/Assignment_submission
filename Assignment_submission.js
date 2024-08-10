const Course_Info = {
    course_Id : 1,
    course_name : "HTML"
};

const AssignmentGroup = {
    Assignment_grp_Id : 58,
    Assignment_grp_name : "Engineering",
    //group_weight : ,  ===> (calculated)
    //weighted_average_score : ,    // should be in % ===> (calculated)
    Assignments : [
        {   Assignment_Id : 1010,
            Assignment_name : "Conception test",
            Assignment_due_at : "2024-01-20",
            point_possible : 70
        },
        {   Assignment_Id : 1011,
            Assignment_name : "Analysis test",
            Assignment_due_at : "2024-01-30",
            point_possible : 50
        },
        {   Assignment_Id : 1012,
            Assignment_name : "Coding test",
            Assignment_due_at : "2024-01-25",
            point_possible : 40
        }
    
    ]
};


const LearnerSubmission = {
    Learner_Id : 10,
    Assignment_Id : 1010,
    Submission : {
        submitted_at : "2024-01-14",
        score : 65
    },
    Learner_Id : 10,
    Assignment_Id : 1011,
    Submission : {
        submitted_at : "2024-01-28",
        score : 50
    },
    Learner_Id : 10,
    Assignment_Id : 1012,
    Submission : {
        submitted_at : "2024-01-25",
        score : 25
    }
}


let MyLearner_Id = (LearnerSubmission.Learner_Id);
let MyAssignment_Id = (LearnerSubmission.Assignment_Id);
let MySubmitted_at = (LearnerSubmission.Submission.submitted_at);
let MySubmissionScore = (LearnerSubmission.Submission.score);

function course(id){
for (const key of Object.keys(Course_Info)) {
    return (`${key} : ${Course_Info[key]}`);
    }
}
course(`id`);



for (const key of Object.keys(LearnerSubmission)) {
    console.log(`${key} : ${LearnerSubmission[key]}`);
}

function Submission(LearnerSubmission) {
    for (let key in LearnerSubmission) {
        if (typeof LearnerSubmission[key] === "object" && LearnerSubmission[key]!==null){
            Submission(LearnerSubmission[key]);
        } else {
            console.log(key + ":", LearnerSubmission[key]);
        }
    }
}


Submission(LearnerSubmission);

function getLearnerData(Course_Info, AssignmentGroup, LearnerSubmission){
}