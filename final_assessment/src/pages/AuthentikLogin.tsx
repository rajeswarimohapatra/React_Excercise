import React, { useState } from 'react';
import logo from '../assets/CentralBankLogo.png';
import rectImg from '../assets/Rectangle 430.png';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from 'react-oidc-context';

export default function AuthentikLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    void auth.signinRedirect();
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Google Sans", "Inter", sans-serif'
    }}>
      
      {/* Background Graphic on the Left */}
      <img 
        src={rectImg} 
        alt="" 
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '80vh',
          maxWidth: '40vw',
          objectFit: 'contain',
          zIndex: 0,
          opacity: 0.8
        }} 
      />

      {/* Login Card */}
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
        border: '1px solid #f0f0f0',
        width: '100%',
        maxWidth: '450px',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Logo inside login block */}
        <img src={logo} alt="Central Bank of India" style={{ width: '220px', marginBottom: '2.5rem' }} />
        
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#333', marginBottom: '2rem' }}>
          Login to your Account
        </h2>
        
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#777', fontSize: '0.85rem' }}>
              Username
            </label>
            <input 
              type="text" 
              placeholder="Enter your Username"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                color: '#333'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#777', fontSize: '0.85rem' }}>
              Password
            </label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                paddingRight: '2.5rem',
                color: '#333'
              }}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#aaa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '0.85rem',
              background: '#0d6efd',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: '1.5rem',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#0b5ed7'}
            onMouseOut={(e) => e.currentTarget.style.background = '#0d6efd'}
          >
            Login
          </button>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#555' }}>
              <input type="checkbox" style={{ cursor: 'pointer' }} />
              Remember Me
            </label>
            <a href="#" style={{ color: '#0d6efd', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>

      {/* Footer text below the card */}
      <div style={{ position: 'absolute', bottom: '20px', zIndex: 1, fontSize: '0.75rem', color: '#999', display: 'flex', gap: '15px' }}>
         <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Terms and Conditions</span>
         <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Privacy Policy</span>
         <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>CA Privacy Notice</span>
      </div>

    </div>
  );
}
