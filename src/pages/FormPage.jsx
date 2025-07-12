import { useCrud } from '../context/CrudContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CenteredLayout from '../layouts/CenteredLayout';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const FormPage = () => {
  const { items, addItem, updateItem } = useCrud();
  const { id } = useParams();
  const navigate = useNavigate();

  const existingItem = items.find(item => item.id === id);

  const [form, setForm] = useState({
    nom: '',
    duree: ''
  });

  useEffect(() => {
    if (existingItem) {
      setForm({
        nom: existingItem.nom || '',
        duree: existingItem.duree || ''
      });
    }
  }, [existingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      nom: form.nom,
      duree: form.duree
    };

    if (id) {
      updateItem(id, dataToSend);
    } else {
      addItem(dataToSend);
    }

    navigate('/');
  };

  return (
    <CenteredLayout title={id ? 'Modifier un élément' : 'Ajouter un élément'}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            value={form.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mois</label>
          <select
            name="duree"
            className="form-control"
            value={form.duree}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisir un mois --</option>
            {MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          {id ? 'Modifier' : 'Ajouter'}
        </button>
      </form>
    </CenteredLayout>
  );
};

export default FormPage;
