const multer = require('multer');


// Set up multer storage configuration
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });
  
  // Create the multer middleware
  const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: {
        fileSize : 5 * 1024 * 1024
    }   
 });
  
  
  
  module.exports = upload.single('file');