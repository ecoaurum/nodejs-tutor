async function getFetch(url) {
    const response = await fetch(url);
    const res = response.json();
    return res;
}

export default getFetch;