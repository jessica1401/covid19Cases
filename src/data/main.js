const axios = require('axios')
const url = "https://covid19.mathdro.id/api";

export const main = async () => {
    try {
        const data = await axios.get(url)
        return data;
    } catch (e) {
        return e
    }
}
