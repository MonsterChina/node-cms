import http from "../utils/http.js";
import API from "../config/index.js";

//上传
// let formData = new FormData();
// formData.append('file', file);
// formData.append('fileName', file.name);

export let upload = (data) => {
  return http({
    url: `${API.BASE_API}/api/upload`,
    method: "post",
    headers: {
      "Content-type": "multipart/form-data",
    },
    data: data,
  });
};
