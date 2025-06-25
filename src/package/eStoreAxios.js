import axios from "axios";

export const axiosEstore = axios.create({
    baseURL: "https://estores.ng/api/",
    headers: {
        "Content-Type": "application/json",
    }
});

// https://signaturecards.ng/api/v1
// "http://127.0.0.1:5000"
// https://signaturecards-db-i5x4.onrender.com