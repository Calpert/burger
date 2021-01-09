var orm = require("../config/orm")
var burger = {
    all:function(cb){
        orm.all("burgers", function(res){
            cb(res)
        })
    },
    create: function(name, callback){
        orm.create("burgers", ["burger_name", "devoured"], [name, false], callback)
    },
    update: function(id, callback){
        var condition = "id="+id
        orm.update("burgers", {
            devoured: true

        },condition, callback
        )

    }
}


module.exports = burger