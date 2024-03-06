const stats = [
    { id: 1, year: 'May 2023 - Dec 2023', name: 'Cubes Cloud - Senior Frontend Developer', place: 'Ahmedabad, Gujarat, India' },
    { id: 2, year: 'Dec 2020 - Aug 2022', name: 'iFormApp Technology - Senior Frontend Developer', place: 'Surat, Gujarat, India' },
    { id: 3, year: 'Sep 2019 - July 2020', name: 'Casepoint LLC - Senior Frontend Developer', place: 'Surat, Gujarat, India' },
    { id: 4, year: 'Nov 2015 - Aug 2019', name: 'Softpulse Infotech - Senior UI/UX Designer', place: 'Surat, Gujarat, India' },
    { id: 5, year: 'July 2014 - Nov 2015', name: 'Gatisofttech - UI-UX Designer', place: 'Surat, Gujarat, India' },
    { id: 6, year: 'July 2011 - June 2014', name: 'Master of Computer Application', place: 'Gujarat Technological University, India' },
    { id: 7, year: 'July 2008 - June 2011', name: 'Bachelors of Computer Application', place: 'South Gujarat University, India' },
]

export default function Work() {
    return (
        <div className="py-24 sm:py-32">
            <h3 className="text-3xl font-bold tracking-tight text-white">Bridging the Gap between Education and Employment</h3>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 text-center lg:grid-cols-3 mt-10">
                {stats.map((stat) => (
                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 bg-gray-800 rounded-md shadow-md p-2 w-full">
                        <dt className="order-first font-semibold tracking-tight text-white sm:text-sm">{stat.name}</dt>
                        <dd className="text-sm leading-7 text-gray-400">
                            <div>{stat.year}</div>
                            <div>{stat.place}</div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
