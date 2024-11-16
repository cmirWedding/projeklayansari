function tampilkanPeta() {
    const mapContainer = document.getElementById("mapContainer");
    const tampilkanBtn = document.getElementById("tampilkanPeta");
    const tutupBtn = document.getElementById("tutupPeta");
    const mapsTitle = document.getElementById("mapsTitle");

    mapContainer.style.display = "block"; // Tampilkan peta full screen
    tampilkanBtn.style.display = "none"; // Sembunyikan tombol "Tampilkan Peta"
    tutupBtn.style.display = "inline-block"; // Tampilkan tombol "Tutup Peta"
    mapsTitle.style.display = "none"; // Sembunyikan judul
}

function tutupPeta() {
    const mapContainer = document.getElementById("mapContainer");
    const tampilkanBtn = document.getElementById("tampilkanPeta");
    const tutupBtn = document.getElementById("tutupPeta");
    const mapsTitle = document.getElementById("mapsTitle");

    mapContainer.style.display = "none"; // Sembunyikan peta full screen
    tampilkanBtn.style.display = "inline-block"; // Tampilkan tombol "Tampilkan Peta"
    tutupBtn.style.display = "none"; // Sembunyikan tombol "Tutup Peta"
    mapsTitle.style.display = "block"; // Tampilkan judul
}
