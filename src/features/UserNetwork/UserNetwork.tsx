import UserList from './components/UserList'
import { UserInfoForList } from './types/UserNetwork';
const followers: UserInfoForList[] = [
  { imageUrl: "https://i.pravatar.cc/150?u=user1", username: "KiwiCoder88", extraInfo: "Auckland, NZ" },
  { imageUrl: "https://i.pravatar.cc/150?u=sydney_gal", username: "SydneySunset", extraInfo: "Sydney, AU" },
  { imageUrl: "https://i.pravatar.cc/150?u=bushwalker", username: "WanderingOz", extraInfo: "Melbourne, AU" },
  { imageUrl: "https://i.pravatar.cc/150?u=downunderdev", username: "CodeCracker", extraInfo: "Brisbane, AU" },
  { imageUrl: "https://i.pravatar.cc/150?u=sheila_dev", username: "AussieGeek", extraInfo: "Perth, AU" },
];

const following: UserInfoForList[] = [
  { imageUrl: "https://i.pravatar.cc/150?u=travelbug", username: "Globetrotter23", extraInfo: "Wellington, NZ" },
  { imageUrl: "https://i.pravatar.cc/150?u=mountain_man", username: "PeakSeeker", extraInfo: "Queenstown, NZ" },
  { imageUrl: "https://i.pravatar.cc/150?u=oceanlover", username: "SurferDude", extraInfo: "Gold Coast, AU" },
  { imageUrl: "https://i.pravatar.cc/150?u=cityexplorer", username: "UrbanNomad", extraInfo: "Adelaide, AU" },
  { imageUrl: "https://i.pravatar.cc/150?u=techguru", username: "BinaryBard", extraInfo: "Canberra, AU" },
];

const UserNetwork = () => {
  return (
    <main className='flex justify-start gap-4 py-8'>
      <UserList title={`Seguidores`} count={12} users={followers} />
      <UserList title={`Seguidos`} count={6} users={following} />
    </main>
  )
}

export default UserNetwork