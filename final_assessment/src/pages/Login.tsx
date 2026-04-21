import React from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import FrameImg from '../assets/Frame.png';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={FrameImg} alt="Frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 style={{color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center'}}>Login</h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.9rem'}}>Please authenticate using your SSO credentials to access the merchant portal.</p>
          
          <button 
            className="btn btn-primary" 
            style={{width: '100%', padding: '1rem', fontSize: '1rem'}}
            onClick={() => navigate('/authentik-login')}
          >
            Sign In with Authentik
          </button>
        </div>
      </div>
    </div>
  );
}
