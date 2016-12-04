var Xray = require('x-ray');
var x = Xray();
var home  = {};

home.index = function(req,res){
  var stream =  x('http://www.gomymanga.com/',{
       title : 'title',
       manga :x('.manga-wrapper',[{
           img  :".manga-image img@src",
           url : ".manga-hover-wrapper a@href",
           title :".manga-details .popularupdates",
           lastupload :".upload-time span@title"
       }])
   }).stream()
   stream.pipe(res)
}

home.hot  = function(req,res){
    var stream  = x('http://www.gomymanga.com/hot-manga/'+req.params.pages,{
       title : 'title',
       manga :x('.manga-wrapper',[{
           img  :".manga-image .lazy@src",
           url : ".manga-hover-wrapper a@href",
           title :".manga-details@text".replace('\t',""),
           view :".count-tag span@html"
       }])
   }).stream()
   stream.pipe(res);

}

home.latest =  function(req,res){
    var stream  = x('http://www.gomymanga.com/latest-release/'+req.params.pages,{
       title : 'title',
       manga :x('.manga-wrapper',[{
           img  :".manga-image img@src",
           url : ".manga-hover-wrapper a@href",
           title :".manga-details@text".replace('\t',""),
           lastupload :".upload-time span@title"
       }])
   }).stream()
   stream.pipe(res);
}

home.manga_directory = function(req,res){
     var stream  = x('http://www.gomymanga.com/manga-directory/all/az/'+req.params.pages,{
       title : 'title',
       manga :x('.manga-wrapper',[{
           img  :".manga-image img@src",
           url : ".manga-hover-wrapper a@href",
           title :".manga-details@text".replace('\t',""),
           lastupload :".upload-time span@title"
       }])
   }).stream()
   stream.pipe(res);
}

home.chapter = function(req,res){
    var stream =  x('http://www.gomymanga.com/manga/'+req.params.title,{
       title : 'title',
       chapter : [".row .col-xs-9 .nostyle a@href"],
       img : ".manga-cover center img@src"

   }).stream()
   stream.pipe(res);
}

home.chapter_pages =  function(req,res){
    var stream =  x('http://www.gomymanga.com/manga/'+req.params.title+"/"+req.params.pages+"/1",{
       title : 'title',
       pages : ["select#page-dropdown option@value"]

   }).stream()
   stream.pipe(res);
}

home.get_manga_src = function(req,res){
    var stream =  x('http://www.gomymanga.com/manga/'+req.params.title+"/"+req.params.pages+"/"+req.params.number,{
       title : 'title',
       img_manga : '.reader-image a img@src' 
       //http://img.gomymanga.com
   }).stream()
   stream.pipe(res);
}

module.exports = home;