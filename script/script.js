// Ambil semua elemen yang dibutuhkan
    const btnPoster = document.getElementById('btn-poster');
    const btnArtikel = document.getElementById('btn-artikel');
    const posterContent = document.getElementById('poster-content');
    const artikelContent = document.getElementById('artikel-content');

    // Fungsi ketika tombol Poster diklik
    btnPoster.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah reload halaman
        
        // 1. Tampilkan poster, sembunyikan artikel
        posterContent.classList.remove('hidden');
        artikelContent.classList.add('hidden');
        
        // 2. Ubah styling tombol Poster jadi Aktif (bg-white, text-black)
        btnPoster.className = "p-4 text-2xl text-center font-semibold w-1/2 rounded-t-lg transition duration-500 bg-white text-black";
        
        // 3. Ubah styling tombol Artikel jadi Pasif (bg-transparent, text-white)
        btnArtikel.className = "p-4 text-2xl text-center font-semibold w-1/2 rounded-t-lg transition duration-500 bg-transparent text-white hover:bg-white hover:text-black";
    });

    // Fungsi ketika tombol Artikel diklik
    btnArtikel.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. Tampilkan artikel, sembunyikan poster
        artikelContent.classList.remove('hidden');
        posterContent.classList.add('hidden');
        
        // 2. Ubah styling tombol Artikel jadi Aktif
        btnArtikel.className = "p-4 text-2xl text-center font-semibold w-1/2 rounded-t-lg transition duration-500 bg-white text-black";
        
        // 3. Ubah styling tombol Poster jadi Pasif
        btnPoster.className = "p-4 text-2xl text-center font-semibold w-1/2 rounded-t-lg transition duration-500 bg-transparent text-white hover:bg-white hover:text-black";
    });
</script>