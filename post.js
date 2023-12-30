const postData = {
    nim: '20210082',
    nama: 'Angga',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Jampang'
};

fetch('http://localhost:3000/mahasiswa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
