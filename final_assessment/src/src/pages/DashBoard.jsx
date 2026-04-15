import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Modal from "../components/Modal";
import { useState,useEffect } from "react";
import "../styles/dashboard.css";
import { fetchUserByMobile } from "../api/userApi";

export default function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [vpas, setVpas] = useState([]);
const [selectedVPA, setSelectedVPA] = useState("");
const [showVPA, setShowVPA] = useState(false);

useEffect(() => {
  const getData = async () => {
    try {
      const res = await fetchUserByMobile("9971560809"); // replace later

      const list = res.data.map((item) => item.vpa_id);

      setVpas(list);

      // If no VPA selected before → show modal
      if (!sessionStorage.getItem("vpa")) {
        setShowVPA(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  getData();
}, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar onProfileClick={() => setShowProfile(true)} />

        <div className="content">
          <h2>Dashboard</h2>
          <p>ID: Pabitra.hota@cbin</p>

          <div className="cards">
            <StatCard title="Total No Of Transaction" value="20.7K" />
            <StatCard title="Total Amount" value="76,000 cr" />
          </div>
        </div>
      </div>

      {/* VPA Modal */}
      {showVPA && (
  <Modal onClose={() => {}}>
    <h3>Select VPA</h3>
    <p>Choose one</p>

    {vpas.map((vpa, index) => (
      <div key={index}>
        <input
          type="radio"
          name="vpa"
          value={vpa}
          onChange={(e) => setSelectedVPA(e.target.value)}
        />
        {vpa}
      </div>
    ))}

    <button
      onClick={() => {
        sessionStorage.setItem("vpa", selectedVPA);
        setShowVPA(false);
      }}
      disabled={!selectedVPA}
    >
      Proceed
    </button>
  </Modal>
)}

      {/* Profile Modal */}
      {showProfile && (
        <Modal onClose={() => setShowProfile(false)}>
          <h3>Profile Details</h3>
          <p>Name: Stebin Ben</p>
          <p>Phone: +91 XXXXXXXX</p>
        </Modal>
      )}
    </div>
  );
}