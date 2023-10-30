import React, {useEffect, useState} from "react";
import Question from "./Question";
import Sidebar from "../../layout/Sidebar";
import {searchQuestionsByQuestionType, userResponse} from "../../services/ApiServices";

const QuestionnaireForm = () => {
    // State variables
    const [apiQuestions, setApiQuestions] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    const [userResponses, setUserResponses] = useState({});

    // Function to handle form submission
    const handleSubmit = async (e) => {
        // Get userId from local storage
        let userId = localStorage.getItem('userId');

        // Transform user responses for submission
        const transformed = Object.keys(userResponses).map(questionId => {
            const responseText = userResponses[questionId];
            return {userId: parseInt(userId, 10), questionId: parseInt(questionId, 10), responseText};
        });

        try {
            // Send user responses to the server
            const response = await userResponse(Number(userId), transformed)

            if (response.status === 200) {
                // If successful, reset state and fetch new questions
                setUserResponses({});
                setApiQuestions([]);
                await fetchQuestionByQuestionType(selectedValue);
            }
        } catch (e) {
            // Handle submission error
            alert('Error occurred while submitting')
        }
    }

    // Fetch questions when selected value changes
    useEffect(() => {
        fetchQuestionByQuestionType(selectedValue);
    }, [selectedValue]);

    // Function to handle user response change
    const handleUserResponseChange = (questionId, value, type) => {
        setUserResponses(prevResponses => {
            let updatedValue = value;
            if (type === 'checkbox') {
                if (prevResponses[questionId]) {
                    const values = prevResponses[questionId].split(',');
                    const valueIndex = values.indexOf(value);

                    if (valueIndex !== -1) {
                        // If the value is already in the list, remove it
                        values.splice(valueIndex, 1);
                        updatedValue = values.join(',');
                    } else {
                        // If it's not in the list, add it
                        updatedValue = values.concat(value).join(',');
                    }
                } else {
                    // If this is the first checkbox being checked for this question
                    updatedValue = value;
                }
            }
            // Remove trailing comma if it exists
            if (updatedValue.endsWith(',')) {
                updatedValue = updatedValue.slice(0, -1);
            }

            return {
                ...prevResponses,
                [questionId]: updatedValue,
            };
        });
    };

    // Function to fetch questions based on selected value
    const fetchQuestionByQuestionType = async (value) => {
        try {
            const response = await searchQuestionsByQuestionType(value);
            setApiQuestions(response.data)
        } catch (e) {
            // Handle fetch error
            throw e
        }
    }

    // Function to handle change in select input
    const handleChange = async (event) => {
        let value = event.target.value
        await setSelectedValue(value);
        await fetchQuestionByQuestionType(value);
    }

    // JSX for the component
    return (
        <React.Fragment>
            <div className='questionnaire-div'>
                <Sidebar/>
                <div className='questionnaire-form'>
                    <div id={'myForm'} className={'questions'}>
                        <div className={'topic-with-icon'}>
                            <div className={'topic'}>
                                <span style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>D</span>
                            </div>
                            <span style={{fontWeight: 'bold', color: '#505b55'}}>Insurance Type FA</span>
                        </div>

                        <div className={'question-types'}>
                            <span className={'common-text'}>Please Select Insurance Type</span>
                            <select value={selectedValue} onChange={handleChange}>
                                <option value={''}>Select</option>
                                <option value={'General'}>General</option>
                                <option value={'Personal'}>Personal</option>
                                <option value={'Health'}>Health</option>
                                <option value={'Insurance'}>Insurance</option>
                                {/*<option value={'Shoppingcart'}>Shopping Cart</option>*/}
                                {/*<option value={'Other'}>Other</option>*/}
                            </select>
                        </div>

                        {apiQuestions && apiQuestions.map((question) => (
                            <Question
                                key={question.id}
                                question={question}
                                handleChange={handleUserResponseChange}
                                selectedResponse={userResponses[question.id]}
                            />
                        ))}
                    </div>
                    <div className={'button-div'}>
                        <button className='btn-submit'>Cancel</button>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                            <button className='btn-submit'>Save</button>
                            <button onClick={(e) => handleSubmit(e)} className='btn-submit'
                                    style={{backgroundColor: 'blue', color: 'white'}}>Submit
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default QuestionnaireForm;
