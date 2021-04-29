import { getData } from "./request.js";

export default async (store) => {
    // consName type
    const consName = store.state.consName;
    const type = store.state.type
    const name = `${consName}${type}`
    const getLocalData = localStorage.getItem(name);
    const data = getLocalData ? JSON.parse(getLocalData) : await getData(consName, type);
    if (data.error_code) {
        store.commit('setErrorCode', data.error_code)
        return;
    }
    store.commit('setData', data);
    localStorage.setItem(name, JSON.stringify(data));
    return data;
}
