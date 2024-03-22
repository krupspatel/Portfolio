import ReactIcon from '../images/reactjs_icon.svg';
import NextjsIcon from '../images/nextjs_icon.svg';
import ReduxIcon from '../images/redux_fill_icon.svg';
import AngularIcon from '../images/angular_icon.svg';
import TailwindIcon from '../images/tailwind_icon.svg';
import BootstrapIcon from '../images/bootstrap_fill_icon.svg';
import JavascriptIcon from '../images/javascript_icon.svg';
import TypescriptIcon from '../images/typescript_icon.svg';
import ShopifyIcon from '../images/shopify_icon.svg';
import GithubIcon from '../images/github_fill_icon.svg';
import Html5Icon from '../images/html5_icon.svg';
import Css3Icon from '../images/css3_icon.svg';
import VyTracIcon from '../images/portfolio.png';
import taskIcon from '../images/portfolio1.png';
import cheapestEssay from '../images/portfolio4.png';
import artisera from '../images/portfolio3.jpg';
// import vahdam from '../images/portfolio2.jpg';
// import fizzyGoblet from '../images/portfolio5.jpg';
import redlineImg from '../images/portfolio6.png';

const portfolio = [
    {
        siteName: 'VyTrac',
        imageUrl: VyTracIcon,
        link: 'https://vytrac.com/',
        description: 'Next.js, Typescript, Html5, css3',
        detail: '☞ VyTrac is a patient and hospital management tool which is a software solution that streamlines healthcare facility operations.',
        point1: '☞ I managed daily reports of any patient, scheduled appointments, visitor doctors, etc.',
        point2: '☞ I made a form of patient registration, appointment scheduling, electronic health record management, billing, and inventory control.'
    },
    {
        siteName: '24task',
        imageUrl: taskIcon,
        link: 'https://24task.com/',
        description: 'React.js , Javascript, Bootstrap, Html5, css3',
        detail: '☞ 24task is platform which is hire freelancers & find Freelance Jobs Online.',
        point1: '☞ I managed the module of the Admin panel and the website of the main project.',
        point2: '☞ I also worked on UI parts and Integrate design modules into react.js, and JavaScript.'
    },
    {
        siteName: 'Cheapest Essay',
        imageUrl: cheapestEssay,
        link: 'https://www.cheapestessay.com/order',
        description: 'React.js, Redux, Javascript, Material UI',
        detail: '☞ CheapestEssay is a great choice for people looking for a dependable and reasonably priced online essay writing service.',
        point1: '☞ I worked on main form of Place an order which include Redux functionality.',
        point2: '☞ I used payment gateway funcionality and API integration.'
    },
    {
        siteName: 'Redline Coin',
        imageUrl: redlineImg,
        link: 'https://www.redlinecoin.com/',
        description: 'React.js, Javascript, Reactstrap, REST',
        detail: '☞ Redline Coin get the most accurate crypto signals about when to buy, sell or hold Bitcoin and other altcoins.',
        point1: '☞ I designed this website with Reactstrap css and I used REST api in it.',
    },
    {
        siteName: 'Artisera',
        imageUrl: artisera,
        link: 'https://artisera.com/',
        description: 'Shopify, Bootstrap, jQuery, Html5, css3',
        detail: '☞ Artisera is a destination for artistic luxury, curating the finest pieces of fine art, collectibles and furniture from most reputed and trustworthy artists, designers, and collectors.',
        point1: '☞ I designed and developed fully responsive website with pixel-perfect dimensions and accuracy.',
        point2: '☞ I delivered solutions that are fully compatible with all major web browsers.'
    },
    // {
    //     siteName: 'Vahdam Tea',
    //     imageUrl: vahdam,
    //     link: 'https://www.vahdam.global/',
    //     description: 'Shopify, Javascript, Bootstrap, Html5, css3',
    //     detail: ''
    // },
    // {
    //     siteName: 'Fizzy Goblet',
    //     imageUrl: fizzyGoblet,
    //     link: 'https://global.fizzygoblet.com/',
    //     description: 'Shopify, Html5, css3'
    // }
]

const skills = [
    {
        name: 'React.js',
        imageUrl: ReactIcon
    },
    {
        name: 'Next.js',
        imageUrl: NextjsIcon
    },
    {
        name: 'Redux',
        imageUrl: ReduxIcon
    },
    {
        name: 'Angular.js',
        imageUrl: AngularIcon
    },
    {
        name: 'Javascript',
        imageUrl: JavascriptIcon
    },
    {
        name: 'Typescript',
        imageUrl: TypescriptIcon
    },
    {
        name: 'Bootstrap',
        imageUrl: BootstrapIcon
    },
    {
        name: 'Tailwind Css',
        imageUrl: TailwindIcon
    },
    {
        name: 'Shopify',
        imageUrl: ShopifyIcon
    },
    {
        name: 'Github',
        imageUrl: GithubIcon
    },
    {
        name: 'Html5',
        imageUrl: Html5Icon
    },
    {
        name: 'Css3',
        imageUrl: Css3Icon
    }
]


export default function Work() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="flex-item" id="work">
                <h3 className="text-3xl font-bold tracking-tight text-white">Demonstrating my ability to deliver impactful results through projects and websites</h3>
                <p className="mt-5 text-base text-gray-300">
                    I am dedicated to self-development and professional growth and have continuously worked on projects on various languages.
                </p>
                <ul class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2 pt-20 pb-20">
                    {portfolio.map((item) => (
                        <li key={item.siteName} class=" flex flex-col gap-y-4">
                            <div className='h-64 relative'>
                                <div class="absolute rounded-lg inset-0 bg-cover z-0" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                                <div class="opacity-0 bg-gray-800 hover:opacity-100 rounded-lg duration-300 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold">
                                    <div class="relative flex flex-col gap-y-4">
                                        <h3>{item.siteName}</h3>
                                        <p className='text-base'>{item.description}</p>
                                        <a className="bg-gray-900 p-1.5 rounded-lg text-sm" href={item.link} rel="noreferrer" target='_blank'>View More</a>
                                        {/* <button onClick={handleRedirect} className="bg-gray-900 p-1.5 rounded-lg text-sm" href={item.link} rel="noreferrer" target='_blank'>View More</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className='relative text-left'>
                                <div className="flex justify-between items-center">
                                    <h3>{item.siteName}</h3>
                                    <a className="pb-1 view-more text-sm" href={item.link} rel="noreferrer" target='_blank'>View More</a>
                                </div>
                                <h6 className="text-base pb-1">Skills: {item.description}</h6>
                                <p className='text-base'>{item.detail}</p>
                                <p className='text-base'>{item.point1}</p>
                                <p className='text-base'>{item.point2}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20" id="skills">
                <h3 className="text-3xl font-bold tracking-tight text-white">Empowering innovation with a dynamic skillset and a passion for technology</h3>
                <p className="mt-5 text-base text-gray-300">
                    I truly enjoy writing code and developing websites and web applications using various languages and tools.
                    Also, making applications awesome using Bootstrap and Tailwind CSS is so much fun for me. I'm also very excited to continue learning new skills.
                </p>
                <ul class="grid gap-x-8 gap-y-12 grid-cols-3 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2 work-div pt-20">
                    {skills.map((item) => (
                        <li key={item.name} className='flex flex-col gap-y-4'>
                            <img src={item.imageUrl} className="group relative mx-auto rounded-lg" alt={item.name} />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
