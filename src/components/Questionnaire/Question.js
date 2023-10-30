import React, {useState} from "react";
import Autosuggest from 'react-autosuggest';

const Question = ({
                      question,
                      handleChange,
                      selectedResponse,
                  }) => {
    // Destructuring props and setting up state
    const {id, questionValue, optionsType, optionsDTOList} = question;
    const [otherOptionText, setOtherOptionText] = useState('');

    // Extracting suggestion values from optionsDTOList
    const suggestionValues = optionsDTOList.map(option => option.optionValue);

    // Handling changes in the Auto suggest
    const handleSuggestionChange = (e, {newValue}) => {
        if (newValue) {
            // Updating state and triggering handleChange when there's a newValue
            setOtherOptionText(newValue);
            handleChange(id, newValue);

            // Checking if newValue has at least 3 characters
            // if (newValue.length >= 3) {
            //     const words = newValue;
            //     // Finding a matching option based on the first three characters
            //     const matchingOption = optionsDTOList.find(option =>
            //         option.optionValue.toLowerCase().includes(words[0]?.toLowerCase()) &&
            //         option.optionValue.toLowerCase().includes(words[1]?.toLowerCase()) &&
            //         option.optionValue.toLowerCase().includes(words[2]?.toLowerCase())
            //     );
            //
            //     if (matchingOption) {
            //         // Updating state and triggering handleChange with matching option value
            //         setOtherOptionText(matchingOption.optionValue);
            //         handleChange(id, matchingOption.optionValue);
            //     }
            // }

            if (e.nativeEvent.inputType === "deleteContentBackward") {
                // Handling backspace or clear event
                setOtherOptionText("");
                handleChange(id, "");
            }
        } else {
            // Handling case when newValue is empty (e.g., backspace)
            setOtherOptionText('');
        }
    };

    // Generating suggestions based on input value
    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : suggestionValues.filter(
            suggestion => suggestion.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // Rendering individual suggestions
    const renderSuggestion = suggestion => (
        <div>
            {suggestion}
        </div>
    );


    // Handling changes in options (dropdown, radio, checkbox, etc.)
    const handleOptionChange = (e, option, type) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (type === 'dropdown') {
            handleChange(id, value);
        } else if (type === 'checkbox') {
            //change if other option is clicked
            // if (option === 'Other') {
            //     if (isChecked) {
            //         handleChange(id, "Other", type);
            //     } else {
            //         handleChange(id, '', type);
            //     }
            // } else {
            //     handleChange(id, option, type, isChecked);
            // }
            handleChange(id, option, type, isChecked);
        } else if (type === 'autocomplete') {
            handleChange(id, option);
        } else {
            handleChange(id, option);
        }
    };

    // JSX for the component
    return (
        <div className='question-types'>
            <div className='question-value'>
                <span className={'common-text'}>{questionValue}</span>
            </div>
            <div className={'question-options'}>
                {optionsType === 'DropDown' ? (
                    // JSX for Dropdown
                    <select onChange={(e) => handleOptionChange(e, '', 'dropdown')} value={selectedResponse}>
                        <option>Select</option>
                        {optionsDTOList.map((option) => (
                            <option key={option.id} value={option.optionValue}>
                                {option.optionValue}
                            </option>
                        ))}
                    </select>
                ) : optionsType === 'Radio' ? (
                    // JSX for Radio buttons
                    <div style={{display: 'flex', flexDirection: 'row', gap: '300px', width: '100%'}}>
                        {optionsDTOList.map((option) => (
                            <div className={'mt-2'} style={{display: 'flex', gap: '5px'}} key={option.id}>
                                <input className={'check-radio'}
                                       type={'radio'}
                                       id={option.id}
                                       checked={selectedResponse === option.optionValue}
                                       onChange={(e) => handleOptionChange(e, option.optionValue)}
                                />
                                <label htmlFor={option.id}>{option.optionValue}</label>
                            </div>
                        ))}
                    </div>
                ) : optionsType === 'Checkbox' ? (
                    // JSX for Checkboxes
                    optionsDTOList.map((option, index) => (
                        <div className={'mt-2'} style={{display: 'flex', height: '28px', gap: '20px'}} key={index}>
                            <input className={'check-box'}
                                   type="checkbox"
                                   id={option.id}
                                   onChange={(e) => handleOptionChange(e, option.optionValue, 'checkbox')}
                            />
                            <label htmlFor={option.id}>{option.optionValue}</label>
                            {/*Other option text value is other option is clicked
                            {/*{option.optionValue === 'Other' && selectedResponse?.includes('Other') && (*/}

                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        value={otherOptionText}*/}
                            {/*        onChange={handleOptionChange}*/}
                            {/*    />*/}
                            {/*)}*/}
                        </div>
                    ))
                ) : optionsType === 'Autocomplete' ? (
                    // JSX for Autosuggest
                    <Autosuggest
                        suggestions={getSuggestions(otherOptionText)}
                        onSuggestionsFetchRequested={({value}) => {
                        }}
                        onSuggestionsClearRequested={() => {
                        }}
                        getSuggestionValue={value => value}
                        renderSuggestion={renderSuggestion}
                        inputProps={{
                            placeholder: 'Type to search...',
                            value: otherOptionText,
                            onChange: (e, {newValue}) => handleSuggestionChange(e, {newValue})
                        }}
                    />
                ) : (
                    // Empty JSX for unknown optionsType
                    ''
                )}
            </div>
        </div>
    );
};

export default Question;
