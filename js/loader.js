window.addEventListener('load', function(){

    webPortfolioInit();
    hideLoader();
});

function hideLoader(){
    document.getElementById('loader').classList.toggle('hideloader');
}

function showLoader(){

    if(document.getElementById("loader").className.match(/(?:^|\s)hideloader(?!\S)/)){

        document.getElementById("loader").className =
            document.getElementById("loader").className.replace
            ( /(?:^|\s)hideloader(?!\S)/g , '' );
    }
}