import React, { useEffect, useState } from 'react'
import ImgHolder from '../../../components/ImgHolder';
import { Link } from 'react-router';
import { useAuthStore } from '../../../stores/auth.store';
import apiClient from '../../../services/apiClient';

interface UserDetails
{
  name: string;
  surname: string;
  username: string;
  email: string;
  birthDate: string;
  createdAt: string;
}

type ProfileDetailsProps = {
  userDetails: UserDetails | null;
};

const ProfileDetails = ({userDetails}: ProfileDetailsProps) => 
{

  const { userBasicInfo, isAuthenticated, clearAuth } = useAuthStore();

  const [avatarUrl, setAvatarUrl] = useState("")
  useEffect(() => 
  {
    const fetchUserAvatar = async () => 
    {
      try 
      {
        const keyResponse = await apiClient.get(
          `/user/img/${userBasicInfo?.userId}/profile-image-key`
        );
        
        
          if (keyResponse.data) {
            // 2. Get presigned URL if key exists
            const urlResponse = await apiClient.get("/user/img/url", {
                params: { key: keyResponse.data },
            });
            setAvatarUrl(urlResponse.data);
        }
          
      } 
      catch (error) 
      {
        console.error("Error loading avatar:", error);
        throw new Error("Unable to obtain user profile image.")
      
      }
    }
      fetchUserAvatar();
  
  }, [userBasicInfo?.userId])
  

  if (!userDetails) {
    return <p>No user details available</p>;
  }

  const fieldsToLabelMap: Record<keyof UserDetails, string> = 
  {
    name: 'Name',
    surname: 'Surname',
    username: 'Username',
    email: 'Email',
    birthDate: 'Birth Date',
    createdAt: 'Account Created at'
  }

  const formatDate = (isoDate: string) => 
  {
    const date = new Date(isoDate);
    
    return new Intl.DateTimeFormat('en-UD', 
    {
      dateStyle: 'short',
      timeStyle: 'short'
    }).format(date);
  };

  


  return (
    <aside className='basis-1/5 p-4'>
      <section className='flex flex-col items-start gap-4'>
        <section className='flex justify-between items-center gap-2'>
          <a href="/" className='flex gap-2 items-center'>
            <svg className=' h-5 w-5 fill-current text-white stroke-black stroke-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className='font-medium sm:text-md'>Back</span> 
          </a>          
          <p></p>  
        </section>

        <div className="flex items-center gap-4">
          {avatarUrl ? (
            <div className="avatar">
              <div className="w-20 rounded-xl">
                  <img src={avatarUrl} alt="User avatar" />
              </div>
            </div>
             ) : (
            <svg 
              className="h-10 w-10 stroke-black stroke-1 dark:stroke-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="9" r="3" />
              <circle cx="12" cy="12" r="10" />
              <path 
                  d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5" 
                  strokeLinecap="round"
              />
            </svg>
          )}
          {/* <figure className='h-24 w-24 object-cover '>
            <img 
              src="https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="" 
              className='w-full h-full object-cover rounded-xl'
            />
          </figure> */}

          <h1 className='text-lg font-medium'>{userDetails.name} {userDetails.surname}</h1>
        </div>
      </section>
      <hr className='my-4'/>
      <div className='profile-info'>
        <ul className='space-y-2'>
          {Object.entries(userDetails).map(([key, value]) => (
            <li key={key}>
              <span className='block text-gray-500 text-sm'>{fieldsToLabelMap[key as keyof UserDetails]}</span>
              <span className='block'>{key === 'createdAt' ? formatDate(value) : value}</span>
            </li>

          ))}
        </ul>       

      </div>
      
      <a href={`/account/${userDetails?.username}/update`}
        className='mt-6 btn btn-sm bg-buttons hover:bg-btn-hover active:bg-orange-400 rounded-lg border border-emerald-950 text-gray-700'
      >Update info</a>

    </aside>
  )
}

export default ProfileDetails