// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function isGuest({ next, store }) {
  if (store.getters['settings/isLogin']) {
    return next({
      name: 'Cabinet',
    });
  }
  return next();
}
