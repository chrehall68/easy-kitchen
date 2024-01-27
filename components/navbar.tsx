import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"

interface EKNavProps {
    home?: boolean,
    jw?: boolean,
    cv2?: boolean,
}

export const EKNav: React.FunctionComponent<EKNavProps> = props => {
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
            <NavbarItem><Button color="secondary" >Reserve time</Button></NavbarItem>
        </NavbarContent>
    </Navbar>
}