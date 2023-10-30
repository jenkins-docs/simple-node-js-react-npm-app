// BASE API endpoint
export const BASE = "http://127.0.0.1:8080/api/";

// QUESTION API endpoint
const QUESTION = "questions";

// LOGIN API endpoint
const LOGIN = 'auth/signIn';

// USER RESPONSE API endpoint
const USER_RESPONSE = 'user-responses'

// APIs related to questions
export const questionApiConstants = {
    // Search for questions
    SEARCH_QUESTION: BASE.concat(QUESTION),

    // Search for questions by question type
    SEARCH_QUESTION_BY_QUESTION_TYPE: BASE.concat(QUESTION)
};

// Auth API constants
export const loginApiConstants = {
    // Login user
    LOGIN_USER: BASE.concat(LOGIN)
}

// User response constants
export const userResponseApiConstants = {
    // Submit user response
    SUBMIT_RESPONSE: BASE.concat(USER_RESPONSE)
}
