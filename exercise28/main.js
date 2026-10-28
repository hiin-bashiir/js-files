function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    const message = await fetchDataWithPromise();

    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();