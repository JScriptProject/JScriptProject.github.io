const inputs = document.querySelectorAll('.control input');


function setData()
{
    let suffix = this.dataset.sizing || '';
    console.log(this.name);
    console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', setData));
inputs.forEach(input => input.addEventListener('mouseover', setData));

