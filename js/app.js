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

  app.controller('ResourcesController', function($scope, $http) {
    this.generalInfo = generalInfo;
    this.categories = categories;
    this.featuredResources = featuredResources;                
    this.allResources = allResources;

  });

  var generalInfo = {
    header_title: "The best resources for learning Web Development, Design, and iOS",
    twitter_link: "http://twitter.com/uvarovdd"
  };

  var categories = [
    "Web",
    "iOS",
    "Design",
    "Code",
    "Inspiration",
    "Learning",
    "Sketch",
    "Typography",
    "Front End",
    "Back End",
    "Ruby",
    "Ruby on Rails",
    "Tools",
    //"Startups",
    //"Articles",
    //"Books",
    //"Videos"
  ];


})();