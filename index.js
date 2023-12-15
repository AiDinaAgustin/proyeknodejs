const mahasiswaNim = '2021004006';
const updateData = {
    nama: 'John Doe',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Jl. Jendral Sudirman No. 1'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));