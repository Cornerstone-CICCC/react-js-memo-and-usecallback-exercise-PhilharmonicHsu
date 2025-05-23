import {memo} from 'react'

type Props = {
    firstname: string;
    lastname: string;
}

const Profile = memo(({firstname, lastname}: Props) => {
    console.log("Rendered Profile Component");

    return <>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
    </>
})

export default Profile