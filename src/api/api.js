//URL まとめ

const API_BASE_URL = 
    process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://todo-memo-api.onrender.com";

export default API_BASE_URL;