import axios from 'axios';
import {
  FETCH_USER,
  ADD_EXPERTISE,
  REMOVE_EXPERTISE,
  CLEAR_EXPERTISE,
  CHANGE_LINKONE,
  CHANGE_LINKTWO,
  CHANGE_LINKTHREE,
  FETCH_NEW_APPLICATIONS
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addExpertise = expertise => {
  return { type: ADD_EXPERTISE, payload: expertise };
};

export const removeExpertise = expertise => {
  return { type: REMOVE_EXPERTISE, payload: expertise };
};

export const changeLinkOne = link => {
  return { type: CHANGE_LINKONE, payload: link };
};

export const changeLinkTwo = link => {
  return { type: CHANGE_LINKTWO, payload: link };
};

export const changeLinkThree = link => {
  return { type: CHANGE_LINKTHREE, payload: link };
};

export const clearExpertise = () => {
  return { type: CLEAR_EXPERTISE, payload: null };
};

export const submitApplication = application => async dispatch => {
  const res = await axios.post('/api/application', application);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchNewApplications = () => async dispatch => {
  const res = await axios.get('/api/get-new-applications');
  dispatch({ type: FETCH_NEW_APPLICATIONS, payload: res.data });
};

export const acceptApplication = key => async dispatch => {
  const res = await axios.post('/api/accept-application', key);
  dispatch({ type: FETCH_NEW_APPLICATIONS, payload: res.data });
};

export const denyApplication = key => async dispatch => {
  const res = await axios.post('/api/deny-application', key);
  dispatch({ type: FETCH_NEW_APPLICATIONS, payload: res.data });
};
