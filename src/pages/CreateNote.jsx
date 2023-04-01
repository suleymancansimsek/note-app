import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../components/useCreateDate'
const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        date
      }
      console.log(note)
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form action="" className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
