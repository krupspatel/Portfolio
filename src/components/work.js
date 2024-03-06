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
import artisera from '../images/portfolio2.jpg';
import vahdam from '../images/portfolio3.jpg';
// import fizzyGoblet from '../images/portfolio5.jpg';
import redlineImg from '../images/portfolio6.png';

const portfolio = [
    {
        siteName: 'VyTrac',
        imageUrl: VyTracIcon,
        link: 'https://vytrac.com/',
        description: 'Next.js, Typescript'
    },
    {
        siteName: '24task',
        imageUrl: taskIcon,
        link: 'https://24task.com/',
        description: 'React.js, Javascript'
    },
    {
        siteName: 'Cheapest Essay',
        imageUrl: cheapestEssay,
        link: 'https://www.cheapestessay.com/order',
        description: 'React.js, Redux, Javascript'
    },
    {
        siteName: 'Redline Coin',
        imageUrl: redlineImg,
        link: 'https://www.redlinecoin.com/',
        description: 'React.js, Javascript, Reactstrap'
    },
    {
        siteName: 'Artisera',
        imageUrl: artisera,
        link: 'https://artisera.com/',
        description: 'Shopify, Bootstrap'
    },
    {
        siteName: 'Vahdam Tea',
        imageUrl: vahdam,
        link: 'https://www.vahdam.global/',
        description: 'Shopify, Bootstrap, Javascript'
    },
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
    const handleRedirect = () => {

    }
    return (
        <div className=" py-24 sm:py-32">
            <div className="flex-item projectsSe" id="work">
                <h3 className="text-3xl font-bold tracking-tight text-white">Demonstrating my ability to deliver impactful results through projects and websites</h3>
                <p className="mt-5 text-base text-gray-300">
                    I am dedicated to self-development and professional growth and have continuously worked on projects on various languages.
                </p>
                <ul class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 pt-20 pb-20">
                    {portfolio.map((item) => (
                        <li key={item.siteName} class="h-64 relative flex flex-col gap-y-4">
                            <div class="absolute rounded-lg inset-0 bg-cover z-0" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                            <div class="opacity-0 bg-gray-800 hover:opacity-100 rounded-lg duration-300 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold">
                                <div class="relative flex flex-col gap-y-4">
                                    <h3>{item.siteName}</h3>
                                    <p className='text-base'>{item.description}</p>
                                    {/* <a onClick={handleRedirect} className="bg-gray-900 p-1.5 rounded-lg text-sm" href={item.link} rel="noreferrer" target='_blank'>View More</a> */}
                                    <button onClick={handleRedirect} className="bg-gray-900 p-1.5 rounded-lg text-sm" href={item.link} rel="noreferrer" target='_blank'>View More</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20">
                <h3 className="text-3xl font-bold tracking-tight text-white">Empowering innovation with a dynamic skillset and a passion for technology</h3>
                <p className="mt-5 text-base text-gray-300">
                    I truly enjoy writing code and developing websites and web applications using various languages and tools.
                    Also, making applications awesome using Bootstrap and Tailwind CSS is so much fun for me. I'm also very excited to continue learning new skills.
                </p>
                <ul class="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2 work-div pt-20">
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
