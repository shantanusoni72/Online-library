import React from 'react'

export default function dashboard(props) {
    return (
        <>
            <div style={{marginLeft:45}}>
            <h3>Hello {props.name}!</h3>
            <hr />
                <h4>Your Books</h4>
                <div class="container" style={{marginLeft:30}}>
                    <div class="row">
                        <div class="col">
                        <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="https://programmer-books.com/wp-content/uploads/2018/05/Advanced-java.pdf" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div class="col">
                            
                        </div>
                        <div class="col">
                            
                        </div>
                    </div>
                </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h4>Recommended Books</h4>
                <div class="container" style={{marginLeft:30}}>
                    <div class="row">
                        <div class="col">
                        <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                        </div>
                        <div class="col">
                        <div class="card" style={{ height: 270, width: 215 }}>
                            <img class="card-img-top" alt="s" style={{ height: 270, width: 215 }} />
                            <div class="card-body">
                                <h5 class="card-title">Science Fiction Fantasy</h5>
                                <p class="card-text">By Veronica Roth</p>
                                <a href="#" class="btn btn-primary">Read</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br /><br />

        </>
    )
}
