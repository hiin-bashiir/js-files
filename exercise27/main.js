function fetUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const success = "true";
            if (success) {
                resolve({id: "Abdi23@", name: "Abdirahim"})
            } else {
                reject("Failed to fetch user data")
            }
        },2000)
    })
}

fetUserData()
    .then(data => console.log("User Data:", data))
    .catch(error => console.error("Error:", error));