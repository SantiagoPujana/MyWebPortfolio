const $form = document.getElementById("form");

$form.addEventListener("submit", sendEmail);

async function sendEmail(event){

    event.preventDefault();

    const form = new FormData(this);

    showLoader();

    const token = JSON.parse(localStorage.getItem('user')).token;

    const response = await fetch(this.action + '/email/send_email', {

        method: this.method,
        body: JSON.stringify({

            name: form.get('name'),
            email: form.get('email'),
            phone: form.get('phone'),
            message: form.get('message')
        }),
        headers:{
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });

    hideLoader();

    if(response.ok){

        this.reset();

        Swal.fire({
            icon: 'success',
            title: '¡Email sended!',
            text: 'Thank you for contacting me, I will respond you soon...'
        });
    }
    else if(response.status === 403){

        this.reset();

        Swal.fire({
            icon: 'warning',
            title: '¡Hey! Are you there?',
            text: 'It seems you have been inactive for a long time, please reload the page and try again...'
        }).then(() => window.location.reload());
    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'There was an error :(',
            text: 'Please check your data entered or your internet connection and try again...'
        });
    }
}