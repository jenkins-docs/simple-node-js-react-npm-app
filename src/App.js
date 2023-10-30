import './App.css';
import './assets/styles/styles.scss'
import QuestionnaireForm from "./components/Questionnaire/QuestionnaireForm";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login";

function App() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/login'} render={props=><Login/>} />
                    <Route path={'/questionnaire'} render={props=><QuestionnaireForm/>}/>
                    <Redirect from="/" to="/questionnaire"/>
                </Switch>
            </BrowserRouter>
    );
}

export default App;
