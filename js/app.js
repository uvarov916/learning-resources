// $(document).foundation();

(function() {
  var app = angular.module('ddRes', []);

  app.controller('ResourcesController', function() {
    this.items = resources;
  });

  var resources = [
    {
      name: "Sketch 3",
      link: "http://bohemiancoding.com/sketch/",
      description: "Sketch gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use package. Finally you can focus on what you do best: Design."
    },
    {
      name: "SketchCasts",
      link: "http://www.sketchcasts.net",
      description: "A weekly screencast covering Sketch app"
    }
  ];
})();