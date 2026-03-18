const envBaseUrl = process.env.REACT_APP_API_BASE_URL;
export const API_VOL = (envBaseUrl || "").replace(/\/+$/, "");
