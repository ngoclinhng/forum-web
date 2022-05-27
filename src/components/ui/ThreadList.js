import React from 'react';
import ThreadListItem from './ThreadListItem';
import './ThreadList.css';

const threads = [
  {
    id: "VGhyZWFkOjU=",
    title: "What are the odds that some idiot will name his mutex ether-rot-mutex (2017)",
    postCount: 5,
    insertedAt: "2022-05-25T10:50:29Z"
  },
  {
    id: "VGhyZWFkOjM=",
    title: "Ultra compact GAN ATX power supply delivers up to 250 Watts",
    postCount: 5,
    insertedAt: "2022-05-25T09:46:06Z"
  },
  {
    id: "VGhyZWFkOjEz",
    title: "Rash of parts thefts is leaving Freightliner trucks inoperable",
    insertedAt: "2022-05-26T10:48:06Z",
    postCount: 4
  },
  {
    id: "VGhyZWFkOjI=",
    title: "The Collison Brothers Built Stripe into a $95B Unicorn",
    postCount: 3,
    insertedAt: "2022-05-25T07:07:16Z"
  },
  {
    id: "VGhyZWFkOjEw",
    title: "Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna ac placerat vestibulum, lectus mauris ultrices eros, in cursus turpisx",
    postCount: 0,
    insertedAt: "2022-05-27T03:12:12Z"
  }
];

function ThreadList() {
  return (
    <ul className='ThreadList'>
      {threads.map((thread) => (
        <ThreadListItem key={thread.id} {...thread} />
      ))}
    </ul>
  );
}

export default ThreadList;
