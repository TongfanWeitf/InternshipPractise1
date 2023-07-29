import React, { useState } from "react";

function Food() {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div >
            <p style={{ fontSize: '50px' }}> Shahi Lucknowi Pot Biryani</p>
            <p style={{ fontSize: '30px', color: 'grey' }}> 
                rich aromatic rice satueed freash
                ground spices flavoured with fresh...
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <p style={{ fontSize: '30px' }}> 
                    $17.99
                </p>
                <button style={{ backgroundColor: 'white', width: '50px', height: '30px', color: 'black', fontSize: '15px' }}>
                    like
                </button>
        </div>
        </div>
        <img src="/foodexample2.png" alt="foodexample2" />

    </div>
  )
}

export default Food;
