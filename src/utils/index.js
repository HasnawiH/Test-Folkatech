export function formatRupiah(angka, prefix) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
