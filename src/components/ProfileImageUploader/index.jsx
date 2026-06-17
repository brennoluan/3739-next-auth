'use client';
import { useState } from 'react';
import { Button } from '../Button';
import avatarDefault from './empty-avatar.png';
import Image from 'next/image';

export const ProfileImageUploader = ({ user }) => {
  const [imgSrc, setImgSrc] = useState(
    user.avatar ?? user.image ?? avatarDefault,
  );
  const [newAvatar, setNewAvatar] = useState(null);

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
    fetch('/api/profile', {
      method: 'POST',
      body: newAvatar,
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
            alt={`Avatar do(a) ${user.name}`}
          />
        </li>
      </ul>
      <form onSubmit={uploadAvatar}>
        <input type="file" onChange={handleFileChange} required />

        <Button>Upload</Button>
      </form>
    </>
  );
};
