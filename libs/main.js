angular
    .module('myApp',[])
        .controller('CanvasCtrl',function($scope){
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        $scope.data = [

        ];

        $scope.addData = function() {
            var id = 0;
            if($scope.data.length > 0) {
                id = $scope.data[$scope.data.length-1].id + 1;
            }
            var p = {id: id, x: $scope.x, y: $scope.y, amount: $scope.amount};
            $scope.data.push(p);
            $scope.x = '';
            $scope.y = '';
            $scope.amount = '';
            draw($scope.data);
        };

        $scope.removePoint = function(point) {
            console.log(point);
            for(var i=0; i<$scope.data.length; i++) {
                if($scope.data[i].id === point.id) {
                    console.log("removing item at position: "+i);
                    $scope.data.splice(i, 1);
                }
            }

            context.clearRect(0,0,600,400);
            draw($scope.data);
            console.log($scope.data);
        }

        function draw(data) {
            for(var i=0; i<data.length; i++) {
                drawDot(data[i]);
                if(i > 0) {
                    drawLine(data[i], data[i-1]);
                }
            }
        }

        function drawDot(data) {
            context.beginPath();
            context.arc(data.x, data.y, data.amount, 0, 2*Math.PI, false);
            context.fillStyle = "#ccddff";
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = "#666666";
            context.stroke();
        }

        function drawLine(data1, data2) {
            context.beginPath();
            context.moveTo(data1.x, data1.y);
            context.lineTo(data2.x, data2.y);
            context.strokeStyle = "black";
            context.stroke();
        }

        // setup
        canvas.width = 600;
        canvas.height = 400;
        context.globalAlpha = 1.0;
        context.beginPath();
        draw($scope.data);

    })

/*

(function () {
    'use strict';
    console.log('testing.')
    var Country = {

        city: {

            area: {

                flat: {
                    rooms: 2,
                    condition: 'Clean and tidy',
                    furbished: true
                }
            }
        }
    }
    Object.defineProperties(Country.city.area.flat, {
        'bathrooms': {
            value: 3
        },
        'garden': {
            value: "small",

        }
    })

    if (Country.city.area.flat.bathrooms === 3) {

        console.log("There are " + Country.city.area.flat.bathrooms + " bathrooms in the Flat")
    }
    else {
        console.log("there are not 3 bathrooms in the flat")
    }
}());
*/

/*

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// butt line cap (top line)
context.beginPath();
context.moveTo(200, canvas.height / 2 - 10);
context.lineTo(canvas.width - 200, canvas.height / 2 - 750);
context.lineWidth = 20;
context.strokeStyle = '#0000ff';
//context.lineCap = 'butt';
context.stroke();

// round line cap (middle line)
context.beginPath();
context.moveTo(200, canvas.height / 2);
context.lineTo(canvas.width - 200, canvas.height / 2);
context.lineWidth = 20;
context.strokeStyle = '#0000ff';
context.lineCap = 'round';
context.stroke();

// square line cap (bottom line)
context.beginPath();
context.moveTo(200, canvas.height / 2 + 50);
context.lineTo(canvas.width - 200, canvas.height / 2 + 50);
context.lineWidth = 20;
context.strokeStyle = '#0000ff';
context.lineCap = 'square';
context.stroke();



var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 55;
var startAngle = 50;
var endAngle = 10;
var counterClockwise = false;

context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 15;

// line color
context.strokeStyle = 'black';

context.stroke();
 */