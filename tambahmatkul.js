const postData = {
    kode: 'MK101',
    nama: 'Dasprog',
    sks: 3
};

fetch('http://localhost:3000/matakuliah', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
