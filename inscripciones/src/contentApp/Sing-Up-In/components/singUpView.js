import React from 'react'
import '../../contentApp.css';

function SingUpView(props) {
    return (
        <div className='Flex-box-column'>
            <div
                style={{
                    width: '50%',
                    height: '80%',
                    border: 'solid 2px blue',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', }}>
                    <label>
                        Nombre(s):
                    </label>
                    <input type='text' style={{ backgroundColor: '#FFFFFF', border: 'none', color: 'grey', borderLeft: '3px solid blue', borderBottom: '3px solid blue' }} />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', }}>
                    <label>
                        Apellido(s):
                    </label>
                    <input type='text' style={{ backgroundColor: '#FFFFFF', border: 'none', color: 'grey', borderLeft: '3px solid blue', borderBottom: '3px solid blue' }} />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', }}>
                    <label>
                        correo:
                    </label>
                    <input type='text' style={{ backgroundColor: '#FFFFFF', border: 'none', color: 'grey', borderLeft: '3px solid blue', borderBottom: '3px solid blue' }} />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', }}>
                    <label>
                        Telefono:
                    </label>
                    <input type='text' style={{ backgroundColor: '#FFFFFF', border: 'none', color: 'grey', borderLeft: '3px solid blue', borderBottom: '3px solid blue' }} />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', }}>
                    <label>
                        Numero de Identificación:
                    </label>
                    <input type='text' style={{ backgroundColor: '#FFFFFF', border: 'none', color: 'grey', borderLeft: '3px solid blue', borderBottom: '3px solid blue' }} />
                </div>
            </div>
        </div>
    )
}

export default SingUpView;