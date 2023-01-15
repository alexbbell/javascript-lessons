
(function() {
    let appContainer = document.getElementById('my-todos');
    
    let h1 = document.createElement('h1');
    let button = document.createElement('button');
    let result = document.createElement('div');
    button.textContent = 'Send';
    h1.textContent = 'Todo list';
    appContainer.append(h1);
    appContainer.append(button);
    appContainer.append(result);

    let count = 0;
    button.addEventListener('click', function(e) {
        e.preventDefault();
        

        if(confirm('are you sure?')) {
            result.textContent = ++count;    
        }

    })


})();