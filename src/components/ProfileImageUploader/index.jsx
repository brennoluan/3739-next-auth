'use client';

import Image from 'next/image';
import { Button } from '../Button';
import { useState } from 'react';
import { Spinner } from '../Spinner';

import avatarDefault from './empty-avatar.png';

export const ProfileImageUploader = ({ user }) => {
  const [imgSrc, setImgSrc] = useState(
    user.avatar ?? user.image ?? avatarDefault,
  );
  const [newAvatar, setNewAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setNewAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function uploadAvatar(event) {
    event.preventDefault();
    setLoading(true);
    fetch('/api/profile', {
      method: 'POST',
      body: newAvatar,
    }).finally(() => {
      setLoading(false);
    });
  }

  if (!user) {
    return null;
  }
  return (
    <>
      <ul>
        <li>{user.name}</li>
        <li>
          <Image
            src={imgSrc}
            width={254}
            height={254}
            alt={`Avatar do ${user.name}`}
          />
        </li>
      </ul>
      <form onSubmit={uploadAvatar}>
        <input type="file" onChange={handleFileChange} required />

        <Button disabled={loading}>Upload {loading && <Spinner />}</Button>
      </form>
    </>
  );
};
