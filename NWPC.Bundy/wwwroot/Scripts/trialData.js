const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample database data
const databaseData = [
    { systemNumber: 1, employeeId: '0054', employeeName: 'John Doe' },
    { systemNumber: 2, employeeId: '0055', employeeName: 'Jane Smith' },
    { systemNumber: 3, employeeId: '0056', employeeName: 'Alice Johnson' },
    { systemNumber: 4, employeeId: '0057', employeeName: 'Bob Anderson' },
    { systemNumber: 5, employeeId: '0058', employeeName: 'Emily Brown' }
    // Add more employees as needed
];

// Autocomplete endpoint
app.get('/autocomplete', (req, res) => {
    const query = req.query.q.toLowerCase();
    const suggestions = databaseData.filter(item =>
        item.systemNumber.toString().includes(query) ||
        item.employeeId.includes(query) ||
        item.employeeName.toLowerCase().includes(query)
    ).map(item => ({
        value: item.employeeId,
        label: `${item.systemNumber} - ${item.employeeId} - ${item.employeeName}`
    }));

    res.json(suggestions);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
