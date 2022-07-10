async function webPortfolioInit(){

    await fetch('https://festive-franklin-576549.netlify.app/.netlify/functions/index/api/init_web_portfolio/init', {

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