
const { ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage");
const storage = require("../firebase");
const fs = require("fs");


// Firebase file upload function
const firebaseFileUpload = (dbFilePath, fileName, filePath) => {
  return new Promise((resolve) => {
    const storageRef = ref(storage, dbFilePath + fileName);
    const theFile = fs.readFileSync(filePath);
    const uploadTask = uploadBytesResumable(storageRef, theFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            console.log(error.code);
            break;
          case "storage/canceled":
            console.log(error.code);
            break;
          case "storage/unknown":
            console.log(error.code);
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          fs.unlinkSync(filePath);
          resolve(downloadURL);
        });
      }
    );
  });
};

module.exports = {
  firebaseFileUpload,
};
