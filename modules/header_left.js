import { user } from "./user_data"
let left_con = document.querySelector('.left_con')

let logo_div = document.createElement('div')
let logo_h1 = document.createElement('h1')
let logo_line = document.createElement('div')
let div_btn = document.createElement('div')
let btn1 = document.createElement('button')
let img_btn1 = document.createElement('img')
let h1_btn1 = document.createElement('h1')
let btn2 = document.createElement('button')
let img_btn2 = document.createElement('img')
let h1_btn2 = document.createElement('h1')
let btn3 = document.createElement('button')
let img_btn3 = document.createElement('img')
let h1_btn3 = document.createElement('h1')
let btn4 = document.createElement('button')
let img_btn4 = document.createElement('img')
let h1_btn4 = document.createElement('h1')
let btn5 = document.createElement('button')
let img_btn5 = document.createElement('img')
let h1_btn5 = document.createElement('h1')
let div_down = document.createElement('div')
let div_name = document.createElement('div')
let circle = document.createElement('div')
let all_name = document.createElement('div')
let name1 = document.createElement('span')
let surname = document.createElement('span')
let logout = document.createElement('div')
let log_img = document.createElement('img')
let log_h1 = document.createElement('log_h1')

logo_div.classList.add('logo_div')
logo_h1.classList.add('logo_h1')
logo_line.classList.add('logo_line')
div_btn.classList.add('div_btn')
btn1.classList.add('btn1')
btn1.classList.add('active')
img_btn1.classList.add('img_btn1')
h1_btn1.classList.add('h1_btn1')
btn2.classList.add('btn2')
img_btn2.classList.add('img_btn2')
h1_btn2.classList.add('h1_btn2')
btn3.classList.add('btn3')
img_btn3.classList.add('img_btn3')
h1_btn3.classList.add('h1_btn3')
btn4.classList.add('btn4')
img_btn4.classList.add('img_btn4')
h1_btn4.classList.add('h1_btn4')
btn5.classList.add('btn5')
img_btn5.classList.add('img_btn5')
h1_btn5.classList.add('h1_btn5')
div_down.classList.add('div_down')
div_name.classList.add('div_name')
circle.classList.add('circle')
all_name.classList.add('all_name')
name1.classList.add('name')
surname.classList.add('surname')
logout.classList.add('logout')
log_img.classList.add('log_img')
log_h1.classList.add('log_h1')

logo_h1.innerHTML = 'VALUET'
img_btn1.src = '/public/icon/Vector (22).png'
h1_btn1.innerHTML = 'Overview'
img_btn2.src = '/public/icon/Vector (4).png'
h1_btn2.innerHTML = 'Wallets'
img_btn3.src = '/public/icon/Group.png'
h1_btn3.innerHTML = 'Transiction'
img_btn4.src = '/public/icon/Group 6.png'
h1_btn4.innerHTML = 'Exchange'
img_btn5.src = '/public/icon/Group (1).png'
h1_btn5.innerHTML = 'Market'
name1.innerHTML = user.name
surname.innerHTML = user.surname
log_img.src = '/public/icon/Groupp.png'
log_h1.innerHTML = 'Log Out'

left_con.append(logo_div, div_btn, div_down)
logo_div.append(logo_h1, logo_line)
div_btn.append(btn1, btn2, btn3, btn4, btn5)
btn1.append(img_btn1, h1_btn1)
btn2.append(img_btn2, h1_btn2)
btn3.append(img_btn3, h1_btn3)
btn4.append(img_btn4, h1_btn4)
btn5.append(img_btn5, h1_btn5)
div_down.append(div_name, logout)
div_name.append(circle, all_name)
all_name.append(name1, surname)
logout.append(log_img, log_h1)
btn1.classList.add('btns')
btn2.classList.add('btns')
btn3.classList.add('btns')
btn4.classList.add('btns')
btn5.classList.add('btns')

btn3.onclick = () => {
    if(btn1.classList.contains('active')){
        btn1.classList.remove('active')
        btn3.classList.add('active')
    }
    location.assign('/pages/transactions/')
}
btn1.onclick = () => {
    if(btn3.classList.contains('active')){
        btn1.classList.add('active')
        btn3.classList.remove('active') 
    }
    location.assign('/')
}


////////////////////////////





let header_con = document.querySelector('.header_con')

let search = document.createElement('input')
let search_div = document.createElement('div')
let ser_dv = document.createElement('div')
let search_img = document.createElement('img')
let right = document.createElement('div')
let email = document.createElement('img')
let call = document.createElement('img')

header_con.classList.add('header_con')
search.classList.add('search')
ser_dv.classList.add('ser_dv')
search_div.classList.add('search_div')
right.classList.add('right')
email.classList.add('email')
call.classList.add('call')
search_img.classList.add('search_img')

search_img.src = '/public/icon/GGroup.png'
email.src = '/public/icon/Grouppp.png'
call.src = '/public/icon/Vector (2).png'

header_con.append(search_div, right)
search_div.append(search, ser_dv)
ser_dv.append(search_img)
right.append(email, call)