const kodeMatakuliah = 'MK101'; // Ganti dengan kode mata kuliah yang ingin diedit
const updateData = {
    nama: 'Matakuliah A - Baru',
    sks: 4
};

fetch(`http://localhost:3000/matakuliah/${kodeMatakuliah}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));