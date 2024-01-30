import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"

interface EKNavProps {
    home?: boolean,
    jw?: boolean,
    cv2?: boolean,
}

const EKNav: React.FunctionComponent<EKNavProps> = props => {
    return <Navbar>
        <NavbarContent>
            <NavbarBrand>
                &#127860;Easy Kitchen
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
            <NavbarItem isActive={props.home}><Link href="/">Home</Link></NavbarItem>
            <NavbarItem isActive={props.jw}><Link href="jw">Joe West</Link></NavbarItem>
            <NavbarItem isActive={props.cv2}><Link href="cv2">CV2</Link></NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem><Link href="reservations"><Button color="secondary">Reserve time</Button></Link></NavbarItem>
        </NavbarContent>
    </Navbar>
}

interface ContentProps extends EKNavProps, React.PropsWithChildren { };

export const Content: React.FunctionComponent<ContentProps> = props => {
    return <main className="min-h-screen">
        {EKNav(props)}
        <div className="flex flex-col items-center p-48">
            {props.children}
        </div>
    </main>
} 