
# alpha-os-X-NETDATA 
A Clean UI Network Monitoring Base NETDATA (not a network monitor)
## Fitur

- Monitoring NETDATA
- Realtime Monitoring 
- Support semua firmware ( kek fw sebelah )


<details><summary>Preview Screenshoot</summary>
<p>
  
![image](https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/preview.png)
  
![image](https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/preview2.png)

![image](https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/preview3.png)

![image](https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/preview4.png)

![image](https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/preview5.png)

![image](https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/preview6.png)
  
</p>
</details>

## Syarat Pasang

- Terinstall package `netdata ubus vnstat versi 1 (jangan vnstat2)`
- jika belum menginstall `netdata ubus vnstat` bisa eksekusi command ini di terminal `opkg update && opkg install netdata ubus vnstat`
- kalo data eth1 belum muncul,coba buka luci app vnstat nya (vnstat traffic monitor) lalu tambahkan interface eth1
- jangan lupa clear cache and cookies
## Cara Install Netdata
### Cara Susah

- Download / Clone repository ini
- Copy Folder `netdata` ke folder `/www/`
- langsung buka aja ke http://ip.kamu/netdata 
- Ready pamer dah akwoakaoak
- salam baiklah masbro capybara

### Cara Mudah

- Pastikan internet normal ya gan hehehehe
- Masuk terminal jalankan command `opkg update && opkg install git git-http wget`
- Jalankan lagi `wget https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/installer.sh && chmod +x installer.sh`
- Jalankan lagi `bash installer.sh` dan tunggu sampai proses selesai
- done, tinggal pancal http://IP.kamu/netdata/

## Konfigurasi Interface

Edit file `/www/netdata/plugin` dan edit yang namanya data-netdata.js
```data-netdata.js
data tsb jika yang data nya seperti ini misal contoh (/api/v1/data?chart=net.usb0&after=-1) itu menggunakan API dari NETDATA,
namun jika data nya sperti ini contohnya (langsung '/' lihat tengahnya jika dia ada tulisan 'system' 'vnstat' dan 'network' 
dia pakai ubus dan vnstat masbro untuk cek list ubus bisa ketik ini di terminal `ubus list`

- Untuk mengubah Interface LAN `network.interface.lan` ganti dengan Interface yang ada di `ubus list`
- Untuk mengubah Interface WAN `network.interface.wan` ganti dengan Interface yang ada di `ubus list`
- Untuk Interface yang bisa digunakan bisa cek di terminal `ubus list | grep network.interface` untuk mengetahui interface yang bisa digunakan
- Contoh hasil command `ubus list | grep network.interface`
```bash
~# ubus list | grep network.interface
network.interface
network.interface.eth1
network.interface.lan
network.interface.loopback
network.interface.tether
network.interface.wwan0

namun jika tengah nya bertuliskan `vnstat=eth0` 
nahhhh dia ambil data dari vnstat masbro cara ambil nya dia membaca protokol interface masbro, 
sama halnya dengan si netdata ini, 
misal WAN dia di eth1 maka tuliskan `http://yourhost/api/api.php?vnstat=eth1` 
begitu juga data yang lainnya
info lebih lengkap : https://github.com/nosignals/ubus-vnstat-api
```


## Cara nambah di menu LuCi Dashboard 

- copy `alphanetdata.htm` ke direktori `/usr/lib/lua/luci/view/`
- copy `alphanetdata.lua` ke direktori `/usr/lib/lua/luci/controller/`


## Donasi

Buat yang mau donasi silahkan masbro
- [ Saweria ](https://saweria.co/derisamedia)

## Contributor
- [deri sahertian](https://github.com/derisamedia)
- [dimas vito](https://github.com/nosignals)
- [chandika nurdiansyah](https://github.com/chandika7d)
## Tentang


Property milik **Alpha OS, derisamedia, indo-wrt, DBAI, Yayasan Gterongers**. Dilarang **ngemod mod dimod remod remake diclaim** lalu dikunci masbro. Capek bikin nya masbro.

### Salam Masbro Capybara
