import axios from "axios";

const articles = {
    getAll() {
        return axios.get("/articles");
    },
    deleteOne(id) {
        return axios.delete(`/articles/${id}`);
    },
    getOne(id) {
        return axios.get(`/articles/${id}`);
    },
    save(article) {
        return axios.post("/articles", article);
    },
    edit(id, article) {
        return axios.put(`/articles/${id}`, article);
    },
    uploadImage(image) {
        var data = new FormData();
        data.append("image", image);
        return axios.post("/fotos", data);
    }
};

const mountains = {
    getAll() {
        return axios.get("/mountains");
    },
    getOne(id) {
        return axios.get(`/mountains/${id}`);
    },
    edit(id, mountain) {
        return axios.put(`/mountains/${id}`, mountain);
    },
    save(mountain) {
        return axios.post("/mountains", mountain);
    },
    deleteOne(id) {
        return axios.delete(`/mountains/${id}`);
    }
};

const countries = {
    getAll() {
        return axios.get("/countries");
    },
    getOne(id) {
        return axios.get(`/countries/${id}`);
    },
    save(country) {
        return axios.post("/countries", country);
    },
    edit(id, country) {
        return axios.put(`/countries/${id}`, country);
    },
    deleteOne(id) {
        return axios.delete(`/countries/${id}`);
    }
};

const systems = {
    getAll() {
        return axios.get("/systems");
    },
    getOne(id) {
        return axios.get(`/systems/${id}`);
    },
    save(system) {
        return axios.post("/systems", system);
    },
    edit(id, system) {
        return axios.put(`/systems/${id}`, system);
    },
    deleteOne(id) {
        return axios.delete(`/systems/${id}`);
    }
};

const users = {
    login(user) {
        console.log(user);
        return axios.post("/admin/login", user);
    }
};

export { articles, mountains, countries, systems, users };
