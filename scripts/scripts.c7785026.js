"use strict";var app=angular.module("BundesApp",["ngRoute"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),app.filter("notZero",function(){return function(a){console.log(a)}}),angular.module("BundesApp").controller("MainCtrl",["$scope","$http",function(a,b){function c(b){var c=b.data;console.log(c),a.states=c.stateList,a.persons=[],angular.forEach(c.personIndexCounts,function(b,c){b>0&&a.persons.push(c)})}function d(a){console.err("Error while getting json: "+a.statusText)}b.get("https://raw.githubusercontent.com/inbar/angular-on-github/gh-pages/bundesland.json").then(c,d)}]),angular.module("BundesApp").run(["$templateCache",function(a){a.put("views/main.html",'<h1>Bundesländer</h1> <ul id="states"> <li ng-repeat="state in states"> <a href="ggg"> <div class="state-item-container"> <div class="title">{{state.name}}</div> <div class="content">{{state.schoolCount}} Schulen</div> </div> </a> </li> </ul> <ul id="persons"> <li ng-repeat="person in persons"> {{person}} </li> </ul>')}]);