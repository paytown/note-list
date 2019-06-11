import React from 'react';
import CreateNote from './CreateNote';
import AllNotes from './AllNotes';

export default function HomePage() {
  return (
    <>
      <CreateNote />
      <AllNotes />
    </>
  );
}
