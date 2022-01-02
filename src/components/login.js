import React from 'react'
import { useState } from 'react'
import Registor from './registor'
import Header from './header'
import Dashboard from './dashboard'

function getName() {
    let name = "Shantanu"
    return name
}

export default function Login() {
    const [ShowRegister, setRegister] = useState(false)
    const [ShowDashboard, showDashboard] = useState(false)
    return (
        <> 
        {
            ShowRegister ? <Registor /> : (ShowDashboard) ? <Dashboard name={getName()} /> : <>
        
            <br />
            <div style={{ textAlign: 'center'}}>
                <h3>Login</h3>
            </div>
            <div class="input-group mb-3" style={{ textAlign: 'center',marginLeft:638,marginRight:30 }}>
                <span class="input-group-text" >Email</span>
                <input type="text" class="form-control" id="name" style={{marginRight:1250}} />
            </div>

            <div class="input-group" style={{ marginTop: 20, marginLeft: 638, marginRight: 300 }}>
                <span class="input-group-text">Password</span>
                <input type="text" class="form-control" style={{marginRight:1250}} />
            </div>
            <br />
            <p style={{textAlign:"center"}}>New to Academia? <a onClick={()=>setRegister(true)} style={{color:"blue", textDecorationLine:"underline"}}>Register here</a></p>
            <div style={{ textAlign: 'center' }}>
                <button type="button" class="btn btn-warning" onClick={()=>showDashboard(true)} >Login</button>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</> } </>
        
            )
}
