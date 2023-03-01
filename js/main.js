if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
document.querySelectorAll('.header-search__block').forEach(function (headerSearch){

  const headerSearchInput = headerSearch.querySelector('.header-search__select');
  const headerSearchList = headerSearch.querySelector('.header-search__wrapper');
  const headerSearhItem = headerSearchList.querySelectorAll('.header-search__label');

  headerSearchInput.addEventListener('click', function(){
    headerSearchList.classList.toggle('visible');
  });

  headerSearhItem.forEach(function(searchItem){
    searchItem.addEventListener('click', function(){
      headerSearchInput.value = this.dataset.value
      headerSearchList.classList.remove('visible');
    });
  });
  document.addEventListener('click', function(e){
    if (e.target != headerSearchInput) {
      headerSearchList.classList.remove('visible');
    };
  });






});




