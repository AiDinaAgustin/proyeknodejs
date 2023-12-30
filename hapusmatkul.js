const kodeMatakuliah = 'MK101'; // Ganti dengan kode mata kuliah yang ingin dihapus

fetch(`http://localhost:3000/matakuliah/${kodeMatakuliah}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
