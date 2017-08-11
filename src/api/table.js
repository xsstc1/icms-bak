import fetch from '@/utils/fetch';

export function getList(params) {
  return fetch({
    url: '/home/index?rows=6',
    method: 'get',
    params
  });
}
