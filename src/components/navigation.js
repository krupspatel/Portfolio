import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import Logo from '../images/kr-icon.jpg';
import Linkedin from '../images/linkedin_icon.svg';
import Github from '../images/github_fill_icon.svg';
import Xing from '../images/xing_icon.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Resume', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Get in Touch', href: '#contact' },
]

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user is scrolling
            if (window.scrollY > 100) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 ${isScrolling ? ' bg-gray-900 shadow-lg' : ''}`}>
            <nav className="flex items-center justify-between p-6 lg:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Home</span>
                        <img
                            className="h-8 w-auto rounded-md"
                            src={Logo}
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                    <div className="social-icon flex gap-x-4">z
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/krupali-ribadia/"><img src={Linkedin} width="24" alt="linkedin" /></a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/krupspatel/"><img src={Github} alt="github" /></a>
                        <a target='_blank' rel="noreferrer" href="https://www.xing.com/profile/Krupali_Ribadia/"><img src={Xing} alt="Xing" /></a>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Home</span>
                            <img
                                className="h-8 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

    )
}
