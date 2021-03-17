module.exports.function = function getSearchTerms(searchTerm, nonSearchTerm) {
  var searchTerms = [
    { searchTerm: "Cat", icon: "/images/icons/cat.png", description: "Meowtastically cute" },
    { searchTerm: "Dog", icon: "/images/icons/dog.png", description: "Bundles of energy and joy" },
    { searchTerm: "Other", icon: "/images/icons/other.png", description: "Other animals are cute too!" },
  ];
  if(searchTerm){
    searchTerms = searchTerms.filter(o=>{
      return o.searchTerm.toLowerCase() == searchTerm.toLowerCase()
    })
  }
  return searchTerms
}
