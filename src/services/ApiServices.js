import Axios from "./admin-axios-interceptor";
import {loginApiConstants, questionApiConstants, userResponseApiConstants} from "./ApiConstants";

// QUESTIONS

/**
 * Save a new question.
 * @param {Object} data - The question data to save.
 * @returns {Promise} - Resolves to the saved question.
 */
export async function saveQuestion(data) {
    return await Axios.post(questionApiConstants.SEARCH_QUESTION, data);
}

/**
 * Search for questions.
 * @returns {Promise} - Resolves to a list of questions.
 */
export async function searchQuestions() {
    return await Axios.get(questionApiConstants.SEARCH_QUESTION);
}

/**
 * Search for questions by question type.
 * @param {string} params - The question type to search for.
 * @returns {Promise} - Resolves to a list of questions matching the type.
 */
export async function searchQuestionsByQuestionType(params) {
    return await Axios.get(questionApiConstants.SEARCH_QUESTION_BY_QUESTION_TYPE + `/${params}`, params);
}

// AUTH

/**
 * Log in a user.
 * @param {Object} params - The user login credentials.
 * @param {string} params.username - The username.
 * @param {string} params.password - The password.
 * @returns {Promise} - Resolves to user login information.
 */
export async function loginUser(params) {
    return await Axios.get(
        loginApiConstants.LOGIN_USER + `?password=${params.password}&username=${params.username}`
    );
}

// USER RESPONSE

/**
 * Submit user response data.
 * @param {number} userId - The user ID.
 * @param {Object} params - The user response data.
 * @returns {Promise} - Resolves to the submitted response.
 */
export async function userResponse(userId, params) {
    return await Axios.post(
        userResponseApiConstants.SUBMIT_RESPONSE, params
    );
}
