export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";

// ---- ACTION CREATORS ----

export function setLoading() {
  return { type: SET_LOADING as typeof SET_LOADING };
}

export function setData(
  marketing: any[],
  analytics: any[],
  table: any[]
) {
  return {
    type: SET_DATA as typeof SET_DATA,
    payload: { marketing, analytics, table }
  };
}

export function setError(message: string) {
  return {
    type: SET_ERROR as typeof SET_ERROR,
    payload: message
  };
}
