const baseURL = "http://localhost:8888/tutoWp/wp-json/wp/v2/";

async function get(endpoint) {
  return (await (await fetch(baseURL + endpoint)).json()).data;
}

export default {
  getGames() {
    return get(`/jouets`);
  }
};