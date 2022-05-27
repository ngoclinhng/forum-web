import React from 'react';
import { useParams } from 'react-router-dom';

export default function ThreadPage() {
  const { id } = useParams();
  return <div>Thread details page: {id}</div>;
}
