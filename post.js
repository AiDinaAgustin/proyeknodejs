const postData = {
    nim: '2021004',
    nama: 'John Doe',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Jl. Jendral Sudirman No. 1'
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
