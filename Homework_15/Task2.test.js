const axios = require('axios');
jest.mock('axios');

test("get all users", async () => {
    axios.get.mockResolvedValue({ status: 200, data: [] });

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/users', {
        params: { albums: 2, photos: 10 },
        headers: { 'X-Test-Header': 'MyTestValue' }
    });

    expect(response.status).toEqual(200);
    expect(axios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
            params: expect.objectContaining({ albums: 2, photos: 10 }),
            headers: expect.objectContaining({ 'X-Test-Header': 'MyTestValue' })
        })
    );
});
