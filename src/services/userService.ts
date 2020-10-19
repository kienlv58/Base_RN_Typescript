import httpClient from 'httpClient';

class UserService {
  async login(userName: string, passWord: string) {
    // const { data } = await httpClient.post('/users/sign_in', {
    //   userName,
    //   passWord,
    // });

    return { name: 'kien', age: 24 };
  }
}

export default new UserService();
