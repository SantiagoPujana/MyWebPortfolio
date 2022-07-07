const $form = document.getElementById("form");

$form.addEventListener("submit", sendEmail);

async function sendEmail(event){

    event.preventDefault();

    const form = new FormData(this);

    const response = await fetch(this.action, {

        method: this.method,
        body: JSON.stringify({

            name: form.get('name'),
            email: form.get('email'),
            phone: form.get('phone'),
            message: form.get('message')
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){

        this.reset();

        Swal.fire({
            icon: 'success',
            title: '¡Email sended!',
            text: 'Thank you for contacting me, I will respond you soon...'
        });
    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'There was an error :(',
            text: 'Please reload the page and then check your data entered or your internet connection...'
        });
    }
}