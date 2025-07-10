export function ProfileCard({name,email,avatarUrl})
{
    return(
        <>
        <img src={avatarUrl} alt="image1" />
        <h2>{name}</h2>
        <p>{email}</p>
        </> 
    )

}