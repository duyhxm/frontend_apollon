const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Thiết lập Multer để xử lý tệp được tải lên
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Xử lý yêu cầu POST từ trang web
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ success: true, message: 'File uploaded successfully.' });
});

// Lắng nghe trên cổng 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
