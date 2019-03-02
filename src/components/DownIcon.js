import React , {Compnent} from 'react';

const DownIcon =(props)=> { 
    return(
        <div
        onClick ={props.onClick}
        style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"-34px",
        transform:"translateY(-45PX)"
    }}
    >
        <div
            style={{
                maxWidth:"30px"
            }}>
            <img src={props.icon} />
        </div>
    </div>

    
)}
export default DownIcon