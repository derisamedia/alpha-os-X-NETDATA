
# alpha-os-X-NETDATA 
buat pengganti network monitor nya firmware sebelah masbro
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

- Terinstall package `netdata ubus vnstat`
- jika belum menginstall `netdata ubus vnstat` bisa eksekusi command ini di terminal `opkg update && opkg install netdata ubus vnstat`
- IP Gateway harus `192.168.1.1` ( Soalnya kalau selain itu bakal ngedit banyak masbroooooo. )

## Cara Install Netdata
### Cara Susah

- Download / Clone repository ini
- Copy Folder `netdata` ke folder `/www/`
- Buka folder `/www/netdata/execute` masbro
- Copy / Cut file `netdata.sh` ke folder `/sbin/`
- Lalu ketik di terminal `chmod +x /sbin/netdata.sh`
- Lanjot ketik di terminal `/sbin/netdata.sh`
- Edit crontab / Scheduled task di LuCi dan tambahkan command `* */5 * * * /sbin/netdata.sh`
- Tinggal Pancal di website http://192.168.1.1/netdata/
- #updated sudah tidak perlu masbro tinggal copy aja si netdata ke folder /www/ wkwkwk  langsung buka aja ke http://192.168.1.1/netdata salam capybara
Ready pamer dah akwoakaoak

### Cara Mudah

- Pastikan internet normal ya gan hehehehe
- Masuk terminal jalankan command `opkg update && opkg install git git-http wget`
- Jalankan lagi `wget https://raw.githubusercontent.com/derisamedia/alpha-os-X-NETDATA/main/installer.sh && chmod +x installer.sh`
- Jalankan lagi `bash installer.sh` dan tunggu sampai proses selesai
- done, tinggal pancal http://192.168.1.1/netdata/

## Konfigurasi Interface

Edit file `/www/netdata/plugin` dan edit yang namanya data-netdata.js
```data-netdata.js
data tsb jika yang memiliki IP itu menggunakan API dari NETDATA,
namun jika tidak ada ip (langsung '/' lihat tengahnya jika dia ada tulisan 'system' dan 'network' 
dia pakai ubus masbro untuk cek list ubus bisa ketik ini di terminal `ubus list`

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
```


## Cara nambah di menu LuCi Dashboard 

- copy aja `alphanetdata.lua` dan `alphanetdata.htm` ke masing masing direktori yang sesuai dengan yang tercantum di deskripsinya masbro

## Donasi

Buat yang mau donasi silahkan masbro
- [ Saweria ](https://saweria.co/derisamedia)

## Contributor
- [deri sahertian](https://github.com/derisamedia)
- [dimas vito](https://github.com/nosignals)
- [chandika nurdiansyah](https://github.com/chandika7d)
## Tentang


Property milik **Alpha OS, derisamedia, indo-wrt, DBAI, Yayasan Gterongers**. Dilarang **ngemod mod dimod remod remake diclaim** lalu dikunci masbro. Capek bikin nya masbro.

### Salam Copybara
