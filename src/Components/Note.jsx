import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;


// import React from "react";

// function Note(props) {
//   console.log(props)
//   props.dataSender("Sending data from Note to app......")
//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.subtitle}</p>
//     </div>
//   );
// }

// export default Note;