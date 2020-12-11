import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cefabbce-81c1-4861-b5aa-d39193bec3df'
    }
});

const authApi = {
    getUserData: () => {
        return instance.get(`auth/me`).then(response => response.data);
    }
}

const usersApi = {
    getUsers: (pageNum, pageSize) => {
        return instance.get(`users?page=${pageNum}&count=${pageSize}`)
            .then(response => response.data.items);
    }
}

const profileApi = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
}

export {authApi, usersApi, profileApi};

