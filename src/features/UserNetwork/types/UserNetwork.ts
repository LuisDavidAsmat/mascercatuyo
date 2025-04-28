export interface UserInfoForList 
{
    imageUrl: string,
    username: string,
    extraInfo: string
}

export interface UserListProps
{
    title: string,
    count: number;
    users: UserInfoForList[];
}
