import useAxios, { configure } from "axios-hooks";
import Axios from "axios";

export function configureAxios() {
  // use axios create to set base headers and then use request config to set per request headers like locale, tracking, csrf token
  const axios = Axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {'X-Custom-Header': 'foobar'}
  });

  configure({ axios });
}

export default function useLiFetch(requestConfig, pemConfig) {
  // TODO set csrf token, page instance, li-track, li lang headers per request
  const [{ data, loading, error }] = useAxios(requestConfig);

  // based on error state, set pem tracking

  return [{data, loading, error}];
}