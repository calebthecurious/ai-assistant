import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return (
        <div className="">
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default RootPage;