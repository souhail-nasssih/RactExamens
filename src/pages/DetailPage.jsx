import { useCrud } from '../context/CrudContext';
import { useParams, Link } from 'react-router-dom';
import CenteredLayout from '../layouts/CenteredLayout';

const DetailPage = () => {
  const { items } = useCrud();
  const { id } = useParams();

  const item = items.find(i => i.id === id);

  if (!item) return <p>Élément introuvable.</p>;

  return (
    <CenteredLayout title="Détails de l’élément">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{item.nom}</h5>
          <p className="card-text"><strong>Durée :</strong> {item.duree}</p>
          <Link to="/" className="btn btn-secondary">⬅ Retour</Link>
        </div>
      </div>
    </CenteredLayout>
  );
};

export default DetailPage;
