import React from "react";

const Header = () => {
    const navLinks = [
        {
            name: 'Events',
            route: '/'
        },
        {
            name: 'Prize Money',
            route: '/'
        },
        {
            name: 'Login',
            route: '/'
        },
        {
            name: 'Blog',
            route: '/'
        },
        {
            name: 'Privacy Policy',
            route: '/'
        },
        {
            name: 'Shop',
            route: '/'
        },
        {
            name: 'About Us',
            route: '/about-us'
        },
        {
            name: 'Enter Site',
            route: '/snooker-oracle'
        },

    ]
    return (
        <div className="h-18 flex justify-end px-10 py-10">
        <ul className="flex gap-5">
          {navLinks?.map((value, index) => (
            <li key={index}>
              <a
                className="text-lg font-sans transition-transform duration-300 ease-in-out hover:scale-110 hover:text-green-500"
                href={value.route}
              >
                {value.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
    )
}
export default Header