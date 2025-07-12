import { useCrud } from "../context/CrudContext";
import { Link } from "react-router-dom";
import CenteredLayout from "../layouts/CenteredLayout";

const ListPage = () => {
  const { items, deleteItem } = useCrud();

  return (
    <CenteredLayout title="Liste des éléments">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add" className="btn btn-primary">
          ➕ Ajouter
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Durée</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">Aucun élément trouvé.</td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.nom}</td>
                  <td>{item.duree}</td>
                  <td>
                    <Link to={`/details/${item.id}`} className="btn btn-sm btn-info me-2 text-white">Voir</Link>
                    <Link to={`/edit/${item.id}`} className="btn btn-sm btn-warning me-2">Modifier</Link>
                    <button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-danger">Supprimer</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </CenteredLayout>
  );
};

export default ListPage;
