import { useEffect, useState } from 'react'
import { useAuthStore } from '../../stores/auth.store';
import {  fetchUserDetails } from '../../services/api.service';
import ProfileDetails from './components/ProfileDetails';
import ProfileTabs from './components/ProfileTabs';


interface UserDetails 
{
    name: string;
    surname: string;
    username: string;
    email: string;
    birthDate: string;
    createdAt: string;
}

const Account = () => 
{
    const { userBasicInfo } = useAuthStore();
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
    <div className='min-h-screen flex bg-white text-black dark:text-white'>
      <ProfileDetails userDetails={userDetails}/>
      <ProfileTabs />      
    </div>
  )
}

export default Account


