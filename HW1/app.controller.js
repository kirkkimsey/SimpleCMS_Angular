angular.module('intro').controller('AppController',AppController);

function AppController($scope){
$scope.checkPassword = function(){
    if ($scope.userName=="Admin" && $scope.password=="123")
        $scope.loggedIn = true;
    else
        $scope.loggedIn = false;
};
$scope.logout = function(){
	$scope.userName="";
	$scope.password="";
    $scope.loggedIn=false;
};
$scope.posts=[{title:"Mike Pence Disappointed In The 200,000 Husbands And Fathers Who Permitted Women To Attend March", body:"WASHINGTON—Admonishing those responsible for failing to uphold their moral duties, Vice President Mike Pence expressed disappointment Saturday in the 200,000 husbands and fathers who had allowed the women and girls in their charge to attend the Women’s March on Washington. “I can’t tell you how let down I feel by the heads of these households who did not simply give their wives and daughters a firm, decisive ‘no’ when they asked to participate in today’s demonstration,” said Pence, noting with frustration that many of the protesters had been granted permission to travel across the country alone and stay for several days in a faraway city with no male chaperone whatsoever to guide and look after them. “There are a few men marching as well, so they must be the ones supervising this whole thing, and thank God for that. But I can’t help but feel that these ladies’ custodians—the ones who were supposed to be providing a masculine voice of reason on these sorts of matters—have really come up short today.” Pence stressed that he, for example, had told his 23-year-old eldest daughter that it was simply out of the question when she mentioned she was thinking of attending the march. ", editing:false}];
 $scope.newPost = {title:"",body:"", editing:true};

$scope.editPost = function(index){
	$scope.index=index;
	$scope.posts[$scope.index].editing=true;
	$scope.newPost.title = $scope.posts[$scope.index].title;
	$scope.newPost.title = $scope.posts[$scope.index].body;
};

$scope.deletePost = function(index){
	$scope.posts.splice(index, 1);
};
	
$scope.submitEdit = function(index){
	$scope.index = index;
	$scope.posts[$scope.index].title = $scope.newPost.title;
	$scope.posts[$scope.index].body = $scope.newPost.body;
	$scope.posts[$scope.index].editing = false;
	$scope.newPost = {title:"", body:""}
	};
	
$scope.cancelEdit = function(index){
	$scope.index=index;
	$scope.posts[$scope.index].editing = false;
};

$scope.addPost = function(){
$scope.posts.push ({title:"(New Post)", body:""});
editing = true;
};

$scope.composePost = function(){
	$scope.editing = false;
	$scope.composing = true;
};


};









/***$scope.update = function(){
    if ($scope.postTitle= $scope.postTitle && $scope.postBody= $scope.postBody)
        $scope.update = true;
    else
        $scope.update = false;
};***/

    
    
    /***$scope.update = function(){
	$scope.edits.push({title:$scope.title, body:$scope.body});
	
	$scope.title = '';
	$scope.body='';
};***/




/***	.controller('AppController', function() {
var blogPosts = this;
blogPost.newPost ={
	
};
blogPosts.addPost = function (){
	blogPosts.newPosts.push({text:blogPosts.title, done:false});
	blogPosts.title ='';
	blogPosts.newPosts.push({text:blogPosts.text, done:false});
	blogPosts.text ='';
};
	}); ***/
