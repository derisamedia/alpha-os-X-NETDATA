var param1 = false
var param2 = false

function startLiveUpdate () {
    setInterval(function () {
		getbrlan();
		getcpustat();
        getramfree();
        getramused();
        geteth1();
        geteth2();
        getwwan0();
        getusb0();
        getbrlaninfo();
        geteth1info();
        getvnstatbrlan();
        getvnstatwan();
    }, 2000);
    var intervalHandle = setInterval(function () {
        getsysboard();
        getsysboard2();

        if(param1 && param2){
            clearInterval(intervalHandle)
        }
    }, 2000);
}
function getbrlan(){
        fetch('/netdata/api/api.php?netdata=net.br-lan').then(function (response) {
            return response.json();
        }).then(function (data){
            document.getElementById("guid").innerHTML = (data.netdata.data[0].data[0][2]/1000*-1).toFixed(2) + ' mbps';
            document.getElementById("upbr").innerHTML = (data.netdata.data[0].data[0][1]/1000*1).toFixed(1) + ' mbps';
        }).catch(function (error) {
            console.log(error);
        });
}
function getcpustat(){
        fetch('/netdata/api/api.php?netdata=system.cpu').then(function (response) {
            return response.json();
        }).then(function (data){
            document.getElementById("cpustat").innerHTML = (data.netdata.data[0].data[0][7]/1+1).toFixed(1) + ' %';
            document.getElementById("cpustatuser").innerHTML = (data.netdata.data[0].data[0][6]/1+1).toFixed(1) + ' %';
        }).catch(function (error) {
            console.log(error);
        });
}
function getramfree(){
    fetch('/netdata/api/api.php?system=info').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("ramfree").innerHTML = (data.system.data[0].memory.free/1000000).toFixed(0) + ' MB';
        document.getElementById("ramuse").innerHTML = (data.system.data[0].memory.available/1000000).toFixed(0) + ' MB';
    }).catch(function (error) {
        console.log(error);
    });
}
function getramused(){
    fetch('/netdata/api/api.php?system=info').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("ramused").innerHTML = (data.system.data[0].memory.shared/1000000).toFixed(0) + ' MB';
        document.getElementById("rambuffered").innerHTML = (data.system.data[0].memory.buffered/1000000).toFixed(0) + ' MB';
        document.getElementById("ramcache").innerHTML = (data.system.data[0].memory.cached/1000000).toFixed(0) + ' MB';
    }).catch(function (error) {
        console.log(error);
    });
}
function geteth1(){
    fetch('/netdata/api/api.php?netdata=net.eth1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("eth1").innerHTML = (data.netdata.data[0].data[0][2]/1000*-1).toFixed(2) + ' mbps';
        document.getElementById("eth1up").innerHTML = (data.netdata.data[0].data[0][1]/1000*1).toFixed(1) + ' mbps';
    }).catch(function (error) {
        console.log(error);
    });
}
function geteth2(){
    fetch('/netdata/api/api.php?netdata=net.eth2').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("eth2").innerHTML = (data.netdata.data[0].data[0][2]/1000*-1).toFixed(2) + ' mbps';
        document.getElementById("eth2up").innerHTML = (data.netdata.data[0].data[0][1]/1000*1).toFixed(1) + ' mbps';
    }).catch(function (error) {
        console.log(error);
    });
}
function getwwan0(){
    fetch('/netdata/api/api.php?netdata=net.wwan0').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("wwan0").innerHTML = (data.netdata.data[0].data[0][2]/1000*-1).toFixed(2) + ' mbps';
        document.getElementById("wwan0up").innerHTML = (data.netdata.data[0].data[0][1]/1000*1).toFixed(1) + ' mbps';
    }).catch(function (error) {
        console.log(error);
    });
}
function getusb0(){
    fetch('/netdata/api/api.php?netdata=net.usb0').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("usb0").innerHTML = (data.netdata.data[0].data[0][2]/1000*-1).toFixed(2) + ' mbps';
        document.getElementById("usb0up").innerHTML = (data.netdata.data[0].data[0][1]/1000*1).toFixed(1) + ' mbps';
    }).catch(function (error) {
        console.log(error);
    });
}
function getsysboard(){
    fetch('/netdata/api/api.php?system=board').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("hostname").innerHTML = data.system.data[0].hostname;
        document.getElementById("value1").innerHTML = data.system.data[0].kernel;
        document.getElementById("deviceid").innerHTML = data.system.data[0].model;
        document.getElementById("deviceid2").innerHTML = data.system.data[0].board_name;
        document.getElementById("osversi").innerHTML = data.system.data[0].release.version;
        document.getElementById("arsitek").innerHTML = data.system.data[0].system;
        param1 = true
    }).catch(function (error) {
        console.log(error);
    });
}
function getsysboard2(){
    fetch('/netdata/api/api.php?netdata=info').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("ram").innerHTML = (data.netdata.data[0].ram_total/1000000).toFixed(0);
        document.getElementById("coreproci").innerHTML = data.netdata.data[0].cores_total;
        document.getElementById("clockproci").innerHTML = (data.netdata.data[0].cpu_freq/1000000).toFixed(3);
        document.getElementById("arsitek2").innerHTML = data.netdata.data[0].architecture;
        param2 = true
    }).catch(function (error) {
        console.log(error);
    });
}
function getbrlaninfo(){
    fetch('/netdata/api/api.php?network=lan').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("available-brlan").innerHTML = data.network.data[0].available;
        document.getElementById("proto-brlan").innerHTML = data.network.data[0].proto;
        document.getElementById("ipv4-brlan").innerHTML = data.network.data[0]["ipv4-address"][0].address;
        document.getElementById("ipv6-brlan").innerHTML = data.network.data[0]["ipv6-prefix-assignment"][0].address;
        document.getElementById("dns1-brlan").innerHTML = data.network.data[0]["dns-server"][0];
        document.getElementById("dns2-brlan").innerHTML = data.network.data[0]["dns-server"][1];
        document.getElementById("device-brlan").innerHTML = data.network.data[0].device;
    }).catch(function (error) {
        console.log(error);
    });
}
function getvnstatbrlan(){
    fetch('/netdata/api/api.php?vnstat=br-lan').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("id-lan").innerHTML = data.vnstat.data[0].interfaces[0].id;
        document.getElementById("unduh-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.total.rx/1000000).toFixed(2) + ' GB';
        document.getElementById("unggah-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.total.tx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikhariini-hari-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[0].date.day;
        document.getElementById("trafikhariini-bulan-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[0].date.month;
        document.getElementById("trafikhariini-tahun-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[0].date.year;
        document.getElementById("trafikhariini-rx-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[0].rx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikhariini-tx-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[0].tx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikkemarin-hari-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[1].date.day;
        document.getElementById("trafikkemarin-bulan-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[1].date.month;
        document.getElementById("trafikkemarin-tahun-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[1].date.year;
        document.getElementById("trafikkemarin-rx-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[1].rx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikkemarin-tx-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[1].tx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikbulan-bulan-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.months[0].date.month;
        document.getElementById("trafikbulan-tahun-brlan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.months[0].date.year;
        document.getElementById("trafikbulan-rx-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.months[0].rx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikbulan-tx-brlan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.months[0].tx/1000000).toFixed(2) + ' GB';
    }).catch(function (error) {
        console.log(error);
    });
}
function geteth1info(){
    fetch('/netdata/api/api.php?network=WAN1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("available-eth1").innerHTML = data.network.data[0].available;
        document.getElementById("proto-eth1").innerHTML = data.network.data[0].proto;
        document.getElementById("ipv4-eth1").innerHTML = data.network.data[0]["ipv4-address"][0].address;
        document.getElementById("ipv6-eth1").innerHTML = data.network.data[0]["ipv6-prefix-assignment"][0];
        document.getElementById("route-eth1").innerHTML = data.network.data[0]["route"][0].source;
        document.getElementById("dns1-eth1").innerHTML = data.network.data[0]["dns-server"][0];
        document.getElementById("device-eth1").innerHTML = data.network.data[0].device;
    }).catch(function (error) {
        console.log(error);
    });
}
function getvnstatwan(){
    fetch('/netdata/api/api.php?vnstat=eth1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("id-wan").innerHTML = data.vnstat.data[0].interfaces[0].id;
        document.getElementById("unduh-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.total.rx/1000000).toFixed(2) + ' GB';
        document.getElementById("unggah-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.total.tx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikhariini-hari-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[0].date.day;
        document.getElementById("trafikhariini-bulan-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[0].date.month;
        document.getElementById("trafikhariini-tahun-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[0].date.year;
        document.getElementById("trafikhariini-rx-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[0].rx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikhariini-tx-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[0].tx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikkemarin-hari-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[1].date.day;
        document.getElementById("trafikkemarin-bulan-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[1].date.month;
        document.getElementById("trafikkemarin-tahun-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.days[1].date.year;
        document.getElementById("trafikkemarin-rx-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[1].rx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikkemarin-tx-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.days[1].tx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikbulan-bulan-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.months[0].date.month;
        document.getElementById("trafikbulan-tahun-wan").innerHTML = data.vnstat.data[0].interfaces[0].traffic.months[0].date.year;
        document.getElementById("trafikbulan-rx-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.months[0].rx/1000000).toFixed(2) + ' GB';
        document.getElementById("trafikbulan-tx-wan").innerHTML = (data.vnstat.data[0].interfaces[0].traffic.months[0].tx/1000000).toFixed(2) + ' GB';
    }).catch(function (error) {
        console.log(error);
    });
}
document.addEventListener('DOMContentLoaded', function () {
 startLiveUpdate();   
});
