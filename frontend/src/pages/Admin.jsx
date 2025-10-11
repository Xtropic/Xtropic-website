import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { RefreshCw, Mail, User, MessageSquare, Calendar } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import '../styles/Admin.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast.error('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => {
    if (filter === 'all') return true;
    return contact.interest === filter;
  });

  const getInterestBadgeColor = (interest) => {
    const colors = {
      investor: 'bg-green-500/20 text-green-400 border-green-500/50',
      collaborator: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      partner: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      other: 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    };
    return colors[interest] || colors.other;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const stats = {
    total: contacts.length,
    investor: contacts.filter(c => c.interest === 'investor').length,
    collaborator: contacts.filter(c => c.interest === 'collaborator').length,
    partner: contacts.filter(c => c.interest === 'partner').length,
    other: contacts.filter(c => c.interest === 'other').length
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Manage contact form submissions</p>
        </div>
        <Button onClick={fetchContacts} disabled={loading} className="refresh-btn">
          <RefreshCw className={loading ? 'spinning' : ''} size={18} />
          Refresh
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-label">Total Submissions</div>
          <div className="stat-value">{stats.total}</div>
        </Card>
        <Card className="stat-card">
          <div className="stat-label">Investors</div>
          <div className="stat-value text-green-400">{stats.investor}</div>
        </Card>
        <Card className="stat-card">
          <div className="stat-label">Collaborators</div>
          <div className="stat-value text-blue-400">{stats.collaborator}</div>
        </Card>
        <Card className="stat-card">
          <div className="stat-label">Partners</div>
          <div className="stat-value text-purple-400">{stats.partner}</div>
        </Card>
      </div>

      {/* Filters */}
      <div className="filters">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          className="filter-btn"
        >
          All ({stats.total})
        </Button>
        <Button
          variant={filter === 'investor' ? 'default' : 'outline'}
          onClick={() => setFilter('investor')}
          className="filter-btn"
        >
          Investors ({stats.investor})
        </Button>
        <Button
          variant={filter === 'collaborator' ? 'default' : 'outline'}
          onClick={() => setFilter('collaborator')}
          className="filter-btn"
        >
          Collaborators ({stats.collaborator})
        </Button>
        <Button
          variant={filter === 'partner' ? 'default' : 'outline'}
          onClick={() => setFilter('partner')}
          className="filter-btn"
        >
          Partners ({stats.partner})
        </Button>
      </div>

      {/* Submissions Table */}
      <Card className="table-card">
        {loading ? (
          <div className="loading-state">
            <RefreshCw className="spinning" size={32} />
            <p>Loading submissions...</p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="empty-state">
            <MessageSquare size={48} />
            <p>No submissions found</p>
          </div>
        ) : (
          <div className="table-container">
            <Table>
              <TableHeader>
                <TableRow className="table-header-row">
                  <TableHead className="table-head">Name</TableHead>
                  <TableHead className="table-head">Email</TableHead>
                  <TableHead className="table-head">Interest</TableHead>
                  <TableHead className="table-head">Message</TableHead>
                  <TableHead className="table-head">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id} className="table-row">
                    <TableCell className="table-cell">
                      <div className="cell-with-icon">
                        <User size={16} />
                        <span>{contact.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="table-cell">
                      <div className="cell-with-icon">
                        <Mail size={16} />
                        <a href={`mailto:${contact.email}`} className="email-link">
                          {contact.email}
                        </a>
                      </div>
                    </TableCell>
                    <TableCell className="table-cell">
                      <Badge className={`interest-badge ${getInterestBadgeColor(contact.interest)}`}>
                        {contact.interest}
                      </Badge>
                    </TableCell>
                    <TableCell className="table-cell message-cell">
                      <div className="message-preview">{contact.message}</div>
                    </TableCell>
                    <TableCell className="table-cell">
                      <div className="cell-with-icon date-cell">
                        <Calendar size={16} />
                        <span>{formatDate(contact.timestamp)}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Admin;
