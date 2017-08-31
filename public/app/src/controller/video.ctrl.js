

app.controller('videoController', ['$scope','DataService', function( $scope, DataService ){
	
	$scope.params = {};

	$scope.init = function(){
		$scope.setFingerPrint();
		$scope.showVideoBar();
	}

	$scope.play = function(){
		//console.log( this.video );
		angular.element('#video-player-modal').scope().loadVideo( this.video );
	};

	$scope.setFingerPrint=function(){
		new Fingerprint2({}).get(function(result){
			//console.log('Key:',result);
			localStorage.setItem('VOD_U',result);
		});
	};

	$scope.showVideoBar = function(){
		DataService.videos().then( function( response ){
			$scope.params.videos = _.map( response.data.entries, function( video ){
				if(video.images && video.images.length > 0 ) 
					var videoUrl = video.images[0].url;
				video.imgUrl=videoUrl || CONFIG.DEFAULT_VIDEO_TILE;
				video.url=video.contents[0].url;
				video.title=video.title.trim();
				video.name=video.title.length > 20?video.title.substr(0,20)+'...':video.title;	
				return video;
			});
		});
	};

	$scope.selectVideo = function(){
		if($scope.selectedVideo){
			$scope.selectedVideo.selectedClass='';
			$scope.selectedVideo=this.video;
			$scope.selectedVideo.selectedClass='video-selected';
		}
	};

	$scope.refresh = function(){
		$scope.params = {};
		//console.log("empyt"+$scope.params.videos);
		$scope.init();
	};
	
	$scope.showHistory = function(){
		angular.element('#video-history-modal').scope().showHistory(localStorage.getItem('VOD_U'));
	};


}]);