const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Serve static assets from the current directory
app.use(express.static(__dirname));

// DB Helpers
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database file:', error);
    return { users: [], settings: {}, appointments: [], doctors: [], triage: [] };
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing to database file:', error);
    return false;
  }
};

// API Endpoints

// 1. Auth Endpoint: Register
app.post('/api/auth/register', (req, res) => {
  const { name, clinic, email, phone, password, role } = req.body;
  if (!name || !clinic || !email || !phone || !password || !role) {
    return res.status(400).json({ error: 'All registration parameters are required.' });
  }

  const db = readDB();
  const emailLower = email.trim().toLowerCase();
  
  if (db.users.some(u => u.email.toLowerCase() === emailLower)) {
    return res.status(400).json({ error: 'This email is already registered.' });
  }

  const newUser = { name, clinic, email: emailLower, phone, password, role };
  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({
    message: 'Clinic workspace registration successful.',
    user: { name, clinic, email: emailLower, role }
  });
});

// 2. Auth Endpoint: Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const db = readDB();
  const emailLower = email.trim().toLowerCase();
  
  // Look for registered user
  let matchedUser = db.users.find(u => u.email.toLowerCase() === emailLower);

  // Default demonstration fallbacks
  if (!matchedUser) {
    if (emailLower === 'sarah@eraani.com' || emailLower === 'admin@eraani.com') {
      matchedUser = {
        name: 'Dr. Sarah Jenkins',
        clinic: 'Eraani Clinic Systems',
        email: emailLower,
        phone: '+213 550 12 34 56',
        password: 'password',
        role: 'Clinic Administrator'
      };
      // Auto-save this user to db
      db.users.push(matchedUser);
      writeDB(db);
    }
  }

  if (!matchedUser) {
    return res.status(401).json({ error: 'Invalid email address.' });
  }

  if (matchedUser.password !== password) {
    return res.status(401).json({ error: 'Incorrect password.' });
  }

  res.json({
    message: 'Login successful.',
    user: {
      name: matchedUser.name,
      clinic: matchedUser.clinic,
      email: matchedUser.email,
      role: matchedUser.role
    }
  });
});

// 3. Settings Endpoint: GET
app.get('/api/settings', (req, res) => {
  const db = readDB();
  res.json(db.settings || {});
});

// 4. Settings Endpoint: POST
app.post('/api/settings', (req, res) => {
  const db = readDB();
  db.settings = { ...db.settings, ...req.body };
  writeDB(db);
  res.json({ message: 'Settings saved successfully.', settings: db.settings });
});

// 5. Appointments Endpoints
app.get('/api/appointments', (req, res) => {
  const db = readDB();
  res.json(db.appointments || []);
});

app.post('/api/appointments', (req, res) => {
  const { patientName, doctorName, department, time, status } = req.body;
  if (!patientName || !doctorName || !department || !time || !status) {
    return res.status(400).json({ error: 'All appointment fields are required.' });
  }

  const db = readDB();
  const newAppointment = {
    id: 'apt-' + Date.now(),
    patientName,
    doctorName,
    department,
    time,
    status
  };

  db.appointments.push(newAppointment);
  writeDB(db);
  res.status(201).json(newAppointment);
});

// 6. Doctors Roster Endpoints
app.get('/api/doctors', (req, res) => {
  const db = readDB();
  res.json(db.doctors || []);
});

app.post('/api/doctors', (req, res) => {
  const { name, specialty, status, appointmentsCount } = req.body;
  if (!name || !specialty || !status) {
    return res.status(400).json({ error: 'Doctor name, specialty, and status are required.' });
  }

  const db = readDB();
  
  // Find or create doctor
  let doc = db.doctors.find(d => d.name.toLowerCase() === name.toLowerCase());
  if (doc) {
    doc.specialty = specialty;
    doc.status = status;
    if (appointmentsCount !== undefined) doc.appointmentsCount = appointmentsCount;
  } else {
    doc = {
      id: 'doc-' + Date.now(),
      name,
      specialty,
      status,
      appointmentsCount: appointmentsCount || 0,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150'
    };
    db.doctors.push(doc);
  }
  
  writeDB(db);
  res.json(doc);
});

// 7. Triage Vitals Endpoints
app.get('/api/triage', (req, res) => {
  const db = readDB();
  res.json(db.triage || []);
});

app.post('/api/triage', (req, res) => {
  const { patientName, vitals } = req.body;
  if (!patientName || !vitals || !vitals.bp || !vitals.temp || !vitals.weight) {
    return res.status(400).json({ error: 'Patient name and complete vitals (bp, temp, weight) are required.' });
  }

  const db = readDB();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const newTriage = {
    id: 'trg-' + Date.now(),
    patientName,
    time,
    vitals,
    status: 'Pending'
  };

  db.triage.push(newTriage);
  writeDB(db);
  res.status(201).json(newTriage);
});

// Catch-all route to serve index page if logged in or fallback
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/settings.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'settings.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  Eraani Clinic System Server running at:`);
  console.log(`  http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
