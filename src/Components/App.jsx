// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import notes from "../notes";
// function App() {
//   return (
//     <div>
//       <Header />
//       {notes.map((note) => {
//         return <Note title={note.title} content={note.content} />;
//       })}
//       <Footer />
//     </div>
//   );
// }
// export default App;



import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;



// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Note from './Note';
// function App(){
//     const sendDataBack = (data) => {
//         console.log(data)
//     }
//     return(
//         <div>
//             <Header />
//             <Note title={'Ajmal 12'} subtitle={'Cool note or sthh...'} dataSender={sendDataBack}/>

//             <Footer />
//         </div>
//     )
// }
// export default App;
