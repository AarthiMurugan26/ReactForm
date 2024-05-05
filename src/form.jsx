import React from "react";
import './App.css';
export const ReactForm =({onSubmit})=>{
    const[formValues,setForm]=React.useState({
        name : '',
        email:'',
        password:'',
        phNumber :'',
        graduate : false,
        gender:'',
        skill:''
      })
    const changeInput =(event)=>{
      const {name,value,type,checked} = event.target;
      setForm(state =>({
        ...state ,
         [name]:type==='checkbox' ? checked : value
      }))
    }
    const formSubmit=(e)=>{
    e.preventDefault();
    onSubmit(formValues);
    }

   return(
    <div>
<h1>REACT FORM</h1>

<form  onSubmit ={formSubmit}>
<label htmlFor="name"> NAME 
<input type="text"  name='name' value={formValues.name} onChange={changeInput}   />
</label>
<br />
<label htmlFor="email"> EMAIL
<input type="text "  name='email' value={formValues.email} onChange={changeInput}    />
</label>
<br />
<label htmlFor="password"> PASSWORD
<input type="password"  name='password' value={formValues.password} onChange={changeInput}   />
</label>
<br />
<label htmlFor="phNumber"> PHONE NUMBER
<input type="number"  name='phNumber' value={formValues.phNumber} onChange={changeInput}    />
</label>
<br />
<label htmlFor="graduate"> EXPERINCED
<input type="checkbox"  name='graduate' checked={formValues.graduate} onChange={changeInput}    />
</label>
<br />
<label htmlFor="gender"> GENDER:
<input type="radio"  name='gender' value="male" checked= {formValues.gender ==='male'}
 onChange={changeInput}    /> MALE
<input type="radio"  name='gender' value="female" checked= {formValues.gender ==='female'}
onChange={changeInput}    />FEMALE
</label>
<br />
<label>
       SKILL
        <select name="skill" value={formValues.skill} onChange={changeInput} >
          <option value="">Select a skill</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JAVASCRIPT</option>
        </select>
      </label>
      <br />
      <button type="submit">ADD</button>
</form>
</div>
)
    
}