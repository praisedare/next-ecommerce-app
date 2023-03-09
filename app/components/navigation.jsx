import Link from 'next/link';
import PropTypes from 'prop-types';

const Navigation = ({links}) => {
    return <nav className='px-4 py-3 bg-gray-100'>
        {
            links.map(link => (
                <li className="inline-block mx-2" key={link.href}>
                    <Link href={link.href} className="hover:text-cyan-500">{link.text}</Link>
                </li>
            ))
        }
    </nav>
}

Navigation.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    }))
};

export default Navigation
