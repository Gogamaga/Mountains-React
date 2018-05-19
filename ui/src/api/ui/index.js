import axios from "axios";

//ARTICLES
const articles = {
    getNewest() {
        return axios.get("/ui/articles");
    },
    getMostViewed() {
        return axios.get("/ui/articles/mostviewed");
    },
    getOneArticle(id) {
        return axios.get(`/ui/articles/${id}`);
    },
    getArticlesByMountainName(name) {
        return axios.get(`/ui/articles/articlebymontainname/${name}`);
    }
};

const photos = {
    getRandomPhoto() {
        return axios.get("/ui/fotos/random_photo");
    },
    getAllPhotos() {
        return axios.get("/ui/fotos");
    },
    getMountainsNamePhotos() {
        return axios.get("/ui/fotos/mountain_name_list");
    },
    getOneMountainPhotos(id) {
        return axios.get(`/ui/fotos/${id}`);
    }
};

const system = {
    getAllSystem() {
        return axios.get("/ui/system");
    }
};

export { articles, photos, system };
