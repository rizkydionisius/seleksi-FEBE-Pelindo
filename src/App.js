import React, { useState } from "react";
import TransaksiForm from "./components/TransaksiForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TransaksiForm />
    </div>
  );
}

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("data-utama"); 

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Data Pemberitahuan</h1>
      
      {/* Tab Navigasi */}
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "data-utama"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("data-utama")}
        >
          Data Utama
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "data-entitas"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("data-entitas")}
        >
          Data Entitas
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "data-pungutan"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("data-pungutan")}
        >
          Data Pungutan
        </button>
      </div>

      {/* Tab Konten */}
      <div className="mt-6">
        {activeTab === "data-utama" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-600 mb-4">Data Utama</h2>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nomor Pengajuan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Nomor Pengajuan"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tanggal Pengajuan
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nomor Pendaftaran
                  </label>
                  <input
                    type="text"
                    maxLength="20"
                    placeholder="Masukkan Nomor Pendaftaran"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tanggal Pengajuan
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Kantor Pabean
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>KPU TANJUNG PRIOK</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    SKEP Fasilitas
                  </label>
                  <input
                    type="text"
                    placeholder="SKEP Fasilitas"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis PIB
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>BIASA</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis Impor
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>UNTUK DIPAKAI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cara Pembayaran
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>BIASA/TUNAI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Transaksi
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>Transaksi Perdagangan Dengan Imbal Dagang</option>
                  </select>
                </div>
              </div>

              {/* Tombol Navigasi */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setActiveTab("data-entitas")}
                >
                  Sebelumnya
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setActiveTab("data-entitas")}
                >
                  Selanjutnya
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "data-entitas" && (
          <div>
            {/* Konten Data Entitas */}
            <h2 className="text-xl font-semibold text-gray-600 mb-4">Data Entitas</h2>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis Pemberitahuan
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>PENGUSAHA</option>
                  </select>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mt-4">Pengusaha</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis Identitas
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>KTP</option>
                    <option>Paspor</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    NIB
                  </label>
                  <input
                    type="text"
                    placeholder="8720310010981"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    No Identitas
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan No Identitas"
                    maxLength={16}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                
              </div>
              <div className="grid grid-cols-3 gap-6">
              <div>
                  <label className="block text-sm font-medium text-gray-700">
                    No Identitas (16 Digit)
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan No Identitas"
                    maxLength={16}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="UNICHEMAND INDONESIA"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                
              </div>
              <div className="grid grid-cols-5 gap-6">
              <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Provinsi
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>JAWA TIMUR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Kota / Kabupaten
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>KAB. SIDOARJO</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Kecamatan
                  </label>
                  <input
                    type="text"
                    placeholder="Candi"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Kode Pos
                  </label>
                  <input
                    type="text"
                    placeholder="61271"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    RT / RW
                  </label>
                  <input
                    type="text"
                    placeholder="001 / 002"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Telepon
                  </label>
                  <input
                    type="text"
                    placeholder="0318921342"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="linggasetiawan@unichem.co.id"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>AEO</option>
                  </select>
                </div>
              </div>

              {/* Tombol Navigasi */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md shadow-sm hover:bg-gray-300"
                  onClick={() => setActiveTab("data-utama")}
                >
                  Sebelumnya
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
                >
                  Selanjutnya
                </button>
              </div>
            </form>
          </div>
        )}

      {activeTab === "data-pungutan" && (
          <div id="dataPungutan" className="tab-content">
          <h2 className="text-lg font-semibold mb-4">Data Pungutan</h2>
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            {/* Baris pertama */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="incoterms" className="block text-sm font-medium text-gray-700">Incoterms*</label>
                <select id="incoterms" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm">
                  <option value="FOB">Free On Board</option>
                  <option value="CIF">Cost, Insurance, and Freight</option>
                </select>
              </div>
              <div>
                <label htmlFor="valuta" className="block text-sm font-medium text-gray-700">Valuta*</label>
                <select id="valuta" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm">
                  <option value="FOB">US Dollar</option>
                </select>
              </div>
              <div>
                <label htmlFor="kurs" className="block text-sm font-medium text-gray-700">Kurs*</label>
                <input
                  type="text"
                  id="kurs"
                  placeholder="15,000"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm text-right"
                />
              </div>
            </div>

            {/* Baris kedua */}
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <label htmlFor="nilai" className="text-sm font-medium text-gray-700">Nilai*</label>
                <input type="text" id="nilai" placeholder="50,000.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div className="flex items-center">
                <label type="text" className="">+</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="biayaTambahan" className="block text-sm font-medium text-gray-700">Biaya Tambahan</label>
                <input type="text" id="biayaTambahan" placeholder="500.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div className="flex items-center">
                <label htmlFor="tambah" className="font-medium">-</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="biayaPengurang" className="block text-sm font-medium text-gray-700">Biaya Pengurang</label>
                <input type="text" id="biayaPengurang" placeholder="1,000.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div className="flex items-center">
                <label htmlFor="tambah" className="font-medium">+</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="voluntary-declaration" className="block text-sm font-medium text-gray-700">Voluntary Declaration</label>
                <input type="text" id="voluntary-declaration" placeholder="0" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div className="flex items-center">
                <label htmlFor="tambah" className="font-medium">=</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="nilai-FOB" className="block text-sm font-medium text-gray-700">Nilai FOB</label>
                <input type="text" id="nilai-FOB" placeholder="0" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
            </div>


            {/* Baris ketiga */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="asuransi-bayar" className="block text-sm font-medium text-gray-700">Asuransi Bayar di*</label>
                <select id="asuransi-bayar" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm">
                  <option value="FOB">Luar Negeri</option>
                  
                </select>
              </div>
              <div>
                <label htmlFor="asuransi" className="block text-sm font-medium text-gray-700">Asuransi</label>
                <input type="text" id="asuransi" placeholder="5,000.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div>
                <label htmlFor="freight" className="block text-sm font-medium text-gray-700">Freight</label>
                <input type="text" id="freight" placeholder="400.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
            </div>

            {/* Baris keempat */}
            <div className="grid grid-cols-5 gap-6">
              <div>
                <label htmlFor="cif" className="block text-sm font-medium text-gray-700">CIF</label>
                <input type="text" id="cif" placeholder="59,900.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div>
                <label htmlFor="cifRp" className="block text-sm font-medium text-gray-700">CIF Rp</label>
                <input type="text" id="cifRp" placeholder="1,056,860,982" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div>
                <label htmlFor="bruto" className="block text-sm font-medium text-gray-700">Bruto</label>
                <input type="text" id="bruto" placeholder="900.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div>
                <label htmlFor="netto" className="block text-sm font-medium text-gray-700">Netto</label>
                <input type="text" id="netto" placeholder="800.00" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm" />
              </div>
              <div>
                <label htmlFor="flag-kontainer" className="block text-sm font-medium text-gray-700">Flag Kontainer*</label>
                <select id="asuransi-bayar" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm">
                  <option value="FOB">Cargo Curah</option>
                  
                </select>
              </div>
            </div>

            {/* Baris kelima */}
            <div className="grid grid-cols-2 gap-6">
              
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md shadow-sm hover:bg-gray-300"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
              >
                Selanjutnya
              </button>
            </div>
          </form>
        </div>
        )}

      </div>
    </div>
  );
};

export default TabComponent;
