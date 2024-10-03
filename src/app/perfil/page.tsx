import PerfilUsuario from "../interfaces/usuario";


const PaginaPerfil = () =>{
 const usuario = {
    id:1,
    nome:'José Lima',
    idade:20,
    email:'josélima@gmail.com',
    password:'123456',
    tipo:'Cliente'
 }

 return(
    <div>
        <h1>Pagina Perfil</h1>
        <PerfilUsuario usuario={usuario}/>
    </div>

 )

}


export default PaginaPerfil