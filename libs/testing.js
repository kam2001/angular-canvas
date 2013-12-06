angular
.module('newApp',[])
    .controller('newCtrl',function($scope){
        $scope.display = "editing....";
       /* $scope.phones = [
            {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.',
              'age': '5'
            },
            {'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.',
                'age': '8'
},
            {'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.',
                'age': '7'}
        ];*/

        $scope.drawLine = function(){
        var x1 = document.getElementById('x1').value;
        var y1 = document.getElementById('y1').value;
       // var x2 = document.getElementById('x2').value;
       // var y2 = document.getElementById('y2').value;


        var c=document.getElementById("canvas");
        var ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0,400);
        ctx.lineTo(50,200);
        ctx.strokeStyle = "#ff0000";
        ctx.stroke();

        }
      //  $scope.drawLine = function(){



       // }
        //canvas.clearRect(0,0,400,300);
/*        context.fillStyle="#999";
        context.fillRect(100, 50, 100, 200);

        for (var x = 0.5; x < 500; x += 10) {
            context.moveTo(x, 0);
            context.lineTo(x, 500);
        }
        context.strokeStyle="#ccc";
        context.stroke();

        for (var y = 0.5; y < 500; y += 10) {
            context.moveTo(0, y);
            context.lineTo(500, y);
        }
        context.strokeStyle="#ccc";
        context.stroke();

        context.beginPath();
        context.moveTo(0, 40);
        context.lineTo(240, 40);
        context.moveTo(260, 40);
        context.lineTo(500, 40);
        context.moveTo(495, 35);
        context.lineTo(500, 40);
        context.lineTo(495, 45);
        context.strokeStyle = "#000";
        context.stroke();

        context.font = "bold 50px sans-serif";
        context.fillText("x", 30, 30);
        context.fillText("y", 30, 450);

        var my_gradient =  context.createLinearGradient(0, 0, 500, 225);
        my_gradient.addColorStop(0, "black");
        my_gradient.addColorStop(1, "white");
        context.fillStyle = my_gradient;
        context.fillRect(0, 0, 500, 500);

        var myDot = document.getElementById('dot');
        context.drawImage(myDot,0,0);

        // move to the first point
        ctx.moveTo(points[0].x, points[0].y);


        for (i = 1; i < points.length - 2; i ++)
        {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        // curve through the last two points
        ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y); */
});