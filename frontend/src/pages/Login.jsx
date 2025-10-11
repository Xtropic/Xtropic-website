import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';
import '../styles/Login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple password check (password: admin123)
    // In production, this should be validated against backend
    const ADMIN_PASSWORD = 'xtropic2025';

    if (password === ADMIN_PASSWORD) {
      // Store authentication in session
      sessionStorage.setItem('adminAuth', 'true');
      toast.success('Login successful!');
      navigate('/admin');
    } else {
      toast.error('Invalid password');
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="login-logo">XTROPIC</div>
          <h1 className="login-title">Admin Access</h1>
          <p className="login-subtitle">Enter password to continue</p>
        </div>

        <Card className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <div className="password-input-wrapper">
                <Lock size={20} className="password-icon" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="login-btn" 
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Login'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
