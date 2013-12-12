(function () {
var myModule = {

    Adjustments: {
        First : function(){

            var add = function(){
                console.log("added")
            }
            var subtract = function(){
                console.log("subtracted")
            }
            return {
                add:add,
                subtract:subtract
            }

        }(),
        Second:function(){
            var add = function(){
                console.log("added from Second")
            }
            var subtract = function(){
                console.log("subtracted from Second")
            }
            return {
                add:add,
                subtract:subtract
            }
        }()
    }
}
}());