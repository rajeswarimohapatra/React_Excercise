import { useNavigate, useLocation } from "react-router-dom";
import "../styles/dashboard.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Transaction Reports", path: "/transactions" },
    { name: "QR Details", path: "/qr" },
    { name: "Language Update", path: "/language" },
    { name: "Help & Support", path: "/help" },
  ];

  return (
    <div className="sidebar">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Central_Bank_of_India_logo.svg/2560px-Central_Bank_of_India_logo.svg.png" />

      {menu.map((item) => (
        <div
          key={item.path}
          className={`menu-item ${
            location.pathname === item.path ? "active" : ""
          }`}
          onClick={() => navigate(item.path)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}