import axios from 'axios';

let api= axios.create({
    headers: {
        "client-id": "efarnx6ivw3i568zq1guk8m4zlvhq0",
        "Authorization" : "Bearer ab6ilgvplj0r5jcm5wtqiscrnxgydq"
    }
});
//"authorization" : "OAuth kr5n0h8wpjyqcffs5v9ps3gjeqnfd6"
export default api;