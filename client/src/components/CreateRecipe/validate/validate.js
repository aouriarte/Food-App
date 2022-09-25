let noEmpty = /\S+/;
let validateName = /^[a-z]+$/i;
// let validateNum = /^\d+$/;

// export default function validate(input) {
//     let errors = {};

//     if (
//         !noEmpty.test(input.title) ||
//         !validateName.test(input.title) ||
//         input.title.length < 3
//     ) {
//         errors.title = "The Title is required";
//     }
//     if (!input.sumary) {
//         errors.sumary = "A summary is needed for the recipe";
//     }
//     if (!validateNum.test(input.summary) || parseInt(input.sumary) < 1) {
//         errors.life = "The Health Score is required";
//     }
//     if (!input.steps) {
//         errors.steps = "What are the steps of your recipe";
//     }
//     return errors;
// };

export default function validate(input){
    let errors = {}

    if ( !noEmpty.test(input.title) || !validateName.test(input.title)){
        errors.title = "The title is required. contain numbers and must be longer than two characters"
    } else if (!input.summary){
        errors.summary = "Give a brief explanation of your recipe"
    } else if (!input.steps){
        errors.steps = "Don´t forget to tell us how you did it"
    }
    return errors
}