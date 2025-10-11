import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowRight, Rocket, Cpu, Recycle, Factory, CheckCircle2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { toast } from 'sonner';
import axios from 'axios';
import { mockData } from '../mock';
import '../styles/Home.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast.success('Thank you! We will get back to you soon.');
        setFormData({ name: '', email: '', interest: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error.response?.data?.detail || 'Something went wrong. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <div className="logo-text">XTROPIC</div>
          <nav className="dark-nav">
            <a href="#vision" className="dark-nav-link">Vision</a>
            <a href="#products" className="dark-nav-link">Products</a>
            <a href="#roadmap" className="dark-nav-link">Roadmap</a>
            <a href="#investment" className="dark-nav-link">Investment</a>
            <a href="#contact" className="dark-nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Spline */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">{mockData.hero.title}</h1>
            <p className="hero-subtitle">{mockData.hero.subtitle}</p>
            <div className="hero-buttons">
              <a href="#contact">
                <Button className="btn-primary">
                  Get Involved
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#vision">
                <Button className="btn-secondary">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="vision-section">
        <div className="section-content">
          <h2 className="section-title">Our Vision</h2>
          <div className="vision-grid">
            <Card className="vision-card">
              <h3 className="vision-card-title">{mockData.vision.mainVision.title}</h3>
              <p className="vision-card-text">{mockData.vision.mainVision.description}</p>
            </Card>
            <Card className="vision-card">
              <h3 className="vision-card-title">{mockData.vision.mission.title}</h3>
              <p className="vision-card-text">{mockData.vision.mission.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-content">
          <h2 className="section-title">Our Product Ecosystem</h2>
          <div className="products-grid">
            {mockData.products.map((product, index) => {
              const icons = [Cpu, Recycle, Factory];
              const Icon = icons[index];
              return (
                <Card key={index} className="product-card">
                  <div className="product-icon">
                    <Icon size={40} />
                  </div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-subtitle">{product.subtitle}</p>
                  <p className="product-description">{product.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="roadmap-section">
        <div className="section-content">
          <h2 className="section-title">Development Roadmap</h2>
          <div className="roadmap-timeline">
            {mockData.roadmap.map((phase, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < mockData.roadmap.length - 1 && <div className="timeline-line"></div>}
                </div>
                <Card className="timeline-card">
                  <div className="timeline-phase">{phase.phase}</div>
                  <h3 className="timeline-title">{phase.title}</h3>
                  <p className="timeline-timeframe">{phase.timeframe}</p>
                  <ul className="timeline-milestones">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="investment-section">
        <div className="section-content">
          <h2 className="section-title">Why Invest in Xtropic</h2>
          <div className="investment-grid">
            {mockData.investment.reasons.map((reason, index) => (
              <Card key={index} className="investment-card">
                <h3 className="investment-card-title">{reason.title}</h3>
                <p className="investment-card-text">{reason.description}</p>
              </Card>
            ))}
          </div>
          <div className="investment-highlight">
            <Card className="highlight-card">
              <div className="highlight-row">
                <div className="highlight-item">
                  <div className="highlight-label">Seed Goal</div>
                  <div className="highlight-value">{mockData.investment.funding.seedGoal}</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-label">Market Size</div>
                  <div className="highlight-value">{mockData.investment.funding.marketSize}</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-label">Runway</div>
                  <div className="highlight-value">{mockData.investment.funding.runway}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-content">
          <h2 className="section-title">Get Involved</h2>
          <p className="contact-subtitle">Join us in building the future of programmable matter</p>
          <Card className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <Label htmlFor="interest">I'm interested as *</Label>
                <Select value={formData.interest} onValueChange={(value) => handleChange('interest', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="collaborator">Collaborator</SelectItem>
                    <SelectItem value="partner">Strategic Partner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="form-group">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  placeholder="Tell us about your interest and how you'd like to contribute..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <ArrowRight size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">XTROPIC</div>
            <p className="footer-tagline">Engineering the evolution from information to matter</p>
          </div>
          <div className="footer-right">
            <p className="footer-copyright">© 2025 Xtropic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;