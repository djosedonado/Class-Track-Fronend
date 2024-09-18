import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  // Si no necesitas credenciales, asegúrate de que `withCredentials` esté en false
  withCredentials: false,
});

// Añade un interceptor para ver las solicitudes y respuestas (opcional)
api.interceptors.request.use(
  (config) => {
    console.log("Request made with ", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response received", response);
    return response;
  },
  (error) => {
    console.log("Response error", error);
    return Promise.reject(error);
  }
);

export default api;
