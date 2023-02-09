module("luci.controller.alphanetdata",package.seeall)
function index()
entry({"admin","status","alphanetdata"},template("alphanetdata"),_("Alpha OS X NETDATA"),55).leaf=true
end
