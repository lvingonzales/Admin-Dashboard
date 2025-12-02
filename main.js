// Header Class

function headerSearch (container) {
    // Search Container
    let searchContainer = document.createElement("div");
    searchContainer.classList.add('search-container');

    // Search Form
    let searchForm = document.createElement('form');
    searchForm.action = '';
    searchForm.method = 'get';
    searchForm.classList.add('search-form');

    // Search Input Box
    let searchInput = document.createElement("input");
    searchInput.classList.add('input-search');
    searchInput.type = 'text';
    searchInput.name = 'search';
    searchInput.id = 'search';
    searchInput.placeholder = 'Search';

    // Search Submit Button
    let submitSearch = document.createElement("input");
    submitSearch.classList.add('submit-search');
    submitSearch.type = 'submit';

    // Compile the search form
    container.append(searchContainer);
    searchContainer.append(searchForm);
    searchForm.append(searchInput);
    searchForm.append(submitSearch);
}

function headerAdmin (container) {

}

function header (container) {
    // Add search bar
    if (container.classList.contains('search')) {
        headerSearch(container);
    }
    
}

if (document.querySelector('.header-container')) {

    header(document.querySelector('.header-container'));
    
}
