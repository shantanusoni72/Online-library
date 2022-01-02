import React from 'react'
import { useState } from 'react'

export default function Registor() {
    const [state, setSuccessPopup] = useState(false)
    return (
        <>
            {
                state ? <div class="alert alert-success" role="alert" id="status">
                    Register sucessfully!
                </div> : null
            }
            <br />
            <div style={{ textAlign: 'center' }}>
                <h3>Register</h3>
            </div>
            <div class="input-group mb-3" style={{ textAlign: 'center', marginLeft: 638, marginRight: 30 }}>
                <span class="input-group-text" >Email</span>
                <input type="text" class="form-control" style={{ marginRight: 1250 }} />
            </div>

            <div class="input-group mb-3" style={{ textAlign: 'center', marginLeft: 638, marginRight: 30 }}>
                <span class="input-group-text" >First Name</span>
                <input type="text" class="form-control" style={{ marginRight: 1250 }} />
            </div>

            <div class="input-group mb-3" style={{ textAlign: 'center', marginLeft: 638, marginRight: 30 }}>
                <span class="input-group-text" >Last Name</span>
                <input type="text" class="form-control" style={{ marginRight: 1250 }} />
            </div>

            <div class="input-group" style={{ marginTop: 20, marginLeft: 638, marginRight: 300 }}>
                <span class="input-group-text">Password</span>
                <input type="text" class="form-control" style={{ marginRight: 1250 }} />
            </div>

            <div class="input-group" style={{ marginTop: 20, marginLeft: 638, marginRight: 300 }}>
                <span class="input-group-text">Confirm Password</span>
                <input type="text" class="form-control" style={{ marginRight: 1250 }} />
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
                <button type="button" class="btn btn-warning" onClick={() => setSuccessPopup(true)}>Register</button>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
