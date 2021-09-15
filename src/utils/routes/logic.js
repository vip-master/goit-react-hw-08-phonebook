const specificPath = ({ path }) =>
  path.split('/').filter((i) => i !== '').length + (path.includes(':') ? 1 : 0);

export const orderPathRoutes = (routes) => {
  const result = [...routes];

  result.sort((a, b) => {
    if (a.exactRoute && !b.exactRoute) return -1;
    if (!a.exactRoute && b.exactRoute) return 1;
    if (specificPath(a) > specificPath(b)) return -1;
    if (specificPath(a) < specificPath(b)) return 1;
    return 0;
  });
  return result;
};

export const uppercase = (str) =>
  str
    .split('')
    .map((e, i) => (i === 0 ? e.toUpperCase() : e))
    .join('');

export const getNameRoute = (routes, name) =>
  routes.reduce((a, c) => (c.name === name ? c.path : a), '');

export const authChecker = (isAuth, { isPrivate, isPublic }) =>
  isAuth === undefined ? true : isAuth ? isPrivate : isPublic;
