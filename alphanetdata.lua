module("luci.controller.alphanetdata",package.seeall)
function index()
entry({"admin","status","alphanetdata"},template("alphanetdata"),_("Alpha OS X NETDATA"),-1).leaf=true
end
