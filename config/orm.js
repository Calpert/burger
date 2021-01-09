var connection = require('./connection')
function printMarks(number){
    var array = []
    for (var i = 0; i < number; i++){
        array.push('?')
    }
}
function objectCol(object){
    var array = []
    for (var key in object){
        array.push(key + "="+ object[key])
    }
}
var orm = {
    all:function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function(err, result){
            if (err){
                throw err
            }
            cb(result)
        })
    },
create: function(table, colums, values, callback){
    var queryString = "INSERT INTO " + table
    queryString += " ("
    queryString += colums.toString()
    queryString += ") "
    queryString += "VALUES ("
    queryString += printMarks(values.length)
    queryString += ") "
    connection.query(queryString, values, function(err, result){
        if (err){
            console.log(err)
        }
        callback(result)
    })
},
update: function(table, objectColVals, condition, callback){
    var queryString = "UPDATE " + table
    queryString += " SET "
    queryString += objectCol(objectColVals)
    queryString += " WHERE "
    queryString += condition
    connection.query(queryString, function(err, result){
        if (err){
            console.log(err)
        }
        callback(result)
    })
}



}

module.exports = orm