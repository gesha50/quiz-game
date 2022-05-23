// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function isAuth({ next, store }) {
  if (!store.getters['settings/isLogin']) {
    return next({
      name: 'Login',
    });
  }
  return next();
}
