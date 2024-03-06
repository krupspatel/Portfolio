
import About from './about';
import Banner from './banner';
import ContactForm from './contactForm';
import Education from './education';
import Navigation from './navigation';
import Work from './work';

export default function Dashboard() {
    return (
        <div className="bg-gray-900 w-full">
            <Navigation />
            <Banner />
            <div className="mx-auto max-w-2xl px-2 relative">
                <div id="about">
                    <About />
                </div>
                <div id="work">
                    <Work />
                </div>
                <div id="education">
                    <Education />
                </div>
                <div id="contact">
                    <ContactForm />
                </div>
            </div>
            <p className='text-base p-2 pt-20'>© 2024 Krupali Ribadia. All rights reserved.</p>
        </div>
    )
}
