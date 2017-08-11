import fetch from '@/utils/fetch';

export function login(company, loginName ,loginPass) {
  return fetch({
    url: '/login',
    method: 'post',
    data: {
      company,
      loginName,
      loginPass
    }
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  });
}
