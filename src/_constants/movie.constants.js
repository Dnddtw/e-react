import { API_KEY } from './app.constants';

export const MOVIES_URL = '/movie';

export const MOVIE_POPULAR = `${MOVIES_URL}/popular?${API_KEY}`;
export const SEARCH_URL = `/search/movie?${API_KEY}`;

export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';
export const MOVIES_RESET = 'MOVIES_RESET';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_RESET = 'SEARCH_RESET';
export const SEARCH_QUERY = 'SEARCH_QUERY';

export const MOVIEINFO_REQUEST = 'MOVIEINFO_REQUEST';
export const MOVIEINFO_SUCCESS = 'MOVIEINFO_SUCCESS';
export const MOVIEINFO_FAILURE = 'MOVIEINFO_FAILURE';
export const MOVIEINFO_RESET = 'MOVIEINFO_RESET';
export const MOVIEINFO_ADD = 'MOVIEINFO_ADD';

export const PAGINATION_UPDATE = 'PAGINATION_UPDATE';
export const PAGINATION_RESET = 'PAGINATION_RESET';

export const ADD_MOVIES_POPULAR = 'ADD_MOVIE_POPULAR';

export default {
  API_KEY,
  MOVIES_URL,
  SEARCH_URL,
  ADD_MOVIES_POPULAR,
  PAGINATION_UPDATE,
  PAGINATION_RESET,
  MOVIE_POPULAR,
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
  MOVIES_FAILURE,
  MOVIES_RESET,
  MOVIEINFO_REQUEST,
  MOVIEINFO_SUCCESS,
  MOVIEINFO_FAILURE,
  MOVIEINFO_RESET,
  MOVIEINFO_ADD,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_RESET,
  SEARCH_QUERY,
};
