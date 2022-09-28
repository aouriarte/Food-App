let noEmpty = /\S+/;
let validateName = /^[a-zA-Z\s]+$/;
let validateUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

export default function validate(input) {
    let errors = {}

    if (!noEmpty.test(input.title) || input.title.length < 3 || !validateName.test(input.title)) {
        errors.title = "The title must have more than two characters. Must not contain numbers and special characters";
    } else if (!input.summary || input.summary.length < 20) {
        errors.summary = "Your recipe must have a summary. Minimum 20 characters";
    } else if (!input.steps || input.steps.length < 30) {
        errors.steps = "Your recipe must have a few steps. Minimum 30 characters";
    } else if (input.healthScore < 1 || input.healthScore > 100) {
        errors.healthScore = "You must rate your recipe. Between 1-100";
    } else if (input.image && !validateUrl.test(input.image)) {
        errors.image = "This is not a valid URL";
    }
    return errors
}