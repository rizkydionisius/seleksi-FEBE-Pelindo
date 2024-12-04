import React, { useState } from "react";
import { saveTransaksi } from "../API/transaksiAPI";

const TransaksiForm = () => {
  const [formData, setFormData] = useState({
    idTransaksi: "",
    incoterms: "",
    valuta: "",
    kurs: "",
    nilaiFOB: "",
    asuransiBayarDi: "",
    asuransi: "",
    freight: "",
    flagKontainer: "",
  });

  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setMessage(null);

    const response = await saveTransaksi(formData);

    if (response.success) {
      setMessage(response.message);
    } else {
      setErrors(response.errors || []);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Transaksi Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="idTransaksi"
          value={formData.idTransaksi}
          onChange={handleChange}
          placeholder="ID Transaksi (Opsional)"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="incoterms"
          value={formData.incoterms}
          onChange={handleChange}
          placeholder="Incoterms"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="valuta"
          value={formData.valuta}
          onChange={handleChange}
          placeholder="Valuta"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="kurs"
          value={formData.kurs}
          onChange={handleChange}
          placeholder="Kurs"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="nilaiFOB"
          value={formData.nilaiFOB}
          onChange={handleChange}
          placeholder="Nilai FOB"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="asuransiBayarDi"
          value={formData.asuransiBayarDi}
          onChange={handleChange}
          placeholder="Asuransi Bayar Di"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="asuransi"
          value={formData.asuransi}
          onChange={handleChange}
          placeholder="Asuransi"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="freight"
          value={formData.freight}
          onChange={handleChange}
          placeholder="Freight"
          className="w-full p-2 border rounded"
        />
        <select
          name="flagKontainer"
          value={formData.flagKontainer}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Flag Kontainer</option>
          <option value="Cargo Curah">Cargo Curah</option>
          <option value="LCL">LCL</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {message && <p className="text-green-500 mt-4">{message}</p>}
      {errors.length > 0 && (
        <ul className="text-red-500 mt-4">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransaksiForm;
