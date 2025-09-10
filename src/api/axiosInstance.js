// src/api/axiosInstance.js
import axios from 'axios';
// eslint-disable-next-line no-undef
const admin = localStorage.getItem("admin");
console.log( "this token",admin);

const axiosInstance = axios.create({
  baseURL: 'https://astrowanibackend.onrender.com/', // Replace with your base URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${admin}`,
  },
});

export default axiosInstance;



// // src/api/axiosInstance.js
// import axios from 'axios';
// // eslint-disable-next-line no-undef
// const admin = localStorage.getItem("admin");
// console.log( "this token",admin);

// const axiosInstance = axios.create({
//   baseURL: 'https://astrovani-6d54b00db2da.herokuapp.com/', // Replace with your base URL
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${admin}`,
//   },
// });

// export default axiosInstance;

