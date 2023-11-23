import './Listado.css';

function Listado(props) {
  return (
    <div className="Listado">
        <h3>Listado de elementos</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Propiedad1</th>
                    <th>Propiedad2</th>
                    <th>Propiedad3</th>
                </tr>
            </thead>
            <tbody>
                {props.objetos.map(objeto => (
                    <tr key={objeto.id}>
                        <td>{objeto.id}</td>
                        <td>{objeto.propiedad1}</td>
                        <td>{objeto.propiedad2}</td>
                        <td>{objeto.propiedad3}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Listado;