const useGetLoggedInUser = () => {
    const loggedInUser = localStorage.getItem('user')
    const user = loggedInUser ? JSON.parse(loggedInUser) : null
    console.log(2, 'USER INSIDE HOOK:', user);
    return user
}

export default useGetLoggedInUser