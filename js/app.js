// angularpp.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchName   = '';     // set the default search/filter term
  
  var searchTerm = $scope.searchName;

  
  $scope.sushi = [
    // MISC
    { url: 'http://rahulshinde.github.io/drawing-tools/line.html', name: 'Drawing Tool 1', description: 'Simple drawing tool built in Three.js using mouse position to determine coordinates of the rendered object (line).', tags: 'Three.js, 3D, web experiments, drawing tool, 2016' },
    { url: 'http://rahulshinde.github.io/drawing-tools/line2.html', name: 'Drawing Tool 2', description: 'An alternate iteration of Drawing Tool 1', tags: 'Three.js, 3D, web experiments, drawing tool, 2016' },
    { url: 'http://rahulshinde.github.io/eutropia-book/', name: 'Eutropia Binder', description: 'Quick render / texture test for an incomplete exercise in alternative digital documentation.', tags: 'Three.js, 3D, web experiments, 2015' },
    { url: 'http://rahulshinde.github.io/learning-three.js/', name: 'Learning Three.js', description: 'Digital document consisting of a series of experiments I completed in the summer of 2015 while trying to learn Three.js.', tags: 'Three.js, 3D, web experiments, 2015' },

    // OR / MAYBE
    { url: 'http://or-maybe.info/', name: 'OR / MAYBE', description: 'Current website for Expressions of Doubt, a studio I started at the beginning of 2016 to serve as a nomadic design studio, collaborative research space, archive and publishing platform.', tags: 'archive, studio, OR / MABE, collaboration, 2016' },
    { url: 'http://rahulshinde.github.io/dictionary/line.html', name: 'Temporary Developments', description: 'Initial set of instructions corresponding to the creation of Expressions of Doubt. (Formerly known as Temporary Developments)', tags: 'rule-set, studio, OR / MABE, collaboration, 2016' },

    // P R O T O T Y P E 3
    { url: 'http://rahulshinde.github.io/prototype-3/', name: 'Prototype 3', description: 'Two experiments conducted in response to the necessity of developing a formal language specific to web space (incomplete).', tags: 'Three.js, 3D, web experiments, 2015' },

    //O-WIP
    { url: 'http://rahulshinde.github.io/prototype-3/', name: 'Surface No. 2', description: 'Piece completed for Overview of a Work in Progress Part 1 (Works best on iPhone). Click and drag to move around panorama.', tags: 'web gl, 3D, web experiments, o-wip, 2015' },

  ];

  //add images using api
  console.log(searchTerm);

});