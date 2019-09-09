(function() {

  var libraryStorage = {};

  //===== librarySystem function =====//
  function librarySystem(libraryName, requiredDependencies, callback) {

    // Save library in storage
    if (arguments.length > 1) {

      var dependencies = [];
      var validation = '';

      // Push depencies from libraryStorage in dependencies array.
      requiredDependencies.forEach( function(dependency) {
        dependencies.push(libraryStorage[dependency]);
      });

      // Check if dependencies exist in libraryStorage.
      for (var i = 0; i < requiredDependencies.length; i++) {
        validation = dependencies[i];
        if (validation === undefined) {
          console.error(requiredDependencies[i] + ' is not found.');
        }
      }

      // Aapply dependencies to callback as arguments.
      libraryStorage[libraryName] = callback.apply(this, dependencies);
    }

    // Load library from storage
    else {
      return libraryStorage[libraryName];
    }
  }

  window.librarySystem = librarySystem;

})();
