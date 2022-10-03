const LOAD_CONTINENT = 'LOAD_CONTINENT';
const LOAD_COUNTRY = 'LOAD_COUNTRY';

const initialState = [];

export const getContinent = () => async () => {
  const response = await fetch(
    'https://covid-api.mmediagroup.fr/v1/cases?continent=africa',
  );
  const data = await response.json();
  return data;
};

export const getCountry = async (country) => {
  const response = await fetch(
    `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`,
  );
  const data = await response.json();
  return data;
};

const loadContinent = () => async (dispatch) => {
  const continent = await getContinent();
  const countries = Object.keys(continent);
  if (countries.length > 0) {
    dispatch({
      type: LOAD_CONTINENT,
      payload: countries,
    });
  }
};

const loadCountry = (country) => async (dispatch) => {
  const countryData = await getCountry(country);
  if (countryData) {
    dispatch({
      type: LOAD_COUNTRY,
      payload: countryData,
    });
  }
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTINENT:
      return { continent: action.payload };
    case LOAD_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export { loadContinent, loadCountry };
export default countriesReducer;
