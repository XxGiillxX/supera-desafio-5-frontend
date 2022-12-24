import axios from "axios";

const defaultFetch = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5173/",
    }
});

export default defaultFetch;