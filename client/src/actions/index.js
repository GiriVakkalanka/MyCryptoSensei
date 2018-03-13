import axios from 'axios';
import {
  FETCH_USER,
  ADD_EXPERTISE,
  REMOVE_EXPERTISE,
  CLEAR_EXPERTISE,
  CHANGE_LINKONE,
  CHANGE_LINKTWO,
  CHANGE_LINKTHREE,
  FETCH_NEW_APPLICATIONS,
  CHANGE_DATE,
  CHANGE_STARTTIME,
  CHANGE_ENDTIME,
  CHANGE_CITY,
  CHANGE_COUNTRY,
  CHANGE_DESCRIPTION,
  CHANGE_RATE,
  GET_SENSEI_PAGE,
  CLEAR_SENSEI_PAGE,
  TOGGLE_DRAWER,
  SELECT_WINDOW,
  SUBMIT_REQUEST,
  FETCH_SENT_REQUESTS,
  FETCH_RECEIVED_REQUESTS,
  FETCH_REQUESTS,
  ACCEPT_REQUEST,
  DENY_REQUEST
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

export const changeDate = date => {
  //console.log(date);
  return { type: CHANGE_DATE, payload: date };
};

export const changeStarttime = startTime => {
  return { type: CHANGE_STARTTIME, payload: startTime };
};

export const changeEndtime = endTime => {
  return { type: CHANGE_ENDTIME, payload: endTime };
};

export const saveTimeWindow = timeWindow => async dispatch => {
  const res = await axios.post('/api/save_time_window', timeWindow);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveSpecialization = specializationChoices => async dispatch => {
  //console.log(specializationChoices);
  const res = await axios.post(
    '/api/save_specialization_choices',
    specializationChoices
  );
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveServices = serviceChoices => async dispatch => {
  //console.log(expertiseChoices);
  const res = await axios.post('/api/save_expertise_choices', serviceChoices);
  //history.push('/sensei_application');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveLinks = linkChoices => async dispatch => {
  //console.log(specializationChoices);
  const res = await axios.post('/api/save_link_choices', linkChoices);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveInfo = info => async dispatch => {
  //console.log('action called');
  const res = await axios.post('/api/save_info', info);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const changeCity = city => {
  return { type: CHANGE_CITY, payload: city };
};

export const changeCountry = country => {
  return { type: CHANGE_COUNTRY, payload: country };
};

export const changeDescription = description => {
  return { type: CHANGE_DESCRIPTION, payload: description };
};

export const changeRate = rate => {
  return { type: CHANGE_RATE, payload: rate };
};

export const saveRate = rate => async dispatch => {
  const res = await axios.post('/api/save_rate', rate);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getSenseiPage = info => async dispatch => {
  console.log(info);
  const res = await axios.get('/api/get_sensei_page', { params: info });
  dispatch({ type: GET_SENSEI_PAGE, payload: res.data });
};

export const toggleDrawer = () => {
  return { type: TOGGLE_DRAWER, payload: null };
};

export const selectWindow = window => {
  return { type: SELECT_WINDOW, payload: window };
};

export const submitRequest = request => async dispatch => {
  const res = await axios.post('/api/submit-request', request);
  dispatch({ type: SUBMIT_REQUEST, payload: res.data });
};

export const fetchRequests = () => async dispatch => {
  const res = await axios.get('/api/get-requests');
  dispatch({ type: FETCH_REQUESTS, payload: res.data });
};

export const fetchReceivedRequests = () => async dispatch => {
  const res = await axios.get('/api/get-received-requests');
  dispatch({ type: FETCH_RECEIVED_REQUESTS, payload: res.data });
};

export const fetchSentRequests = () => async dispatch => {
  const res = await axios.get('/api/get-sent-requests');
  dispatch({ type: FETCH_SENT_REQUESTS, payload: res.data });
};

export const acceptRequest = requestId => async dispatch => {
  const res = await axios.post('/api/accept-request', requestId);
  dispatch({ type: ACCEPT_REQUEST, payload: res.data });
};

export const denyRequest = requestId => async dispatch => {
  const res = await axios.post('/api/deny-request', requestId);
  dispatch({ type: DENY_REQUEST, payload: res.data });
};
