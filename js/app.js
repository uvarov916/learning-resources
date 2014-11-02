// $(document).foundation();


(function() {
  var app = angular.module('ddRes', []).filter('search', function($filter){
   return function(items, text){
      if (!text || text.length === 0)
        return items;

      // split search text on space
      var searchTerms = text.split(' ');

      // search for single terms.
      // this reduces the item list step by step
      searchTerms.forEach(function(term) {
        if (term && term.length)
          items = $filter('filter')(items, term);
      });

      return items
   };
  });

  app.controller('ResourcesController', function() {
    this.generalInfo = generalInfo;
    this.featuredResources = featuredResources;
    this.allResources = allResources;
  });

  var generalInfo = {
    header_title: "Collection of web development and design resources",
    twitter_link: "http://twitter.com/fatherussia"
  };

  var featuredResources = [
    {
      name: "Sketch 3",
      link: "http://bohemiancoding.com/sketch/",
      description: "Sketch gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use package. Finally you can focus on what you do best: Design.",
    }
  ];

  var allResources = [
    {
      name: "Sketch 3",
      link: "http://bohemiancoding.com/sketch/",
      description: "Sketch gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use package. Finally you can focus on what you do best: Design.",
      tags: ["bullshit"]
    },
    {
      name: "SketchCasts",
      link: "http://www.sketchcasts.net",
      description: "A weekly screencast covering Sketch app"
    }
  ];

})();