const Links = ({links}) => {
    return (
        <ul className="hidden xl:flex capitalize justify-between w-full">
            {links.map((link, index) => (
                <li className="font-medium">{link.title}</li>
            ))}
        </ul>
    )
}

export default Links
