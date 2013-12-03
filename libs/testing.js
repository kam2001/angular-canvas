angular
.module('newApp',[])
    .controller('newCtrl',function($scope){
        $scope.display = "editing....";
        $scope.phones = [
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
        ];
});