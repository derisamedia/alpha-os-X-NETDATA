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
        fetch('http://192.168.1.1:19999/api/v1/data?chart=net.br_lan&after=-1').then(function (response) {
            return response.json();
        }).then(function (data){
            document.getElementById("guid").innerHTML = (data.data[0][2]/1000*-1).toFixed(2);
            document.getElementById("upbr").innerHTML = (data.data[0][1]/1000*1).toFixed(1);
        }).catch(function (error) {
            console.log(error);
        });
}
function getcpustat(){
        fetch('http://192.168.1.1:19999/api/v1/data?chart=system.cpu&after=-1').then(function (response) {
            return response.json();
        }).then(function (data){
            document.getElementById("cpustat").innerHTML = (data.data[0][7]/1+1).toFixed(7);
            document.getElementById("cpustatuser").innerHTML = (data.data[0][6]/1+1).toFixed(6);
        }).catch(function (error) {
            console.log(error);
        });
}
function getramfree(){
    fetch('http://192.168.1.1:19999/api/v1/data?chart=system.ram&after=-1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("ramfree").innerHTML = (data.data[0][1]/1000*1).toFixed(1);
        document.getElementById("ramuse").innerHTML = (data.data[0][2]/1000*1).toFixed(2);
    }).catch(function (error) {
        console.log(error);
    });
}
function getramused(){
    fetch('http://192.168.1.1:19999/api/v1/data?chart=system.ram&after=-1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("ramused").innerHTML = (data.data[0][2]/1000*1).toFixed(2);
        document.getElementById("ramcache").innerHTML = (data.data[0][3]/1000*1).toFixed(3);
    }).catch(function (error) {
        console.log(error);
    });
}
function geteth1(){
    fetch('http://192.168.1.1:19999/api/v1/data?chart=net.eth1&after=-1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("eth1").innerHTML = (data.data[0][2]/1000*-1).toFixed(2);
        document.getElementById("eth1up").innerHTML = (data.data[0][1]/1000*1).toFixed(1);
    }).catch(function (error) {
        console.log(error);
    });
}
function geteth2(){
    fetch('http://192.168.1.1:19999/api/v1/data?chart=net.eth2&after=-1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("eth2").innerHTML = (data.data[0][2]/1000*-1).toFixed(2);
        document.getElementById("eth2up").innerHTML = (data.data[0][1]/1000*1).toFixed(1);
    }).catch(function (error) {
        console.log(error);
    });
}
function getwwan0(){
    fetch('http://192.168.1.1:19999/api/v1/data?chart=net.wwan0&after=-1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("wwan0").innerHTML = (data.data[0][2]/1000*-1).toFixed(2);
        document.getElementById("wwan0up").innerHTML = (data.data[0][1]/1000*1).toFixed(1);
    }).catch(function (error) {
        console.log(error);
    });
}
function getusb0(){
    fetch('http://192.168.1.1:19999/api/v1/data?chart=net.usb0&after=-1').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("usb0").innerHTML = (data.data[0][2]/1000*-1).toFixed(2);
        document.getElementById("usb0up").innerHTML = (data.data[0][1]/1000*1).toFixed(1);
    }).catch(function (error) {
        console.log(error);
    });
}
function getsysboard(){
    fetch('http://192.168.1.1/netdata/ubus/sysboard.json').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("hostname").innerHTML = data.hostname;
        document.getElementById("value1").innerHTML = data.kernel;
        document.getElementById("deviceid").innerHTML = data.model;
        document.getElementById("deviceid2").innerHTML = data.board_name;
        document.getElementById("osversi").innerHTML = data.release.version;
        document.getElementById("arsitek").innerHTML = data.system;
        param1 = true
    }).catch(function (error) {
        console.log(error);
    });
}
function getsysboard2(){
    fetch('http://192.168.1.1:19999/api/v1/info').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("ram").innerHTML = (data.ram_total/1000*1);
        document.getElementById("coreproci").innerHTML = data.cores_total;
        document.getElementById("clockproci").innerHTML = data.cpu_freq;
        document.getElementById("arsitek2").innerHTML = data.architecture;
        param2 = true
    }).catch(function (error) {
        console.log(error);
    });
}
function getbrlaninfo(){
    fetch('http://192.168.1.1/netdata/ubus/brlan.json').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("available-brlan").innerHTML = data.available;
        document.getElementById("proto-brlan").innerHTML = data.proto;
        document.getElementById("ipv4-brlan").innerHTML = data["ipv4-address"][0].address;
        document.getElementById("ipv6-brlan").innerHTML = data["ipv6-prefix-assignment"][0].address;
        document.getElementById("dns1-brlan").innerHTML = data["dns-server"][0];
        document.getElementById("dns2-brlan").innerHTML = data["dns-server"][1];
        document.getElementById("device-brlan").innerHTML = data.device;
    }).catch(function (error) {
        console.log(error);
    });
}
function geteth1info(){
    fetch('http://192.168.1.1/netdata/ubus/eth1.json').then(function (response) {
        return response.json();
    }).then(function (data){
        document.getElementById("available-eth1").innerHTML = data.available;
        document.getElementById("proto-eth1").innerHTML = data.proto;
        document.getElementById("ipv4-eth1").innerHTML = data["ipv4-address"][0].address;
        document.getElementById("ipv6-eth1").innerHTML = data["ipv6-prefix-assignment"][0];
        document.getElementById("route-eth1").innerHTML = data["route"][0].source;
        document.getElementById("dns1-eth1").innerHTML = data["dns-server"][0];
        document.getElementById("device-eth1").innerHTML = data.device;
    }).catch(function (error) {
        console.log(error);
    });
}
document.addEventListener('DOMContentLoaded', function () {
 startLiveUpdate();   
});