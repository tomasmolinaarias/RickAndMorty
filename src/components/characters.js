import React from 'react'

function Characters({character=[]}) {
  return (
    <div className="row">  
        {character.map((item,index) => (
                <div key={index} className="col">
                    <div className="card mb-5 ">
                        <img src={item.image} className="cad-img-top" style={{minWidth:'300px'}} alt=""/>
                        <div class="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p class="card-text">Especie = {item.species}</p>
                            <hr></hr>
                            <p class="card-text">locacion = {item.location.name}</p>
                        </div>
                        <div className="card-footer">
                            <p class="card-text">estado = {item.status}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  )
};

export default Characters