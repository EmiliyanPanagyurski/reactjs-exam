const ApiUrl = `your api goes here`;

// since we use statis data I havent used this service, I just set the store to have the static data.But in the future we can use this.
export function getSong(author, song) {
  return new Promise((resolve, reject) => {
    return fetch(`${ApiUrl}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return new Error("Something went wrong !");
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}