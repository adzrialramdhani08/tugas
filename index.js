const mahasiswaNim = 1102010; // Replace with the actual nim
const updatedData = {
  nama: 'Messi',
  gender: 'L',
  prodi: 'TI',
  alamat: 'Jl. Cibolang Kaler'
};

async function editEntry(id, payload) {
    const response = fetch(`http://localhost:3000/mahasiswa/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    console.log(response)
}

editEntry(mahasiswaNim, JSON.stringify(updatedData))

async function createData(payload) {
    try {
        const response = await fetch()
    } catch (error) {
        console.error(error.message)
    }
}