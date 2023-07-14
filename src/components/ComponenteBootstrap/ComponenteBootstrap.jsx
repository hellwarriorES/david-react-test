import React from 'react'

const ComponenteBootstrap = () => {
  return (
    <>
        <div className="container">
        <div className="row">
            <div className="col-12">
            <div className="header">Title</div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-4 bg-info">
            <div className="red">01</div>
            <div className="container d-flex flex-column gap-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre"
                    aria-label=".form-control-lg example"
                    required
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    aria-label="default input example"
                    required
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Mensaje"
                    aria-label=".form-control-sm example"
                    rows="5"
                    required
                />
                <button className="btn btn-primary">Enviar</button>
                </div>
            </div>
            <div className="col-4 bg-warning d-none d-md-block">
            <div className="green">02</div>
            </div>
            <div className="col-4 bg-secondary d-none d-md-block">
            <div className="yellow">03</div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            <div className="footer">Footer</div>
            </div>
        </div>
        </div>    
    </>
  )
}

export default ComponenteBootstrap