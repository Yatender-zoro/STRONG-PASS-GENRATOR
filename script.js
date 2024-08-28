async function fetchData() {
    const checkbox = document.querySelectorAll('.checkbox')
    let passwordOptions = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?'
    if (!checkbox[0].checked) {
        passwordOptions = passwordOptions.replace(/[A-Z]/g, '');
    }
    if (!checkbox[1].checked) {
        passwordOptions = passwordOptions.replace(/[a-z]/g, '');
    }
    if (!checkbox[2].checked) {
        passwordOptions = passwordOptions.replace(/[0-9]/g, '');
    }
  
    if (checkbox[3].checked) {
        passwordOptions=passwordOptions+symbols
    }
    if(!checkbox[0].checked &&!checkbox[1].checked && !checkbox[2].checked && !checkbox[3].checked){
        alert('Please select a checkbox first')
        password=''
    }

    const response = await fetch(`https://www.random.org/integers/?num=12&min=0&max=${passwordOptions.length-1}&col=1&base=10&format=plain&rnd=new`)
    const data = await response.text();
    let password = '';
    for (let num of data.trim().split('\n')) {
        password += passwordOptions[num];
    }
    document.querySelector('.field').value = password;
}

document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.querySelector('#btn')
    btn.addEventListener('click',fetchData)
    const logo=document.querySelector("#logo")
    logo.addEventListener('click',()=>{
        fetchData()
    })
})


