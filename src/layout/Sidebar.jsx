import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiLogOut, FiEdit2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [fullName, setFullName] = useState('');
  const [about, setAbout] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/v1/user/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const fetchedUser = res?.data?.user;
        if (!fetchedUser) throw new Error('User data is missing');

        setUser(fetchedUser);
        setFullName(fetchedUser.fullName || '');
        setAbout(fetchedUser.about || '');

        if (fetchedUser.profileImage) {
          let updatedImage = fetchedUser.profileImage.replace(/\\/g, '/');
          if (updatedImage.startsWith('public/')) {
            updatedImage = updatedImage.replace(/^public\//, '');
          }
          setPreviewImage(`http://localhost:3000/${updatedImage}?t=${Date.now()}`);
        }
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };

    if (isOpen) fetchUser();
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('about', about);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    try {
      const res = await axios.put('http://localhost:3000/api/v1/user/me', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setUser(res.data.user);
      setIsEditingName(false);
      setIsEditingAbout(false);
      setProfileImage(null);

      const imagePath = res.data.user.profileImage?.replace(/\\/g, '/').replace(/^public\//, '');
      setPreviewImage(`http://localhost:3000/${imagePath}?t=${Date.now()}`);
    } catch (err) {
      console.error('Gagal update profil:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-[#A6E3E8] z-50 transform transition-transform duration-300 ease-in-out shadow-lg border-l border-gray-200 rounded-l-3xl ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <FaTimes size={22} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="mx-4 mb-8 bg-white rounded-2xl border border-green-300 p-6 shadow-md h-[calc(100vh-64px)] overflow-y-auto">
        <div className="text-center mb-6 border border-green-300 rounded-xl py-2">
          <h1 className="text-2xl font-extrabold text-green-800">NUTRIVISION</h1>
          <p className="text-sm tracking-wide text-green-700 font-medium">SCAN YOUR FOOD</p>
          <p className="text-xs text-gray-500">SHAPE YOUR HEALTH</p>
        </div>

        <div className="border border-green-300 rounded-xl p-4 w-full box-border bg-white">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img
              src={previewImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <label htmlFor="profile-upload">
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-100">
                <FiEdit2 className="text-gray-700 w-4 h-4" />
              </div>
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="flex items-center justify-center">
              {isEditingName ? (
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 rounded border"
                />
              ) : (
                <h2 className="text-lg font-bold">{fullName || 'Your Full Name'}</h2>
              )}
              <button type="button" onClick={() => setIsEditingName(!isEditingName)} className="ml-1 text-gray-600 hover:text-gray-800">
                <FiEdit2 />
              </button>
            </div>

            <div>
              <p className="font-bold">Username</p>
              <p className="text-gray-500">{user.username}</p>
            </div>

            <div>
              <p className="font-bold">Email</p>
              <p className="text-blue-600 underline">{user.email}</p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="font-bold">About Me</p>
                <button type="button" onClick={() => setIsEditingAbout(!isEditingAbout)} className="text-gray-600 hover:text-gray-800">
                  <FiEdit2 />
                </button>
              </div>
              {isEditingAbout ? (
                <textarea
                  rows={3}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="w-full px-3 py-2 rounded border mt-1"
                />
              ) : (
                <p className="text-sm text-gray-700 mt-1">{about || 'No about info yet.'}</p>
              )}
            </div>

            <div className="flex justify-start mb-8 mt-4">
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 transition text-sm font-medium"
              >
                <FiLogOut size={18} />
                <span>Logout</span>
              </button>
            </div>

            {isLoading && (
              <div className="text-center text-sm text-gray-600">Updating profile...</div>
            )}

            <button
              type="submit"
              className={`w-full py-2 rounded-xl transition mb-6 ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800 text-white'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
