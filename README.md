<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Sistem Reservasi Lapangan Olahraga

REST API untuk mengelola reservasi lapangan olahraga yang dibangun menggunakan **NestJS**. Aplikasi ini memungkinkan pengguna melihat daftar lapangan, memeriksa ketersediaan jadwal, melakukan pemesanan, melihat data reservasi, dan membatalkan pemesanan.

## Teknologi

- **Framework:** NestJS
- **Bahasa Pemrograman:** TypeScript
- **Runtime:** Node.js
- **API Testing:** Postman
- **Penyimpanan Data:** In-memory Array

## Fitur Utama

1. Menampilkan daftar dan detail lapangan olahraga.
2. Menampilkan data pelanggan dan jenis olahraga.
3. Membuat reservasi lapangan.
4. Memeriksa ketersediaan jadwal berdasarkan tanggal.
5. Mencegah pemesanan pada jadwal yang bertabrakan.
6. Menampilkan detail dan riwayat reservasi pelanggan.
7. Membatalkan reservasi.
8. Mengembalikan slot waktu yang telah dibatalkan agar dapat dipesan kembali.

## Struktur Data

Aplikasi menggunakan lima kelompok data utama:

| Data | Keterangan |
|---|---|
| Customers | Menyimpan informasi pelanggan |
| Sports | Menyimpan jenis olahraga |
| Fields | Menyimpan informasi lapangan |
| Booking Statuses | Menyimpan status reservasi |
| Bookings | Menyimpan informasi pemesanan |

Status reservasi:
- `BOOKED` – Pemesanan aktif.
- `CANCELLED` – Pemesanan dibatalkan.
- `COMPLETED` – Pemesanan selesai.

Status lapangan:
- `AVAILABLE` – Lapangan dapat dipesan.
- `MAINTENANCE` – Lapangan sedang dalam perawatan.

## Instalasi dan Menjalankan Project

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Masuk ke Folder Project

```bash
cd reservasi-lapangan
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Aplikasi

```bash
npm run start:dev
```

Aplikasi berjalan pada alamat:

```text
http://localhost:3000
```

## Daftar Endpoint API

Base URL: `http://localhost:3000`

### 1. Lapangan (Fields)

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/fields` | Menampilkan seluruh lapangan |
| GET | `/fields/:id` | Menampilkan detail lapangan |
| GET | `/fields/:id/availability?date=YYYY-MM-DD` | Memeriksa ketersediaan jadwal lapangan |

### 2. Reservasi (Bookings)

| Method | Endpoint | Keterangan |
|---|---|---|
| POST | `/bookings` | Membuat reservasi baru |
| GET | `/bookings` | Menampilkan seluruh reservasi |
| GET | `/bookings/:id` | Menampilkan detail reservasi |
| GET | `/users/:userId/bookings` | Menampilkan reservasi berdasarkan pelanggan |
| PATCH | `/bookings/:id/cancel` | Membatalkan reservasi |

## Contoh Request dan Response

### 1. Membuat Reservasi

**Method:** `POST`

**Endpoint:**

```text
http://localhost:3000/bookings
```

**Request Body:**

```json
{
  "fieldId": 2,
  "date": "2026-11-05",
  "startTime": "18:00",
  "endTime": "19:00",
  "customerName": "Jakiwchen"
}
```

**Contoh Response Berhasil:**

```json
{
  "id": 1,
  "customerId": 1,
  "customerName": "Budi",
  "fieldId": 2,
  "bookingStatusId": 1,
  "date": "2026-11-05",
  "startTime": "18:00",
  "endTime": "19:00",
  "totalPrice": 100000
}
```

*Nilai harga merupakan ilustrasi dan mengikuti harga lapangan pada data aplikasi.*

### 2. Melihat Seluruh Reservasi

**Method:** `GET`

**Endpoint:**

```text
http://localhost:3000/bookings
```

### 3. Melihat Detail Reservasi

**Method:** `GET`

**Endpoint:**

```text
http://localhost:3000/bookings/1
```

### 4. Melihat Reservasi Pelanggan

**Method:** `GET`

**Endpoint:**

```text
http://localhost:3000/users/1/bookings
```

### 5. Memeriksa Ketersediaan Lapangan

**Method:** `GET`

**Endpoint:**

```text
http://localhost:3000/fields/2/availability?date=2026-11-05
```

**Contoh Response:**

```json
{
  "fieldId": 2,
  "fieldName": "Lapangan Badminton 1",
  "date": "2026-11-05",
  "status": "AVAILABLE",
  "bookedSlots": [
    {
      "startTime": "18:00",
      "endTime": "19:00"
    }
  ]
}
```

### 6. Membatalkan Reservasi

**Method:** `PATCH`

**Endpoint:**

```text
http://localhost:3000/bookings/1/cancel
```

Reservasi yang berhasil dibatalkan akan memiliki status `CANCELLED` sehingga jadwalnya tidak lagi dianggap sebagai slot yang terpakai.

## Pengujian API Menggunakan Postman

Pengujian dilakukan untuk memastikan setiap endpoint dan proses reservasi berjalan sesuai kebutuhan sistem.

| No. | Skenario Pengujian | Hasil yang Diharapkan |
|---|---|---|
| 1 | Menampilkan daftar lapangan | Data lapangan ditampilkan |
| 2 | Melihat detail lapangan | Detail lapangan ditampilkan |
| 3 | Mencari lapangan yang tidak ditemukan | HTTP 404 |
| 4 | Membuat reservasi baru | HTTP 201 |
| 5 | Membuat reservasi pada jadwal bentrok | HTTP 400 |
| 6 | Memesan lapangan yang tidak ditemukan | HTTP 404 |
| 7 | Memesan menggunakan pelanggan yang tidak ditemukan | HTTP 404 |
| 8 | Menampilkan seluruh reservasi | Data reservasi ditampilkan |
| 9 | Melihat detail reservasi | Detail reservasi ditampilkan |
| 10 | Mencari reservasi yang tidak ditemukan | HTTP 404 |
| 11 | Melihat reservasi berdasarkan pelanggan | Data reservasi pelanggan ditampilkan |
| 12 | Memeriksa ketersediaan lapangan | Jadwal pemesanan ditampilkan |
| 13 | Membatalkan reservasi | Status berubah menjadi CANCELLED |
| 14 | Memeriksa jadwal setelah pembatalan | Slot kembali tersedia |
| 15 | Memesan kembali slot yang dibatalkan | Reservasi berhasil |
| 16 | Membatalkan reservasi yang sudah dibatalkan | HTTP 400 |

## Penanganan Error

Aplikasi menggunakan HTTP Exception dari NestJS untuk menangani kondisi kesalahan.

| HTTP Status | Keterangan |
|---|---|
| 200 | Request berhasil |
| 201 | Reservasi berhasil dibuat |
| 400 | Request tidak valid atau jadwal bentrok |
| 404 | Data lapangan, pelanggan, atau reservasi tidak ditemukan |

## Batasan Aplikasi

- Data disimpan sementara menggunakan array.
- Tidak menggunakan database.
- Tidak menggunakan DTO dan `class-validator`.
- Data akan kembali ke kondisi awal ketika server dimulai ulang.
- Autentikasi dan frontend tidak termasuk dalam cakupan project.

## Pengembang

Project ini dibuat sebagai bagian dari Kuis Proyek Individu mata kuliah **Praktek Pemrograman Web 3** dengan menggunakan framework NestJS.