var yearbookApp = angular.module('yearbook_app', []);

yearbookApp.controller('YearbookCtrl', ['$scope', function($scope) {
    $scope.videoUrl = ["/assets/lounge1.mp4", "/assets/lounge2.mp4", "/assets/lounge3.mp4", "/assets/lounge4.mp4"];
    $scope.randomVideo = $scope.videoUrl[Math.floor($scope.videoUrl.length*Math.random())]; 
    $scope.changeVideo = function(){
      $scope.randomVideo = $scope.videoUrl[Math.floor($scope.videoUrl.length*Math.random())];
    };
    $scope.students = [
	{	image: '/assets/Aaron.jpg',
		name: 'Aaron Tsang',
		location: 'Westwood, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Albert.jpg',
		name: 'Albert Liao',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Alex.jpg',
		name: 'Alex Sos',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Andrew.jpg',
		name: 'Andrew Donovan',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Andrew.jpg',
		name: 'Anthony Corrado',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},

	{	image: '/assets/Brian.jpg',
		name: 'Brian Gordon',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Callie.jpg',
		name: 'Callie Burke',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Callie.jpg',
		name: 'Charly Yoon',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Christa.jpg',
		name: 'Christa Hartsock',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Christie.jpg',
		name: 'Christie Hua',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Clarence.jpg',
		name: 'Clarence Dang',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Collin.jpg',
		name: 'Collin Campbell',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/dean.jpg',
		name: 'Andrew Donovan',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/dinna.jpg',
		name: 'Dinna Gonzales',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/eric.jpg',
		name: 'Eric Wu',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Ernest.jpg',
		name: 'Ernest Wolfe',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/James.jpg',
		name: 'James Milani',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Jeff.jpg',
		name: 'Jeffrey Takaki',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Kelly.jpg',
		name: 'Kelly Gajewski',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Kelsey.jpg',
		name: 'Kelsey Ledford',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Kris.jpg',
		name: 'Kris Coulson',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Lex.jpg',
		name: 'Lex Alexander',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Mallory.jpg',
		name: 'Mallory Reulman',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Mary.jpg',
		name: 'Mary Keenan',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Matt.jpg',
		name: 'Matt Kam',
		location: 'Torrance, CA',
		github: "https://github.com/matthewkam",
		linkedin: "https://www.linkedin.com/in/mattkam",
		pwebsite: "http://www.mattk.am"
	},
	{	image: '/assets/Mel.jpg',
		name: 'Mel Plaza',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/MelanieN.jpg',
		name: 'Melanie Nichols',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/MikeC.jpg',
		name: 'Michael Choi',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/MikeD.jpg',
		name: 'Mike Duval',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/MikeW.jpg',
		name: 'Mike Wong',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Omar.jpg',
		name: 'Nazir Omar Atayee',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Paul.jpg',
		name: 'Paul Kim',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Phoebe.jpg',
		name: 'Phoebe Scott',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Rocky.jpg',
		name: 'Rocky Nicholson',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Shane.jpg',
		name: 'Shane Fitzgerald',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Stephy.jpg',
		name: 'Stephanie Raad',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Steven.jpg',
		name: 'Steven Lazatin',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Thach.jpg',
		name: 'Thach Tran',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/TJ.jpg',
		name: 'TJ Thomander',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Will.jpg',
		name: 'Will Sipes',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	},
	{	image: '/assets/Zeke.jpg',
		name: 'Zeke Slotsky',
		location: 'Orange County, CA',
		github: "https://github.com/dinnagonzales",
		linkedin: "https://www.linkedin.com/in/dinnagonzales",
		pwebsite: "http://www.dinnagonzales.com"
	}
    ];
    $scope.randomStudent = $scope.students[Math.floor($scope.students.length*Math.random())]; 
}]);