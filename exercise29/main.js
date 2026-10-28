async function fetchData() {
    console.log("start fetching data");
    
    const response = await fetch('data.json')
    const data = await response.json();

    console.log("Fetching data", data);
    console.log("Data fetching complete. This message runs after data is fetched.");
}
fetchData();
console.log("This message runs immediately and is not blocked.");