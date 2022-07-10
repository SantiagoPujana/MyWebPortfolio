async function webPortfolioInit(){

    await fetch(this.action + '/init_web_portfolio/init', {

        method: 'POST',
        body: JSON.stringify({

            source: 'web_portfolio_user'
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => localStorage.setItem('user', JSON.stringify(res)));
}