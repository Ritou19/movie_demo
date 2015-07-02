"use strict";angular.module("movieDemoApp",["ngAnimate","ngCookies","ngRoute","ngSanitize","ngTouch","slick","ngFlag","rateYo"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/filmspop",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/film/:id",{templateUrl:"views/movie.html",controller:"MovieCtrl"}).when("/acteur/:id",{templateUrl:"views/acteur.html",controller:"ActeurCtrl"}).when("/acteurspop",{templateUrl:"views/acteurspop.html",controller:"ActeurspopCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ngFlag",[]).directive("flag",function(){return{restrict:"E",replace:!0,template:'<span class="f{{ size }}"><span class="flag {{ country }}"></span></span>',scope:{country:"@",size:"@"},link:function(a,b,c){a.size=16,a.$watch("country",function(b){a.country=angular.lowercase(b)}),a.$watch("size",function(b){a.size=b})}}}),angular.module("movieDemoApp").controller("MainCtrl",["$scope","MoviesDB","$rootScope","$http",function(a,b,c,d){d.get("http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr").success(function(b){a.listFilmPop=b.results}),c.bgImage=null,a.monClick=function(){b.addFilm(a.titreFilm,a.descriptionFilm),a.titreFilm="",a.descriptionFilm=""},a.supprimerFilm=function(a){b.remove(a)};angular.module("myapp",["ngFlag"])}]),angular.module("movieDemoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("movieDemoApp").controller("MovieCtrl",["$scope","$routeParams","MoviesDB","$rootScope","$http",function(a,b,c,d,e){d.db=c,e.get("http://amc.ig.he-arc.ch:3003/movie/"+b.id+"?append_to_response=similar,release,credits&language=fr").success(function(b){a.movie=b,d.bgImage=a.movie.backdrop_path,a.moviesSimilar=a.movie.similar.results,a.listActeurs=a.movie.credits.cast,a.rating=a.movie.vote_average/2,a.voteCount=a.movie.vote_count})}]),angular.module("movieDemoApp").factory("MoviesDB",["$http",function(a){var b=[],c=localStorage.getItem("listFilm");return b=JSON.parse(c),a.get("http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr").success(function(a){b=a.results}),{imgURL:"http://image.tmdb.org/t/p/",getMovies:function(){return b}}}]),angular.module("movieDemoApp").filter("URLPoster",["MoviesDB",function(a){return function(a){return a?"http://image.tmdb.org/t/p/w185"+a:"/images/noposter.png"}}]),angular.module("movieDemoApp").controller("ActeurCtrl",["$scope","$rootScope","$http","$routeParams",function(a,b,c,d){b.bgImage=null,c.get("http://amc.ig.he-arc.ch:3003/person/"+d.id+"?language=fr").success(function(b){a.acteur=b}),c.get("http://amc.ig.he-arc.ch:3003/person/"+d.id+"/movie_credits?language=fr").success(function(b){a.acteurDetail=b,a.listFilm=a.acteurDetail.cast})}]),angular.module("movieDemoApp").filter("urlprofile",function(){return function(a){return a?"http://image.tmdb.org/t/p/w185"+a:"/images/noprofile.gif"}}),angular.module("movieDemoApp").controller("ActeurspopCtrl",["$scope","$http","$rootScope",function(a,b,c){c.bgImage=null,b.get("http://amc.ig.he-arc.ch:3003/person/popular?language=fr").success(function(b){a.listActeurs=b.results})}]),angular.module("movieDemoApp").controller("HomeCtrl",["$scope","$rootScope","$http",function(a,b,c){b.bgImage=null,c.get("http://amc.ig.he-arc.ch:3003/movie/top_rated?language=fr").success(function(b){a.listFilmPop=b.results}),c.get("http://amc.ig.he-arc.ch:3003/person/popular?language=fr").success(function(b){a.listActeurs=b.results})}]);