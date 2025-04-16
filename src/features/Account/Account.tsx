import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../stores/auth.store';
import {  fetchUserDetails } from '../../services/api.service';


interface UserDetails 
{
    name: string;
    surname: string;
    username: string;
    email: string;
    birthDate: string;
}

const Account = () => 
{
    const { userBasicInfo, isAuthenticated, clearAuth } = useAuthStore();
    const [userDetails, setUserDetails] = useState< UserDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => 
    {
        const loadUserDetails = async () =>
        {            
            if(!userBasicInfo?.email)
            {
                setError('No email found');
                setLoading(false);
                return;
            }

            try 
            {
                setLoading(true);
                const details = await fetchUserDetails(userBasicInfo?.email);
                setUserDetails(details);                            
            } 
            catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch user details');
            } finally {
            setLoading(false);
            }
        }
        loadUserDetails();

    }, [userBasicInfo?.email])

    if (loading) {
        return <div>Loading user details...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    

  return (
    <div>
      <h1>Account Details</h1>
      {userDetails ? (
        <div>
          <p>Name: {userDetails.name} {userDetails.surname}</p>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <p>Birth Date: {userDetails.birthDate}</p>
        </div>
      ) : (
        <p>No user details available</p>
      )}
      <a href={`/account/${userDetails?.username}/update`}>Update user</a>
    </div>
  )
}

export default Account


