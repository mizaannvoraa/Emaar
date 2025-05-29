export const GTM_ID = 'GTM-58P7ZHM5';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
