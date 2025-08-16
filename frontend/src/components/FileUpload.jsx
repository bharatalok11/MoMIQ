const FileUpload = () => {
  return (
    <section>
      <h2>Upload Transcript</h2>
      <input type="file" />
      <textarea rows="6" placeholder="Paste your meeting transcript, call notes, or any text content here..." />
    </section>
  );
};

export default FileUpload;