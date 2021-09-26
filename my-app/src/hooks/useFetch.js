function updateOptions(options) {
  const update = { ...options };
  if (localStorage.jwt) {
    update.headers = {
      ...update.headers,
      "x-auth-token": `${localStorage.jwt}`,
    };
  }
  return update;
}

export default function fetcher(url, options) {
  return fetch(url, updateOptions(options));
}
