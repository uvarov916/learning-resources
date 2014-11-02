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
    this.categories = categories;
  });

  var generalInfo = {
    header_title: "Collection of web development and design resources",
    twitter_link: "http://twitter.com/uvarovdd"
  };

  var categories = [
    "Web Development",
    "Web Design",
    "iOS",
    "Typography",
    "Education",
    "Tools",
    "Articles",
    "Books"
  ];

  var featuredResources = [
    {
      name: "Treehouse",
      link: "http://referrals.trhou.se/ivanuvarov",
      description: "One of the best website providing interactive courses helping to learn how to build websites & apps, write code or start a business.",
    },
    {
      name: "Sketch 3",
      link: "http://bohemiancoding.com/sketch/",
      description: "Sketch gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use package. Finally you can focus on what you do best: Design.",
    },
    {
      name: "Designer News",
      link: "https://news.layervault.com",
      description: "Designer News is a community where design and technology professionals share interesting links and timely events.",
    },
    {
      name: "Hacker News",
      link: "https://news.ycombinator.com",
      description: "Hacker News is a social news website that caters to programmers and entrepreneurs, delivering content related to computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator.",
    },
    {
      name: "Oozled",
      link: "http://oozled.com",
      description: "Amazing website with curated resources for everything creative. It contains over 780 resources that you might find helpful for your future design projects."
    }
  ];

  var allResources = [
    {
      name: "Treehouse",
      link: "http://referrals.trhou.se/ivanuvarov",
      description: "One of the best website providing interactive courses helping to learn how to build websites & apps, write code or start a business.",
      tags: ["iOS", "Android", "Web Development", "Web Design", "Typography", "Education"]
    },
    {
      name: "Sketch 3",
      link: "http://bohemiancoding.com/sketch/",
      description: "Sketch gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use package. Finally you can focus on what you do best: Design.",
    },
    {
      name: "Designer News",
      link: "https://news.layervault.com",
      description: "Designer News is a community where design and technology professionals share interesting links and timely events.",
    },
    {
      name: "Hacker News",
      link: "https://news.ycombinator.com",
      description: "Hacker News is a social news website that caters to programmers and entrepreneurs, delivering content related to computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator.",
    },
    {
      name: "Oozled",
      link: "http://oozled.com",
      description: "Amazing website with curated resources for everything creative. It contains over 780 resources that you might find helpful for your future design projects."
    }
  ];

})();