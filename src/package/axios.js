import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://signaturecards.ng/api/v1",
    headers: {
        "Content-Type": "application/json",
    }
});

// https://signaturecards.ng/api/v1
// "http://127.0.0.1:5000"
// https://signaturecards-db-i5x4.onrender.com