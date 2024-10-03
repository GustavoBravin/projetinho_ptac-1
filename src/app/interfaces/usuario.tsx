interface Usuario{
    id: number,
    nome:string;
    idade:number;
    email?:string;
    password: string;
    tipo: string;
}

const PerfilUsuario: React.FC<{usuario:Usuario}> = ({usuario}) =>{
return(
 <div>
    <h1>{usuario.nome}</h1>
    <h2>{usuario.idade}</h2>
    <h2>{usuario.email}</h2>
    <h2>{usuario.password}</h2>
    <h2>{usuario.tipo}</h2>
 </div>

)

}
export default PerfilUsuario;
