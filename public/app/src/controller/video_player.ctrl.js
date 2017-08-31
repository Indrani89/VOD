app.controller('videoPlayerController', ['$scope','DataService', 
	function( $scope, DataService ){
		$scope.params = {
			video:null
		};
		$scope.init = function(){
				$('#video-player-modal video').bind('ended',function(){
				updateHistory();
				$('#video-player-modal').modal('hide');
			})
		}

	$scope.loadVideo=function(video){
		$scope.params.video=video;
		$('#video-player-modal video').attr('src',video.url);
		$('#video-player-modal').modal('show');
		//for the start time
		 $scope.getDatetime = new Date();
		 localStorage.setItem('startDate',$scope.getDatetime);
	}

	//pause the video and direct it to home screen when user quits inbetween
	$scope.backToMain=(function(){
		updateHistory();
	    $('#video-player-modal').modal({
	        show: false
	    }).on('hidden.bs.modal', function(){
	        $(this).find('video')[0].pause();
	    });
	});

	var updateHistory = function(){
		var video = $scope.params.video;
		angular.element('#video-history-modal').scope().userHistory( video );
	}

	$scope.backToHome=function(){
		$scope.backToMain();
		$('#video-player-modal').modal('hide');
	}
}]);
	
