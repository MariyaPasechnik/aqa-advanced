const axios = require('axios');
jest.mock('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return { errorMessage: "Request failed" };
    }
}

describe("Testing fetchData with mocked Axios", () => {

    test("should return data if request is successful", async () => {
        axios.get.mockResolvedValue({ data: { name: "Maria", age: 25 } });
        const result = await fetchData('https://example.com/users');
        expect(result).toEqual({ name: "Maria", age: 25 });
    });

    test("should return error message if request fails", async () => {
        axios.get.mockRejectedValue(new Error("Network Error"));
        const result = await fetchData('https://example.com/users');
        expect(result).toEqual({ errorMessage: "Request failed" });
    });

});
