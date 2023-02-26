
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        const filteredData = json
            .filter(data => data.userId === 1)
            .map(data => data.id)
            .reduce((total, data) => total + data, 0);
        console.log(filteredData);
    });