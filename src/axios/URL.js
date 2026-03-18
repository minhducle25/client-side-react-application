const envBaseUrl = process.env.REACT_APP_API_BASE_URL;

// Trim trailing slash to avoid double slashes in request URLs.
export const API_VOL = (envBaseUrl || "https://min-volcano.duckdns.org").replace(/\/+$/, "");
