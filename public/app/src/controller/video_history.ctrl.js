app.controller('videoHistoryController',['$scope','$http',function($scope,$http){

	$scope.params={};

	$scope.playVideo = function(video){
  			//console.log(this.video);
  			angular.element('#video-player-modal').scope().loadVideo( this.video );
  	}

	$scope.showHistory=function(user_key){
		$http.get('/vodapp/'+user_key).then(function(response){
			$scope.params.userVideo=response.data;
			$scope.viewHistory(response.data);
		});
	}

	$scope.viewHistory=function(videos){
			var video;
			$scope.params.userVideos = _.map(videos, function( video ){
			return(video);
		});
	};


	var refreshHistoryView=function(user_key){
		$http.get('/vodapp/'+user_key).then(function(response){
			//console.log("Got request"+user_key);
			$scope.params.userVideo=response.data;
			$scope.viewHistory(response.data);
		});
	}

	$scope.userHistory=function(video){	
		$scope.getDatetime = new Date();
		var fingerPrintKey = localStorage.getItem('VOD_U');
		var start = localStorage.getItem('startDate');
		var playerTime = playTime(start,$scope.getDatetime);
		//console.log("user_key:"+ fingerPrintKey," imgURL:"+ video.imgUrl,"url:"+ video.url,
		//			"title:"+video.title,"name:"+ video.name, "StartTime:"+start,"PlayTime:"+playerTime+"seconds");				
		var userData={
			"user_key":fingerPrintKey,
			"imgUrl":video.imgUrl,
			"url":video.url,
			"title":video.title,
			"name":video.name,
			"startTime":start,
			"playTime":playerTime
		}
			$http.post('/vodapp',userData).then(function(response){
				//console.log(response);

			});
			refreshHistoryView(fingerPrintKey);
	}

	var playTime=function(from,to){
	  	var now =  moment.utc(to,"HH:mm:ss");
	  	var start = moment.utc(from,"HH:mm:ss");
	  	var difference=(moment.duration(now.diff(start)))/1000;
      var seconds = difference % 60;
    	var minutes = Math.floor(difference % 3600 / 60);
    	var hours = Math.floor(difference / 3600);
    	var time=hours+":"+minutes+":"+seconds;
		return(time);
	}
}]);