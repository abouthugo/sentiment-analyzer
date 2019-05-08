/**
 * Fires up a tweet update
 * @param {String} id Record id
 * @param {{}} update Fields to update
 * @returns {Promise} A promise
 */
export function updateTweet(id, update){
  const options = {
    url: `http://localhost:3000/tweets/${id}`,
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify(update)
  }
  return axios(options);
}