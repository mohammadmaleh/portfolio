export const FETCH_ALL_PROJECTS = "GET_ALL_PROJECTS";
export const FETCH_TYPE_PROJECT = "Fetch_TYPE_PROJECT";
export const fetchAll = () => {
  return {
    type: FETCH_ALL_PROJECTS,
    payload: {}
  };
};
export const fetchType = type => {
  return {
    type: FETCH_TYPE_PROJECT,
    payload: { fetchType: type }
  };
};
