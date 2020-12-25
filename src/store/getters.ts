const getters = {
  role: (state) => state.user.userInfo.role,
  permissionRoutes: (state) => state.permission.routes,
};

export default getters;
