// 예시
const API = 'https://api.pettick.kr'

export const EndPoint = {
  AUTH_ADMIN_LOGIN: `${API}/admin/sign-in`,
};

const GunbanAdminApiMap = {
  post: {
    [EndPoint.AUTH_ADMIN_LOGIN]: { data: {} },
  },
  get: {
    [EndPoint.AUTH_ADMIN_USERS]: { data: {} },
  },
  delete: {
    [EndPoint.AUTH_ADMIN_PRODUCTS]: { data: {} },
  },
  put: {
    [EndPoint.AUTH_ADMIN_PRODUCTS]: { data: {} },
  },
  patch: {},
};

export default GunbanAdminApiMap;
