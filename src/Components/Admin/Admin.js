import React from 'react'
import './Admin.css'


function Admin() {



  function password(e) {

    e.preventDefault();

    let password_list = document.querySelector('.passowrd');
    let myteast_list = document.querySelector('.mytest');
    let input_value = document.querySelector('.input_value');

    let password = '1921680103'
    // let password = '8888'
    // console.log(value.target.value);
    if (input_value.value === password) {
      console.log('togri');
      password_list.classList.remove('active');
      myteast_list.classList.add('active');
    }else{
      password_list.classList.add('active');
      myteast_list.classList.remove('active');
      alert("notog`ri");
      console.log(input_value);
      console.log('notogri');
    }
  }


  return (
    <div className='admin_page'>
      <div className="passowrd active">
        <h1>Parolni kiriting</h1>
        <form>

          <div className="inputs">
            <input className='input_value' type="password"placeholder='Parolni kiriting' />
            
            <input onClick={(e) => password(e)} type="submit" className='btn' value="Kirish" />
          </div>

        </form>
      </div>
      <div className="mytest">
        <a href="https://drive.google.com/drive/folders/1CJozV0ko4-gvctwm9uh7upt5Qvr14Cc9?usp=sharing"
        target="_blank"
        >Testni yuklab olsih</a>
      </div>
    </div>
  )
}

export default Admin
