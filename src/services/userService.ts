import httpClient from 'httpClient';

class UserService {
  async getUser(userName: string) {
    const { data } = await httpClient.get(`users/${userName}`);
    return data;
  }
}

export default new UserService();
