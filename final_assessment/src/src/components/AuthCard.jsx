import "../styles/auth.css";

export default function AuthCard({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img 
          src="https://companieslogo.com/img/orig/CENTRALBK.NS_BIG-cd96c5c9.png?t=1720244491"
          alt="logo"
          className="logo"
        />
        {children}
      </div>

      <div className="footer">
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>CA Privacy Notice</span>
      </div>
    </div>
  );
}