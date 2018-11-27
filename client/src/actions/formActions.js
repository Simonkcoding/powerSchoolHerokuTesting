import { FETCH_FORMS, UPDATE_FORM } from './types';
import API from "../utils/API";

export const fetchForms = () => dispatch =>{
    
    API.getAllForms()
            .then(res => res.json())
            .then(forms => dispatch({
                type:FETCH_FORMS,
                payload:forms
            }))
            .catch(err => console.log(err));;
    
}

export const updateForm = (id, readForm) => dispatch =>{
    
    API.markAsSaved(id, readForm)
        .then(res=>res.json())
        .then(form=> dispatch({
            type:UPDATE_FORM,
            payload:form
        }))

        .catch(err => console.log(err));
}