# Xtropic Website - API Contracts & Backend Integration Plan

## Overview
This document outlines the API contracts, mock data structure, and integration plan for the Xtropic website.

## Frontend Implementation Status
✅ **Completed:**
- Hero section with Spline 3D animation
- Vision section (2 cards)
- Products section (3 products: PartsCloud, RecycleBox, MakerCell)
- Roadmap timeline (3 phases)
- Investment pitch section with funding highlights
- Contact form with validation
- Fully responsive dark-themed design
- All sections using mock data from `/app/frontend/src/mock.js`

## Mock Data Structure (`/app/frontend/src/mock.js`)

### 1. Hero Data
```javascript
hero: {
  title: "Engineering Programmable Matter",
  subtitle: "Building the foundation..."
}
```

### 2. Vision Data
```javascript
vision: {
  mainVision: { title, description },
  mission: { title, description }
}
```

### 3. Products Data
```javascript
products: [
  { name, subtitle, description }, // PartsCloud
  { name, subtitle, description }, // RecycleBox
  { name, subtitle, description }  // MakerCell
]
```

### 4. Roadmap Data
```javascript
roadmap: [
  { phase, title, timeframe, milestones: [] }
]
```

### 5. Investment Data
```javascript
investment: {
  reasons: [{ title, description }],
  funding: { seedGoal, marketSize, runway }
}
```

## Backend API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "interest": "investor|collaborator|cofounder|partner|other",
  "message": "string",
  "timestamp": "datetime"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll get back to you soon.",
  "id": "contact_id"
}
```

**MongoDB Collection:** `contacts`

**Schema:**
```python
class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    interest: str  # investor, collaborator, cofounder, partner, other
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new, reviewed, contacted
```

### 2. Get All Contact Submissions (Admin)
**Endpoint:** `GET /api/contacts`

**Response:**
```json
{
  "contacts": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "interest": "string",
      "message": "string",
      "timestamp": "datetime",
      "status": "string"
    }
  ]
}
```

### 3. Optional: Newsletter/Waitlist (Future)
**Endpoint:** `POST /api/waitlist`

**Request Body:**
```json
{
  "email": "string",
  "interest_area": "string"
}
```

## Frontend Integration Changes Required

### Files to Modify:
1. `/app/frontend/src/pages/Home.jsx`
   - Line ~11-17: Contact form submission handler
   - Replace mock submission with actual API call
   - Add proper error handling and success states

### Change Details:

**Current (Mock):**
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  alert('Thank you for your interest! We will get back to you soon.');
  setFormData({ name: '', email: '', interest: '', message: '' });
};
```

**After Backend Integration:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/contact`, {
      ...formData,
      timestamp: new Date().toISOString()
    });
    
    if (response.data.success) {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', interest: '', message: '' });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Backend Implementation Steps

### Step 1: Create MongoDB Model
- Create `Contact` model in `/app/backend/server.py`
- Add validation for email and required fields

### Step 2: Implement Contact Endpoint
- POST `/api/contact` - Save contact submission to MongoDB
- Add email validation
- Add timestamp automatically
- Return success response

### Step 3: Implement Admin Endpoint (Optional)
- GET `/api/contacts` - Retrieve all submissions
- Add basic filtering (by status, date)

### Step 4: Error Handling
- Validate all required fields
- Handle duplicate submissions (rate limiting)
- Return proper error messages

### Step 5: Testing
- Test contact form submission
- Verify data is saved to MongoDB
- Test validation and error cases

## Integration Checklist

- [x] Backend: Create Contact model
- [x] Backend: Implement POST /api/contact endpoint
- [x] Backend: Test endpoint with curl
- [x] Frontend: Add toast notifications (sonner)
- [x] Frontend: Update handleSubmit with API call
- [x] Frontend: Add loading state for submit button
- [x] Frontend: Add error handling
- [x] Test: Submit form and verify in MongoDB
- [ ] Test: Check all validation cases (in progress)

## Backend Implementation Complete

### Implemented Endpoints:
1. **POST /api/contact** - Fully implemented with validation
   - Email format validation
   - Required field validation
   - Interest type validation (investor, collaborator, cofounder, partner, other)
   - Message length validation (minimum 10 characters)
   - Automatic timestamp generation
   - MongoDB storage with status tracking

2. **GET /api/contacts** - Admin endpoint for retrieving submissions
   - Optional status filtering
   - Sorted by timestamp (newest first)
   - Limit parameter for pagination

### Frontend Integration Complete:
- Contact form now connected to backend API
- Toast notifications for success/error feedback
- Loading state during submission
- Error handling with user-friendly messages
- Form reset on successful submission

## Notes
- No authentication required for contact form submission
- Consider adding rate limiting to prevent spam
- Email validation is critical
- Consider adding CAPTCHA in future for production
- All static content (vision, products, roadmap) stays in frontend mock.js
