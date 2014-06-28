var yearbookApp = angular.module('yearbook_app', []);

// yearbookApp.controller('YearbookCtrl', ['$scope', function($scope) {
//     $scope.videoUrl = ["/assets/lounge1.mp4", "/assets/lounge2.mp4", "/assets/lounge3.mp4", "/assets/lounge4.mp4", "/assets/lounge5.mp4", "/assets/lounge6.mp4", "/assets/lounge7.mp4","/assets/lounge8.mp4"];
//     $scope.randomVideo = $scope.videoUrl[Math.floor($scope.videoUrl.length*Math.random())]; 
//     $scope.changeVideo = function(){
//       $scope.randomVideo = $scope.videoUrl[Math.floor($scope.videoUrl.length*Math.random())];
//     };
yearbookApp.controller('YearbookCtrl', ['$scope', function($scope) {
    $scope.videoUrl = ["/assets/lounge1.mp4", "/assets/lounge2.mp4", "/assets/lounge3.mp4", "/assets/lounge4.mp4", "/assets/lounge5.mp4", "/assets/lounge6.mp4", "/assets/lounge7.mp4","/assets/lounge8.mp4"];
    $scope.randomIndex = Math.floor($scope.videoUrl.length*Math.random());
    $scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
    $scope.changeVideo = function(){
    	$scope.randomIndex = Math.floor($scope.videoUrl.length*Math.random());
      $scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
    };
    document.getElementById('bgvid').addEventListener('ended',playNext,false);
    function playNext(e) {
        if(!e) { e = window.event; }
					if ($scope.randomIndex == $scope.videoUrl.length - 1) {
						console.log("you have hit the end");
						$scope.randomIndex = 0;
						$scope.$apply(function() {
							$scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
							document.getElementById('bgvid').play();
						});
					} else {
						console.log('Incrementing');
						$scope.randomIndex++;
						$scope.$apply(function() {
							$scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
							document.getElementById('bgvid').play();
						});
					}
    }


    $scope.students = [
	{	image: '/assets/Aaron.jpg',
		name: 'Aaron Tsang',
		location: 'Westwood, CA',
		github: "https://github.com/Aarontsang8",
		linkedin: "http://www.linkedin.com/pub/aaron-tsang/66/769/322",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "aarontsang8@gmail.com"
	},
	{	image: '/assets/Albert.jpg',
		name: 'Albert Liao',
		location: 'Orange County, CA',
		github: "https://github.com/albertliao",
		linkedin: "http://www.linkedin.com/in/albertliao/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "al_liao8@yahoo.com"
	},
	{	image: '/assets/Alex.jpg',
		name: 'Alex Sos',
		location: 'Santa Monica, CA',
		github: "https://github.com/sosfacekilla",
		linkedin: "https://www.linkedin.com/in/alexandrasos/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "alexandra.d.sos@gmail.com"
	},
	{	image: '/assets/Andrew.jpg',
		name: 'Andrew Donovan',
		location: 'West Hollywood, CA',
		github: "https://github.com/AndrewDonovan",
		linkedin: "https://www.linkedin.com/pub/andrew-donovan/2a/24/b18",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "apdonova@gmail.com"
	},
	{	image: '/assets/Andrew.jpg',
		name: 'Anthony Corrado',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "anthonymcorrado@gmail.com"
	},
	{	image: '/assets/Areg.jpg',
		name: 'Areg Abrahamians',
		location: 'Glendale, CA',
		github: "https://github.com/aabrahamians",
		linkedin: "https://www.linkedin.com/in/aregabrahamians",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "aabrahamians@gmail.com"
	},
	{	image: '/assets/Brian.png',
		name: 'Brian Gordon',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "bribios@gmail.com"
	},
	{	image: '/assets/Callie.jpg',
		name: 'Callie Burke',
		location: 'Sierra Madre, CA',
		github: "https://github.com/Calliejb",
		linkedin: "https://www.linkedin.com/pub/callie-burke/2a/60a/bb1/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "aarontsang8@gmail.com"
	},
	{	image: '/assets/charly.png',
		name: 'Charly Yoon',
		location: 'Los Angeles, CA',
		github: "https://github.com/charlyy",
		linkedin: "http://www.linkedin.com/pub/charly-yoon/58/a9a/631",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "cyoon90@yahoo.com"
	},
	{	image: '/assets/Christa.jpg',
		name: 'Christa Hartsock',
		location: 'Los Angeles, CA',
		github: "https://github.com/hartsick",
		linkedin: "https://www.linkedin.com/pub/christa-hartsock/2a/538/529",
		pwebsite: "http://chartsock.com",
		contact: "christa.hartsock@gmail.com"
	},
	{	image: '/assets/Christie.jpg',
		name: 'Christie Hua',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "christiehua@gmail.com"
	},
	{	image: '/assets/Clarence.jpg',
		name: 'Clarence Dang',
		location: 'Orange County, CA',
		github: "https://github.com/cgdang",
		linkedin: "https://www.linkedin.com/pub/clarence-dang/16/359/b45",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "cgdang@gmail.com"
	},
	{	image: '/assets/Collin.jpg',
		name: 'Collin Campbell',
		location: 'Ventura, CA',
		github: "https://github.com/colindcampbell",
		linkedin: "https://www.linkedin.com/pub/colin-campbell/98/189/15b",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "colindcamp@gmail.com"
	},
	{	image: '/assets/dean.jpg',
		name: 'Dean Mandile',
		location: 'Los Angeles, CA',
		github: "https://github.com/Deanskee",
		linkedin: "https://www.linkedin.com/pub/dean-mandile/53/ba7/433",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "mandile24@gmail.com"
	},
	{	image: '/assets/dinna.jpg',
		name: 'Dinna Gonzales',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "dinnagonzales.05@gmail.com"
	},
	{	image: '/assets/eric.jpg',
		name: 'Eric Wu',
		location: 'Rowland Heights, CA',
		github: "https://github.com/me33dy",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "wuerict@gmail.com"
	},
	{	image: '/assets/Ernest.jpg',
		name: 'Ernest Wolfe',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "ernest.wolfe@gmail.com"
	},
	{	image: '/assets/James.jpg',
		name: 'James Milani',
		location: 'Santa Monica, CA',
		github: "https://github.com/milanij",
		linkedin: "www.linkedin.com/pub/james-milani/71/a68/179",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "james.milani@gmail.com"
	},
	{	image: '/assets/Jeff.jpg',
		name: 'Jeffrey Takaki',
		location: 'Torrance, CA',
		github: "https://github.com/jeffreytakaki",
		linkedin: "www.linkedin.com/pub/jeff-takaki/b/681/667/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "jtakaki1@gmail.com"
	},
	{	image: '/assets/Kelly.jpg',
		name: 'Kelly Gajewski',
		location: 'Los Angeles, CA',
		github: "http://www.github.com/kellygajewski",
		linkedin: "https://www.linkedin.com/in/kellygajewski",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "kellyagajewski@gmail.com"
	},
	{	image: '/assets/Kelsey.jpg',
		name: 'Kelsey Ledford',
		location: 'Redondo Beach, CA',
		github: "https://github.com/kelseyledford/",
		linkedin: "https://www.linkedin.com/in/kelseyledford",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "kelsey.d.ledford@gmail.com"
	},
	{	image: '/assets/Kris.jpg',
		name: 'Kris Coulson',
		location: 'Orange County, CA',
		github: "https://github.com/KrisCoulson",
		linkedin: "https://www.linkedin.com/in/kriscoulson",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "kriscoulson@gmail.com"
	},
	{	image: '/assets/Lex.jpg',
		name: 'Lex Alexander',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "l.alexander10@gmail.com"
	},
	{	image: '/assets/Mallory.jpg',
		name: 'Mallory Reulman',
		location: 'Santa Monica, CA',
		github: "https://github.com/malloryreuls",
		linkedin: "https://www.linkedin.com/in/malloryreulman",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "mreulman@gmail.com"
	},
	{	image: '/assets/Mary.jpg',
		name: 'Mary Keenan',
		location: 'Orange County, CA',
		github: "https://github.com/mkeenan",
		linkedin: "www.linkedin.com/pub/mary-keenan/1/145/b54/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "mkeenan.asher@gmail.com"
	},
	{	image: '/assets/Matt.jpg',
		name: 'Matt Kam',
		location: 'Torrance, CA',
		github: "https://github.com/matthewkam",
		linkedin: "https://www.linkedin.com/in/mattkam",
		pwebsite: "http://www.mattk.am",
		contact: "matt.ph.kam@gmail.com"
	},
	{	image: '/assets/Mel.jpg',
		name: 'Mel Plaza',
		location: 'Marina del Rey, CA',
		github: "https://github.com/mplaza",
		linkedin: "https://www.linkedin.com/pub/melanie-plaza/30/747/b78",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "melanieplaza@gmail.com"
	},
	{	image: '/assets/MelanieN.jpg',
		name: 'Melanie Nichols',
		location: 'Alhambra, CA',
		github: "https://github.com/KiasuChick",
		linkedin: "https://www.linkedin.com/in/melanienichols/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "me@kiasuchick.com"
	},
	{	image: '/assets/MikeC.jpg',
		name: 'Michael Choi',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "typeinmichael@gmail.com"
	},
	{	image: '/assets/MikeD.png',
		name: 'Mike Duval',
		location: 'Encino, CA',
		github: "https://github.com/mikeduval42",
		linkedin: "http://www.linkedin.com/pub/michael-duval/36/811/a39",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "mikeduval42@gmail.com"
	},
	{	image: '/assets/MikeW.jpg',
		name: 'Mike Wong',
		location: 'Los Angeles, CA',
		github: "https://github.com/mikewong79/",
		linkedin: "https://www.linkedin.com/in/mikewong79",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "mikewong79@gmail.com"
	},
	{	image: '/assets/Omar.jpg',
		name: 'Nazir Omar Atayee',
		location: 'Thousand Oaks, CA',
		github: "https://github.com/atayee",
		linkedin: "https://www.linkedin.com/pub/nazir-o-atayee/83/477/109",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "nazir_21@hotmail.com"
	},
	{	image: '/assets/Paul.jpg',
		name: 'Paul Kim',
		location: 'Woodland Hills, CA',
		github: "https://github.com/paulhyunkim",
		linkedin: "https://www.linkedin.com/pub/paul-kim/94/456/3",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "paulhyunkim@gmail.com"
	},
	{	image: '/assets/Phoebe.jpg',
		name: 'Phoebe Scott',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "phoebe@laudville.com"
	},
	{	image: '/assets/Rocky.jpg',
		name: 'Rocky Nicholson',
		location: 'Long Beach, CA',
		github: "https://github.com/slateness77",
		linkedin: "https://www.linkedin.com/in/rockynicholson/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "slateness77@gmail.com"
	},
	{	image: '/assets/Shane.jpg',
		name: 'Shane Fitzgerald',
		location: 'Santa Monica, CA',
		github: "https://github.com/shanefitzgerald",
		linkedin: "https://www.linkedin.com/pub/shane-fitzgerald/77/688/145/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "shanesrf@gmail.com"
	},
	{	image: '/assets/Stephy.jpg',
		name: 'Stephanie Raad',
		location: 'Los Angeles, CA',
		github: "https://github.com/Stephyraad",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "stephy.raad@gmail.com"
	},
	{	image: '/assets/Steven.jpg',
		name: 'Steven Lazatin',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "slazatin@gmail.com"
	},
	{	image: '/assets/Thach.jpg',
		name: 'Thach Tran',
		location: 'Huntington Beach, CA',
		github: "https://github.com/ttran289",
		linkedin: "http://www.linkedin.com/pub/thach-tran/4b/865/46b/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "thachtran289@gmail.com"
	},
	{	image: '/assets/TJ.jpg',
		name: 'TJ Thomander',
		location: 'Los Angeles, CA',
		github: "https://github.com/hellotj",
		linkedin: "https://www.linkedin.com/in/thomander",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "tthomander@gmail.com"
	},
	{	image: '/assets/Will.jpg',
		name: 'Will Sipes',
		location: 'Mar Vista, CA',
		github: "https://github.com/fooeyandnuts",
		linkedin: "https://www.linkedin.com/in/williamsipes/",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "william.sipes@gmail.com"
	},
	{	image: '/assets/Zeke.jpg',
		name: 'Zeke Slotsky',
		location: 'Venice, CA',
		github: "https://github.com/zekeslotsky",
		linkedin: "https://www.linkedin.com/pub/zeke-slotsky/13/967/356",
		pwebsite: "http://www.dinnagonzales.com",
		contact: "zekejacobs@hotmail.com"
	}];
    $scope.randomStudent = $scope.students[Math.floor($scope.students.length*Math.random())]; 
	}]);