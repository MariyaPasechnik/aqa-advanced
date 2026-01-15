const axios = require('axios');
async function fetchData() {
    try {
        const res = await axios.get('https://d1ou.ua');
        return {
    data: res.data,
    status: res.status
};
    } catch (error) {
        return { errorMessage: "Invalid URL" };
    }
}