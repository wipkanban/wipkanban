import multer from "multer";
import uuidv4 from "uuid/v4";
import path from "path";

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    /*
      Files will be saved in the 'uploads' directory. Make
      sure this directory already exists!
    */
    cb(null, process.env.UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    /*
      uuidv4() will generate a random ID that we'll use for the
      new filename. We use path.extname() to get
      the extension from the original file name and add that to the new
      generated ID. These combined will create the file name used
      to save the file on the server and will be available as
      req.file.pathname in the router handler.
    */

    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    req.body.image = {
      originalname: file.originalname,
      newFilename: newFilename
    }
    cb(null, newFilename);
  }
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

export default upload;
